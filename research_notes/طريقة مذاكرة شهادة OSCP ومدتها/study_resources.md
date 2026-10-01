# OSCP (PEN-200) Study Resources & Practice Platforms (2025-2026)

> Methodology note for the report writer: research done 2026-10-01. Network egress in this session blocked most primary domains (offsec.com, help.offsec.com, hackthebox.com, help.hackthebox.com, docs.google.com, medium.com, most personal blogs/github.io). Only github.com pages and web-search result summaries were readable. Facts marked **[snippet]** come from search-engine summaries of the cited page rather than a full-page read; treat them as reliable-but-unverified. Facts without that mark were read directly from the page.

---

## 1. Context: what the exam looks like now (why resources changed)

### Takeaway
Since 1 Nov 2024 the exam has no bonus points and a 40-point "assumed breach" AD set, so AD is mandatory to pass. Buffer overflow was removed in March 2023, so BOF prep material (e.g. THM "Buffer Overflow Prep") is outdated for OSCP.

### Cited Findings
- On 1 Nov 2024 OffSec changed the exam and introduced OSCP+. Passing gives two credentials: OSCP, which never expires, and OSCP+, which is valid for 3 years — [StationX OSCP Exam Guide 2026](https://www.stationx.net/oscp-exam-guide/) [snippet]; [OffSec Help: OSCP Exam Changes](https://help.offsec.com/hc/en-us/articles/29865898402836-OSCP-Exam-Changes) [snippet]
- Bonus points were removed on 1 Nov 2024. Before that, up to 10 bonus points from course exercises let some candidates pass without touching AD — [OffSec blog: OSCP Exam Change](https://www.offsec.com/blog/oscp-exam-structure/) [snippet]; [HackerDNA OSCP+ Roadmap 2026](https://hackerdna.com/blog/oscp-preparation-guide) [snippet]
- The AD set is worth 40 of 100 points and is "assumed compromise": you start with a standard domain user's credentials. Scoring is 10 pts for machine 1, 10 for machine 2, and 20 for the Domain Controller. The standalones max out at 60, so you cannot pass without AD points — [OffSec Help: OSCP Exam Changes](https://help.offsec.com/hc/en-us/articles/29865898402836-OSCP-Exam-Changes) [snippet]; [cyberphinix OSCP+ overview](https://cyberphinix.de/en/blog/oscp-plus-overview/) [snippet]
- OffSec announced the PEN-200-2023 update on 16 March 2023. It removed Buffer Overflow from the course and the exam machines and shifted focus to web apps, AD and modern exploitation — [Ray Heffer: Changes to the OSCP (PEN-200) Exam for 2023](https://www.rayheffer.com/changes-to-the-oscp-pen-200-exam-for-2023/) [snippet]; [Joas A Santos LinkedIn: PEN-200 2023 Update](https://www.linkedin.com/posts/joas-antonio-dos-santos_pen-200-pwk-2023-update-offsec-activity-7042630685768966144-MPLE) [snippet]
- Older roadmaps still recommend the TryHackMe "Buffer Overflow Prep" room as "strongly recommended" (pre-2023 advice) — [ltsirkov Medium: OSCP preparation 2021](https://ltsirkov.medium.com/oscp-preparation-2021-learning-path-41a88eb1a4b) [snippet]

### Inferences
- Any resource dated before March 2023 that spends time on BOF (THM Buffer Overflow Prep, Tib3rius' BOF guide, the old "Brainpan" boxes) is now low priority for OSCP.
- Any pre-Nov-2024 guide that says to "get the 10 bonus points as a safety net" is obsolete.

### Gaps
- I could not read the OffSec help-center pages directly (egress blocked). Point values were confirmed only through search summaries from several sources that agree with each other.

---

## 2. Prerequisite / foundation resources (Linux, networking, Windows, scripting, web)

### Takeaway
The common on-ramp, cheapest first:
1. OverTheWire Bandit for the Linux CLI.
2. TryHackMe Pre Security for networking, web and OS basics.
3. TryHackMe Jr Penetration Tester, then Offensive Pentesting (or TCM PEH), for first hands-on hacking.
4. The HTB Academy Penetration Tester (CPTS) path, as a deeper but longer alternative or supplement.

### Cited Findings
- **OverTheWire Bandit + TryHackMe Pre Security** are the recommended foundation stage ("Weeks 1-4") for Linux CLI and foundational concepts — [Medium: OSCP Roadmap 2025 "Phase 0"](https://medium.com/@anandrishav2228/oscp-roadmap-f55123c344de) [snippet]; [GitHub Veinlatch/OSCP-journey (Linux fundamentals -> OverTheWire -> THM/HTB -> OSCP)](https://github.com/Veinlatch/OSCP-journey) [snippet]
- **TryHackMe Offensive Pentesting path** is described as "the friendliest on-ramp" before OSCP. It covers enumeration, exploitation, AD basics and privesc — [Medium: OSCP Roadmap 2025](https://medium.com/@anandrishav2228/oscp-roadmap-f55123c344de) [snippet]
- **TryHackMe Jr Penetration Tester path** covers:
  - offensive and defensive fundamentals
  - pentest methodology
  - network recon and Nmap
  - web vulns (SQLi, XSS, CSRF, IDOR, session issues, API pentesting)

  Source: [GitHub maryamirfan18/tryhackme-jr-pentester](https://github.com/maryamirfan18/tryhackme-jr-pentester) [snippet]; path URL: https://tryhackme.com/path/outline/jrpenetrationtester
- **HTB Academy "Penetration Tester" job-role path** is the module set required for the CPTS exam. It covers network, web-app and AD pentesting, "drilling methodology into you". It is more complete in breadth and depth than PEN-200 but takes "considerably longer", which is a problem if you have only 1-2 hours a day — [Tiago Nunes: OSCP via CPTS, not versus](https://tiagomanunes.github.io/articles/oscp-via-cpts/) [snippet]; [HTB Academy paths catalogue](https://academy.hackthebox.com/catalogue/paths)
- Candidates commonly add individual HTB Academy modules. Example: a 2024 candidate finished all HTB machines on the TJ Null/LainKusanagi list plus the HTB Academy "Shells & Payloads" module — [Tae'lur Alexis on X](https://x.com/TaelurAlexis/status/1862992333806899324) [snippet]
- **TCM Security Practical Ethical Hacking (PEH)**:
  - 20-25 hours of practical content.
  - $75 standalone, or included in TCM All-Access from $29.99/month.
  - Has an AD lab build (16 GB RAM suggested).

  Sources: [TCM Security: Practical Ethical Hacking](https://tcm-sec.com/academy/practical-ethical-hacking/) [snippet]; [TCM Academy PEH](https://academy.tcm-sec.com/p/practical-ethical-hacking-the-complete-course1) [snippet]
- TryHackMe, HackTheBox and TCM Security are cited as the standard supplements beyond the PWK course — [GitHub OoStellarnightoO/OSCP_Notes](https://github.com/OoStellarnightoO/OSCP_Notes)
- One roadmap suggests aiming for 100+ completed boxes across THM and HTB, with notes on each — [Medium: OSCP Roadmap 2025](https://medium.com/@anandrishav2228/oscp-roadmap-f55123c344de) [snippet]
- OffSec publishes an official **"PEN-200 Learning Plan – 24 Week"** — [OffSec Help: PEN-200 Learning Plan 24 Week](https://help.offsec.com/hc/en-us/articles/15545672357780-OffSec-PEN-200-Learning-Plan-24-Week) (title only; content not readable here)

### Inferences
- Rough choice of foundation route:
  - Absolute beginners: THM (cheap and guided).
  - People who want depth and methodology: HTB Academy CPTS path.
  - People on a budget who want AD early: TCM PEH.
- Many 2025 candidates do "OSCP via CPTS": the CPTS path content, then PEN-200 for the exam-style labs.

### Gaps
- No source found in this session confirming whether TryHackMe has retired or renamed the "Offensive Pentesting" path in 2025-2026. Verify on tryhackme.com before recommending it by name.
- No specific sources were found for scripting resources (Python/Bash/PowerShell) recommended for OSCP.
- No specific source was found for Windows-basics resources (beyond THM Pre Security).

---

## 3. Practice machine lists (TJ Null, LainKusanagi, others) and which platform is most exam-like

### Takeaway
There are two canonical lists:
- **TJ Null's NetSecFocus Trophy Room** (Google Sheet; it has a "PWK V3 / PEN-200" tab and was the long-time standard).
- **LainKusanagi's OSCP-like list** (Google Sheet; popular since 2024 because it is updated regularly, trims unrelated or overly steep boxes, and adds AD, THM and VulnLab content).

The community consensus is that **OffSec Proving Grounds Practice** is the most exam-like platform. HTB is the next best.

### Cited Findings
**TJ Null / NetSecFocus Trophy Room**
- The sheet has sections for PWK V3 (PEN-200 latest version), OSEP (PEN-300), OSWE (WEB-300) and OSED (EXP-301) — [NetSecFocus Trophy Room (Google Sheet)](https://docs.google.com/spreadsheets/u/1/d/1dwSMIAPIam0PuRBkCiDI88pU3yzrqqHkDtBngUHNCw8/htmlview) [snippet]
- TJ Null added a Proving Grounds Practice section in April 2021 — [TJ_Null on X](https://x.com/TJ_Null/status/1380574306976026628) [snippet]
- He added an OSEP/PEN-300 section in October 2023 — [TJ_Null on X](https://x.com/TJ_Null/status/1712158570366616030) [snippet]
- An older update said the OSCP-like list had "over 100 boxes" — [NetSecFocus Trophy Room](https://docs.google.com/spreadsheets/u/1/d/1dwSMIAPIam0PuRBkCiDI88pU3yzrqqHkDtBngUHNCw8/htmlview) [snippet]
- Example PG Practice boxes on TJ Null's list: Twiggy, Exfiltrated, Helpdesk, Pelican, Access, Astronaut, Algernon, Blackgate, Authby, Boolean, Hutch, Codo, Internal, Crane, Kyoto, Hub, Nara, Image, Resourced, Law, Squid — [Rian Friedt: OSCP preparation 2024 from TJ Null](https://rianfriedt.medium.com/oscp-preperation-2024-pwk-v3-pen-200-2023-from-tj-null-7ea8b6a71859) [snippet]
- Helper tools exist, e.g. a script that picks your next box from the Trophy Room — [GitHub jeremylaratro/NetSecFocus_TrophyRoom_MachineSelector](https://github.com/jeremylaratro/NetSecFocus_TrophyRoom_MachineSelector)
- There is also a TJ Null list sorted by difficulty — [GitHub Shellshock9001](https://github.com/Shellshock9001/Tjs-Nulls-OSCP-list-in-order-from-easy-medium-hard-insane-more-challenging-and-alphabetical)
- A video playlist of TJ Null PEN-200 boxes exists — [YouTube playlist](https://www.youtube.com/playlist?list=PLcSbj5mz-wxPK8KD522vH5Gny4bSemX2H)
- 0xdf maintains a page that maps OffSec exam lists to HTB boxes — [0xdf: OffSec Exam HTB Lists](https://0xdf.gitlab.io/cheatsheets/offsec) (not readable here)

**LainKusanagi's list**
- It covers HackTheBox, Proving Grounds, TryHackMe and VulnLab. Machines are categorised by difficulty, OS and technique, including AD — [Scribd copy: LainKusanagi OSCP-Like](https://www.scribd.com/document/861251890/Lainkusanagi-OSCP-Like) [snippet]; [Scribd copy 2](https://www.scribd.com/document/938099738/Lainkusanagi-OSCP-Like) [snippet]
- Example PG Practice Linux entries:
  - Easy: Levram
  - Intermediate: ClamAV, Pelican, Payday, Snookums, Bratarina, Nibbles, ZenPhoto, Cockpit, Extplorer

  Source: [Scribd: LainKusanagi OSCP Practice Machines](https://www.scribd.com/document/938099738/Lainkusanagi-OSCP-Like) [snippet]
- A rated version also exists — [Scribd: LainKusanagi With Ratings](https://www.scribd.com/document/923220900/LainKusanagi-With-Ratings) [snippet]
- Why people switched to it: one candidate moved from TJ Null because LainKusanagi "regularly updates" the list. They said TJ Null's list "used to be plagued [with] unrelated boxes or with a very steep learning curve that is unnecessary for OSCP" — [DuckWrites (Medium)](https://duckwrites.medium.com/i-suggest-lainkusanagis-list-instead-of-tjnull-s-cd71b42810da) [snippet]
- "TJ Null and LainKusanagi are two well-known resources" for OSCP machine lists — [Olivier Konate: Lessons Learned From OSCP+](https://olivierkonate.medium.com/lessons-learned-from-oscp-f988f00a49a8) [snippet]
- The community now often treats the two as one combined "LainKusanagi & TJ Null OSCP trophy list". A random-box generator built on it covers PG Practice, HackTheBox, TryHackMe, Virtual Hacking Labs and PG Play. The tool notes that PG Play is Linux-only and that VHL has no AD — [GitHub MAX-P0W3R/OSCP-machine-generator](https://github.com/MAX-P0W3R/OSCP-machine-generator)
- One candidate's advice: do the Challenge Labs first, then do *both* lists rather than agonising over which one — [GitHub OoStellarnightoO/OSCP_Notes](https://github.com/OoStellarnightoO/OSCP_Notes)

**Combined / derived lists**
- **Ch4os1 OSCP-Exam-Lab-Prep-List** combines NetSecFocus + LainKusanagi, plus extra PG and HTB boxes. It has **143 machines** (137 standalone + 6 chains):
  - Easy 8
  - Intermediate 29
  - Hard 31 (incl. 2 AD)
  - Very Hard 22 (incl. 6 AD)
  - Extra sections for SQLi, web, phishing and Linux

  Featured boxes:
  - AD-focused PG boxes: Hutch, Vault, Access, Resourced
  - HTB "chains" (mini-prolabs): POO, Heron, Tengu
  - Pro Labs Dante and Zephyr for AD

  Source: [GitHub Ch4os1/OSCP-Exam-Lab-Prep-List](https://github.com/Ch4os1/OSCP-Exam-Lab-Prep-List)

**Which platform is most exam-like**
- "Proving Grounds Practice ... provides the closest experience to actual OSCP exam machines" — [Steflan's Security Blog: PG Practice Review](https://steflan-security.com/proving-grounds-practice-review/) [snippet]; [unihackers OSCP cost](https://unihackers.com/certifications/oscp) [snippet]
- PG machines are "very similar to machines seen in the exam, with [the] mentality and approach" expected in OSCP — [DEV: Proving Grounds Quick Tips](https://dev.to/hackin7/proving-grounds-tips-50ae) [snippet]
- PG Play (Linux boxes) is available to all OffSec members with a 3 hours/day limit. PG Practice (Linux and Windows) requires a subscription and has unlimited time — [DEV: Proving Grounds Quick Tips](https://dev.to/hackin7/proving-grounds-tips-50ae) [snippet]; [OffSec Help: Getting Started with PG Play and Practice](https://help.offsec.com/hc/en-us/articles/360048318472-Getting-Started-with-PG-Play-and-Practice) [snippet]
- PG Practice has AD machines that are used for OSCP AD prep (e.g. Resourced, Access) — [HackMD: PG Practice – Active Directory (OSCP)](https://hackmd.io/@CHW/SyCghuRhyl) [snippet]; [Medium: PG Resourced AD writeup](https://medium.com/@nr_4x4/offsec-proving-grounds-resourced-writeup-ad-lab-active-directory-6346dfe74671) [snippet]

### Inferences
- A common platform priority order, by exam-likeness: PG Practice > PEN-200 challenge labs (see section 4; these are actually the most exam-like) > HTB retired boxes on the lists > THM > VulnHub/PG Play.
- VulnHub appears mainly in older (pre-2023) list versions. Newer lists centre on PG Practice and HTB.

### Gaps
- I could not open either Google Sheet (docs.google.com blocked), so the **current exact machine counts** of TJ Null's PEN-200 tab and LainKusanagi's sheet, and their last-updated dates, are unverified. Check the sheets directly.
- I did not find a primary statement from LainKusanagi (the Reddit original) about authorship or update cadence.
- VulnLab's 2025-2026 status (reportedly absorbed into HTB) was not verified in this session.

---

## 4. PEN-200 Challenge Labs: which ones, how to use them, and are OSCP A/B/C the closest to the exam?

### Takeaway
OSCP A, B and C are retired-exam-style mock exams (3 AD + 3 standalones each) and the closest thing to the real exam. Since Feb 2025 they also use the assumed-breach AD format.

Do the large AD networks first (Medtech, Relia, Secura, then Skylark as optional/hardest). Then sit OSCP A/B/C as timed 24-hour mocks. Zeus and Poseidon are considered out of scope.

### Cited Findings
- Recommendation tiers:
  - Minimum: OSCP A/B/C.
  - Extended: Secura, Relia, Medtech, and parts of Skylark.
  - Avoid: Zeus and Poseidon (out of scope).

  Source: [GitHub OoStellarnightoO/OSCP_Notes](https://github.com/OoStellarnightoO/OSCP_Notes)
- In **February 2025** OffSec updated OSCP A/B/C to the assumed-breach scenario, where the AD set gives you valid credentials at the start. The author found this "incredibly disappointing" (less initial-access practice) — [GitHub OoStellarnightoO/OSCP_Notes](https://github.com/OoStellarnightoO/OSCP_Notes); [OSCP+ Exam Checklist 2025-26](https://anshu19981.github.io/OscpCheckList2026/) [snippet]
- Medtech, Relia and Skylark are big AD + pivoting networks of about 10-20 interconnected machines. OSCP A, B and C are mock exams, each with a 3-machine AD set and 3 standalones — [Medium: How I passed OSCP+ as an AppSec Engineer](https://medium.com/@konqi/how-i-passed-the-oscp-on-my-first-attempt-as-an-appsec-engineer-c448ac15170f) [snippet]; [Slayer0x: OSCP All you need to know](https://slayer0x.github.io/oscp/) [snippet]
- Skylark is described as the hardest lab, with lots of enumeration, pivoting and tunnelling — [Medium: How I passed the OSCP with 100 points](https://medium.com/@ayzendan/how-i-passed-the-oscp-with-100-points-on-first-attempt-dfda5a2ceeb3) [snippet]
- A suggested order is Medtech -> Relia -> OSCP-A -> OSCP-B -> OSCP-C. OSCP-A/B/C "simulate the real exam very well". Treat A and B as a real 24-hour exam if possible, and allow 3-4 weeks for the challenge labs ("the most important part in the course") — [Jorkle's OSCP Guide (Nov 2025)](https://jorkle.com/posts/oscp-guide/) [snippet]; [atom18: My OSCP Journey (Jul 2025)](https://atom18.github.io/2025/07/19/my-oscp-journey.html) [snippet]; [Simon Bruklich: My OSCP Journey](https://simonbruklich.com/blog/my-oscp-journey/) [snippet] (the search summary merged these pages, so I could not attribute each claim to one of them)
- Secura, Medtech and Relia "lean heavily towards Active Directory" — [Kyser Clark: How I Passed the OSCP on My First Try](https://www.kyserclark.com/post/how-i-passed-the-oscp-on-my-first-try) [snippet]
- One search summary claims "PEN-200 has ten Challenge Labs; OffSec recommends at least six" — source attribution unclear (search summary), treat with caution.

### Inferences
- Because OSCP A/B/C now mirror the post-Feb-2025 exam format (assumed breach), they are the best single predictor of exam readiness.
- Medtech, Relia and Skylark are better for building AD and pivoting stamina, since they have more machines and deeper chains than the exam.

### Gaps
- No official OffSec page could be read to confirm the exact current list of challenge labs. Names seen across sources: Secura, Medtech, Relia, Skylark, OSCP A, OSCP B, OSCP C, Zeus, Poseidon (9 names). The "ten labs" claim is unverified.
- Exact machine counts for Secura, Relia, Medtech and Skylark were not confirmed.

---

## 5. Active Directory preparation (resources, tools, techniques)

### Takeaway
AD prep resources, in rough order of use:
1. PEN-200 AD modules and challenge labs.
2. HTB Academy "Active Directory Enumeration & Attacks".
3. TCM PEH's AD section.
4. PG Practice AD boxes (Access, Hutch, Resourced, Vault, Nara).
5. HTB AD boxes and chains (e.g. "Administrator" for ACL abuse).
6. Optionally HTB Dante (pivoting) or a self-hosted GOAD lab.

Tools: NetExec (CrackMapExec is deprecated), BloodHound (CE), Impacket, Ligolo-ng for pivoting. Techniques: Kerberoasting, AS-REP roasting, password spraying, ACL abuse.

### Cited Findings
- HTB Academy's **"Active Directory Enumeration & Attacks"** module is recommended to "master AD for OSCP"; enumeration is "the bedrock" of AD pentesting — [Medium (sql-lover): Level Up Your OSCP+ Prep – AD skills from HTB Academy](https://medium.com/@sql-lover/level-up-your-oscp-prep-key-active-directory-pentesting-skills-from-htb-academy-59098cd4a8fc) [snippet]
- **Ligolo-ng** is recommended as the primary tunnelling/pivoting tool. **NetExec / CrackMapExec** are "the best tools for enumerating and validating accounts" over LDAP, RDP, SMB and WinRM. Some tools taught in the OSCP material, like CrackMapExec, are already deprecated — [GitHub OoStellarnightoO/OSCP_Notes](https://github.com/OoStellarnightoO/OSCP_Notes)
- Tools widely used now: ligolo-ng and netexec. Deprecated or restricted:
  - crackmapexec (outdated)
  - legacy BloodHound
  - Metasploit (heavily restricted on the exam)
  - SQLMap (banned/restricted)

  Source: [GitHub OoStellarnightoO/OSCP_Notes](https://github.com/OoStellarnightoO/OSCP_Notes)
- Practise ACL abuse on HTB's **"Administrator"** box (assumed-breach style). Focus on low-hanging fruit: Kerberoasting, AS-REP roasting, password spraying — [GitHub OoStellarnightoO/OSCP_Notes](https://github.com/OoStellarnightoO/OSCP_Notes)
- **GOAD (Game of Active Directory)** by Orange Cyberdefense is listed for building a home AD lab — [OSCP+ Exam Checklist 2025-26](https://anshu19981.github.io/OscpCheckList2026/) [snippet]; project: https://github.com/Orange-Cyberdefense/GOAD
- GOAD is a good multi-host alternative to HTB if you have the hardware — [zmalinich Medium: CPTS Review (with Pro Labs)](https://medium.com/@zmalinich/certified-penetration-testing-specialist-review-with-pro-labs-8b65b418b4f0) [snippet]
- **HTB Dante Pro Lab** "is great for learning pivoting" and helps with AD, Windows privesc and pivoting. **Offshore** is described as "Dante 2.0 with some added defenses" — [zmalinich Medium: CPTS Review (with Pro Labs)](https://medium.com/@zmalinich/certified-penetration-testing-specialist-review-with-pro-labs-8b65b418b4f0) [snippet]
- Pro Labs **Dante** and **Zephyr** are listed for AD prep. HTB chains POO, Heron and Tengu are listed as "mini-prolabs" — [GitHub Ch4os1/OSCP-Exam-Lab-Prep-List](https://github.com/Ch4os1/OSCP-Exam-Lab-Prep-List)
- AD-focused PG Practice boxes on the lists: Hutch, Vault, Access, Resourced — [GitHub Ch4os1/OSCP-Exam-Lab-Prep-List](https://github.com/Ch4os1/OSCP-Exam-Lab-Prep-List). PG Practice also has an AD writeup collection for PEN-200 — [HackMD: PG Practice – Active Directory](https://hackmd.io/@CHW/SyCghuRhyl) [snippet]
- The TCM PEH course has an AD lab build (16 GB RAM suggested) — [TCM Security: Practical Ethical Hacking](https://tcm-sec.com/academy/practical-ethical-hacking/) [snippet]
- AD and pivoting cheat sheets from candidates:
  - [Medium (TheHuskyHacker): OSCP Notes, AD & Pivoting Cheat Sheet](https://medium.com/@TheHuskyHacker/oscp-notes-active-directory-and-pivoting-cheat-sheet-af42c46fd67b) [snippet]
  - [GitHub tedchen0001/OSCP-Notes AD.md](https://github.com/tedchen0001/OSCP-Notes/blob/master/AD.md) [snippet]

### Inferences
- Since the exam AD set is now assumed-breach, prep should weight these skills over initial AD foothold:
  - credentialed enumeration (NetExec, BloodHound, ldapdomaindump)
  - Kerberos attacks (Impacket GetUserSPNs/GetNPUsers)
  - credential reuse and spraying
  - local privesc on domain hosts
  - Mimikatz/secretsdump
  - lateral movement (psexec, wmiexec, evil-winrm)
  - pivoting to the DC (Ligolo-ng/Chisel)
- Pro Labs (Dante, Offshore, Zephyr) are optional extras. They exceed exam scope and cost extra.

### Gaps
- No source in this session gave the current price of HTB Pro Labs (Dante/Offshore).
- No source here gave specific TryHackMe AD room recommendations (e.g. Attacktive Directory, Wreath, Holo, the Compromising AD module). These are commonly cited, but I found no citable 2025 source for them.
- Chisel and Mimikatz recommendations were not specifically sourced here, beyond general knowledge.

---

## 6. Privilege escalation resources

### Takeaway
Tib3rius' two Udemy courses ("Linux/Windows Privilege Escalation for OSCP & Beyond!") are the standard structured privesc courses. In practice candidates rely on these references:
- HackTricks ("your best friend in the exam")
- PayloadsAllTheThings
- GTFOBins (Linux binaries)
- LOLBAS (Windows binaries)
- PEASS-ng (linPEAS/winPEAS)
- RevShells.com
- S1ren's YouTube methodology videos

### Cited Findings
- **Tib3rius "Linux Privilege Escalation for OSCP & Beyond!"** (Udemy) goes from how permissions work to in-depth technique demos. It has 170+ slides and an intentionally misconfigured Debian VM — [Udemy: Linux Privilege Escalation for OSCP & Beyond!](https://www.udemy.com/course/linux-privilege-escalation/) [snippet]
- **Tib3rius "Windows Privilege Escalation for OSCP & Beyond!"** (Udemy) has 150+ slides and a script that builds an intentionally vulnerable Windows 10 configuration — [Udemy: Windows Privilege Escalation for OSCP & Beyond!](https://www.udemy.com/course/windows-privilege-escalation/) [snippet]
- A reviewer said every privesc technique needed for the OSCP exam was covered by Tib3rius's courses — [cinzinga: Linux Privilege Escalation Course Review](https://cinzinga.com/tib-course-review/) [snippet]
- Reddit commentary on both courses is aggregated at [reddemy Windows](https://reddemy.com/course/windows-privilege-escalation/) and [reddemy Linux](https://reddemy.com/course/linux-privilege-escalation/) [snippet]
- **HackTricks** is "your best friend in the exam". Also recommended: **RevShells.com** (reverse-shell generator) and **S1ren** (YouTube, methodology-focused) — [GitHub OoStellarnightoO/OSCP_Notes](https://github.com/OoStellarnightoO/OSCP_Notes)
- Reference projects (canonical URLs):
  - HackTricks — https://book.hacktricks.xyz (now hacktricks.wiki)
  - PayloadsAllTheThings — https://github.com/swisskyrepo/PayloadsAllTheThings
  - GTFOBins — https://gtfobins.github.io
  - LOLBAS — https://lolbas-project.github.io
  - PEASS-ng — https://github.com/peass-ng/PEASS-ng

  (URLs given for reference; I did not fetch the project pages in this session.)

### Inferences
- A typical pattern: take the Tib3rius courses once (before or alongside PEN-200), then use HackTricks, GTFOBins and LOLBAS as just-in-time references while doing PG/HTB boxes.

### Gaps
- Udemy prices for the Tib3rius courses were not captured. Udemy pricing fluctuates with frequent sales.
- No 2025-specific source compared Tib3rius with alternatives (e.g. TCM's Linux/Windows PrivEsc courses).

---

## 7. Cheat sheets, methodology repos and note-taking tools

### Takeaway
**Obsidian** (with Templater enumeration templates) is the note tool most cited by 2025 candidates. Public GitHub OSCP note repos and checklists serve as methodology templates. I found no 2025 sources for CherryTree or Notion in this session.

### Cited Findings
- Obsidian is recommended for community plugins, an optional cloud sync, and the **Templater** plugin for per-box enumeration templates — [GitHub OoStellarnightoO/OSCP_Notes](https://github.com/OoStellarnightoO/OSCP_Notes)
- Methodology and cheat-sheet repos and sites:
  - [OSCP+ Complete Exam Checklist & Attack Chains 2025-26](https://anshu19981.github.io/OscpCheckList2026/) [snippet]
  - [GitHub rodolfomarianocy/OSCP-Tricks](https://github.com/rodolfomarianocy/OSCP-Tricks) [snippet]
  - [GitHub douglascybersec/OSCP-Tricks-2024](https://github.com/douglascybersec/OSCP-Tricks-2024) [snippet]
  - [GitHub mexicancyberweapon/oscp-easy ("all concepts + notes")](https://github.com/mexicancyberweapon/oscp-easy) [snippet]
  - [oscp+ notes (heathen gitbook)](https://heathen.gitbook.io/oscp+-notes) [snippet]
  - [adot8 OSCP prep site](https://oscp.adot8.com/) [snippet]
  - [GitHub 0x4d31/awesome-oscp](https://github.com/0x4d31/awesome-oscp) [snippet]
  - [GitHub alexiasa/oscp-omnibus](https://github.com/alexiasa/oscp-omnibus) [snippet]
- Large AD challenge labs (25-30 machines) need disciplined note-taking: "you can't keep that much data in your head" — [Medium: How I passed the OSCP with 100 points](https://medium.com/@ayzendan/how-i-passed-the-oscp-with-100-points-on-first-attempt-dfda5a2ceeb3) [snippet]

### Inferences
- Many older public repos (2021-2023) still contain BOF sections and CrackMapExec syntax. Prefer repos dated 2024+ that use NetExec and assumed-breach AD flows.

### Gaps
- No 2025-2026 source found in this session specifically recommending CherryTree or Notion for OSCP. These appear mostly in pre-2023 guides, but that is unverified here.
- No source found comparing report-writing tools (e.g. OffSec's report template, SysReptor).

---

## 8. Approximate costs of the platforms (as of 2025-2026)

### Takeaway
Monthly costs, roughly:
- PG Practice: about $19/month (or $199/year).
- TryHackMe Premium: about $17-18/month.
- HTB Labs VIP+: $25/month ($223/year). The cheaper VIP tier was discontinued on 1 Oct 2025.
- HTB Academy: Student $8/month (rising to $10 on 12 Oct 2026); Silver annual $490 (rising to $550).
- TCM PEH: $75 one-off.

### Cited Findings
- **PG Practice**:
  - $19/month, which also gives access to PG Play — [Steflan: PG Practice Review](https://steflan-security.com/proving-grounds-practice-review/) [snippet]; [unihackers](https://unihackers.com/certifications/oscp) [snippet]
  - $199/year (about $16.58/month) — [OffSec: Proving Grounds Practice product page](https://www.offsec.com/pre-registration/products/proving-grounds/) [snippet]
  - Help article: [OffSec Help: PG Practice Subscription](https://help.offsec.com/hc/en-us/articles/6877205897364-PG-Practice-Subscription) (not readable)
- **PG Play**: free to OffSec members, Linux-only, 3 hours/day — [DEV: Proving Grounds Quick Tips](https://dev.to/hackin7/proving-grounds-tips-50ae) [snippet]
- **HTB Labs**:
  - VIP+ is $25/month or $223/year — [HackerDNA: TryHackMe vs HackTheBox 2026](https://hackerdna.com/blog/tryhackme-vs-hackthebox) [snippet]
  - The cheaper VIP plan stopped being sold on 1 Oct 2025 — [PriceTimeline: HTB subscription price increase Oct 1](https://pricetimeline.com/news/151) [snippet]; [HTB Help: HTB Labs Subscriptions](https://help.hackthebox.com/en/articles/7257535-htb-labs-subscriptions) [snippet]
- **TryHackMe Premium**: about $17-18/month ($126-134/year) — [HackerDNA: TryHackMe Pricing 2026](https://hackerdna.com/blog/tryhackme-pricing) [snippet]; [G2: TryHackMe Pricing 2026](https://www.g2.com/products/tryhackme/pricing) [snippet]
- **HTB Academy legacy (cube-based) pricing**: Student $8/month; Silver monthly $18/month; Silver annual $490/year — [HackerDNA: HTB Academy Pricing 2026](https://hackerdna.com/blog/hack-the-box-academy) [snippet]
- **HTB Academy new pricing from 12 Oct 2026** (tier-based, no monthly cubes):
  - Student $10/month
  - Silver $30/month
  - Gold $95/month
  - Platinum $125/month
  - Annual: Silver $550, Gold $1,400, each including two exam vouchers
  - Cubes stay as a pay-as-you-go option

  Sources: [HTB blog: Pricing changes on HTB Academy](https://www.hackthebox.com/blog/new-academy-pricing) [snippet]; [HTB Help: Academy Subscriptions](https://help.hackthebox.com/en/articles/13677074-academy-subscriptions) [snippet]
- **TCM PEH**: $75 standalone, or All-Access Membership from $29.99/month — [TCM Academy PEH](https://academy.tcm-sec.com/p/practical-ethical-hacking-the-complete-course1) [snippet]

### Inferences
- Today (2026-10-01) is 11 days before the HTB Academy price change, so the report should state both the old and new HTB Academy prices.
- The "Silver monthly $18" legacy figure looks low compared with the $30 new Silver price. It came only from a search summary, so treat it as uncertain.

### Gaps
- I could not verify on HTB's own page whether HTB Academy Student pricing still needs a .edu email.
- Prices for the PEN-200 course itself (Course+Cert bundle, Learn One) and for HTB Pro Labs were not captured in this session.
- I could not verify the exact current Udemy prices for the Tib3rius courses.
- I could not confirm whether PG Practice is now bundled into OffSec Learn One / the annual membership ([OffSec Annual Membership page](https://www.offsec.com/products/annual-membership/) surfaced in search, but its content was not read).

---

## 9. Recommended order / roadmap combining these resources

### Takeaway
The sources broadly agree on this order:
1. Fundamentals: Bandit, THM Pre Security.
2. Guided pentesting: THM Jr Pentester/Offensive Pentesting, TCM PEH, or the HTB Academy CPTS path.
3. Privesc: Tib3rius.
4. PEN-200 course modules.
5. Challenge Labs: Medtech, Relia, Secura, optional Skylark, then OSCP A/B/C as timed mocks.
6. LainKusanagi/TJ Null boxes, PG Practice first, then HTB.
7. Extra AD reps: HTB Academy AD E&A, HTB AD boxes, optional GOAD/Dante.
8. A final mock under exam conditions.

### Cited Findings
- Foundation stage: OverTheWire Bandit + THM Pre Security — [Medium: OSCP Roadmap 2025](https://medium.com/@anandrishav2228/oscp-roadmap-f55123c344de) [snippet]
- Pre-OSCP stage: the THM Offensive Pentesting path as the "friendliest on-ramp". Work the labs methodically, document every technique, and aim for 100+ boxes with notes — [Medium: OSCP Roadmap 2025](https://medium.com/@anandrishav2228/oscp-roadmap-f55123c344de) [snippet]
- "OSCP via CPTS, not versus": use the HTB Academy Penetration Tester path for depth, then PEN-200. Caveat: the path takes considerably longer — [Tiago Nunes: OSCP via CPTS](https://tiagomanunes.github.io/articles/oscp-via-cpts/) [snippet]
- Complete the Challenge Labs first, then work both TJ Null's and LainKusanagi's lists — [GitHub OoStellarnightoO/OSCP_Notes](https://github.com/OoStellarnightoO/OSCP_Notes)
- Challenge lab order Medtech -> Relia -> OSCP-A -> OSCP-B -> OSCP-C. Treat A/B as 24-hour mocks and give the challenge labs 3-4 weeks — [Jorkle's OSCP Guide (Nov 2025)](https://jorkle.com/posts/oscp-guide/) [snippet]; [atom18: My OSCP Journey (Jul 2025)](https://atom18.github.io/2025/07/19/my-oscp-journey.html) [snippet]
- OffSec's official pacing reference is the 24-week PEN-200 learning plan — [OffSec Help: PEN-200 Learning Plan 24 Week](https://help.offsec.com/hc/en-us/articles/15545672357780-OffSec-PEN-200-Learning-Plan-24-Week) (title only)
- A candidate reported finishing all HTB boxes on the combined TJ Null/LainKusanagi list alongside HTB Academy modules (Nov/Dec 2024) — [Tae'lur Alexis on X](https://x.com/TaelurAlexis/status/1862992333806899324) [snippet]

### Inferences
Synthesised roadmap, not from a single source:

| Phase | Resources | Notes |
|---|---|---|
| 0. Foundations (2-6 wks) | OverTheWire Bandit; THM Pre Security; basic Python/Bash/PowerShell | Skip if already comfortable |
| 1. Guided pentesting (1-3 mo) | THM Jr Penetration Tester (+ Offensive Pentesting if still available) **or** TCM PEH **or** HTB Academy Penetration Tester path (CPTS) | CPTS path = deepest but slowest |
| 2. Privesc depth | Tib3rius Linux + Windows PrivEsc (Udemy); HackTricks, GTFOBins, LOLBAS, PEASS-ng | Can overlap with phase 1/3 |
| 3. PEN-200 course | Modules + exercises (no bonus points any more, so do them for learning only) | Skip BOF-era material |
| 4. Challenge Labs | Medtech, Relia, Secura, (Skylark optional) -> OSCP A, B, C as timed 24h mocks | A/B/C = assumed-breach since Feb 2025; ignore Zeus/Poseidon |
| 5. OSCP-like boxes | LainKusanagi + TJ Null lists; PG Practice first, then HTB retired boxes | ~50-100 boxes typical |
| 6. AD hardening | HTB Academy "AD Enumeration & Attacks"; PG AD boxes (Access, Hutch, Resourced, Vault, Nara); HTB "Administrator" and chains (POO/Heron/Tengu); optional GOAD / Dante | NetExec, BloodHound CE, Impacket, Ligolo-ng |
| 7. Final mock | Re-do an OSCP A/B/C or a random 3+3 set from PG under 24h | Practise the report too |

### Gaps
- Phase durations above are illustrative. No single 2025-2026 source gave a validated week-by-week timeline (except OffSec's 24-week plan, whose contents I could not read).
- I found no quantitative data on how many list boxes successful candidates typically complete. "100+ boxes" is one roadmap's suggestion.
