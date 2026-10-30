# AETHER — Personal Intelligence, Connection & Support System

AETHER is a privacy-conscious personal workspace for organizing important people, family dates, reminders, memories, check-ins, practical help information, and communication handoffs.

## Phase 1 + Phase 2 features

- Responsive dashboard and mobile navigation, including a vertically scrollable sidebar
- People & circles with name, relationship, phone, email, preferred contact method, and support notes
- Important dates for birthdays, anniversaries, milestones, family events, and yearly recurrence
- Reminders with due dates, completion, reopening, search, and filters
- Categorized, searchable Memory Vault
- Support Hub with check-ins, due dates, completion/reopening, and Communication Studio
- Help Cards for contacts, school, projects, household, emergency information, and custom notes
- Accessibility settings: larger text, higher contrast, reduced motion, and low-distraction mode
- Local command parser with natural aliases for navigation, reminders, memories, calls, WhatsApp messages, and WhatsApp video-call handoff
- Optional browser speech recognition where supported
- Number-based contact actions: calls use the saved phone number via the device's `tel:` handler; WhatsApp opens a chat using the saved number, not a username search
- Settings phonebook manager: select individual contacts or Select All, export selected contacts as a standard `.vcf` file, and import `.vcf` files into AETHER
- JSON workspace backup export/import and confirmed local reset

## Communication behavior and limitations

AETHER hands communication actions to apps supported by the user's device/browser. A call command opens the device's caller flow; the user confirms the call there. WhatsApp commands open the saved contact's number-based chat, optionally with a prefilled message. The user reviews and sends the message in WhatsApp. A video-call command opens the WhatsApp chat; the user starts the video call inside WhatsApp. A website cannot silently place calls, send WhatsApp messages, or force a WhatsApp video call without the appropriate native app/API permissions and user action.

Ten-digit local Indian phone numbers are normalized to the India country code for WhatsApp links. For other countries, save the full international number including country code.

## Run locally

No package installation is required. Open `index.html` in a modern browser or serve the repository root with a static HTTP server. Browser speech recognition may require HTTPS or localhost and browser permission.

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` validates required files and JavaScript syntax, uploads the static site, and deploys it to GitHub Pages on pushes to `main`. In repository **Settings → Pages**, choose **GitHub Actions** as the publishing source. Treat the site as deployed only after the latest workflow run succeeds.

## Data and privacy

AETHER stores its workspace in browser `localStorage` on the current browser/device. Data does not automatically sync between devices and is not encrypted cloud storage. VCF and JSON exports can contain personal information; keep them private. Importing a VCF adds or updates contact details in the current local workspace. Use the JSON backup when moving the full AETHER workspace between browsers/devices.

## Current integration boundaries

AETHER does not have cloud synchronization, unrestricted device control, background monitoring, automatic message sending, or direct access to private phonebook data. Contact import/export is user-initiated through VCF files. Communication is performed through explicit device/app handoffs.

See `docs/PHASE-1.md` and `docs/PHASE-2.md` for the feature scope and verification checklist.
