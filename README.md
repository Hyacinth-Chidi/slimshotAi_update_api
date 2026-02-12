# SlimShotAI Update Checker API

A lightweight API to serve update information to the SlimShotAI mobile app.

## 🚀 Deployment

This project is optimized for **Vercel**.

1.  Push this repo to GitHub.
2.  Import the project in Vercel.
3.  Deploy (Vercel automatically detects `vercel.json` and `api/index.js`).

## 🛠️ Usage

### API Endpoint

`GET /api/update`

**Response:**

```json
{
  "latestVersion": "1.0.0",
  "latestBuildNumber": 1,
  "forceUpdate": false,
  "title": "SlimShotAI is up to date!",
  "releaseNotes": ["Initial release"],
  "updateUrl": "https://play.google.com/store/apps/details?id=com.slimshot.ai"
}
```

## 📦 How to Push an Update

1.  Edit `data/update.json`:
    - Change `latestVersion` (e.g., `"1.0.1"`)
    - Change `latestBuildNumber` (must be higher than current app build)
    - Add new `releaseNotes`
2.  Commit and push to GitHub.
3.  Vercel will auto-deploy the change.
4.  The app will see the new version on next launch (after 7-day cache expires or on fresh install).

## 🏃 Local Development

```bash
npm install
npm run dev
# Server runs at http://localhost:3000/api/update
```
