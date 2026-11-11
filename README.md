# Shopping List

A lightweight **progressive web app (PWA)** for grocery lists. Add items in **English or Lithuanian** (comma- or newline-separated); the app sorts them into categories, remembers your list offline, and works on mobile or desktop.

## Live demo

After enabling [GitHub Pages](https://docs.github.com/en/pages) for this repo (root or `/docs`), open:

`https://<username>.github.io/shopping-list/`

## Features

- Bulk add: type or paste many items at once
- Automatic categories: Fruit & Vegetables, Meat & Fish, Dairy, Bakery, Pasta & Rice, Drinks, Household, Frozen, Other
- Lithuanian-friendly matching (stems and word endings, diacritic-insensitive)
- Tap an item to tick it off; delete individual items; **Clear ticked** or **Clear all** (with confirmation)
- Data stored in **localStorage** on your device
- **Offline-first**: service worker caches the app after the first visit

## Install as an app

1. Open the site in **Chrome**, **Edge**, or **Safari** on your phone.
2. Use **Add to Home Screen** / **Install app** from the browser menu.
3. Launch it like any other app—no app store required.

## Run locally

No build step. From this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080/`. The service worker needs a real origin (localhost is fine); opening `index.html` as a `file://` URL will not register the worker.

## Files

| File | Purpose |
|------|---------|
| `index.html` | UI, categorisation logic, and persistence (single file) |
| `sw.js` | Service worker for offline caching |
| `manifest.webmanifest` | PWA manifest |
| `icon.svg`, `icon-192.png`, `icon-512.png` | App icons |

## License

Use freely for personal or educational purposes.
