# AETHER — Personal Intelligence & Connection System

AETHER is a privacy-conscious workspace designed to help people keep family and friends close through organized contacts, important dates, reminders, and personally curated memories.

> Phase 1 establishes the front-end foundation. External communication integrations, gallery access, cloud sync, and advanced AI features are planned work—not yet implemented.

## Phase 1 foundation

- Responsive, futuristic dashboard and navigation
- People & circles: add, search, filter, edit, and delete contact profiles
- Important dates: birthdays, anniversaries, milestones, family events, and yearly recurrence
- Reminders: due dates, related people, and completion state
- Memory vault: searchable notes with optional dates and context
- A small local command parser and optional browser speech input
- Local profile settings
- JSON export/import backup and a confirmed local reset
- Explicit integration status for future WhatsApp, Gmail, and gallery capabilities

## Run locally

This is a static front-end and requires no package installation. Clone the repository and open `index.html` in a modern browser, or serve the repository root with any static HTTP server. Optional speech recognition may require HTTPS or localhost and browser permission.

## Data and privacy

Phase 1 stores data in browser `localStorage` on the current browser/device. It does not sync across devices and is not encrypted cloud storage. Do not store highly sensitive information in this prototype. Exported JSON backups may contain personal information; keep them private.

No WhatsApp message, call, video call, Gmail operation, gallery scan, or location tracking is implemented in Phase 1. The app must never claim that an external action succeeded unless a real integration confirms it.

## Roadmap

1. **Foundation:** dashboard, people, dates, reminders, memory, settings.
2. **Communication:** authorized WhatsApp/device workflows and Gmail integration.
3. **Vision:** permission-based photo search and metadata indexing.
4. **Memory:** richer family knowledge graph and timeline.
5. **Family Pulse + ULTRON:** consent-based activity summaries and helpful suggestions.
6. **Atlas:** opt-in shared locations and memories on a globe.
7. **Spaces:** interactive 3D interface.
8. **Access:** expanded accessibility and hands-free controls.

See `docs/PHASE-1.md` for scope and the verification checklist.