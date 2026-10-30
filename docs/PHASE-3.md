# AETHER Phase 3 — AETHER Vision

## Visual library and explicit import

- Dedicated AETHER Vision workspace, separate from Phase 1 and Phase 2 views.
- Import multiple photos/videos with the browser file picker; select a folder where the browser supports directory selection.
- No automatic gallery scan or background media access. Only user-selected files are added.
- Store original media blobs in IndexedDB and searchable metadata in a separate localStorage namespace.
- Preserve Phase 1/2 workspace keys and data; Phase 3 uses its own storage namespace.

## Search, organization and previews

- Accurate photo/video/event/selection counters based on the local library.
- Search filenames, descriptions, captions, tags, event names and dates.
- Filter by media type and event; sort by newest, oldest or filename.
- Event-based collections with counts and one-click filtering.
- Image previews and in-page video playback.
- Edit caption, description, tags, event name and capture date.
- Selected item details include file size, media type, dimensions where available, date and saved descriptive metadata.

## Local visual utilities

- SHA-256 exact duplicate detection for supported files.
- Perceptual image hashing for visually similar photo grouping where the browser can decode the image to canvas.
- Image dimensions and basic file metadata.
- User-authored descriptions and tags provide practical searchable visual labels.
- Caption/description starters are editable and must not be represented as AI-generated visual recognition.

## Ask, voice and sharing

- Natural-language-style query parsing across the metadata the user has saved.
- Q&A answers are grounded in stored descriptions, tags, filenames, events and dates.
- Optional browser speech recognition for search where supported.
- Share selected photos/videos with the Web Share API when supported; otherwise download selected files individually.
- Export a JSON library index containing metadata only, never embedded media blobs.
- User action is required for every import, share, download and deletion.

## Privacy and implementation boundaries

- No cloud upload, cloud sync, remote AI service, automatic gallery scan or background monitoring.
- Browser file picker permissions are user-driven; browser support varies by device.
- Media blobs are stored in browser IndexedDB and may be removed by the user/browser; this is not a guaranteed backup. Keep original files and separate backups.
- Search/Q&A are metadata-based. This static version has no trained semantic image-recognition model and cannot reliably identify arbitrary objects, people or scenes without user-provided descriptions/tags.
- Perceptual hashes help group visually similar images; they are not a substitute for semantic recognition.
- The user controls which media is selected for sharing.

## Verification checklist

- Confirm app.js remains unchanged and Phase 1/2 data key is untouched.
- Check vision.js syntax and HTML IDs.
- Test IndexedDB add/read/delete, file previews, video playback, metadata edits, search, filters, event grouping, exact duplicate scan, similar-image scan, voice fallback, share fallback, and metadata export.
- Test on mobile Safari/Chrome and desktop browsers; file/folder picker and share support vary.
- Verify GitHub Actions validate-and-build and deploy jobs both succeed before calling the release deployed.
