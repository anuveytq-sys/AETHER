# AETHER Phase 1 — Foundation

## Goal
Deliver a stable responsive starting point for people, important dates, reminders, and user-curated memories.

## Included
- Responsive dashboard and shared navigation.
- People and circles: create, search, filter, edit, delete.
- Important dates: birthdays, anniversaries, milestones, family events, yearly recurrence.
- Reminders: due dates, related people, completion state.
- Memory vault: searchable notes with optional dates and context.
- Small local command parser and optional browser speech input.
- Profile settings, JSON export/import, and confirmed local reset.
- Honest status for future WhatsApp, Gmail, and gallery integrations.
- Keyboard focus styles, semantic labels, live status messages, dialog controls, and reduced-motion support.

## Data and privacy
Data is stored in browser localStorage on this device/browser only. It is not cloud-synced or encrypted cloud storage and is not a backup. Do not put highly sensitive information in this prototype. JSON exports can contain personal information and must be kept private.

No WhatsApp message, voice/video call, Gmail operation, photo-library scan, or location tracking is implemented in Phase 1. The interface must not claim external actions succeeded.

## Data model
- profile: display name and timezone.
- people: name, circle, relationship, phone, email, notes, timestamps.
- dates: title, ISO date, type, related person, yearly recurrence, notes.
- reminders: title, optional due date/person/notes, completion state.
- memories: title, body, optional related person/event and date.

Storage key: aether.phase1.workspace.v1.

## Run locally
No package installation is required. Open index.html in a modern browser or serve the repository root using any static HTTP server. Speech recognition may require HTTPS or localhost and browser permission. Google Fonts are cosmetic; system fonts are fallbacks.

## Verification checklist
- [ ] Dashboard loads without JavaScript errors.
- [ ] Create/edit/delete people; search and circle filter work.
- [ ] Create/edit/delete dates; yearly recurring dates show correctly in the next-30-days dashboard.
- [ ] Create/edit/complete/delete reminders.
- [ ] Create/edit/delete searchable memories.
- [ ] Reload and verify local persistence in the same browser.
- [ ] Export and import a JSON backup.
- [ ] Invalid backup JSON is rejected without replacing existing data.
- [ ] Clear-data flow requires confirmation.
- [ ] Mobile navigation and narrow layout work.
- [ ] Keyboard focus and dialog close/cancel work.
- [ ] External-service commands state integrations are not connected and never claim success.

## Deferred
Phase 2: communication integrations. Phase 3: permission-based photo search. Later phases: expanded family knowledge graph, Family Pulse, ULTRON insights, Atlas globe, Chronicle timeline, 3D spaces, and deeper accessibility controls. These are planned, not Phase 1 functionality.