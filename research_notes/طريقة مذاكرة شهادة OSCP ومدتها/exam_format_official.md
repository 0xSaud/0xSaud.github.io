# OSCP / OSCP+ Exam and PEN-200 Course: Official Structure as of 2026

> Source-access note for the report writer: the research environment's network proxy blocked direct page fetches of help.offsec.com, www.offsec.com, stationx.net, certiguard.io, helpnetsecurity.com, specterops.io, securityboulevard.com and johnjhacking.com. Facts attributed below to official OffSec URLs come from **search-engine-indexed text of those official pages** (returned by search tools restricted to offsec.com / help.offsec.com), not from a full read of the page. They are consistent with each other across several queries, but exact current wording could not be verified line by line. The only full-page fetch that succeeded was a GitHub repo (PEN-200 module list). Research date: 2026-10-01.

## 1. Current exam format (duration, machines, points, passing score, bonus points, proctoring)

### Takeaway
Since 1 Nov 2024 the exam is 23h45m of hands-on hacking plus 24h to submit the report. It has 100 points: 3 standalone machines (20 pts each, split 10 for initial access and 10 for privilege escalation) and one 3-machine Active Directory set worth 40 pts that is scored in parts (10/10/20). You need 70 to pass. **Bonus points no longer exist.** Everything is proctored: webcam and screen sharing stay on the whole time.

### Cited Findings
- Exam duration: "You have 23 hours and 45 minutes to complete the exam." — [OSCP+ Exam Guide (help.offsec.com)](https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide)
- Report window: "Once the exam is finished, you will have another 24 hours to upload your documentation." — [OSCP+ Exam Guide](https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide)
- Structure: 3 standalone machines worth 60 points in total, 20 per machine (10 for initial access via `local.txt`, 10 for privilege escalation via `proof.txt`), plus 1 Active Directory set of 3 machines worth 40 points — [OSCP+ Exam Guide](https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide)
- AD point split: 10 pts for machine #1, 10 pts for machine #2, 20 pts for machine #3 — [OSCP+ Exam Guide](https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide); [OSCP Exam Changes (help.offsec.com)](https://help.offsec.com/hc/en-us/articles/29865898402836-OSCP-Exam-Changes)
- Pass mark: "minimum score of 70 points to pass … maximum of 100 points" — [OSCP+ Exam Guide](https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide)
- Official passing scenarios: (a) 40 AD + 3 `local.txt` = 70; (b) 40 AD + 2 `local.txt` + 1 `proof.txt` = 70; (c) 20 AD + 3 `local.txt` + 2 `proof.txt` = 70; (d) 10 AD + 3 fully completed standalones = 70 — [OSCP+ Exam Guide](https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide)
- Partial AD points (new since Nov 2024): OffSec will "allow learners to earn partial points within the AD domain removing the requirement to fully clear the AD exam set to receive any AD exam related points" — [OSCP Exam Changes](https://help.offsec.com/hc/en-us/articles/29865898402836-OSCP-Exam-Changes)
- Bonus points: the 1 Nov 2024 update included "Removal of 10 bonus points" so the exam matches the other OffSec certification exams — [OSCP Exam Changes](https://help.offsec.com/hc/en-us/articles/29865898402836-OSCP-Exam-Changes); also stated on the [PEN-200 course page](https://www.offsec.com/courses/pen-200/) (search-indexed text: "removal of bonus points … consistent with all other OffSec certification exams")
- Effective date: "Starting November 1, 2024, OffSec's current OSCP exam was replaced with an updated version" — [OSCP Exam Changes](https://help.offsec.com/hc/en-us/articles/29865898402836-OSCP-Exam-Changes)
- Proctoring, webcam: you need an external or built-in webcam that can show your English-language ID clearly, and phones or tablets are not allowed as webcams — [Proctored Exam Requirements FAQ](https://help.offsec.com/hc/en-us/articles/15295546432148-Proctored-Exam-Requirements-FAQ)
- Proctoring, continuous monitoring: the webcam must show your face, at least half of your body and your surroundings for the whole exam, and it stays on during breaks — [Proctored Exam Requirements FAQ](https://help.offsec.com/hc/en-us/articles/15295546432148-Proctored-Exam-Requirements-FAQ)
- Proctoring, screens: you must share all screens and show all running programs during verification, and must not stop sharing during the exam — [Proctored Exam Requirements FAQ](https://help.offsec.com/hc/en-us/articles/15295546432148-Proctored-Exam-Requirements-FAQ); see also [Proctoring Tool Manual](https://help.offsec.com/hc/en-us/articles/360050299352-Proctoring-Tool-Manual)
- **HISTORICAL (Jan 2022 to Oct 2024):** the 11 Jan 2022 revision added a 40-pt AD set of 2 clients + 1 DC. Points were given only for the full domain exploit chain ("no partial points"), and buffer overflow became one possible low-privilege vector rather than a guaranteed 25-pt box — [OSCP Exam Change (offsec.com blog)](https://www.offsec.com/blog/oscp-exam-structure/)
- **HISTORICAL (pre-Nov 2024):** 10 bonus points were earned through course exercises and lab work. Removed 1 Nov 2024 — [OSCP Exam Changes](https://help.offsec.com/hc/en-us/articles/29865898402836-OSCP-Exam-Changes); [webasha summary](https://www.webasha.com/blog/oscp-exam-update-what-is-oscp-certification)

### Inferences
- Without bonus points, a candidate who solves no AD machines needs all 3 standalones fully (60) plus at least 10 AD points. The AD set is in practice close to mandatory.
- Because AD is now scored in parts, compromising just the first AD machine (10 pts) can decide a pass (scenario d). Under the pre-Nov-2024 rules it was worth 0.

### Gaps
- Exact current wording on breaks, the number of proctor check-ins, and the ID/room scan steps could not be read in full because help.offsec.com was blocked.
- No evidence of any change to the exam format (points, duration) in 2025 or 2026 was found. The Nov 2024 format appears to be current.

## 2. What OSCP+ is (vs. OSCP), expiry, CPE/renewal, assumed-breach AD

### Takeaway
OSCP+ is the same exam (post-Nov-2024 version). Passing it awards both the lifetime "OSCP" and the time-limited "OSCP+", which expires 3 years after issue. To renew you need 120 CPE credits (or a retake, or a higher OffSec cert) **plus** annual coverage through the paid Annual Membership Program (AMP) or Annual Maintenance Fee (AMF). The AD set is an "assumed breach": you are given a standard domain user's username and password.

### Cited Findings
- "The OSCP+ designation differs from the existing OSCP certification in that it expires three (3) years from issuance" — [PEN-200 course page](https://www.offsec.com/courses/pen-200/) / [Everything you need to know about the OSCP+ (offsec.com blog)](https://www.offsec.com/blog/everything-you-need-to-know-about-the-oscp-plus/)
- The PEN-200 page still describes the course as preparing you for the OSCP+ exam "providing you with a lifetime penetration testing certification (OSCP)", meaning the lifetime OSCP is still awarded alongside the expiring OSCP+ — [PEN-200 course page](https://www.offsec.com/courses/pen-200/) (search-indexed text)
- Assumed breach: learners "work through an 'assumed compromise' where learners start with a standard user account on the AD domain with the goal of full domain compromise"; "For the Active Directory exam set, learners will be provided with a username and password, simulating a breach scenario" — [OSCP Exam Changes](https://help.offsec.com/hc/en-us/articles/29865898402836-OSCP-Exam-Changes); [OffSec OSCP+ Exam with AD Preparation](https://help.offsec.com/hc/en-us/articles/4547917816468-OffSec-OSCP-Exam-with-AD-Preparation)
- Validity: OffSec certifications that expire are valid for three years from issue, and OSCP+ is one of them — [OffSec CPE Program and Annual Maintenance Handbook](https://help.offsec.com/hc/en-us/articles/35366391096596-OffSec-CPE-Program-and-Annual-Maintenance-Handbook)
- Renewal requirement: "complete 120 CPE credits over a three-year certification cycle and maintain annual certification coverage through either the OffSec Annual Membership Program (AMP) or the Annual Maintenance Fee (AMF)" (about 40 CPE per year) — [CPE Program and Annual Maintenance Handbook](https://help.offsec.com/hc/en-us/articles/35366391096596-OffSec-CPE-Program-and-Annual-Maintenance-Handbook); [PDF version (learn.offsec.com)](https://learn.offsec.com/hubfs/OffSec%20CPE%20Program%20and%20Annual%20Membership%20Handbook.pdf)
- Three renewal routes, each also requiring AMP/AMF coverage: (1) 120 CPEs; (2) retake the certification exam; (3) pass a qualifying higher-level OffSec certification exam — [CPE Handbook](https://help.offsec.com/hc/en-us/articles/35366391096596-OffSec-CPE-Program-and-Annual-Maintenance-Handbook); [Renewing OffSec Certification by Taking a Qualifying Certification Exam](https://help.offsec.com/hc/en-us/articles/36010548001812-Renewing-OffSec-Certification-by-Taking-a-Qualifying-Certification-Exam); [AMP FAQ](https://help.offsec.com/hc/en-us/articles/36008739894164-OffSec-Annual-Membership-FAQ); [CPE Program Overview](https://help.offsec.com/hc/en-us/articles/31553032386964-OffSec-Continuing-Professional-Education-CPE-Program-Overview)
- Grace period: if requirements aren't met by expiry, a 90-day grace period starts in which you can restore the cert by buying missing AMP/AMF coverage and completing the CPEs — [CPE Handbook](https://help.offsec.com/hc/en-us/articles/35366391096596-OffSec-CPE-Program-and-Annual-Maintenance-Handbook)
- Earlier (2024) wording, possibly superseded by the 2025 CPE/AMP handbook: renew by passing a recertification exam within 6 months of expiry, earning another qualifying OffSec cert, or completing the CPE program — [webasha summary](https://www.webasha.com/blog/oscp-exam-update-what-is-oscp-certification)
- Existing (pre-Nov-2024) OSCP holders: their OSCP stays valid for life, and taking OSCP+ is optional. A promotional OSCP+ exam price of $199 applied to purchases from 1 Nov 2024 to 31 Mar 2025, rising to $799 afterwards — [webasha](https://www.webasha.com/blog/oscp-exam-update-what-is-oscp-certification); [cyberphinix](https://cyberphinix.de/en/blog/oscp-plus-overview/). One search summary gave the promo end as "March 31, 2026", which conflicts with its own "$799 after March 31, 2025". 31 Mar 2025 is the consistent date across sources.
- An "OSCP+ Standalone Exam" product exists "for anyone seeking the OSCP+ certification without needing access to the PEN-200 course" — [OSCP+ Standalone Exam (offsec.com)](https://www.offsec.com/products/oscp-plus/)
- OffSec publishes an "OSCP+ Body of Knowledge" article — [help.offsec.com](https://help.offsec.com/hc/en-us/articles/38543335188756-OSCP-Body-of-knowledge)

### Inferences
- The OSCP+ cost is no longer one-time: keeping it active requires a recurring AMP/AMF payment. Candidates whose employers or government contracts need an "active" cert should budget for this.
- Starting AD with valid credentials moves the AD portion's focus from getting an initial foothold to authenticated enumeration (BloodHound, Kerberoasting and similar), lateral movement and privilege escalation.

### Gaps
- Current AMP and AMF USD prices could not be confirmed. The official pages were blocked and no reliable snippet gave a figure.
- I could not confirm whether the "recertification within 6 months of expiry" rule still applies under the 2025 handbook or was replaced.

## 3. PEN-200 syllabus (modules, 2023 refresh, later updates) and labs

### Takeaway
The current PEN-200 (2023 refresh plus later additions) has about 27 modules, counting a copyright stub. It covers web, client-side, exploits, AV evasion, passwords, Windows and Linux privilege escalation, tunneling, Metasploit, three AD modules, **two AWS cloud modules (added after 2023)**, "Assembling the Pieces" and the challenge labs. Buffer overflow was removed in 2023. Official sources say there are 9 challenge labs; community sources from 2025 list ten or more (Secura, Medtech, Relia, Skylark, OSCP-A/B/C, Zeus, Poseidon, Feast, Laser). I found no evidence of "OSCP D/E" labs.

### Cited Findings
- Current module list (from a learner's notes repo that mirrors the course's module numbering): 1 Copyright; 2 General Course Information; 3 Introduction to Cybersecurity; 4 Effective Learning Strategies; 5 Report Writing for Penetration Testers; 6 Information Gathering; 7 Vulnerability Scanning; 8 Introduction to Web Application Attacks; 9 Common Web Application Attacks; 10 SQL Injection Attacks; 11 Client-Side Attacks; 12 Locating Public Exploits; 13 Fixing Exploits; 14 Antivirus Evasion; 15 Password Attacks; 16 Windows Privilege Escalation; 17 Linux Privilege Escalation; 18 Port Redirection and SSH Tunneling; 19 Tunneling Through Deep Packet Inspection; 20 The Metasploit Framework; 21 Active Directory Introduction and Enumeration; 22 Attacking Active Directory Authentication; 23 Lateral Movement in Active Directory; 24 Enumerating AWS Cloud Infrastructure; 25 Attacking AWS Cloud Infrastructure; 26 Assembling the Pieces; 27 Trying Harder: The Challenge Labs — [Appl3Tree/Notes PEN-200 (GitHub)](https://github.com/Appl3Tree/Notes/tree/master/courses/offsec/pen-200)
- The official course page describes PEN-200 as covering "XSS, SQL Injection, privilege escalation, Active Directory and AWS exploitation" — [PEN-200 course page](https://www.offsec.com/courses/pen-200/) (search-indexed text)
- One secondary source says the course has "28 distinct modules", which conflicts with the 27 in the GitHub mirror. The difference is probably counting or version drift — [cbtnuggets PEN-200 page](https://www.cbtnuggets.com/it-training/cyber-security/pen-200) (via search summary)
- **2023 refresh (historical milestone):** AD was split into three modules, and Client-Side Attacks, Assembling the Pieces and the Challenge Labs were added — [PEN-200 (PWK) 2023 Update (offsec.com blog)](https://www.offsec.com/blog/pen-200-2023/); [Help Net Security, 16 Mar 2023](https://www.helpnetsecurity.com/2023/03/16/pen-200-penetration-testing-with-kali-linux-2023/); [2023 syllabus PDF](https://www.offsec.com/documentation/penetration-testing-with-kali.pdf)
- **HISTORICAL:** "Since Buffer Overflows will no longer be a part of the course material, they will also be removed from the exam body of knowledge and no longer part of the exam" — OffSec statement quoted in [OSCP Exam Change (offsec.com blog)](https://www.offsec.com/blog/oscp-exam-structure/) and [johnjhacking "OSCP Reborn 2023"](https://johnjhacking.com/blog/oscp-reborn-2023/) (search-indexed text)
- January 2025 content update: "fresh PEN-200 & PEN-300 modules", including an updated Information Gathering module (1,080 minutes) — [January 2025 Content & Platform Update (offsec.com)](https://www.offsec.com/resources/product-updates/january-2025-content-platform-update/)
- August 2025 platform update: PEN-200 learners got "Kali In-Browser and Windows In-Browser", meaning lab access without installing VPN packs — [August 2025 Content & Platform Update (offsec.com)](https://www.offsec.com/resources/product-updates/august-2025-content-platform-update/)
- Official challenge lab count: "PEN-200 includes 9 challenge labs … Three of these challenge labs are specifically designed to closely replicate the OSCP+ exam environment" — [PEN-200 course page](https://www.offsec.com/courses/pen-200/) (search-indexed text)
- Classic labs: Secura (a 3-machine ramp-up), Medtech (about 10 machines, AD-focused IoT healthcare startup), Relia (about 15 machines, perimeter to Domain Admin), Skylark (aerospace company after an APT ransomware attack, widely called the hardest), and OSCP-A/B/C (retired exams that simulate the real one, recommended as full 24h mocks) — [mexicancyberweapon/oscp-easy (GitHub)](https://github.com/mexicancyberweapon/oscp-easy); [Simon Bruklich, My OSCP Journey](https://simonbruklich.com/blog/my-oscp-journey/) (via search summary)
- Newer labs reported by the community: a 2025 guide says there are ten challenge labs and names Zeus, Poseidon, Feast, Laser and Skylark. A learner's index numbers them Challenge 4 OSCP-A, 5 OSCP-B, 6 OSCP-C, 7 Zeus, 8 Poseidon and 10 Laser — [Jorkle's OSCP Guide (Nov 2025)](https://jorkle.com/posts/oscp-guide/); [Challenge-Labs index](https://xn--ec6b17t.com/OSCP/Challenge-Labs/); [konqi, Medium](https://medium.com/@konqi/how-i-passed-the-oscp-on-my-first-attempt-as-an-appsec-engineer-c448ac15170f) (all via search summaries)

### Inferences
- The OSCP-A/B/C labs (each 3 standalones + a 3-machine AD set) are the closest official mock exams. The Secura → Medtech → Relia → Skylark order acts as a difficulty ramp.
- The AWS modules are part of the course, but no source said cloud targets appear in the exam's 3+3 structure. Treat them as course content, not guaranteed exam content.

### Gaps
- The official challenge-lab count conflicts: the course page says 9, while 2025 community guides say 10 or more. No official announcement dates for Zeus, Poseidon, Feast or Laser were found.
- **No evidence was found of "OSCP-D" or "OSCP-E" labs** in 2025–2026 sources.
- The date the AWS modules were added (believed to be 2024) could not be confirmed from an official source.

## 4. Pricing, subscriptions, retakes and cooling-off periods

### Takeaway
2026 prices from secondary sources: Course & Cert Exam Bundle $1,749 (90 days of access, 1 exam attempt; a promo price of $1,499 was reported in July 2026), Learn One $2,749/yr (2 attempts), Learn Unlimited $6,099/yr (unlimited attempts), OSCP+ standalone exam reportedly $1,699. A retake costs $249 and must be used within 120 days. Cooldowns between attempts are 4, 8 and then 12 weeks.

### Cited Findings
- Course + Cert Bundle: $1,749 for 90 days of access to one 200- or 300-level course, labs, and 1 exam attempt. A promotion running as of 18 Jul 2026 ("Save $250 on select Course + Cert Bundles") brought PEN-200 to $1,499 — [certiguard OSCP page](https://certiguard.io/certifications/offsec-oscp/) / [kioptrix OSCP cost 2026](https://kioptrix.com/oscp-exam-cost-2026/) (via search summary); official pricing page: [offsec.com/pricing](https://www.offsec.com/pricing/)
- Learn One: $2,749 per year for one course stream, its labs, and **two exam attempts** — [certiguard](https://certiguard.io/certifications/offsec-oscp/); [Coursera OSCP 2026 guide](https://www.coursera.org/articles/oscp) (via search summary)
- Learn Unlimited: $6,099/yr with unlimited exam attempts across OffSec certs — [startupdefense](https://www.startupdefense.io/blog/oscp-certification); [somecert](https://somecert.com/en/certificates/oscp) (via search summary); official: [Learn Unlimited FAQ](https://help.offsec.com/hc/en-us/articles/4403415547540-Learn-Unlimited-FAQ)
- OSCP+ Standalone Exam: reported at $1,699 one-time, with two attempts valid for 90 days from purchase — aggregator sources only ([startupdefense](https://www.startupdefense.io/blog/oscp-certification); [globalexamatlas](https://globalexamatlas.com/en/exams/cybersecurity/oscp/cost/)); product page: [offsec.com/products/oscp-plus](https://www.offsec.com/products/oscp-plus/)
- Retake: "you may purchase a regular exam retake at $249 through your Buy More page", and you then have 120 days from purchase to schedule and sit the exam — [Standalone OffSec Certification Exam FAQ](https://help.offsec.com/hc/en-us/articles/31628160634004-Standalone-OffSec-Certification-Exam-FAQ); [Managing OffSec Certification Exams](https://help.offsec.com/hc/en-us/articles/11628867342996-Managing-OffSec-Certification-Exams); [certsqill retake rules 2026](https://www.certsqill.com/blog/oscp-retake-rules/)
- Cooling-off: 2nd attempt needs 4 weeks, 3rd attempt 8 weeks, 4th and later 12 weeks — [Managing OffSec Certification Exams](https://help.offsec.com/hc/en-us/articles/11628867342996-Managing-OffSec-Certification-Exams); [certsqill](https://www.certsqill.com/blog/oscp-retake-rules/) (via search summary)

### Inferences
- For an average first-timer, Learn One's second included attempt ($2,749 vs. $1,749 + $249 = $1,998 for bundle plus one retake) is worth it mainly for the 12 months of lab access, not for the attempts.

### Gaps
- None of the prices above could be confirmed directly on offsec.com/pricing because it was blocked. They are aggregator figures and may vary by region or promotion. Regional pricing (e.g., India, Saudi Arabia) was not researched.
- The standalone OSCP+ exam's price and attempt count ($1,699, 2 attempts) come only from aggregators and should be treated as unverified.

## 5. Exam restrictions (Metasploit, AI/LLMs, automated tools) and report requirements

### Takeaway
Metasploit and Meterpreter may be used against **one** target only, and the choice locks in even if the attack fails. AI chatbots and LLMs (ChatGPT, OffSec's own KAI, Gemini, DeepSeek and similar) are banned. Also banned: spoofing, commercial tools, automatic exploitation tools such as sqlmap, and mass vulnerability scanners such as Nessus or OpenVAS. The report must be a PDF inside a password-free .7z named `OSCP-OS-XXXXX-Exam-Report.7z`, uploaded within 24h.

### Cited Findings
- Metasploit: you may use Metasploit modules (Auxiliary, Exploit, Post) or Meterpreter against "one single target machine of your choice". If the attempt fails you may not use it on a second target, because the choice is locked in once made — [OSCP+ Exam Guide](https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide)
- AI: "Using LLMs and AI chatbots (OffSec KAI, ChatGPT, Deepseek, Gemini, etc.) is strictly prohibited"; the restriction list includes "AI Chatbots (OffSec KAI, ChatGPT, YouChat, etc.)" — [OSCP+ Exam Guide](https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide)
- The ChatGPT ban dates to early 2023. It is treated as third-party assistance and a violation of the Academic Policy — [ITPro](https://www.itpro.com/technology/artificial-intelligence-ai/369785/offensive-security-bans-chatgpt-from-cyber-certification-exams); [TJ_Null (OffSec) on X](https://x.com/TJ_Null/status/1610175388931731458)
- Other prohibited items: spoofing (IP, ARP, DNS, NBNS, etc.); commercial tools or services (Metasploit Pro, Burp Pro, etc.); automatic exploitation tools (e.g., sqlmap, sqlninja); mass vulnerability scanners (Nessus, NeXpose, OpenVAS, Canvas, Core Impact, SAINT) — [kabaneridev pt-notes, OSCP tools restrictions (GitHub)](https://github.com/kabaneridev/pt-notes/blob/main/oscp-tools-restrictions.md), which summarises the official exam guide; official list at [OSCP+ Exam Guide](https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide)
- Report packaging: PDF archived as a .7z without a password, named `OSCP-OS-XXXXX-Exam-Report.7z` (OS-XXXXX = your OSID). Password-protected files are rejected — [OSCP+ Exam Guide](https://help.offsec.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide)
- Report requirements and templates are documented on [PEN-200 Reporting Requirements (help.offsec.com)](https://help.offsec.com/hc/en-us/articles/360046787731-PEN-200-Reporting-Requirements), and the course has a "Report Writing for Penetration Testers" module ([GitHub module list](https://github.com/Appl3Tree/Notes/tree/master/courses/offsec/pen-200))

### Inferences
- Since bonus points are gone, the report is purely pass/fail documentation of exam points. Missing proof screenshots (e.g., the `proof.txt` contents shown with `ipconfig`/`ip a` on the target) can cost a flag's points. This is a long-standing OffSec rule, but I could not read the current wording in this session.

### Gaps
- I could not read the full current restriction list (e.g., whether "automated exploitation" now names specific modern tools, or BloodHound/linPEAS-style allowances) or the exact template download link and required report sections, because help.offsec.com was blocked.

## 6. Official guidance on preparation time, prerequisites and study hours

### Takeaway
OffSec publishes 12-week and 24-week PEN-200 learning plans. Some weeks of the 12-week plan run to about 24 hours, while the 24-week plan is about 10 hours a week. There are no formal prerequisites, but OffSec recommends TCP/IP networking, Windows/Linux (including AD) administration, and basic Bash/Python.

### Cited Findings
- Official learning plans: [OffSec PEN-200 Learning Plan – 12 Week](https://help.offsec.com/hc/en-us/articles/15541765522196-OffSec-PEN-200-Learning-Plan-12-Week) and [OffSec PEN-200 Learning Plan – 24 Week](https://help.offsec.com/hc/en-us/articles/15545672357780-OffSec-PEN-200-Learning-Plan-24-Week)
- Weekly load: in the 12-week plan, "some weeks requiring 24 hours"; in the 24-week plan, weeks "typically have estimated times of 10 hours" — learning-plan pages above (via search summary)
- Lab time: "dedicating >200 – 300+ hours in the lab environment often yields the best results"; course exercises "typically require over 40 hours" — attributed to OffSec PEN-200 help pages in a search summary ([PEN-200 FAQ](https://help.offsec.com/hc/en-us/articles/12483872278932-PEN-200-FAQ)); exact source sentence not verified
- Prerequisites: no formal ones, but strongly recommended are "a solid understanding of TCP/IP networking, reasonable Windows and Linux administration experience" (including Active Directory) "and familiarity with basic Bash and/or Python scripting" — [PEN-200 FAQ](https://help.offsec.com/hc/en-us/articles/12483872278932-PEN-200-FAQ); [PEN-200 course page](https://www.offsec.com/courses/pen-200/)
- Onboarding guide: [PEN-200 Onboarding – A Learner Introduction Guide to the OSCP+](https://help.offsec.com/hc/en-us/articles/4406841351316-PEN-200-Onboarding-A-Learner-Introduction-Guide-to-the-OSCP); OffSec's prep guide PDF: [pen200-oscp-prep-guide.pdf](https://www.offsec.com/app/uploads/2023/01/pen200-oscp-prep-guide.pdf)

### Inferences
- The 12-week plan's high weekly load fits the 90-day bundle. The 24-week plan at about 10 h/week fits the 1-year Learn One subscription.
- 10 h/week × 24 weeks ≈ 240 h, which matches the ">200–300+ hours" lab guidance.

### Gaps
- I found no official "1 hour per day" recommendation. The exact total-hours figure in each learning plan could not be read because the pages were blocked.

## 7. Announced changes in 2025–2026

### Takeaway
No change to the exam format has been announced since 1 Nov 2024. The 2025 changes were to content and the platform (Jan 2025 module refresh, Aug 2025 in-browser Kali/Windows) and to certification maintenance (the CPE Program plus the AMP/AMF annual-coverage model behind OSCP+ renewal). The cheap ($199) OSCP+ upgrade for legacy OSCP holders ended 31 Mar 2025.

### Cited Findings
- Jan 2025: fresh PEN-200 modules, including an updated Information Gathering module — [January 2025 Content & Platform Update](https://www.offsec.com/resources/product-updates/january-2025-content-platform-update/)
- Aug 2025: Kali In-Browser and Windows In-Browser enabled for PEN-200 — [August 2025 Content & Platform Update](https://www.offsec.com/resources/product-updates/august-2025-content-platform-update/)
- 2025: the CPE Program and the Annual Membership Program / Annual Maintenance Fee became the renewal mechanism — [CPE Program Overview](https://help.offsec.com/hc/en-us/articles/31553032386964-OffSec-Continuing-Professional-Education-CPE-Program-Overview); [AMP FAQ](https://help.offsec.com/hc/en-us/articles/36008739894164-OffSec-Annual-Membership-FAQ)
- Legacy-holder OSCP+ promo of $199 ended 31 Mar 2025, after which the price became $799 — [webasha](https://www.webasha.com/blog/oscp-exam-update-what-is-oscp-certification)
- A search restricted to offsec.com for 2026 updates turned up no 2026 exam-format announcement. A July 2026 bundle discount ($1,499) was the only 2026 change found — [certiguard](https://certiguard.io/certifications/offsec-oscp/) (via search summary)

### Inferences
- A candidate preparing in late 2026 should prepare for the Nov-2024 format (3 standalones + 3-machine assumed-breach AD, no bonus points, 70/100).

### Gaps
- There may be 2026 product updates (new challenge labs or modules) published on offsec.com/resources/product-updates that could not be found because the site was blocked. The report writer should note that late-2026 content changes cannot be ruled out.
