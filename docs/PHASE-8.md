# Phase 8 — AETHER Access

## Goal
Make AETHER usable through multiple interaction styles without requiring camera, microphone or AI access.

## Capabilities
- Separate persistent accessibility profile: larger text, high contrast, reduced motion, low-distraction layout and strong focus indicators.
- Optional browser voice navigation for local page navigation and scrolling.
- Optional camera-based head pointer using MediaPipe Face Landmarker, with adjustable dwell-to-activate.
- Optional double-blink activation for a focused button or link; disabled by default.
- Live announcements, keyboard shortcut, Escape-to-stop, visible permission/status feedback and camera shutdown controls.
- Basic structural accessibility audit for landmarks, headings, image alternatives and accessible control names.

## Privacy and limitations
Camera and microphone are opt-in and browser permission-gated. Face-landmark assets are downloaded when camera mode starts; this module does not record or upload camera frames. Tracking accuracy depends on lighting, camera placement, browser/device performance and model availability. Browser speech recognition support and privacy behavior vary by browser. The static audit is not a WCAG conformance claim. Manual keyboard-only and NVDA, VoiceOver and TalkBack testing is required.

## Verification checklist
- [ ] Legacy phase navigation and data remain intact.
- [ ] Preferences persist after reload.
- [ ] Alt+Shift+A opens Access; Escape stops assistive controls.
- [ ] Voice requires explicit start and microphone permission.
- [ ] Camera remains off until explicit start; Stop releases all media tracks.
- [ ] Head pointer, dwell and double-blink are tested for false activations.
- [ ] Screen-reader manual tests are completed on target platforms.
