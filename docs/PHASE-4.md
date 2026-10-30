# AETHER Phase 4 — Adaptive Assistance, Intelligence & Accessibility

Phase 4 is an additive layer. It does not replace or rewrite the existing Phase 1–3 workspace, People, Important Dates, Reminders, Memory Vault, Support Hub, Help Cards, communication handoffs, VCF tools, settings, or AETHER Vision.

## Included capabilities

### Personal intelligence
- Advanced personal-memory search across existing AETHER data
- Family/friend relationship context
- Family knowledge graph view using saved people, relationships, and circles
- Person-specific and event-specific context search
- Personal life timeline assembled from existing dated information plus Phase 4 events
- Personal dashboard with people, memories, reminders, dates, overdue items, and time capsules

### Intelligent reminders and planning
- Natural-language reminder ideas
- Relative dates such as today and tomorrow
- Guided difficult-task assistant
- Multi-step checklists
- Due dates for Phase 4 checklists
- Step completion tracking
- Completion state
- One-command workflow ideas
- Optional smart suggestions

### Digital time capsules
- Create private text time capsules
- Optional opening/reminder date
- Capsule timeline integration
- Local deletion

### Universal search
- People
- Relationships
- Circles
- Memories
- Important dates
- Reminders
- Support check-ins
- Help cards
- Phase 4 documents
- Imported AETHER Vision metadata

### Vision integration
- Natural-language access to imported Vision metadata
- Date/event/caption/tag/description search through the Phase 4 command layer
- Existing AETHER Vision preview, duplicate detection, similarity tools, editing, sharing, and import behavior remain unchanged

### Accessibility and ease-of-use
- Guided mode setting
- Simplified Phase 4 layout
- Focus mode
- Larger controls option
- Existing AETHER accessibility preferences remain untouched
- Voice command when browser speech recognition is available
- Reduced need for typing through natural-language commands

### Communication assistance
- Finds saved people for communication requests
- Connects users to the existing People & circles communication handoffs
- Does not silently call, message, email, or video-call anyone
- Existing WhatsApp, phone, email and VCF functionality remains unchanged

### Document and technology assistance
- Intentional local document import
- Metadata storage
- Text extraction for text-like files such as TXT, MD, CSV, JSON and LOG
- Local text search
- Simple local text summaries
- Technical-help guidance for turning instructions into checklists
- No cloud upload
- No execution of unknown instructions

### Support and help
- Support follow-up overview
- Quick-help cards for common difficult workflows
- Guidance for instructions, memory, people search, communication drafting, task organization and Vision search

### Command memory
- Local recent-command history
- Clear command history control
- Exportable Phase 4 data
- Phase 4-only reset that does not remove Phase 1–3 data

### Privacy and safety
- Phase 4 has a separate local-storage key
- Existing AETHER data is read but not rewritten by Phase 4
- No silent monitoring
- No silent media scanning
- No automatic message sending
- No automatic calling
- No cloud synchronization
- Explicit export/reset controls

## OpenRouter AI connection\n\nThe AETHER Intelligence screen is connected to OpenRouter through `aether-ai.js`. Settings & privacy includes a local key setup panel with connection testing and a save/remove control. A personal key is stored in this browser only and is never committed to GitHub or included in AETHER workspace backups. Because a browser-held key can be accessed by someone with access to the browser profile, use an OpenRouter key with a strict spending limit. For a shared/public deployment, the safer option is the Vercel server-side `OPENROUTER_API_KEY` environment variable; add it under Project Settings → Environment Variables → Production and redeploy. No Render service is required for the Vercel function.\n\nThe AI can answer general questions and return structured actions that are saved into the existing local Memory Vault, Reminders, Support check-ins, Help Cards, and Phase 4 checklists, capsules, timeline, summaries, and drafts. It receives a limited snapshot of local workspace metadata and document text; imported Vision media itself remains local.\n\n## Architecture

`phase4.js` is maintained separately so Phase 1–3 source files remain untouched. The GitHub Pages workflow validates Phase 4 and appends it to the build copy of `app.js` only during deployment. This lets the existing application continue to use its current source while the deployed site receives the Phase 4 layer.

## Verification

The deployment workflow checks:
- Required Phase 1–4 files exist
- `app.js` syntax
- `vision.js` syntax
- `phase4.js` syntax
- Syntax again after the Phase 4 build attachment
- GitHub Pages artifact creation
- GitHub Pages deployment

## Storage note

Phase 4 stores its own data in `aether.phase4.workspace.v1` in browser local storage. Browser storage can be cleared or evicted. Use the Phase 4 export control for a backup of Phase 4 data, and continue using the existing AETHER backup controls for the earlier workspace.
