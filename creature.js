(function () {
    if (!window.requestAnimationFrame || !document.createTreeWalker || !document.createRange) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var RED = '#ce4539';
    var HOT = '#ff9a7d';
    var PALE = '#e6e4e3';
    var SHELL = 'rgba(15, 14, 13, 0.82)';

    var LEG_COUNT = 8;
    var HOME_ANGLE = [0.6, 1.2, 1.9, 2.5];
    var HOME_REACH = [74, 66, 66, 76];
    var HIP_ALONG = [7, 2, -3, -8];
    var HIP_ACROSS = 5;
    var UPPER = 44;
    var LOWER = 48;
    var HEAD_SIZE = 14;
    var TAIL_SIZE = 17;
    var HEAD_AHEAD = 11;
    var TAIL_BEHIND = 13;

    var MAX_SPEED = 130;
    var WANDER_SPEED = 80;
    var APPROACH = 1.6;
    var ACCELERATION = 350;
    var BRAKING = 900;
    var TURN_RATE = 3.2;
    var WALKING_SPEED = 12;

    var RING_RADIUS = 46;
    var STANDOFF = 36;
    var IDLE_AFTER = 4000;
    var REST_SHORTEST = 1000;
    var REST_SPREAD = 2000;
    var ARRIVE_WITHIN = 10;
    var SPOT_MARGIN = 40;
    var SPOT_MIN_WALK = 120;
    var FAR_AWAY = 260;
    var ENTRY_DISTANCE = 110;

    var STEP_TRIGGER = 30;
    var SETTLE_WITHIN = 3;
    var STEP_SLOW = 190;
    var STEP_FAST = 150;
    var STEP_LIFT = 7;
    var SNAP_RADIUS = 30;

    var WORD_MARKS = 12;
    var BOX_LIFE = 1500;
    var BLOCK_LIFE = 900;
    var BLOCK_EVERY = 4;
    var BLOCK_TALLEST = 40;
    var MARK_TALLEST = 60;
    var FOOTPRINTS = 20;
    var FOOTPRINT_LIFE = 1100;

    var MAX_DELTA = 50;
    var MAX_RATIO = 2;
    var NARROW_BELOW = 720;
    var NARROW_SCALE = 0.75;
    var WORD = /\S+/g;
    var SKIPPED = '.top, .spine, .hero-kanji, dialog';
    var CHOICE_KEY = 'spider';

    var root = document.documentElement;
    var toggle = document.querySelector('.spider-toggle');
    var enabled = true;
    var canvas = document.createElement('canvas');
    var under = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var underCtx = under.getContext('2d');
    if (!ctx || !underCtx) return;

    var scrollX = 0;
    var scrollY = 0;
    var viewW = 0;
    var viewH = 0;
    var pageW = 0;
    var pageH = 0;
    var ratio = 1;
    var size = 1;

    var clock = 0;
    var lastTime = 0;
    var frameId = 0;
    var viewChanged = true;
    var wasBusy = true;
    var fadingUntil = 0;
    var underPainted = false;

    var words = [];
    var range = document.createRange();
    var legs = [];
    var airborne = [0, 0];
    var wordMarks = [];
    var footprints = [];
    var nextFootprint = 0;
    var touches = 0;

    var body = { x: 0, y: 0, heading: Math.PI, cos: -1, sin: 0, speed: 0, turned: false };
    var pointer = { x: 0, y: 0, inside: false, activeAt: 0 };
    var wander = { x: 0, y: 0, chosen: false, resting: false, restUntil: 0 };
    var goal = { x: 0, y: 0, standoff: 0, topSpeed: 0, following: false };

    function clamp(value, low, high) {
        return value < low ? low : value > high ? high : value;
    }

    function wrapAngle(angle) {
        while (angle > Math.PI) angle -= Math.PI * 2;
        while (angle < -Math.PI) angle += Math.PI * 2;
        return angle;
    }

    function easeInOut(t) {
        return t * t * (3 - 2 * t);
    }

    function buildLegs() {
        var i, row, side;
        for (i = 0; i < LEG_COUNT; i++) {
            row = i % 4;
            side = i < 4 ? -1 : 1;
            legs.push({
                row: row,
                side: side,
                group: (row + (side > 0 ? 1 : 0)) % 2,
                bend: (row < 2 ? 1 : -1) * -side,
                homeX: 0, homeY: 0, hipX: 0, hipY: 0,
                footX: 0, footY: 0, fromX: 0, fromY: 0, toX: 0, toY: 0,
                stepping: false, stepStart: 0, stepLength: 0, lift: 0, word: -1,
                startX: 0, startY: 0, kneeX: 0, kneeY: 0, bowX: 0, bowY: 0
            });
        }
    }

    function buildPools() {
        var i;
        for (i = 0; i < WORD_MARKS; i++) wordMarks.push({ word: -1, born: 0, life: 0, block: false });
        for (i = 0; i < FOOTPRINTS; i++) footprints.push({ x: 0, y: 0, angle: 0, side: 0, born: 0, live: false });
    }

    function fitLegs() {
        var i, leg;
        for (i = 0; i < LEG_COUNT; i++) {
            leg = legs[i];
            leg.homeX = Math.cos(HOME_ANGLE[leg.row]) * HOME_REACH[leg.row] * size;
            leg.homeY = Math.sin(HOME_ANGLE[leg.row]) * HOME_REACH[leg.row] * size * leg.side;
            leg.hipX = HIP_ALONG[leg.row] * size;
            leg.hipY = HIP_ACROSS * size * leg.side;
        }
    }

    function homeX(leg) {
        return body.x + leg.homeX * body.cos - leg.homeY * body.sin;
    }

    function homeY(leg) {
        return body.y + leg.homeX * body.sin + leg.homeY * body.cos;
    }

    function plantAll() {
        var i, leg;
        for (i = 0; i < LEG_COUNT; i++) {
            leg = legs[i];
            leg.footX = homeX(leg);
            leg.footY = homeY(leg);
            leg.stepping = false;
            leg.lift = 0;
            leg.word = -1;
        }
        airborne[0] = 0;
        airborne[1] = 0;
    }

    function isSkipped(node) {
        var parent = node.parentNode;
        return !parent || !parent.closest || parent.closest(SKIPPED) !== null;
    }

    function collectFrom(container) {
        var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
        var node, text, match, rects, rect, i;
        while ((node = walker.nextNode())) {
            if (isSkipped(node)) continue;
            text = node.nodeValue;
            WORD.lastIndex = 0;
            while ((match = WORD.exec(text))) {
                range.setStart(node, match.index);
                range.setEnd(node, match.index + match[0].length);
                rects = range.getClientRects();
                for (i = 0; i < rects.length; i++) {
                    rect = rects[i];
                    if (rect.width < 2 || rect.height < 2) continue;
                    words.push({ x: rect.left + scrollX, y: rect.top + scrollY, w: rect.width, h: rect.height });
                }
            }
        }
    }

    function collectWords() {
        var containers = document.querySelectorAll('main, footer');
        var i;
        words.length = 0;
        for (i = 0; i < containers.length; i++) collectFrom(containers[i]);
        for (i = 0; i < WORD_MARKS; i++) wordMarks[i].word = -1;
        for (i = 0; i < LEG_COUNT; i++) legs[i].word = -1;
    }

    function fitCanvas(element, width, height) {
        if (element.width !== width) element.width = width;
        if (element.height !== height) element.height = height;
    }

    function measure() {
        scrollX = window.pageXOffset || 0;
        scrollY = window.pageYOffset || 0;
        viewW = root.clientWidth;
        viewH = root.clientHeight;
        pageW = Math.max(root.scrollWidth, viewW);
        pageH = Math.max(root.scrollHeight, viewH);
        ratio = Math.min(window.devicePixelRatio || 1, MAX_RATIO);
        size = viewW < NARROW_BELOW ? NARROW_SCALE : 1;
        fitLegs();
        fitCanvas(canvas, Math.round(viewW * ratio), Math.round(viewH * ratio));
        fitCanvas(under, Math.round(viewW * ratio), Math.round(viewH * ratio));
        collectWords();
        viewChanged = true;
    }

    function nearestWord(x, y, radius) {
        var best = -1;
        var bestGap = radius * radius;
        var i, word, dx, dy, gap;
        for (i = 0; i < words.length; i++) {
            word = words[i];
            dx = x < word.x ? word.x - x : x > word.x + word.w ? x - word.x - word.w : 0;
            dy = y < word.y ? word.y - y : y > word.y + word.h ? y - word.y - word.h : 0;
            gap = dx * dx + dy * dy;
            if (gap <= bestGap) {
                bestGap = gap;
                best = i;
            }
        }
        return best;
    }

    function touchWord(index, now) {
        var free = -1;
        var i, mark;
        if (words[index].h > MARK_TALLEST) return;
        for (i = 0; i < WORD_MARKS; i++) {
            mark = wordMarks[i];
            if (mark.word === index && now < mark.born + mark.life) {
                mark.born = now;
                fadingUntil = Math.max(fadingUntil, now + mark.life);
                return;
            }
            if (free < 0 && (mark.word < 0 || now >= mark.born + mark.life)) free = i;
        }
        if (free < 0) return;
        touches++;
        mark = wordMarks[free];
        mark.word = index;
        mark.born = now;
        mark.block = touches % BLOCK_EVERY === 0 && words[index].h <= BLOCK_TALLEST;
        mark.life = mark.block ? BLOCK_LIFE : BOX_LIFE;
        fadingUntil = Math.max(fadingUntil, now + mark.life);
    }

    function leaveFootprint(x, y, now) {
        var print = footprints[nextFootprint];
        nextFootprint = (nextFootprint + 1) % FOOTPRINTS;
        print.x = x;
        print.y = y;
        print.angle = Math.random() * Math.PI;
        print.side = (12 + Math.random() * 14) * size;
        print.born = now;
        print.live = true;
        fadingUntil = Math.max(fadingUntil, now + FOOTPRINT_LIFE);
    }

    function pickSpot() {
        var left = scrollX + SPOT_MARGIN;
        var right = scrollX + viewW - SPOT_MARGIN;
        var top = scrollY + SPOT_MARGIN;
        var bottom = scrollY + viewH - SPOT_MARGIN;
        var seen = 0;
        var chosen = -1;
        var i, word, x, y;
        for (i = 0; i < words.length; i++) {
            word = words[i];
            x = word.x + word.w / 2;
            y = word.y + word.h / 2;
            if (x < left || x > right || y < top || y > bottom) continue;
            if (Math.abs(x - body.x) + Math.abs(y - body.y) < SPOT_MIN_WALK) continue;
            seen++;
            if (Math.random() * seen < 1) chosen = i;
        }
        if (chosen >= 0) {
            wander.x = words[chosen].x + words[chosen].w / 2;
            wander.y = words[chosen].y + words[chosen].h / 2;
        } else {
            wander.x = left + Math.random() * Math.max(1, right - left);
            wander.y = top + Math.random() * Math.max(1, bottom - top);
        }
        wander.chosen = true;
        wander.resting = false;
    }

    function spotIsVisible() {
        return wander.x >= scrollX && wander.x <= scrollX + viewW &&
            wander.y >= scrollY && wander.y <= scrollY + viewH;
    }

    function chooseWanderGoal(now) {
        var dx, dy;
        if (!wander.chosen || !spotIsVisible() || (wander.resting && now >= wander.restUntil)) pickSpot();
        dx = wander.x - body.x;
        dy = wander.y - body.y;
        if (!wander.resting && dx * dx + dy * dy < ARRIVE_WITHIN * ARRIVE_WITHIN) {
            wander.resting = true;
            wander.restUntil = now + REST_SHORTEST + Math.random() * REST_SPREAD;
        }
        goal.x = wander.x;
        goal.y = wander.y;
        goal.standoff = ARRIVE_WITHIN * 0.5;
        goal.topSpeed = WANDER_SPEED * size;
    }

    function chooseGoal(now) {
        var following = pointer.inside && now - pointer.activeAt < IDLE_AFTER;
        if (following) {
            goal.x = pointer.x + scrollX;
            goal.y = pointer.y + scrollY;
            goal.standoff = RING_RADIUS + STANDOFF * size;
            goal.topSpeed = MAX_SPEED * size;
        } else {
            if (goal.following) wander.chosen = false;
            chooseWanderGoal(now);
        }
        goal.following = following;
        goal.x = clamp(goal.x, 0, pageW);
        goal.y = clamp(goal.y, 0, pageH);
    }

    function returnIfFarAway() {
        var left = scrollX - FAR_AWAY;
        var right = scrollX + viewW + FAR_AWAY;
        var top = scrollY - FAR_AWAY;
        var bottom = scrollY + viewH + FAR_AWAY;
        if (body.x >= left && body.x <= right && body.y >= top && body.y <= bottom) return;
        body.x = clamp(body.x, scrollX - ENTRY_DISTANCE, scrollX + viewW + ENTRY_DISTANCE);
        body.y = clamp(body.y, scrollY - ENTRY_DISTANCE, scrollY + viewH + ENTRY_DISTANCE);
        body.heading = Math.atan2(goal.y - body.y, goal.x - body.x);
        body.cos = Math.cos(body.heading);
        body.sin = Math.sin(body.heading);
        body.speed = 0;
        plantAll();
    }

    function moveBody(dt) {
        var dx = goal.x - body.x;
        var dy = goal.y - body.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        var gap = distance - goal.standoff;
        var wanted = gap > 0 ? Math.min(goal.topSpeed, gap * APPROACH) : 0;
        var off = 0;
        var turn, change;
        body.turned = false;
        if (gap > 1 || (goal.following && distance > 1)) {
            off = wrapAngle(Math.atan2(dy, dx) - body.heading);
            turn = clamp(off, -TURN_RATE * dt, TURN_RATE * dt);
            if (Math.abs(turn) > 0.0005) {
                body.heading = wrapAngle(body.heading + turn);
                body.cos = Math.cos(body.heading);
                body.sin = Math.sin(body.heading);
                body.turned = true;
            }
            wanted *= Math.max(0.2, Math.cos(off - turn));
        }
        change = wanted - body.speed;
        if (change > 0) body.speed += Math.min(change, ACCELERATION * size * dt);
        else body.speed += Math.max(change, -BRAKING * size * dt);
        if (wanted === 0 && body.speed < 0.5) body.speed = 0;
        body.x += body.cos * body.speed * dt;
        body.y += body.sin * body.speed * dt;
    }

    function startStep(leg, now, walking) {
        var pace = Math.min(1, body.speed / (MAX_SPEED * size));
        var length = STEP_SLOW - (STEP_SLOW - STEP_FAST) * pace;
        var x = homeX(leg);
        var y = homeY(leg);
        var lead, index, word;
        leg.word = -1;
        if (walking) {
            lead = body.speed * length / 1000 + STEP_TRIGGER * size * 0.7 * Math.min(1, body.speed / 90);
            x += body.cos * lead;
            y += body.sin * lead;
            index = nearestWord(x, y, SNAP_RADIUS);
            if (index >= 0) {
                word = words[index];
                x = clamp(x, word.x + 1, word.x + word.w - 1);
                y = clamp(y, word.y + 1, word.y + word.h - 1);
                leg.word = index;
            }
        }
        leg.fromX = leg.footX;
        leg.fromY = leg.footY;
        leg.toX = x;
        leg.toY = y;
        leg.stepStart = now;
        leg.stepLength = length;
        leg.stepping = true;
        airborne[leg.group]++;
    }

    function land(leg, now) {
        leg.footX = leg.toX;
        leg.footY = leg.toY;
        leg.stepping = false;
        leg.lift = 0;
        airborne[leg.group]--;
        if (leg.word < 0) return;
        leaveFootprint(leg.footX, leg.footY, now);
        touchWord(leg.word, now);
        leg.word = -1;
    }

    function swing(leg, now) {
        var t = (now - leg.stepStart) / leg.stepLength;
        var eased, outX, outY, away;
        if (t >= 1) {
            land(leg, now);
            return;
        }
        eased = easeInOut(t);
        leg.lift = Math.sin(Math.PI * t);
        leg.footX = leg.fromX + (leg.toX - leg.fromX) * eased;
        leg.footY = leg.fromY + (leg.toY - leg.fromY) * eased;
        outX = leg.footX - body.x;
        outY = leg.footY - body.y;
        away = Math.sqrt(outX * outX + outY * outY) || 1;
        leg.footX += outX / away * leg.lift * STEP_LIFT * size;
        leg.footY += outY / away * leg.lift * STEP_LIFT * size;
    }

    function walkLegs(now) {
        var walking = body.speed > WALKING_SPEED * size;
        var trigger = (walking ? STEP_TRIGGER : SETTLE_WITHIN) * size;
        var reach = (UPPER + LOWER) * size * 0.97;
        var i, leg, dx, dy, hx, hy, strayed, overstretched;
        for (i = 0; i < LEG_COUNT; i++) {
            if (legs[i].stepping) swing(legs[i], now);
        }
        for (i = 0; i < LEG_COUNT; i++) {
            leg = legs[i];
            if (leg.stepping) continue;
            dx = homeX(leg) - leg.footX;
            dy = homeY(leg) - leg.footY;
            strayed = dx * dx + dy * dy > trigger * trigger;
            hx = body.x + leg.hipX * body.cos - leg.hipY * body.sin - leg.footX;
            hy = body.y + leg.hipX * body.sin + leg.hipY * body.cos - leg.footY;
            overstretched = hx * hx + hy * hy > reach * reach;
            if (overstretched || (strayed && airborne[1 - leg.group] === 0)) startStep(leg, now, walking);
        }
    }

    function solveLeg(leg) {
        var upper = UPPER * size;
        var lower = LOWER * size;
        var hx = body.x + leg.hipX * body.cos - leg.hipY * body.sin;
        var hy = body.y + leg.hipX * body.sin + leg.hipY * body.cos;
        var dx = leg.footX - hx;
        var dy = leg.footY - hy;
        var distance = Math.sqrt(dx * dx + dy * dy) || 1;
        var span = clamp(distance, 1, upper + lower - 1);
        var ux = dx / distance;
        var uy = dy / distance;
        var along = (upper * upper - lower * lower + span * span) / (2 * span);
        var rise = Math.sqrt(Math.max(0, upper * upper - along * along)) * leg.bend;
        leg.startX = hx;
        leg.startY = hy;
        leg.kneeX = hx + ux * along - uy * rise;
        leg.kneeY = hy + uy * along + ux * rise;
        leg.bowX = 2 * leg.kneeX - (hx + leg.footX) / 2;
        leg.bowY = 2 * leg.kneeY - (hy + leg.footY) / 2;
    }

    function traceLegs(context) {
        var i, leg;
        context.beginPath();
        for (i = 0; i < LEG_COUNT; i++) {
            leg = legs[i];
            context.moveTo(leg.startX, leg.startY);
            context.quadraticCurveTo(leg.bowX, leg.bowY, leg.footX, leg.footY);
        }
    }

    function traceThighs(context) {
        var i, leg;
        context.beginPath();
        for (i = 0; i < LEG_COUNT; i++) {
            leg = legs[i];
            context.moveTo(leg.startX, leg.startY);
            context.quadraticCurveTo((leg.startX + leg.bowX) / 2, (leg.startY + leg.bowY) / 2, leg.kneeX, leg.kneeY);
        }
    }

    function drawLegs() {
        var i, leg;
        for (i = 0; i < LEG_COUNT; i++) solveLeg(legs[i]);
        ctx.lineCap = 'round';
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = RED;
        ctx.globalAlpha = 0.14;
        ctx.lineWidth = 8 * size;
        traceLegs(ctx);
        ctx.stroke();
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1;
        ctx.lineWidth = 1.7;
        traceLegs(ctx);
        ctx.stroke();
        ctx.strokeStyle = HOT;
        traceThighs(ctx);
        ctx.stroke();
        ctx.fillStyle = RED;
        ctx.beginPath();
        for (i = 0; i < LEG_COUNT; i++) {
            leg = legs[i];
            ctx.moveTo(leg.footX + 2.4 + leg.lift, leg.footY);
            ctx.arc(leg.footX, leg.footY, 2.4 + leg.lift, 0, Math.PI * 2);
        }
        ctx.fill();
    }

    function drawSquare(along, side) {
        var x = along * Math.SQRT1_2 - side / 2;
        var y = -along * Math.SQRT1_2 - side / 2;
        ctx.fillRect(x, y, side, side);
        ctx.strokeRect(x, y, side, side);
    }

    function drawBody() {
        var eye = HEAD_AHEAD * size * Math.SQRT1_2;
        ctx.translate(body.x, body.y);
        ctx.rotate(body.heading + Math.PI / 4);
        ctx.fillStyle = SHELL;
        ctx.strokeStyle = PALE;
        ctx.lineWidth = 1.6;
        drawSquare(-TAIL_BEHIND * size, TAIL_SIZE * size);
        drawSquare(HEAD_AHEAD * size, HEAD_SIZE * size);
        ctx.fillStyle = RED;
        ctx.globalAlpha = 0.28;
        ctx.beginPath();
        ctx.arc(eye, -eye, 7.5 * size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(eye, -eye, 3.4 * size, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = HOT;
        ctx.beginPath();
        ctx.arc(eye, -eye, 1.4 * size, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawFootprints(now) {
        var i, print, age, half, c, s;
        ctx.strokeStyle = RED;
        ctx.lineWidth = 1;
        for (i = 0; i < FOOTPRINTS; i++) {
            print = footprints[i];
            if (!print.live) continue;
            age = (now - print.born) / FOOTPRINT_LIFE;
            if (age >= 1) {
                print.live = false;
                continue;
            }
            half = print.side / 2;
            c = Math.cos(print.angle) * half;
            s = Math.sin(print.angle) * half;
            ctx.globalAlpha = 0.3 * (1 - age);
            ctx.beginPath();
            ctx.moveTo(print.x + c - s, print.y + s + c);
            ctx.lineTo(print.x - c - s, print.y - s + c);
            ctx.lineTo(print.x - c + s, print.y - s - c);
            ctx.lineTo(print.x + c + s, print.y + s - c);
            ctx.closePath();
            ctx.stroke();
        }
        ctx.globalAlpha = 1;
    }

    function drawWordBoxes(now) {
        var i, mark, word, age;
        ctx.strokeStyle = RED;
        ctx.lineWidth = 1;
        for (i = 0; i < WORD_MARKS; i++) {
            mark = wordMarks[i];
            if (mark.word < 0 || mark.block) continue;
            age = (now - mark.born) / mark.life;
            if (age >= 1) {
                mark.word = -1;
                continue;
            }
            word = words[mark.word];
            ctx.globalAlpha = 1 - age;
            ctx.strokeRect(Math.round(word.x) - 3.5, Math.round(word.y) - 0.5, Math.round(word.w) + 7, Math.round(word.h) + 1);
        }
        ctx.globalAlpha = 1;
    }

    function drawWordBlocks(now) {
        var painted = false;
        var i, mark, word, age;
        if (underPainted) {
            underCtx.setTransform(1, 0, 0, 1, 0, 0);
            underCtx.clearRect(0, 0, under.width, under.height);
        }
        underCtx.setTransform(ratio, 0, 0, ratio, -scrollX * ratio, -scrollY * ratio);
        underCtx.fillStyle = PALE;
        for (i = 0; i < WORD_MARKS; i++) {
            mark = wordMarks[i];
            if (mark.word < 0 || !mark.block) continue;
            age = (now - mark.born) / mark.life;
            if (age >= 1) {
                mark.word = -1;
                continue;
            }
            word = words[mark.word];
            underCtx.globalAlpha = Math.min(1, (1 - age) * 2.5);
            underCtx.fillRect(Math.round(word.x) - 4, Math.round(word.y), Math.round(word.w) + 8, Math.round(word.h));
            painted = true;
        }
        underCtx.globalAlpha = 1;
        underPainted = painted;
    }

    function drawRing() {
        if (!pointer.inside) return;
        ctx.strokeStyle = PALE;
        ctx.globalAlpha = 0.28;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pointer.x + scrollX, pointer.y + scrollY, RING_RADIUS, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
    }

    function draw(now) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.setTransform(ratio, 0, 0, ratio, -scrollX * ratio, -scrollY * ratio);
        drawWordBlocks(now);
        drawFootprints(now);
        drawWordBoxes(now);
        drawRing();
        drawLegs();
        drawBody();
    }

    function frame(time) {
        var dt = lastTime ? Math.min(time - lastTime, MAX_DELTA) : 16;
        var busy;
        frameId = 0;
        lastTime = time;
        clock = time;
        chooseGoal(time);
        returnIfFarAway();
        moveBody(dt / 1000);
        walkLegs(time);
        busy = viewChanged || body.turned || body.speed > 0 || airborne[0] + airborne[1] > 0 || time < fadingUntil;
        if (busy || wasBusy) draw(time);
        wasBusy = busy;
        viewChanged = false;
        schedule();
    }

    function schedule() {
        if (!frameId && enabled && !document.hidden) frameId = window.requestAnimationFrame(frame);
    }

    function onPointerMove(event) {
        if (event.pointerType === 'touch') return;
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        pointer.inside = true;
        pointer.activeAt = clock;
        viewChanged = true;
    }

    function onPointerDown(event) {
        if (event.pointerType !== 'touch') return;
        wander.x = event.clientX + scrollX;
        wander.y = event.clientY + scrollY;
        wander.chosen = true;
        wander.resting = false;
    }

    function onPointerLeave() {
        pointer.inside = false;
        viewChanged = true;
    }

    function onScroll() {
        scrollX = window.pageXOffset || 0;
        scrollY = window.pageYOffset || 0;
        if (pointer.inside) pointer.activeAt = clock;
        viewChanged = true;
    }

    function onVisibility() {
        if (document.hidden) {
            if (frameId) window.cancelAnimationFrame(frameId);
            frameId = 0;
            return;
        }
        lastTime = 0;
        viewChanged = true;
        schedule();
    }

    function mount(element, name) {
        element.className = name;
        element.setAttribute('aria-hidden', 'true');
        document.body.appendChild(element);
    }

    function listen() {
        var passive = { passive: true };
        window.addEventListener('pointermove', onPointerMove, passive);
        window.addEventListener('pointerdown', onPointerDown, passive);
        window.addEventListener('scroll', onScroll, passive);
        window.addEventListener('resize', measure, passive);
        root.addEventListener('pointerleave', onPointerLeave, passive);
        root.addEventListener('mouseleave', onPointerLeave, passive);
        document.addEventListener('visibilitychange', onVisibility);
        if (window.ResizeObserver) new ResizeObserver(measure).observe(root);
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    }

    function readChoice() {
        try {
            return window.localStorage.getItem(CHOICE_KEY) !== 'off';
        } catch (error) {
            return true;
        }
    }

    function saveChoice() {
        try {
            window.localStorage.setItem(CHOICE_KEY, enabled ? 'on' : 'off');
        } catch (error) {
            return;
        }
    }

    function clearMarks() {
        var i;
        for (i = 0; i < WORD_MARKS; i++) wordMarks[i].word = -1;
        for (i = 0; i < FOOTPRINTS; i++) footprints[i].live = false;
        fadingUntil = 0;
    }

    function enter() {
        body.x = scrollX + viewW + ENTRY_DISTANCE;
        body.y = scrollY + viewH * 0.45;
        body.heading = Math.PI;
        body.cos = -1;
        body.sin = 0;
        body.speed = 0;
        wander.chosen = false;
        plantAll();
        lastTime = 0;
        viewChanged = true;
        schedule();
    }

    function leave() {
        if (frameId) window.cancelAnimationFrame(frameId);
        frameId = 0;
        clearMarks();
    }

    function setEnabled(on) {
        enabled = on;
        canvas.hidden = !on;
        under.hidden = !on;
        if (toggle) toggle.setAttribute('aria-pressed', on ? 'true' : 'false');
        if (on) enter();
        else leave();
    }

    function onToggle() {
        setEnabled(!enabled);
        saveChoice();
    }

    function start() {
        mount(under, 'creature-under');
        mount(canvas, 'creature');
        buildLegs();
        buildPools();
        measure();
        listen();
        if (toggle) {
            toggle.hidden = false;
            toggle.addEventListener('click', onToggle);
        }
        setEnabled(readChoice());
    }

    start();
})();
