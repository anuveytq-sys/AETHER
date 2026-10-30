# AETHER Phase 2 — Connection, Support & Communication

## Included workspace capabilities

- People profiles with relationship context, phone, email, preferred channel, and support notes.
- Support Hub check-ins with person, due date, support type, completion, reopening, search, and filtering.
- Help Cards for contacts, school, projects, household, emergency information, and custom information.
- Communication Studio for user-reviewed WhatsApp and email drafts.
- Categorized Memory Vault and smart reminder dashboard.
- Accessibility preferences: larger text, higher contrast, reduced motion, and low-distraction mode.
- Flexible local command aliases for reminders, memory capture, view navigation, calling, WhatsApp messaging, and video-call handoff.
- Phonebook management in Settings: select one or more saved contacts, Select All, export VCF, and import VCF.
- JSON backup/restore and confirmed local reset.

## Communication commands

Examples:
- `call Jayant`, `phone Jayant`, `dial Jayant`, `ring Jayant`
- `WhatsApp Jayant`, `message Jayant`, `msg Jayant saying I will call later`
- `video call Jayant`, `WhatsApp video call Jayant`
- `remind me to check on Dad tomorrow`
- `save memory: Family dinner on Sunday`
- `show people`, `show support`, `show help cards`, `show reminders`, `show memories`, `show important dates`

Contact actions resolve a saved person and use the phone number stored in that person's profile. WhatsApp links use the international-number format; ten-digit local Indian numbers are prefixed with India country code 91. Store non-Indian contacts with their complete country code.

## VCF workflow

- In Settings → Phonebook & VCF, select individual saved contacts or Select All.
- Choose **Export selected contacts (.vcf)** to download a standard vCard file.
- Choose **Import VCF** to import a vCard file into the current AETHER workspace.
- Imported contacts become available to People, Communication Studio, and command matching.
- Existing contacts are matched by phone number or name to reduce duplicates.

## Device handoff limitations

- Calling uses a `tel:` link and hands off to the device's caller app. The user confirms the call.
- WhatsApp messaging opens the saved number's chat and may prefill a message; the user reviews and sends it.
- WhatsApp video-call commands open the correct chat. The user starts the video call inside WhatsApp.
- These browser handoffs do not provide silent calling, automatic sending, or unrestricted access to device contacts.

## Data, privacy, and verification

All AETHER workspace data remains in browser localStorage on the current device/browser unless the user exports it. There is no cloud sync in this phase. VCF and JSON backups may contain personal information.

Deployment is validated by the GitHub Actions workflow: required-file checks, `node --check app.js`, Pages artifact upload, and GitHub Pages deployment. Do not consider a release deployed until the latest run succeeds.
