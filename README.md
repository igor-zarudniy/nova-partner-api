# Nova Partner API

API endpoints for Nova Partner application.

## Endpoints

### 1. New Drivers
**POST** `/api/new-drivers`

Endpoint for receiving new drivers data.

**Request Body:**
```json
{
  "drivers": [
    {
      "id": "string",
      "name": "string",
      "license": "string"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "New drivers data received successfully",
  "data": {}
}
```

### 2. Generated Report
**POST** `/api/generated-report`

Endpoint for receiving generated report data.

**Request Body:**
```json
{
  "reportId": "string",
  "reportData": {}
}
```

**Response:**
```json
{
  "success": true,
  "message": "Generated report data received successfully",
  "data": {}
}
```

### 3. Complete Drivers List
**POST** `/api/complete-drivers-list`

Endpoint for receiving complete drivers list data.

**Request Body:**
```json
{
  "drivers": [
    {
      "id": "string",
      "name": "string",
      "status": "string"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Complete drivers list data received successfully",
  "data": {}
}
```

## Installation

```bash
npm install
```

## Running Locally

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

## Environment Variables

Create a `.env` file:

```
PORT=3000
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

**Important:** Set `GOOGLE_APPS_SCRIPT_URL` in Netlify environment variables after deployment.

## Deployment

### Option 1: Netlify Functions (Recommended for Netlify)

The project includes Netlify Functions in the `netlify/functions/` directory. These will automatically be deployed when you push to GitHub and connect to Netlify.

Endpoints will be available at:
- `/.netlify/functions/new-drivers`
- `/.netlify/functions/generated-report`
- `/.netlify/functions/complete-drivers-list`

### Option 2: Express Server

For local development or other hosting platforms, use the Express server:

```bash
npm start
```

The server will run on `http://localhost:3000` (or the PORT specified in `.env`).

## Google Apps Script Setup

1. Open Google Apps Script (script.google.com)
2. Create a new project
3. Copy the code from `google-apps-script/WebAppManager.js` into the script editor
4. Deploy as Web App:
   - Click "Deploy" → "New deployment"
   - Choose type "Web app"
   - Set "Execute as" to "Me"
   - Set "Who has access" to "Anyone"
   - Click "Deploy"
5. Copy the Web App URL and set it as `GOOGLE_APPS_SCRIPT_URL` environment variable in Netlify

The script will automatically create sheets in Google Spreadsheet with ID: `1-vP_5Tgwtn7s7jOjvi03jEMYug8x9WCCkx4GfJmBl78`

Sheet names:
- `new-drivers`
- `generated-report`
- `complete-drivers-list`

Data will be posted to cell A1 of each respective sheet as JSON.

## GitHub Deployment

1. Push the code to GitHub repository
2. Connect the repository to Netlify
3. Set `GOOGLE_APPS_SCRIPT_URL` environment variable in Netlify dashboard:
   - Go to Site settings → Environment variables
   - Add `GOOGLE_APPS_SCRIPT_URL` with your Google Apps Script Web App URL
4. Netlify will automatically detect and deploy the functions
5. Your endpoints will be available at your Netlify domain

## Architecture

1. External service sends POST request to Netlify endpoint
2. Netlify function forwards the request to Google Apps Script Web App
3. Google Apps Script processes the data and writes it to Google Sheets

