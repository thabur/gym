# iPhone Setup

Best setup:

1. Put the `mobile-gym` folder somewhere that can be hosted as a small static site.
2. Open `index.html` from that hosted URL on the iPhone.
3. In Safari, tap Share, then Add to Home Screen.
4. Open it once before going to the gym so the offline cache is installed.

Good hosting options:

- GitHub Pages
- Netlify
- Vercel
- Any private static web host

What works offline after the first hosted load:

- Session tabs
- Set checkboxes
- Rest timer
- Elapsed timer
- Pain warning
- Built-in animated exercise demos
- Any demo videos that were already loaded once

Garmin use is optional:

- Start a Strength activity if you want the workout logged.
- Start Walk for the walk to and from the gym if you care about the commute.
- Do not use Garmin as the main session guide. The iPhone app is the session guide.

Video plan:

- The app already looks for 5-second MP4 clips in `assets/videos`.
- If a clip is not present, it shows an animated demo panel and form cues.
- Add real clips later using the filenames in `assets/videos/README.md`.

