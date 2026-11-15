# AETHER — Personal Intelligence, Connection & Accessibility Ecosystem

> **One personal command centre for the people who matter, the moments worth remembering, everyday support, visual memories, and more accessible interaction with technology.**

AETHER is a privacy-conscious personal workspace designed to bring personal organisation, relationship support, communication handoffs, visual memory, and hands-free accessibility into one connected experience. It combines people and family circles, important dates, reminders, memory tools, support workflows, media organisation, and assistive controls—including optional head-pointer and blink-based interaction.

AETHER is built around a simple idea: technology should adapt to people, help them stay connected, and make everyday digital tasks easier to navigate.

---

## ✨ At a glance

- **People-first organisation:** contacts, relationships, circles, support notes, and important dates.
- **Personal memory system:** searchable memories, timelines, time capsules, and a local knowledge base.
- **Everyday intelligence:** reminders, goals, checklists, project workspaces, suggestions, and reviewed workflow plans.
- **Communication handoffs:** open phone calls, WhatsApp chats, prefilled messages, and WhatsApp video-call flows through the user's device.
- **AETHER Vision:** a private, user-curated photo and video memory library.
- **AETHER Access:** keyboard, screen-reader, voice-navigation, head-pointer, dwell, and optional double-blink controls.
- **Privacy-conscious by design:** local browser storage, explicit media selection, user-confirmed actions, and portable backups.

## 🧭 The AETHER experience

### 1. Personal Dashboard & Navigation

- Responsive dashboard designed for desktop and mobile.
- Mobile navigation and a vertically scrollable sidebar.
- At-a-glance situational dashboard with overdue, upcoming, open, and completed activity summaries.
- Connected navigation across AETHER's people, memories, support, vision, and accessibility workspaces.

### 2. People, Relationships & Circles

- Build a structured directory of important people.
- Save names, relationships, phone numbers, email addresses, preferred contact methods, and support notes.
- Organise people into family and personal circles.
- Maintain relationship notes and contact context authored by the user.
- Track last check-ins and follow-up needs through the Support Hub.
- Explore connected records through a relationship-oriented graph and life timeline.

### 3. Important Dates & Life Events

- Track birthdays, anniversaries, milestones, family events, and personal occasions.
- Support yearly recurring dates.
- Connect important events with people and personal records.
- Use reminders and timeline views to keep meaningful moments visible.

### 4. Smart Reminders & Personal Planning

- Create reminders with due dates and completion states.
- Reopen completed reminders and search or filter tasks.
- View overdue, due-today, and upcoming reminders.
- Break goals into manageable steps.
- Create milestone checklists and project workspaces.
- Review multi-step workflow previews before taking action.
- Access optional browser notifications where supported and permission is granted.

### 5. Memory Vault & Personal Knowledge

- Store and search categorised personal memories.
- Add importance, confidence, topic associations, and expiry metadata to advanced memories.
- Reduce duplicate memory titles through duplicate-title protection.
- Maintain a personal knowledge base and research logs.
- Extract readable text from supported local text documents.
- Identify dates and action-oriented information from supported text.
- Create time capsules for memories intended to be revisited later.
- Search across multiple AETHER areas using local keyword-based search.

### 6. Support Hub & Communication Studio

- Organise personal check-ins, support tasks, and follow-ups.
- Track due dates, completion, reopening, and last-check-in information.
- Review open, overdue, and completed support activity.
- Maintain practical Help Cards for contacts, school, projects, household information, emergency details, and custom notes.
- Use Communication Studio to prepare and hand off communication actions.

### 7. AETHER Vision — Visual Memory Workspace

A dedicated space for building a searchable, user-controlled library of personal photos and videos.

- Import multiple images and videos or select a folder using the browser's file picker.
- Store selected media locally in browser IndexedDB.
- Maintain searchable metadata separately in localStorage.
- Browse media by date, name, event, and media type.
- Create event-based collections.
- Edit captions, descriptions, tags, dates, and event names.
- Preview images and play videos.
- Inspect selected-item details and local file metadata, including image dimensions.
- Detect exact duplicates using SHA-256 fingerprints.
- Group visually similar photos using a lightweight perceptual image hash where supported.
- Search and ask questions about selected media using saved filenames, descriptions, tags, event names, and dates.
- Generate editable caption and description starters.
- Share selected media through the device share sheet where supported, with a download fallback.
- Export a metadata-only library index.
- Use optional browser voice search where speech recognition is available.

### 8. AETHER Access — Hands-Free & Inclusive Interaction

AETHER Access is designed to make the interface more adaptable for people with different interaction needs.

**Personal accessibility controls**
- Larger text.
- High-contrast presentation.
- Reduced-motion mode.
- Low-distraction layout.
- Strong keyboard focus indicators.

**Hands-free navigation**
- Optional browser voice navigation for local page navigation and scrolling.
- Optional camera-based head pointer using an on-device face-landmark model.
- Adjustable dwell-to-activate interaction.
- Optional double-blink activation.
- Hands-free pointer interaction and dwell-based controls where supported.

**Assistive technology support**
- Screen-reader live announcements.
- Keyboard shortcuts.
- Escape-to-stop controls.
- Basic structural accessibility audit.

Camera and microphone access are opt-in. Camera frames are processed on-device by this module and are not recorded or uploaded by it. Accuracy and availability depend on browser, device, lighting, and model support. The built-in audit is a basic aid, not a formal WCAG certification.

### 9. Voice & Natural-Language-Style Commands

- Local command parser with natural aliases for navigation and common actions.
- Commands can help navigate AETHER, manage reminders and memories, and open supported communication handoffs.
- Optional browser speech recognition for voice input where supported.
- Explicit microphone start and stop controls.
- Voice features depend on browser support and permissions.

### 10. Calls, WhatsApp & Device-Level Handoffs

AETHER connects personal organisation with the communication apps already available on the user's device.

- Start a phone-call handoff using a saved contact's phone number and the device's `tel:` handler.
- Open a WhatsApp chat using the saved phone number.
- Prepare a WhatsApp message with optional prefilled text for the user to review.
- Open the relevant WhatsApp chat for a video-call handoff.
- Use saved contact details rather than relying on username searches.
- Import and export contacts through standard VCF files.

**The user stays in control:** AETHER opens the appropriate device or app flow. The user confirms calls, reviews and sends WhatsApp messages, and starts video calls inside WhatsApp. AETHER does not silently place calls or send messages.

### 11. Phonebook, Backup & Workspace Controls

- Select individual contacts or use Select All in the phonebook manager.
- Export selected contacts as standard `.vcf` files.
- Import VCF contact files into the local workspace.
- Export and import a JSON workspace backup.
- Use a confirmed local-reset action when intentionally clearing the workspace.
- Access privacy and safety controls.

### 12. Intelligence, Search & Connected Workflows

AETHER brings together its personal records through a collection of local intelligence and organisation tools:

- Universal keyword search across supported phases.
- Situational dashboard and optional suggestions.
- Life timeline and connected-record graph.
- Personal knowledge base and research logs.
- Relationship notes based on user-maintained information.
- Event planning and milestone tracking.
- Goal decomposition and project workspaces.
- Reviewed multi-step workflow previews.
- AI context controls, diagnostics, local analytics, developer checklist, and extension registry.

These features help users organise and connect information across their workspace. Relationship notes are user-authored, search is local keyword ranking rather than vector semantic search, and workflow previews do not silently execute external actions.

---

## 🧱 Architecture & Technology

- **Application format:** static, browser-based web application.
- **Core storage:** browser localStorage for workspace records and IndexedDB for selected Vision media.
- **Media processing:** browser-side file handling, SHA-256 duplicate fingerprints, and lightweight perceptual image hashing where supported.
- **Accessibility:** browser speech capabilities and an on-device face-landmark model for optional camera-based controls.
- **Communication:** device-level telephone and WhatsApp handoffs.
- **Deployment:** GitHub Pages through GitHub Actions.
- **Installation:** no package installation is required to run the static application.

## 🔐 Privacy, Safety & Capability Boundaries

AETHER aims to keep personal information under the user's control.

- Core workspace records are stored in the current browser's localStorage.
- Selected Vision media is stored in the current browser's IndexedDB.
- AETHER does not silently scan a device's private photo gallery; users explicitly choose files or folders.
- Camera and microphone features require user permission and explicit activation.
- Communication actions are handed to the relevant device app and require user confirmation.
- VCF and JSON exports may contain sensitive personal information and should be stored securely.
- Browser storage is not encrypted cloud storage and may be cleared or evicted.
- Data does not automatically synchronise between devices.

**Important implementation boundaries**

- No automatic cloud synchronisation or unrestricted device control is included.
- AETHER does not claim direct access to private phonebook data; contact import/export is user-initiated.
- AETHER Vision does not include a trained semantic image-recognition service or automatic identity recognition. Its search and Q&A rely on user-supplied metadata.
- PDF text extraction is not implemented; document extraction supports readable text files.
- Browser notifications depend on permission and browser availability and are not guaranteed background alarms.
- Browser speech recognition, camera controls, and face-landmark tracking vary by device and browser.
- The accessibility audit is not a certification.
- Workflow previews require user review and do not silently perform external actions.

## 🚀 Run AETHER Locally

No package installation is required.

1. Clone or download this repository.
2. Open `index.html` in a modern browser, or serve the repository root using a static HTTP server.
3. Grant browser permissions only for the voice or camera features you choose to use.

Browser speech recognition may require HTTPS or localhost, depending on the browser.

## 🌐 Deploy with GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` validates required files and JavaScript syntax, uploads the static site, and deploys it to GitHub Pages when changes are pushed to `main`.

To configure deployment:

1. Open the repository's **Settings → Pages**.
2. Select **GitHub Actions** as the publishing source.
3. Push changes to `main`.
4. Confirm that the latest deployment workflow completes successfully.

## 🗺️ Project Documentation

For phase scopes and verification checklists, see:

- `docs/PHASE-1.md`
- `docs/PHASE-2.md`
- `docs/PHASE-3.md`

---

## The AETHER Vision

AETHER brings personal organisation, meaningful relationships, visual memories, communication handoffs, and inclusive interaction into one adaptable digital workspace.

**Not just a place to store information—a personal command centre designed to help people remember, connect, organise, and interact with technology in ways that work for them.**
