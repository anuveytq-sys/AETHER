# AETHER — Personal Intelligence & Connection System

AETHER is a privacy-conscious workspace designed to help people keep family and friends close through organized contacts, important dates, reminders, and personally curated memories.

> Phase 1 is the front-end foundation. WhatsApp, calls, Gmail, gallery access, cloud sync, and advanced AI features are planned integrations—not implemented features.

## Phase 1 foundation

- Responsive futuristic dashboard and navigation
- People & circles: create, search, filter, edit, and delete contact profiles
- Important dates: birthdays, anniversaries, milestones, family events, and yearly recurrence
- Reminders with optional due dates and completion state
- Searchable memory vault for user-curated notes
- Limited local command parser and optional browser speech input
- Profile settings
- JSON backup export/import and confirmed local reset
- Clear integration status for future capabilities

## Run locally

No package installation is required. Open `index.html` in a modern browser or serve the repository root with any static HTTP server. Optional speech recognition may require HTTPS or localhost and browser permission.

## Deploy to GitHub Pages

A GitHub Actions workflow is included at `.github/workflows/deploy-pages.yml`. To enable publishing:

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Open **Actions** and monitor the **Deploy AETHER to GitHub Pages** workflow after it runs on `main`.
4. When the workflow succeeds, GitHub will display the published site URL in the Pages settings and workflow deployment environment.

The workflow publishes the static site from the repository root. A successful workflow and Pages configuration are required before the site is considered deployed.

## Data and privacy

Phase 1 stores data in browser `localStorage` on the current browser/device. It does not sync across devices and is not encrypted cloud storage. Do not store highly sensitive information in this prototype. JSON exports may contain personal information; keep them private.

No WhatsApp message, voice/video call, Gmail operation, photo-library scan, or location tracking is implemented in Phase 1. The app must never claim an external action succeeded unless a real integration confirms it.

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