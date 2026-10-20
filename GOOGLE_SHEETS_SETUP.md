# Enable quiz result saving to Google Sheets

The quiz now captures each question, the selected answer, the correct answer, and whether the answer was correct. The Apps Script endpoint writes one row per answer (10 rows per completed quiz) to a new **Quiz Results** tab in the spreadsheet. The timestamp is recorded by Google Apps Script in UTC. Existing tabs are left untouched.

## Setup

1. Open [Google Apps Script](https://script.google.com/) while signed in to an account that can edit the target spreadsheet.
2. Create a new project and replace its starter code with the contents of [google-sheets-web-app.gs](google-sheets-web-app.gs).
3. Save the project, choose **Deploy → New deployment**, and select **Web app**.
4. Set **Execute as** to **Me**. Set access to **Anyone** so the booth webpage can submit results without a Google sign-in. This makes the deployment URL a public write endpoint; do not use it for sensitive data, and keep the sheet free of personal information.
5. Deploy, authorize the script to access the spreadsheet, and copy the web app URL ending in `/exec`.
6. In [script.js](script.js), assign that URL to `GOOGLE_SHEETS_WEB_APP_URL` near the top of the file.
7. Reload the quiz page and complete all 10 questions. The script creates the **Quiz Results** tab and its headers on the first submission.

The webpage uses a no-CORS request to work with the Apps Script web app from a static site. Its status message can confirm that the request was sent, but the browser cannot read the endpoint's response to verify that Google accepted it; check the sheet after a test run.
