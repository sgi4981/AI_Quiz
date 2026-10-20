const SPREADSHEET_ID = '1bhoqx4FT5s9XeB-FY87sDv2qWzFvhXbbHB_1AmfzteM';
const RESULTS_SHEET_NAME = 'Quiz Results';
const HEADERS = [
  'Quiz ID',
  'Timestamp (UTC)',
  'Score',
  'Total Questions',
  'Percent',
  'Question Number',
  'Question',
  'Selected Answer',
  'Correct Answer',
  'Is Correct'
];

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents);
    if (!Array.isArray(payload.answers) || payload.answers.length !== 10) {
      throw new Error('Expected exactly 10 quiz answers.');
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(RESULTS_SHEET_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(RESULTS_SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }

    const quizId = Utilities.getUuid();
    const timestamp = new Date().toISOString();
    const rows = payload.answers.map((answer) => [
      quizId,
      timestamp,
      Number(payload.score),
      Number(payload.total),
      Number(payload.percent),
      Number(answer.questionNumber),
      String(answer.question),
      String(answer.selectedAnswer),
      String(answer.correctAnswer),
      Boolean(answer.isCorrect)
    ]);

    sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, HEADERS.length).setValues(rows);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, quizId }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
