# Núcleo — The Light Within
### Bible Study App | Faith · Growth · Community

---

## 📦 What's in This Package

```
nucleo-app/
├── dist/               ← DEPLOY THIS FOLDER to your host
│   ├── index.html
│   ├── manifest.json
│   ├── sw.js           ← Service worker (offline support)
│   ├── assets/         ← Bundled JS & CSS
│   └── icons/          ← All PWA icons (72px – 512px + splashes)
├── src/
│   ├── App.jsx         ← Full app source
│   └── main.jsx        ← Entry point
├── public/
│   ├── manifest.json
│   ├── sw.js
│   └── icons/
├── package.json
├── vite.config.js
└── scripts/
    └── generate-icons.js
```

---

## 🚀 Option 1 — Publish to a Website (Fastest)

### Deploy to Netlify (Free, takes 2 minutes)
1. Go to **https://netlify.com** and create a free account
2. Click **"Add new site" → "Deploy manually"**
3. Drag and drop the **`dist/`** folder onto the page
4. Your app is live instantly at a Netlify URL (e.g. `nucleo-abc123.netlify.app`)
5. Optional: add a custom domain in Site Settings → Domain Management

### Deploy to Vercel (Also Free)
1. Go to **https://vercel.com** and sign in with GitHub
2. Install Vercel CLI: `npm i -g vercel`
3. From the project root: `vercel --prod`
4. Follow prompts — select `dist` as the output directory

### Deploy to GitHub Pages
1. Create a new GitHub repo and push this project
2. In repo Settings → Pages → set source to "GitHub Actions"
3. Add `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Pages
on: push
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: { node-version: 20 }
      - run: npm install && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

> ⚠️ **HTTPS Required for PWA**: Netlify/Vercel/GitHub Pages all provide HTTPS automatically. You MUST use HTTPS for the app to install as a PWA.

---

## 📱 Option 2 — Install on iPhone (iOS Safari)

The app works as a **Progressive Web App (PWA)** — no App Store required.

### Steps:
1. Open the app URL in **Safari** on your iPhone (Chrome on iOS won't work for PWA install)
2. Tap the **Share** button (box with arrow at bottom of screen)
3. Scroll down and tap **"Add to Home Screen"**
4. Name it **"Núcleo"** and tap **Add**
5. The app icon now appears on your home screen — tap to open full-screen

### What you get on iOS:
- Full-screen app (no Safari browser bar)
- Works offline (cached content)
- App icon with Lords Brigade emblem
- Custom splash screen on launch
- Saves all your notes, settings, and bookmarks locally

> 📌 iOS PWA Tip: iOS saves PWA data in Safari's storage. If you clear Safari data, app data resets. For full persistence, a backend sync (Phase 2) is recommended.

---

## 📱 Option 3 — Install on Android (Chrome)

1. Open the app URL in **Chrome** on your Android device
2. Chrome will show an **"Add to Home Screen"** banner automatically
3. Or tap the **3-dot menu → "Add to Home Screen"** / **"Install App"**
4. Tap **Install** — the app icon appears on your home screen
5. Opens full-screen like a native app

### Android PWA advantages over iOS:
- Better offline support
- Background sync works
- Push notifications (when backend added)
- Can be listed on Google Play Store via TWA (Trusted Web Activity)

---

## 🛠️ Option 4 — Run Locally for Development

```bash
# From the project root:
npm install
npm run dev
# Open http://localhost:5173 in your browser
```

To rebuild production:
```bash
npm run build
# Output goes to /dist — ready to deploy
```

To regenerate icons (if you update icon.svg):
```bash
npm install sharp --save-dev
node scripts/generate-icons.js
```

---

## 🍎 Option 5 — Native App (Future / Phase 2)

For a true native app on the App Store or Google Play:

**Capacitor (Recommended — wraps the PWA in a native shell)**
```bash
npm install @capacitor/core @capacitor/cli
npm install @capacitor/ios @capacitor/android
npx cap init Nucleo com.nucleo.app
npm run build
npx cap add ios
npx cap add android
npx cap sync
npx cap open ios     # Opens in Xcode — build & submit to App Store
npx cap open android # Opens in Android Studio — build APK
```

**Requirements for App Store:**
- Apple Developer account ($99/year)
- Mac with Xcode

**Requirements for Google Play:**
- Google Play Developer account ($25 one-time)
- Android Studio

---

## 🔧 Customization

### Change theme defaults
Edit `src/App.jsx` → `THEMES` object at the top.

### Add real Bible API
Replace `SAMPLE_VERSES` with API calls to:
- **Bible.api.Bible** (https://scripture.api.bible) — free tier available
- **ESV API** (https://api.esv.org) — free for non-commercial
- **YouVersion API** — for official versions

### Add church database
Replace `MOCK_CHURCHES` with calls to:
- **Google Places API** — search "church near [zip]"
- **PCUSA Church Finder**, **SBC Locator**, or any denomination API

### Enable push notifications
1. Add a backend (Node/Firebase)
2. Implement VAPID keys
3. Update `sw.js` push handler

---

## 📋 App Features Summary

| Feature | Status |
|---|---|
| Bible reading (EN + ES, 14 versions) | ✅ Prototype |
| Verse highlighting & bookmarks | ✅ Working |
| Men's / Women's / Couples groups | ✅ Working |
| Study project scheduling | ✅ Working |
| Group calendar | ✅ Working |
| Text notes (dated, named) | ✅ Working |
| Audio notes (tap-to-record) | ✅ Working |
| Finger-draw notes | ✅ Working |
| Photo gallery | ✅ Working |
| 3 color themes (Oscuro/Luminoso/Tierra) | ✅ Working |
| System theme auto-detection | ✅ Working |
| WhatsApp share integration | ✅ Working |
| Email group reminders | ✅ Working |
| Church feed connection | ✅ Prototype |
| Church schedule → Calendar sync | ✅ Working |
| Find churches by ZIP | ✅ Prototype |
| Mental health / recovery centers | ✅ Prototype |
| Offline support (PWA) | ✅ Working |
| Local data persistence (localStorage) | ✅ Working |
| Multi-profile support | ✅ Working |
| Real Bible API integration | 🔲 Phase 2 |
| Real church database | 🔲 Phase 2 |
| Push notifications | 🔲 Phase 2 |
| Teen group section | 🔲 Phase 2 |
| Native App Store version | 🔲 Phase 2 |
| Cloud sync / backend | 🔲 Phase 2 |
| Celebrate Recovery full module | 🔲 Phase 2 |

---

## 🙏 About Núcleo

**Núcleo** (Spanish: *core* / *nucleus*) — built on faith in Jesus Christ, not religion or denomination. Open to all who seek the Word.

*"Núcleo — The Light Within"*

Logo: Lords Brigade emblem — the Celtic knot cross, heart, and crown, rendered in gold.
