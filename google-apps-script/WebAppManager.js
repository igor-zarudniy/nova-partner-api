const SPREADSHEET_ID = '1-vP_5Tgwtn7s7jOjvi03jEMYug8x9WCCkx4GfJmBl78';

const SHEET_NAMES = {
  NEW_DRIVERS: 'new-drivers',
  GENERATED_REPORT: 'generated-report',
  COMPLETE_DRIVERS_LIST: 'complete-drivers-list'
};

class WebAppManager {
  static doPost(e) {
    try {
      if (!e.postData || !e.postData.contents) {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          message: 'No data received'
        })).setMimeType(ContentService.MimeType.JSON);
      }
      
      const requestData = JSON.parse(e.postData.contents);
      const endpointType = e.parameter.endpoint || requestData.endpoint || '';
      
      let sheetName;
      
      if (endpointType === 'new-drivers' || endpointType.includes('new-drivers')) {
        sheetName = SHEET_NAMES.NEW_DRIVERS;
      } else if (endpointType === 'generated-report' || endpointType.includes('generated-report')) {
        sheetName = SHEET_NAMES.GENERATED_REPORT;
      } else if (endpointType === 'complete-drivers-list' || endpointType.includes('complete-drivers-list')) {
        sheetName = SHEET_NAMES.COMPLETE_DRIVERS_LIST;
      } else {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          message: 'Unknown endpoint. Please specify endpoint parameter.'
        })).setMimeType(ContentService.MimeType.JSON);
      }
      
      const data = requestData.data || requestData;
      
      const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
      let sheet = spreadsheet.getSheetByName(sheetName);
      
      if (!sheet) {
        sheet = spreadsheet.insertSheet(sheetName);
      }
      
      const jsonString = JSON.stringify(data, null, 2);
      sheet.getRange('A1').setValue(jsonString);
      
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: `Data posted to ${sheetName} successfully`
      })).setMimeType(ContentService.MimeType.JSON);
      
    } catch (error) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'Error processing request',
        error: error.toString()
      })).setMimeType(ContentService.MimeType.JSON);
    }
  }
}

function doPost(e) {
  return WebAppManager.doPost(e);
}

