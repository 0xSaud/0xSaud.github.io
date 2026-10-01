# OSCP / OSCP+ Preparation Time by Background, Plus Concrete Study Plans

> Method note for the report writer: direct page fetching was blocked by the network egress proxy for nearly every domain, including medium.com, offsec.com, help.offsec.com, infosecwriteups.com, hackerdna.com, reddit.com and personal blogs. Reddit was also excluded from the search index. Every finding below comes from search-engine extracts of the cited pages, not from full-page reads. Numbers are as reported in those extracts. Where the search engine's attribution was unclear, it is flagged. Many "OSCP guide 2026" sites (hackerdna.com, certcrush.app, kioptrix.com, certsqill.com, certempire.com, certdemand.com, etc.) are commercial or SEO aggregators. Their numbers are labeled as such and are not primary data.

## 1. How long do people prepare, by background (beginner / IT-sysadmin-dev / security pro-CTF)?

### Takeaway
No survey segments prep time by background, and OffSec publishes no such data. The evidence is official guidance plus individual reports. Together they give rough bands. (a) Complete beginners: about 9–24 months in total, counting fundamentals, with the OSCP-specific phase often 6+ months. (b) IT, sysadmin or developer background: about 3–7 months. (c) People already doing pentesting, CTF or CPTS: about 1–3 months of OSCP-specific work. Failed attempts commonly add 1.5–4 months.

### Cited Findings
**Official OffSec guidance (current, OSCP+ era)**
- OffSec's onboarding guide says that, "depending on your background", learners should be prepared to spend ">200 – 300+ hours in the lab environment", which "often yields the best results". The course exercises alone typically take 40+ hours. — [OffSec PEN-200 Onboarding guide](https://help.offsec.com/hc/en-us/articles/4406841351316-PEN-200-Onboarding-A-Learner-Introduction-Guide-to-the-OSCP)
- OffSec publishes an official 12-week plan and an official 24-week plan for PEN-200 (details in Q4). The 12-week plan assumes roughly 16–24 hrs/week (one extract says 20–24). The 24-week plan assumes roughly 10 hrs/week. — [OffSec 12-Week Plan](https://help.offsec.com/hc/en-us/articles/15541765522196-OffSec-PEN-200-Learning-Plan-12-Week); [OffSec 24-Week Plan](https://help.offsec.com/hc/en-us/articles/15545672357780-OffSec-PEN-200-Learning-Plan-24-Week)

**Aggregator / commercial guidance (not primary data, 2025–2026)**
- These bands are claimed by background, with no survey cited:
  - 3-month "intensive" at 30–40 hrs/week (full-time study).
  - 6-month "standard" at 15–20 hrs/week (working professionals).
  - 9–12-month "extended" at 10–15 hrs/week (career changers without IT background).
  - "Most successful candidates spend 3–6 months at 15–20 hrs/week."
  - Prior pentest experience can shorten prep to 2–3 months. A sysadmin or network-engineer background is about 3–4 months.
  - Source: [HackerDNA OSCP+ Roadmap 2026](https://hackerdna.com/blog/oscp-preparation-guide)
- "Realistic full-time commitment is 15 hours per week for six months, or roughly 360 hours including labs and reporting." — [CertDemand OSCP guide 2026](https://certdemand.com/guides/oscp-complete-guide)
- For a "true beginner with almost no IT background, 90 days is usually too aggressive", and stretching to 6–9 months is advised. — [Kioptrix 90-day plan (SEO site)](https://kioptrix.com/oscp-90-day-plan/)

**(a) Beginner / no or little IT background: individual reports**
- **Jael Koh (OSCP around 2022–23, pre-OSCP+).** Started after mandatory national service with "little direction", and took a gap year from Aug 2022. Spent **651 hours on OSCP**, pwned **136 machines**, and averaged **7h33m of study per day**. Logged 1,732 hours total across OSCP, OSWE, BSCP, OSEP, OSED and OSCE3 in about one year. — [infosec.jaelkoh.com, 2024](https://infosec.jaelkoh.com/2024/my-first-year-in-infosec-zero-to-osce3)
- **A career changer (OSCP+ format, 2025).** Came from a non-technical field and "two years prior didn't know the difference between TCP and UDP". Passed CompTIA A+, Network+ and Security+ by Dec 2024, then passed OSCP+ while working full time. Total about 2 years from zero. *Attribution caveat:* the search engine surfaced this in results that included the Abdirassilov "zero to hero" post and other 2025 posts. The exact author could not be verified because the pages could not be fetched. — [Abdirassilov, Medium (probable source)](https://medium.com/@ramazan.abdirassilov/my-journey-to-offsec-certified-professional-oscp-from-zero-to-hero-abe8ff8455b0)
- **Ramazan Abdirassilov ("from zero to hero", 3 attempts).**
  - Attempt 1: 20 points plus 10 bonus points. Attempt 2: 10 points, after more Proving Grounds (PG) practice with "no tangible progress".
  - He then switched his main platform from PG to Hack The Box (HTB).
  - Attempt 3, in **Jan 2025 under OSCP+ rules**: took the AD set in about 2 h and had 60 points within 5–6 h. Passed.
  - Waited about 1.5 months of cool-down after the first failure.
  - Source: [Medium](https://medium.com/@ramazan.abdirassilov/my-journey-to-offsec-certified-professional-oscp-from-zero-to-hero-abe8ff8455b0)
- **"OSCP & CPTS in ~1 year from scratch" (Scotsec).** CPTS result Feb 2025, then OSCP challenge labs plus a 1-month PG subscription. About one year from scratch to both certs. — [scotsec.github.io](https://scotsec.github.io/posts/Progress/)

**(b) IT / sysadmin / developer background: individual reports**
- **Web developer turned infosec specialist, 14 years in IT (OSCP+, 2025–26).** Spent 7 months in total across 3 attempts:
  - Oct 2025, after 4 months of prep: 30 points (standalones 30, AD 0).
  - Dec 2025, after 1.5 more months: 30 points (standalones 10, AD 20).
  - Feb 2026, after 8 more weeks: 80 points (standalones 40, AD 40). Passed.
  - Source: [onyuyu.loke, Medium 2026](https://medium.com/@onyuyu.loke/passing-oscp-at-3rd-attempts-journey-and-tips-sharing-2026-afe6d669b221)
- **Non-security IT team member with a Master's in Cybersecurity (2021).** Started PWK in Feb 2022. Watched or followed along with about 30 HTB boxes before the labs. Passed on the first attempt on 27 Jun 2022 (pre-OSCP+), about 4.5 months on the course. — [gorigorisensei, Medium](https://gorigorisenseiblog.medium.com/passed-the-oscp-without-any-security-work-experience-first-attempt-d4fc8901c82c)
- **Developer working full time.** Studied theory on weekdays after work and did labs on weekends, plus HTB/PG "whenever they had energy left". Had 80 points by 11:30 AM on exam day. — [im-rootkid, Medium](https://im-rootkid.medium.com/how-i-cracked-the-oscp-while-working-full-time-b17ad345a0ae)
- **Omar Tamer.** Prepared for 5 months, failed the first attempt, then passed with 80/100. Worked the TJ Null list on HTB with AD boxes first, then Easy→Medium→Hard. Spent "three straight months locked in, solving machines daily" on PG Practice/Play. Background not stated in the extract. — [OmarTamer0, Medium](https://medium.com/@OmarTamer0/from-doubt-to-oscp-my-5-month-journey-first-failure-and-final-win-c20304eef6dc)

**(c) Security pro / CTF / CPTS holders: individual reports**
- **Tiago Manunes.** Finished the HTB Academy Penetration Tester path in "a little over 4 months" and passed CPTS (results 2 Apr). Enrolled in OSCP the day before, "skimmed through the OSCP course", did the three mock exams, and sat the OSCP on 1 May. That is **about 1 month of OSCP-specific prep** after CPTS. — [tiagomanunes.github.io](https://tiagomanunes.github.io/articles/oscp-via-cpts/)
- **CPTS/CTF candidate (Jorkle's guide, Nov 2025).** Had a "solid foundation in CTFs", had done the HTB CPTS path, and had worked TJ Null's list in 2023. Then did PG Practice machines "over the course of a month" before OSCP. *Attribution caveat:* the search engine combined results; it most likely refers to this guide. — [Jorkle's OSCP Guide (Nov 2025)](https://jorkle.com/posts/oscp-guide/)
- **0xkhaled, "How I passed OSCP+ in two months".** PEN-200 plus all challenge labs except Skylark plus 30 PG machines from the TJ Null list. Background not stated in the extract. — [Medium](https://medium.com/@0xkhaled/how-i-passed-oscp-in-two-months-14685a324e83)

**Older (pre-2024) fast reports, for contrast**
- **NetOSec.** Went from zero boxes to **87 machines in 3 months** (VulnHub, then about 20 TJ Null HTB boxes, then labs). — [netosec.com](https://netosec.com/my-journey-through-oscp/)
- **j14l3.** "3 months, 60+ compromised machines". — [Medium](https://j14l3.medium.com/my-oscp-journey-da97f0e211bf)

### Inferences
- The OSCP-specific phase seems fairly constant at about 200–500 focused hours. Background mostly changes how much prerequisite time (networking, Linux, Windows, scripting, web) comes before it. That is why beginners report 1–2 years in total but often only 6–9 months of "OSCP prep" proper.
- Under OSCP+ (since Nov 2024), AD is effectively mandatory. Strong IT people still fail when AD or privilege escalation are weak: the 14-year IT veteran scored 0 on AD in attempt 1. So an IT background shortens the fundamentals phase but does not remove the need for about 2–4 months of hands-on box work.
- People coming from CPTS or HTB Academy report the shortest OSCP-specific times, about 1 month. Their earlier 4+ months of CPTS study is effectively OSCP prep.

### Gaps
- No r/oscp poll or survey could be retrieved, because Reddit was blocked from both search and fetch. I found no survey that segments prep time by background. The bands above are synthesized from official guidance plus anecdotes and are not statistically grounded.
- Several aggregator sites say "community surveys show…" without naming or linking any survey. Treat their numbers as unverified.
- The extracts did not give hours or background for several 2025 posts (Omar Tamer, 0xkhaled, unsecurediaries.com's "first attempt OSCP+" post, Shikha Mehta's "3-month journey").

## 2. Total study hours, hours per week, and machines solved before passing

### Takeaway
- **Official and semi-official hour figures:** OffSec says ">200–300+ lab hours" plus 40+ hours of exercises. Its plans assume about 10 hrs/week over 24 weeks or 16–24 hrs/week over 12 weeks. Aggregators converge on 10–20 hrs/week for 3–6 months, about 300–500 hours.
- **Hours in documented passes:** roughly 500–750 total, e.g. 651 h first-attempt (Koh) and 740 h over 3 attempts (zentester).
- **Machines before passing:** usually 40–90 (PWK labs + PG + HTB). Heavy grinders reach 130+. OffSec's own (2020) data tied >50 lab machines to higher pass rates.

### Cited Findings
**Hours**
- OffSec: ">200 – 300+ hours in the lab environment" depending on background; course exercises 40+ hours. — [OffSec Onboarding](https://help.offsec.com/hc/en-us/articles/4406841351316-PEN-200-Onboarding-A-Learner-Introduction-Guide-to-the-OSCP)
- OffSec's 12-week plan runs about 16–24 hrs/week, which is about 190–290 hours. Another extract gives 20–24 hrs/week. — [OffSec 12-Week Plan](https://help.offsec.com/hc/en-us/articles/15541765522196-OffSec-PEN-200-Learning-Plan-12-Week); [Scribd copy of plan](https://www.scribd.com/document/684076403/Offsec-PEN200-12WeeksPlan)
- OffSec's 24-week plan runs about 10 hrs/week, which is about 240 hours. — [OffSec 24-Week Plan](https://help.offsec.com/hc/en-us/articles/15545672357780-OffSec-PEN-200-Learning-Plan-24-Week)
- Aggregator claim: "Less than 10 hours weekly makes progress painfully slow; you'll forget material between sessions." — [HackerDNA](https://hackerdna.com/blog/oscp-preparation-guide)
- Aggregator claim: 15 h/week × 6 months ≈ 360 hours. — [CertDemand](https://certdemand.com/guides/oscp-complete-guide)
- **thezentester (pre-OSCP+):** failed the first attempt after **166 days / 503+ hours**. Passed after **260 days / 740 hours / 3 attempts**. — [thezentester: Third Time's the Charm](https://www.thezentester.com/third-times-the-charm/); [thezentester: first attempt](https://www.thezentester.com/i-took-the-oscp-failed-and-it-was-freakin-awesome/)
- **Jael Koh:** 651 hours on OSCP at about 7.5 h/day (full-time gap-year study). — [jaelkoh.com](https://infosec.jaelkoh.com/2024/my-first-year-in-infosec-zero-to-osce3)
- One candidate (attribution uncertain: NetOSec or Shikha Mehta's 3-month post) reports about 10 hours a day during the lab period, with about 48 HTB TJ Null boxes done beforehand. — [NetOSec](https://netosec.com/my-journey-through-oscp/); [Shikha Mehta, Medium](https://medium.com/@shikha1149mehta/my-3-month-journey-to-passing-the-oscp-on-the-first-try-bd7c78e8b093)

**Machines**
- **OffSec "A Path to Success in the PWK Labs" (Oct 2020, old 70+ machine lab).** Reported "a strong correlation between the number of machines compromised in the PWK labs and the OSCP pass rate", with a "higher exam pass rate with >50 lab machines". It also said the machine count alone is "not a good estimation of success", and that following walkthroughs is "not a substitute for actual learning". — [OffSec blog](https://www.offsec.com/blog/pwk-labs-success/); [OffSec tweet](https://x.com/offsectraining/status/1316773813649117185?lang=en)
- A candidate reading that OffSec infographic: after rooting "nearly 40 PWK lab machines" he "still only had somewhere around a 54% chance of passing". This is a second-hand reading of the chart, which was not retrievable. — [Brandon Elliott, "I Tried Harder"](https://brandon-t-elliott.github.io/i-tried-harder-my-oscp-experience)
- **Kyser Clark:** first-attempt pass after **40 machines**. Watched 100% of the videos and did 100% of the topic exercises. — [kyserclark.com](https://www.kyserclark.com/post/how-i-passed-the-oscp-on-my-first-try)
- **thezentester:** 49 PWK lab machines plus 26.5 PG Practice machines (about 75), passed on the 3rd attempt. — [thezentester](https://www.thezentester.com/third-times-the-charm/)
- **0xkhaled (OSCP+):** 30 PG machines from TJ Null's list plus all PEN-200 challenge labs except Skylark. — [Medium](https://medium.com/@0xkhaled/how-i-passed-oscp-in-two-months-14685a324e83)
- **Jael Koh:** 136 machines. **NetOSec:** 87 machines. **j14l3:** 60+ machines. — [jaelkoh.com](https://infosec.jaelkoh.com/2024/my-first-year-in-infosec-zero-to-osce3); [netosec.com](https://netosec.com/my-journey-through-oscp/); [j14l3](https://j14l3.medium.com/my-oscp-journey-da97f0e211bf)
- **Counter-example: Srikanth Grandhi (2019, old format).** Did 32 machines in 40 days on a 60-day plan. Failed repeatedly (55, 67.5, 67.5 points…) and gave up after five attempts. — [Medium](https://medium.com/@srikanth-grandhi/five-failed-attempts-at-oscp-my-journey-and-why-i-gave-up-a1233c8634be)
- Aggregator advice: "aim to compromise at least 40 to 50 lab machines before attempting the exam". — [HackerDNA](https://hackerdna.com/blog/oscp-preparation-guide)

**Practice lists in 2024–26 use**
- **LainKusanagi's "OSCP-like" list** (HTB, PG, TryHackMe, VulnLab) has become the common post-2024 list alongside TJ Null's list. Candidates report working through its whole PG Practice section, and there are GitHub walkthrough repos built around it. — [Scribd copy of list](https://www.scribd.com/document/938099738/Lainkusanagi-OSCP-Like); [Epiphysis89 GitHub](https://github.com/Epiphysis89/Proving-Grounds-OSCP-); [chengyunpu.com 2025](https://chengyunpu.com/wordpress/2025/04/15/lainkusanagi-oscp-like-proving-grounds-practice/)
- TJ Null (OffSec Community Manager) maintains the classic HTB/VulnHub/PG list of OSCP-like boxes. — [GitHub search result summary](https://github.com/security-prince/PWK-OSCP-Preparation-Roadmap)

### Inferences
- A defensible planning target for a working professional is about 300–500 focused hours at 10–20 hrs/week. That covers PEN-200 plus about 50–80 machines (PEN-200 challenge labs including OSCP A/B/C, plus about 30–50 PG/HTB boxes from the Lain/TJ Null lists).
- Machine count is a proxy, not a goal. OffSec itself warned that how you solve them matters more. The failures above happened at both about 32 machines (Grandhi) and about 75 machines (zentester's first attempts).

### Gaps
- The exact percentages on OffSec's 2020 infographic (pass rate per 10/20/30/40/50+ machines) could not be retrieved. The only number available is a candidate's second-hand reading: about 40 machines ≈ 54%.
- No post-2023 OffSec data links the current PEN-200 challenge labs to pass rates.
- No r/oscp aggregate data on hours or machines was retrievable.

## 3. First-attempt pass rates and number of attempts

### Takeaway
**OffSec does not publish pass rates.** Every circulating figure is an unsourced "community estimate" from aggregator sites, and those figures contradict each other (15–25%, 15–40%, 40–50%, 60–70% when well prepared). The only first-party data point is OffSec's 2020 statement correlating lab-machine counts with pass rates. Anecdotally, 2–3 attempts are common among published OSCP+ success stories.

### Cited Findings
- "OffSec does not release the number of people who hold their certifications or the success rate of completing them." — [Wikipedia: OSCP](https://en.wikipedia.org/wiki/Offensive_Security_Certified_Professional)
- Aggregator figures, all unsourced and contradicting each other:
  - "Community surveys suggest first-attempt pass rates around 40–50%", and "candidates who complete 40+ practice machines … pass at higher rates". — [HackerDNA](https://hackerdna.com/blog/oscp-preparation-guide)
  - "between 15% and 40%, depending on the year and format version"; "15–25%". — [search extract across Unihackers / Programs.com / PracticeTestGeeks](https://unihackers.com/certifications/oscp)
  - "15–20% … without adequate preparation, and 60–70% for candidates who complete the full PEN-200 course and practice systematically". — [search extract, CertEmpire](https://certempire.com/oscp-certification-cost/)
- OffSec (2020): strong correlation between lab machines compromised and pass rate, with a higher pass rate at >50 machines. — [OffSec blog](https://www.offsec.com/blog/pwk-labs-success/)
- When bonus points existed (pre-Nov 2024), OffSec staff said their purpose was to push students through exercises and labs. If you did the work for bonus points, "you wouldn't need the bonus points in the exam". — [kirkiancomputing.co.uk (quoting OffSec staff)](https://kirkiancomputing.co.uk/2023/03/20/oscp/)

**Format change (relevant to pass-rate comparisons)**
- Bonus points were removed on **1 Nov 2024**. AD became an "assumed compromise" scenario (you start with a domain user) with **partial AD points**. Passing now earns OSCP (never expires) plus OSCP+ (valid 3 years). — [OffSec: OSCP Exam Changes](https://help.offsec.com/hc/en-us/articles/29865898402836-OSCP-Exam-Changes); [StationX](https://www.stationx.net/oscp-exam-guide/)
- Current exam: 23h45m with 3 standalones at 20 points each (10 user + 10 root) plus one AD set worth 40 points (10 + 10 + 20). You need 70/100. Standalones max out at 60, so AD points are required. — [OffSec OSCP+ Exam Guide](https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide); [OffSec AD prep article](https://help.offsec.com/hc/en-us/articles/4547917816468-OffSec-OSCP-Exam-with-AD-Preparation-Newly-Updated)

**Attempts in individual reports**
- OSCP+ era: Abdirassilov passed on attempt 3 (Jan 2025). onyuyu.loke passed on attempt 3 (Feb 2026; scores 30 → 30 → 80). Omar Tamer passed on attempt 2. 0xkhaled passed on attempt 1. — [Abdirassilov](https://medium.com/@ramazan.abdirassilov/my-journey-to-offsec-certified-professional-oscp-from-zero-to-hero-abe8ff8455b0); [onyuyu.loke](https://medium.com/@onyuyu.loke/passing-oscp-at-3rd-attempts-journey-and-tips-sharing-2026-afe6d669b221); [OmarTamer0](https://medium.com/@OmarTamer0/from-doubt-to-oscp-my-5-month-journey-first-failure-and-final-win-c20304eef6dc); [0xkhaled](https://medium.com/@0xkhaled/how-i-passed-oscp-in-two-months-14685a324e83)
- Pre-OSCP+: thezentester passed on attempt 3. Srikanth Grandhi failed 5 times and quit. Others failed twice, then passed. — [thezentester](https://www.thezentester.com/third-times-the-charm/); [Grandhi](https://medium.com/@srikanth-grandhi/five-failed-attempts-at-oscp-my-journey-and-why-i-gave-up-a1233c8634be); [anyrud3](https://medium.com/@anyrud3/my-oscp-journey-and-mistakes-2-failed-oscp-attempts-and-finally-passed-in-3rd-6fc870a7209a); [ybpranawa](https://medium.com/@ybpranawa/my-oscp-journey-through-try-harder-concept-failed-failed-then-passed-cb659649f519)

**Retake cooling-off periods** (from a search extract summarizing OffSec help-center policy)

| Plan | After 1st fail | After 2nd fail | After 3rd fail |
|---|---|---|---|
| Course package | 6 weeks | 8 weeks | 12 weeks |
| Learn One | 4 weeks | 8 weeks | 12 weeks |
| Learn Unlimited | 2 weeks | 4 weeks | — |
| Standalone exam | 4 weeks | 8 weeks | 12 weeks (and beyond) |

- A retake is valid for 120 days. — [OffSec: Managing Certification Exams](https://help.offsec.com/hc/en-us/articles/11628867342996-Managing-OffSec-Certification-Exams); [OffSec: Standalone Exam FAQ](https://help.offsec.com/hc/en-us/articles/31628160634004-Standalone-OffSec-Certification-Exam-FAQ). A secondary source instead claims a "mandatory 30-day waiting period". Abdirassilov reported about 1.5 months. Treat OffSec's tiered table as authoritative.

### Inferences
- Report writers should not state any single pass-rate figure as fact. The honest framing is: "OffSec publishes no pass rate; community and aggregator estimates range from about 15% to about 50% for first attempts, and none of them cite a verifiable survey."
- Failing at least once is clearly common among people who write success posts. Each fail adds 4–12 weeks of cooling-off plus re-prep. Realistic timelines should budget for a possible second attempt, which is part of why Learn One (2 attempts) is often recommended.

### Gaps
- No verifiable r/oscp poll or community survey (respondent counts, % first-attempt passes) could be retrieved, since Reddit was blocked.
- No OffSec pass-rate data exists for the OSCP+ format (post-Nov 2024).

## 4. Concrete study plans (3-, 6-, 12-month roadmaps) and their phase structure

### Takeaway
Published plans almost all follow the same phases:
1. Fundamentals: Linux, Windows, networking, scripting, web. Often via TryHackMe, HTB Academy, or a PNPT/TCM course. This takes weeks for IT people and months for beginners.
2. PEN-200 modules and exercises.
3. PEN-200 challenge labs (Medtech, Relia, etc.).
4. External OSCP-like boxes: PG Practice and HTB from the LainKusanagi or TJ Null lists.
5. Dedicated AD practice.
6. 1–3 timed mock exams (OSCP A/B/C), weak-area review, and booking the exam.

Official OffSec plans exist in 12-week (16–24 h/wk) and 24-week (~10 h/wk) variants.

### Cited Findings
**Official OffSec plans**
- Both the 12-week and 24-week plans are "a week-by-week journey" covering:
  - recommended study approach
  - estimated learning hours
  - course topics
  - topic labs
  - capstone labs
  - challenge labs
  - supplemental materials
  - Source: [OffSec 12-Week](https://help.offsec.com/hc/en-us/articles/15541765522196-OffSec-PEN-200-Learning-Plan-12-Week); [OffSec 24-Week](https://help.offsec.com/hc/en-us/articles/15545672357780-OffSec-PEN-200-Learning-Plan-24-Week)
- The 12-week plan covers information gathering, vulnerability scanning, web attacks, password attacks, privilege escalation and Metasploit. It then moves to the challenge labs, three of which "closely replicate the OSCP+ exam environment". — [Scribd copy of 12-week plan](https://www.scribd.com/document/684076403/Offsec-PEN200-12WeeksPlan); [OffSec 12-Week](https://help.offsec.com/hc/en-us/articles/15541765522196-OffSec-PEN-200-Learning-Plan-12-Week)
- The 24-week plan allocates about 10 h/week from week 1 onward. — [OffSec 24-Week](https://help.offsec.com/hc/en-us/articles/15545672357780-OffSec-PEN-200-Learning-Plan-24-Week)

**Aggregator plans (2026; phase structure useful, numbers unverified)**
- **6-month plan for working professionals:**

  | Months | Focus |
  |---|---|
  | 1–2 | Course modules, done methodically |
  | 3–4 | 30–40 machines from the OffSec labs plus TJ Null's list |
  | 5 | Weak areas |
  | 6 | Final review and exam attempt |

  — [HackerDNA](https://hackerdna.com/blog/oscp-preparation-guide)
- **3 / 6 / 9–12-month tiers:** 30–40, 15–20 and 10–15 hrs/week respectively. The 9–12-month tier is "best for career changers without IT background … or those building prerequisites simultaneously". — [HackerDNA](https://hackerdna.com/blog/oscp-preparation-guide)
- Other 2026 commercial plans also exist (12-week, 30-day, 14-day) but are SEO content. The 14- and 30-day plans are only realistic for already-experienced pentesters. — [CertCrush 12-week](https://www.certcrush.app/blog/how-to-pass-oscp-2026-12-week-study-plan); [Certsqill 30-day](https://www.certsqill.com/blog/oscp-30-day-plan/); [Certsqill 14-day](https://www.certsqill.com/blog/oscp-14-day-plan/)

**Practitioner-published plans and structures**
- **"OSCP via CPTS" route.** Do the HTB Academy Penetration Tester path (about 4 months), pass CPTS, then about 1 month on PEN-200 skim plus three mock exams, then the exam. The author argues that "PEN-200 alone does not prepare you … if you are relatively new", and that the CPTS path is "more complete in both breadth and depth". — [Tiago Manunes](https://tiagomanunes.github.io/articles/oscp-via-cpts/)
- **Omar Tamer's ordering.** TJ Null HTB list with AD machines first, then Easy → Medium → Hard, then Windows and Linux. Then PG Practice/Play daily for 3 months. — [OmarTamer0](https://medium.com/@OmarTamer0/from-doubt-to-oscp-my-5-month-journey-first-failure-and-final-win-c20304eef6dc)
- **NetOSec's 3-month ramp.** Two weeks of pre-reading (Weidman's *Penetration Testing* book). About 10 VulnHub VMs at 4–5 h each. About 20 HTB TJ Null boxes during month 1 alongside course material. Then PWK labs, reaching 87 boxes by the exam. — [NetOSec](https://netosec.com/my-journey-through-oscp/)
- **Weekly-blog style plans.** A "first week" through "seventh week (exam)" weekly diary (arvandy.com, mirrored on Scribd) and a weekly Substack log. — [arvandy first week (Scribd mirror)](https://www.scribd.com/document/748606582/arvandy-com-oscp-first-week); [arvandy seventh week/exam (Scribd mirror)](https://www.scribd.com/document/748606586/arvandy-com-oscp-seventh-week-exam); [louiskfinney Substack week 1](https://louiskfinney.substack.com/p/studying-for-the-oscp-week-1)
- **GitHub roadmap repos.** security-prince/PWK-OSCP-Preparation-Roadmap is the most-starred, with 395★, created 2018 and still updated in 2026. Others include shreyaschavhan's "pre-preparation plan" and many 2025–26 personal roadmaps. — [security-prince](https://github.com/security-prince/PWK-OSCP-Preparation-Roadmap); [shreyaschavhan](https://github.com/shreyaschavhan/oscp-pre-preparation-plan-and-notes); [GitHub topic oscp-prep](https://github.com/topics/oscp-prep)

### Inferences
**Synthesized 3 / 6 / 12-month templates.** These combine the official plans with practitioner reports. They are not sourced as-is from any single plan.
- **3 months (IT pro or CTF player, 20–30 h/wk):**

  | Weeks | Focus |
  |---|---|
  | 1–5 | PEN-200 modules and exercises, fast |
  | 6–8 | Challenge labs (Medtech, Relia, etc.) |
  | 9–11 | About 20–30 PG/HTB Lain/TJ Null boxes with an AD focus |
  | 12 | OSCP A/B/C timed, then exam |

- **6 months (working professional, 10–15 h/wk):**

  | Months | Focus |
  |---|---|
  | 1 | Fundamentals gap-fill |
  | 2–3 | PEN-200 modules |
  | 4 | Challenge labs |
  | 5 | PG/HTB lists plus AD |
  | 6 | Mocks, weak areas, exam |

- **12+ months (beginner):**

  | Months | Focus |
  |---|---|
  | 1–4 | Fundamentals (networking, Linux, Windows, Python/Bash, web), e.g. TryHackMe paths or CompTIA-level material |
  | 5–6 | Beginner pentest course (PNPT/TCM, eJPT or HTB Academy) plus easy boxes |
  | 7–10 | PEN-200 (official 24-week pace, about 10 h/wk) |
  | 11–12 | Lists, AD, mocks, exam |

- The OSCP+ change (no bonus points, mandatory AD) means AD has moved from an optional late-phase topic to a core phase in every plan. Several failures in the reports were AD-specific.

### Gaps
- The full week-by-week table of OffSec's 12- and 24-week plans (which module or lab in which week) could not be retrieved, since the help center and Scribd were not fetchable.
- A GitHub roadmap surfaced in search describes this sequence:
  - alternating PWK labs and PG "OSCP-like" boxes, with a "3–4 hours max per box before checking a hint" rule
  - Week 5: AD fundamentals; Weeks 6–7: AD enumeration and attacks
  - Week 11: two 24-hour mock exams

  The search engine did not identify which repository this came from, so it cannot be cited reliably.

## 5. Splitting 90-day vs Learn One time, when to book the exam, and mock exams (OSCP A/B/C)

### Takeaway
- **Lab option:** 90-day bundles suit people who already have fundamentals and can put in 20+ hrs/week. Learn One (365 days, 2 attempts) is the common recommendation for full-time workers and beginners.
- **Activation:** don't start the lab clock until you can study consistently.
- **Booking:** book weeks ahead; OffSec says ≥2 weeks, ≥6 weeks for weekend slots.
- **Mock exams:** treat OSCP A/B/C (Challenges 4/5/6) as timed 24-hour mock exams before booking.

### Cited Findings
**Pricing and access**
- The course-plus-cert bundle gives 90 days of PEN-200 and 1 exam attempt for about $1,749. Learn One gives 365 days and 2 exam attempts for about $2,749/yr (aggregator prices, 2026; verify on offsec.com). — [CertEmpire cost breakdown](https://certempire.com/oscp-certification-cost/); [CertiGuard](https://certiguard.io/certifications/offsec-oscp/)
- "Only subscribe to the 90-day access if you are confident in not needing lab extension or exam retake." "365-day access is encouraged for those working full time." — [Chenkai Ng, OSCP FAQ and Tips 2024](https://medium.com/@chenkai.ng/oscp-faq-and-tips-2024-f0c2722a44b5)
- "If you're a true beginner with almost no IT background, 90 days is usually too aggressive". The 90-day window "starts the moment you activate your course … do not activate until you are ready to study consistently." — [Kioptrix (SEO)](https://kioptrix.com/oscp-90-day-plan/); [CertiGuard](https://certiguard.io/certifications/offsec-oscp/)
- **Budget approach.** Several candidates do external practice first (HTB/TryHackMe/PG on a 1-month subscription) and only then start PEN-200, so the paid lab time goes on PEN-200-specific content. — [Jacob, "Preparing for the OSCP on a Budget"](https://jacobcyber.medium.com/preparing-for-the-oscp-on-a-budget-982f67a2b8e0); [Scotsec](https://scotsec.github.io/posts/Progress/); [Gorigori (30 HTB boxes before PWK)](https://gorigorisenseiblog.medium.com/passed-the-oscp-without-any-security-work-experience-first-attempt-d4fc8901c82c)

**Booking the exam**
- OffSec recommends scheduling the exam at least 2 weeks in advance. For Saturday or Sunday slots, book as early as 6 weeks ahead. — [OffSec: 9 OSCP Study Tips](https://www.offsec.com/blog/oscp-study-tips-to-help-you-succeed/); [OffSec: Managing Certification Exams](https://help.offsec.com/hc/en-us/articles/11628867342996-Managing-OffSec-Certification-Exams)
- Real-world timing examples:
  - Tiago Manunes booked OSCP about 1 month after enrolling, having finished CPTS first. — [tiagomanunes](https://tiagomanunes.github.io/articles/oscp-via-cpts/)
  - onyuyu.loke booked retakes about 1.5–2 months after each fail. — [onyuyu.loke](https://medium.com/@onyuyu.loke/passing-oscp-at-3rd-attempts-journey-and-tips-sharing-2026-afe6d669b221)

**Mock exams (OSCP A/B/C)**
- PEN-200 Challenges 4 (OSCP A), 5 (OSCP B) and 6 (OSCP C) each contain 6 machines, including an AD set. They "are intended to provide a mock-exam experience that closely reflects a similar level of difficulty to that of the actual OSCP+ exam." — [OffSec: OSCP+ Exam with AD Preparation](https://help.offsec.com/hc/en-us/articles/4547917816468-OffSec-OSCP-Exam-with-AD-Preparation-Newly-Updated)
- Community advice: "For OSCP-A and OSCP-B … treat these as actual 24-hour exams if possible, and limit yourself to 24 hours." *Attribution caveat:* the search extract does not name its source; it is most likely Jorkle's Nov 2025 guide. — [Jorkle's OSCP Guide](https://jorkle.com/posts/oscp-guide/)
- Tiago Manunes did "the three mock exams" as the main OSCP-specific prep after CPTS. 0xkhaled did all challenge labs except Skylark. — [tiagomanunes](https://tiagomanunes.github.io/articles/oscp-via-cpts/); [0xkhaled](https://medium.com/@0xkhaled/how-i-passed-oscp-in-two-months-14685a324e83)
- PEN-200 has 9 challenge labs that mimic real engagements, and 3 of them replicate the exam. — [Scribd 12-week plan](https://www.scribd.com/document/684076403/Offsec-PEN200-12WeeksPlan)

**Reporting**
- Budget time for the report: Kyser Clark spent 17 hours writing a 57-page report, plus 1.5 hours re-creating steps and screenshots. The report window is a separate 24 hours after the exam. — [kyserclark.com](https://www.kyserclark.com/post/how-i-passed-the-oscp-on-my-first-try); [Scotsec](https://scotsec.github.io/posts/Progress/)

### Inferences
- **A practical split for a 90-day lab:**
  - Days 1–45: modules and exercises.
  - Days 46–75: Medtech, Relia and the other challenge labs.
  - Days 76–90: OSCP A/B/C as timed mocks, ideally with the exam booked for shortly after the lab ends.
  - Use PG/HTB both before activation and after expiry.
- **With Learn One:** follow OffSec's 24-week (about 10 h/wk) pacing. Keep OSCP A/B/C untouched until the end so they work as unseen mocks. Schedule attempt 1 at about month 6–8, leaving room inside the year for the 4-week cooling-off and attempt 2.
- **Readiness heuristic implied by the reports:** score ≥70 on at least one or two unseen A/B/C mocks within 24 h before booking.

### Gaps
- I could not confirm from an OffSec primary source whether Learn One currently bundles Proving Grounds Practice, or the current 2026 list prices.
- I found no data on how mock-exam (A/B/C) scores predict real exam results.

## 6. Burnout avoidance and consistency advice

### Takeaway
The consistent advice: regular, moderate sessions (about 1.5–3 h on weekdays, longer on weekends) beat sporadic marathons. Keep a weekly rest day and protect sleep. Use time-boxing and Pomodoro-style breaks. Cap the time spent stuck on a single box before taking a hint. Treat failures as part of the process; several candidates passed on attempts 2–3 after reframing a fail.

### Cited Findings
**OffSec's own tips**
- Set clear per-session goals (e.g., "practicing privilege escalation on Linux until you can complete it in under 20 minutes"), and keep a log of what you practiced and where you struggled. — [OffSec: 9 OSCP Study Tips](https://www.offsec.com/blog/oscp-study-tips-to-help-you-succeed/)
- Use the Pomodoro technique "to help you maintain sharp focus while avoiding mental burnout". Structured time management helps "prevent burnout". — [OffSec: 9 OSCP Study Tips](https://www.offsec.com/blog/oscp-study-tips-to-help-you-succeed/)

**Sample schedules and routines (SEO/commercial guidance)**
- A sample weekly rhythm:

  | Day | Activity |
  |---|---|
  | Mon–Thu | 2–3 h content and targeted labs |
  | Fri | 2 h note cleanup |
  | Sat | 4–6 h deep lab |
  | Sun | 1–2 h review, or rest |

  Also: protect about 7 h of sleep, and schedule "one guilt-free rest day weekly". — [Kioptrix 90-day plan (SEO)](https://kioptrix.com/oscp-90-day-plan/); [Kioptrix 2-hour routine (SEO)](https://kioptrix.com/2-hour-a-day-oscp-routine/)
- "Ninety minutes a day, six days a week, beats a ten-hour Sunday every time, because enumeration instinct is built by repetition rather than by volume." — [Kioptrix 2-hour-a-day routine (SEO)](https://kioptrix.com/2-hour-a-day-oscp-routine/)

**Practitioner accounts**
- **Working-full-time pattern** in practitioner posts: theory on weekday evenings, labs on weekends, extra boxes "whenever they had energy left". — [im-rootkid](https://im-rootkid.medium.com/how-i-cracked-the-oscp-while-working-full-time-b17ad345a0ae); [Galolbardes, "Passing the OSCP while working full time"](https://medium.com/@galolbardes/passing-the-oscp-while-working-full-time-29cb22d622e0)
- **An OSCP graduate's reflection.** "My journey wasn't 6 months of daily discipline. It was 6 months of real, raw effort with breaks, resets, and bounce-backs … Even 2 hours a day adds up. Take breaks. Come back. Keep moving." Another candidate used Pomodoro-style 60 min on / 10 min off and found it "sustainable". *Attribution caveat:* the search extract merged several sources (Galolbardes, Paygew Substack, Axximum). The exact author of each quote could not be verified. — [Paygew Substack](https://paygew.substack.com/p/what-the-oscp-really-tests-and-what); [Galolbardes](https://medium.com/@galolbardes/passing-the-oscp-while-working-full-time-29cb22d622e0)
- **Motivation risk on long paths.** The HTB Academy/CPTS path "takes considerably longer", which can hurt motivation if you can only do 1–2 hours regularly. — [tiagomanunes](https://tiagomanunes.github.io/articles/oscp-via-cpts/)
- **Mindset after failure:**
  - thezentester's first-attempt write-up is titled "I took my first attempt at the OSCP, failed, and it was freakin awesome", framing a fail as diagnostic.
  - Abdirassilov changed his practice platform (PG → HTB) after two stalled attempts rather than repeating the same approach.
  - Grandhi's 5-fail story ended with him distancing himself from cybersecurity, a cautionary example of burnout.
  - Sources: [thezentester](https://www.thezentester.com/i-took-the-oscp-failed-and-it-was-freakin-awesome/); [Abdirassilov](https://medium.com/@ramazan.abdirassilov/my-journey-to-offsec-certified-professional-oscp-from-zero-to-hero-abe8ff8455b0); [Grandhi](https://medium.com/@srikanth-grandhi/five-failed-attempts-at-oscp-my-journey-and-why-i-gave-up-a1233c8634be)
- Cybrary published a dedicated piece on preparing for OffSec exams "without burning out". Its details could not be retrieved. — [Cybrary](https://www.cybrary.it/blog/how-to-prepare-for-the-offensive-security-exam-without-burning-out)
- **Exam-day sleep:** "Sleep is non-negotiable … sleep deprivation impairs cognitive functioning". Exam-day advice consistently includes planned breaks and sleep within the 23h45m window. — [Kioptrix 24-hour exam (SEO)](https://kioptrix.com/24-hour-oscp-exam/)

### Inferences
- **Sustainable cadence:** for a working professional, about 10–15 h/week (2 h on 4–5 weekdays plus one 4–6 h weekend block, with one full rest day) matches OffSec's own 24-week pacing. Study-intensity data from the reports is consistent with that range.
- **Full-time outliers:** people who studied 7–10 h/day (Koh, NetOSec) were full-time students or on a gap year. That intensity is not a realistic template for people with jobs.
- **Time-boxing:** a time-box per box (the 3–4 h before-hint rule seen in community roadmaps) is a common anti-frustration technique. However, its specific source in this research could not be pinned down.

### Gaps
- I found no quantitative data (survey or study) on burnout rates or on which schedules correlate with passing.
- r/oscp threads on burnout, likely rich in anecdotes, were inaccessible.
