# ICSCC 2027 Multi-Page Website — Implementation Plan & Documentation
**International Conference on Smart Computing and Communications (ICSCC 2027)**  
*Theme: Intelligent Technologies for Smart and Sustainable Futures*  
**Date & Venue:** 3–5 July 2027 | Muthoot Institute of Technology and Science (MITS), Kochi, Kerala, India

---

## 1. Project Overview & Multi-Page Architecture

Rather than a single scrolling page, the website will be organized into dedicated, focused pages. This matches standard IEEE international conference websites, making navigation straightforward for authors, reviewers, keynote speakers, and attendees.

### Color Palette (IEEE Blue & Crisp White Theme)
- **Primary Navy / Midnight Blue:** `#002855` / `#0A2540` (Conveys academic authority and IEEE heritage)
- **Royal / Tech Blue:** `#00629B` / `#1D4ED8` (Buttons, active states, key cards)
- **Electric / Accent Cyan:** `#00A3E0` / `#06B6D4` (Highlights, icons, badges, countdown glow)
- **Light Contrast Backgrounds:** `#FFFFFF` (Card surfaces, clean reading areas) and `#F8FAFC` / `#F0F4F8` (Page background)
- **Neutral Dark Typography:** `#0F172A` / `#334155` for crisp readability

---

## 2. Directory Structure & Page Sitemap

```
d:\IEEE Website\ICSCC Website\
│
├── index.html              # Home Page (Hero, Countdown, Highlights, Tracks Overview, Key Dates, Keynotes Teaser)
├── about.html              # About Conference & About MITS (Host Institution, Heritage, Campus)
├── call-for-papers.html    # Call for Papers & Detailed 6 Technical Tracks with full subtopics
├── submission.html         # Author Guidelines, IEEE Paper Templates (Word/LaTeX), Submission Portal Link
├── dates.html              # Important Dates Schedule & Milestones
├── committees.html         # Organizing Committee, Advisory Board & Track Chairs
├── keynotes.html           # Keynote Speakers, Bios & Talk Details
├── registration.html       # Registration Fees Table (IEEE / Non-IEEE / Students / Foreign) & Payment Details
├── venue.html              # Venue, Travel Guide (Air, Rail, Road), Hotels & Kochi Tourism Highlights
├── contact.html            # Contact Information, Inquiries Form, FAQs & Location Map
│
├── README.md               # Project documentation & plan
├── info.txt                # Raw source conference details
│
└── assets/
    ├── css/
    │   └── style.css       # Custom styles, animations, shared theme styling
    ├── js/
    │   └── main.js         # Mobile drawer, active link highlighter, countdown timer, back-to-top
    └── images/             # Logos, banner placeholders, speaker photos, campus photos
```

---

## 3. Detailed Page Specifications

### 1. `index.html` (Home Page)
- **Top Announcement Bar:** Important notice (e.g., *"Paper submission opens soon — Conference: July 3–5, 2027"*).
- **Global Header / Nav:** Shared navigation bar with active state indicator and *"Submit Paper"* CTA button.
- **Hero Section:**
  - Badge: *"Biennial International Conference"*
  - Main Title: International Conference on Smart Computing and Communications (ICSCC 2027)
  - Subtitle: *Intelligent Technologies for Smart and Sustainable Futures*
  - Key Pills: 📅 **3–5 July 2027** | 📍 **MITS, Kochi, Kerala, India**
  - **Live Dynamic Countdown Timer** (Days, Hours, Minutes, Seconds to July 3, 2027)
  - Action Buttons: *"Submit Paper"*, *"Call for Papers"*, *"View Tracks"*
  - Key Statistics Strip: 6 Technical Tracks | 3 Days of Sessions | Global Keynotes | Peer-Reviewed Proceedings
- **About Preview:** Brief summary of ICSCC 2027 and MITS with *"Read More"* link to `about.html`.
- **Tracks Preview:** Grid displaying the 6 tracks with quick summaries and links to `call-for-papers.html`.
- **Important Dates Teaser:** Quick milestone cards with link to `dates.html`.
- **Featured Keynotes Teaser:** Keynote cards preview with link to `keynotes.html`.
- **Sponsors & Technical Partners:** Logos and placeholders.
- **Shared Footer:** Quick links, contact snippet, copyright.

---

### 2. `about.html` (About ICSCC & MITS)
- **Header Banner:** Page title with breadcrumb navigation (`Home > About`).
- **About ICSCC 2027:**
  - Full conference background, theme significance, objectives, and legacy as a premier international forum.
- **About Muthoot Institute of Technology & Science (MITS):**
  - Institutional overview: Self-financing technical institution close to Smart City and InfoPark Kochi.
  - Promoters' legacy: Muthoot Group's commanding presence in Financial Services, Hospitality, Healthcare, IT, etc.
  - Campus infrastructure, research culture, and center-of-excellence highlights.
- **Why Attend ICSCC 2027:** Networking, cutting-edge research, industry-academia collaboration.

---

### 3. `call-for-papers.html` (Call for Papers & Tracks)
- **Header Banner:** Breadcrumbs (`Home > Call for Papers`).
- **CFP Introduction & Scope:** Encouraging theoretical and experimental research contributions.
- **Detailed 6 Technical Tracks (Interactive Accordions / Cards):**
  - **Track 01: Smart Computing** (AI, ML, Quantum Computing, HPC, Algorithms, Cloud/Edge Computing).
  - **Track 02: Communication & Signal Processing** (5G/6G, Communication Systems, Networking, Wireless, Protocols, Signal Processing).
  - **Track 03: Technology (Systems for a Secure and Sustainable World)** (IoT, Connected Systems, Cybersecurity, Privacy, Green Tech).
  - **Track 04: Intelligent Systems & Analytics** (Data Science, Big-Data Analytics, Knowledge Discovery, Intelligent Applications).
  - **Track 05: Smart Embedded Systems** (Embedded Systems, VLSI, FPGA, SoC, Sensors, Embedded Intelligence).
  - **Track 06: Power Systems, Energy Systems and Power Electronics** (Smart Grids, Renewable Energy, Energy Storage, EVs, Power Electronics).
- **Download CFP PDF Button**: Ready placeholder button for downloading printable brochure.
- **Call to Action**: Direct link to `submission.html`.

---

### 4. `submission.html` (Author Guidelines & Submission Portal)
- **Paper Submission Instructions:**
  - Double-blind review process instructions.
  - Page limit guidelines (e.g., standard 6 pages in IEEE conference format).
- **Templates & Downloads:**
  - IEEE LaTeX Template link / download placeholder.
  - IEEE MS Word Template link / download placeholder.
- **Plagiarism Policy & Publication Ethics:**
  - IEEE Plagiarism policy, similarity index threshold, self-plagiarism rules.
- **Online Submission System:**
  - Link / button to submission portal (Microsoft CMT / EasyChair placeholder).
  - Step-by-step submission workflow checklist.

---

### 5. `dates.html` (Important Dates)
- **Interactive Timeline / Table:**
  - Paper Submission Opens: *December 2026*
  - Full Paper Submission Deadline: *March 15, 2027*
  - Notification of Acceptance: *May 10, 2027*
  - Camera-Ready Paper & Registration Deadline: *June 5, 2027*
  - Pre-Conference Workshops / Tutorials: *July 2, 2027*
  - Conference Dates: **July 3–5, 2027**
- **Add to Calendar Buttons:** Google Calendar / iCal placeholder links.

---

### 6. `committees.html` (Organizing Committees)
- **Hierarchical Committee Structure:**
  - **Chief Patron(s):** Leadership of Muthoot Group & MITS.
  - **Patron(s):** Principal & Director, MITS.
  - **Honorary Chair / General Chair(s).**
  - **Technical Program Chairs (TPC).**
  - **Organizing Secretaries / Conveners.**
  - **International Advisory Committee.**
  - **Track Chairs (for each of the 6 tracks).**
  - **Finance, Publication, Publicity, and Web Chairs.**

---

### 7. `keynotes.html` (Keynote Speakers)
- **Distinguished Speakers Showcase:**
  - High-resolution photo cards.
  - Speaker Name, Title, and International Affiliation.
  - Keynote Speech Title & Abstract summary.
  - Brief Speaker Biography.

---

### 8. `registration.html` (Registration & Fees)
- **Fee Matrix (Categorized Table):**
  - Categories: IEEE Member, Non-IEEE Member, Student / Research Scholar, Industry Delegate, Foreign Authors, Attendees.
  - Early Bird vs Regular fees (in INR for Indian delegates and USD for International delegates).
- **What Registration Includes:** Access to all technical sessions, conference kit, certificates, lunch & banquet.
- **Payment Methods:** Bank transfer (NEFT/RTGS/IMPS/SWIFT) and online payment gateway details.
- **Cancellation & Refund Policy.**

---

### 9. `venue.html` (Venue & Travel Guide)
- **About Venue:**
  - Muthoot Institute of Technology and Science (MITS), Varikoli P.O., Puthencruz, Ernakulam, Kerala – 682 308.
  - Proximity: 15 km from Vytilla Junction towards Muvattupuzha on the Cochin-Madurai National Highway (close to Smart City & InfoPark).
- **How to Reach MITS:**
  - **By Air:** Cochin International Airport (COK) (~35 km).
  - **By Train:** Ernakulam South (ERS) / Ernakulam North (ERN) / Aluva Railway Station.
  - **By Metro & Road:** Kochi Metro connectivity to Petta / SN Junction + connecting road transport.
- **Accommodations & Hotels Nearby:** Recommended 3-star, 4-star, and luxury hotels in Kochi and InfoPark Kakkanad.
- **Exploring Kochi (Queen of the Arabian Sea):**
  - Fort Kochi & Chinese Fishing Nets, Mattancherry Palace, Marine Drive, Kochi Backwaters.
- **Embedded Google Map:** Responsive interactive location map.

---

### 10. `contact.html` (Contact & Inquiries)
- **Direct Contact Information (from `info.txt`):**
  - Institution: Muthoot Institute of Technology & Science
  - Address: Varikoli P.O., Puthencruz, Ernakulam, Kerala – 682 308, India
  - Email: `icscc2027@mgits.ac.in`
  - Phone: `+91-9495686350`
  - Official Domain: `icscc.mgmits.ac.in`
- **Interactive Contact Form:** Name, Email, Organization, Track Interest, Subject, Message.
- **Frequently Asked Questions (FAQ):** Accordion with common queries regarding submissions, visas, and certificates.

---

## 4. Shared Components & Technical Implementation

- **Consistent Header & Footer:** Standardized across all 10 pages for seamless navigation.
- **Active Navigation Highlighter:** Current page is automatically highlighted in the navigation bar.
- **Mobile Responsive Drawer:** Touch-friendly slide-over menu for smartphone and tablet users.
- **Modern Clean Styling:** Tailwind CSS utility classes + custom Blue & White theme in `assets/css/style.css`.
- **Reusable JS Logic:** Countdown timer, scroll-to-top, mobile menu toggle, and tab filtering in `assets/js/main.js`.

---

## 5. Development Steps

1. **Step 1:** Create directory layout (`assets/css`, `assets/js`, `assets/images`).
2. **Step 2:** Write `assets/css/style.css` with IEEE blue/white color variables and utilities.
3. **Step 3:** Write `assets/js/main.js` with countdown timer, mobile navigation, and interactive behaviors.
4. **Step 4:** Build the main landing page `index.html`.
5. **Step 5:** Build all subpages (`about.html`, `call-for-papers.html`, `submission.html`, `dates.html`, `committees.html`, `keynotes.html`, `registration.html`, `venue.html`, `contact.html`).
6. **Step 6:** Validate cross-page linking, responsive layouts, and user review.
