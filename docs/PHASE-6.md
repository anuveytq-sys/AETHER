# AETHER Phase 6 — AETHER Atlas

Phase 6 adds a local-first Family & Friendship Intelligence Network alongside Phases 1–5. It uses its own storage key (`aether.phase6.atlas.v1`) and does not overwrite earlier phase storage.

## Modules
- Atlas overview, family/friend profiles, circles, relationship-care prompts and linking new profiles into Phase 1 contacts.
- Family coordination and friendship reconnect ideas; appreciation and message-draft support.
- Voluntary support requests, offers and fulfillment tracking.
- Together spaces, group member lists, announcements and activity feed.
- Shared memory collections and portable memory-book export.
- Family legacy archive for stories, recipes, traditions, skills and achievements.
- Event/celebration planning, preparation task lists and inclusive activity suggestions.
- Shared goals and milestone checklists; learning circles, study groups and skill exchange.
- Relationship connection map and shared-interest explorer (not physical location tracking).
- Optional Atlas AI through the existing OpenRouter bridge; context is disabled by default and suggestions do not perform actions.
- Non-invasive activity counts, care suggestions, automation ideas, backup and copy-only group pack import/export.

## Storage and sharing boundaries
Atlas records live in this browser's localStorage under `aether.phase6.atlas.v1`. Group packs are deliberately exported JSON snapshots that recipients import as local copies. This release does not include account login, server-side group membership, real-time multi-device collaboration, cloud sync or group chat. Those require a separately designed authenticated backend with consent, authorization, secure storage and deletion controls.

External communication is review-first. AETHER does not silently call, message, email or contact anyone. The connection map is a relationship visualization, not a location tracker. Family history is manually supplied; no identity inference is performed.

## Verification
Run `node --check phase6.js` and `node --check aether-ai.js`; verify all Phase 6 tabs, forms, exports and imports; confirm Phase 1–5 and Vision remain intact; check mobile layout; test Atlas AI with the user's own OpenRouter key.
