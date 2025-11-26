# Netlify Setup Instructions

## Environment Variables

After deploying to Netlify, configure the following environment variable:

### GOOGLE_APPS_SCRIPT_URL

**Value:**
```
https://script.google.com/macros/s/AKfycbyu81_jvRxwr3xVFXEH_7W914InpSLeJrkVtpZv5CDXtRKq6-5PjBLrzcEhnTUVKMUFlg/exec
```

**How to set:**
1. Go to Netlify Dashboard
2. Select your site
3. Go to Site settings → Environment variables
4. Click "Add a variable"
5. Key: `GOOGLE_APPS_SCRIPT_URL`
6. Value: `https://script.google.com/macros/s/AKfycbyu81_jvRxwr3xVFXEH_7W914InpSLeJrkVtpZv5CDXtRKq6-5PjBLrzcEhnTUVKMUFlg/exec`
7. Click "Save"
8. Redeploy your site (or trigger a new deployment)

## Google Apps Script Setup

The Google Apps Script Web App is already configured and deployed at the URL above.

The script will write data to Google Spreadsheet:
- **Spreadsheet ID:** `1-vP_5Tgwtn7s7jOjvi03jEMYug8x9WCCkx4GfJmBl78`
- **Sheets:** `new-drivers`, `generated-report`, `complete-drivers-list`
- **Data location:** Cell A1 of each sheet (as JSON)

