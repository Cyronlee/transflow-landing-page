<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1-ZqqPJFta7BRi6mAktAKbERhKkIOBE-T

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## API

### GET /api/version

Returns the latest version information for the TransFlow macOS app. Used for in-app update checking.

**Request:**

```
GET /api/version
```

**Response:**

```json
{
  "version": "1.0.0",
  "url": "https://github.com/cyronlee/transflow/releases/latest",
  "release_date": "2026-02-09"
}
```

| Field          | Type   | Description                          |
| -------------- | ------ | ------------------------------------ |
| `version`      | string | Semantic version of the latest release |
| `url`          | string | Download URL for the latest release  |
| `release_date` | string | Release date in `YYYY-MM-DD` format  |

**Source of Truth:** [`version.json`](version.json) in the project root. Update this file to publish a new version.
