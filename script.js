function doGet() {
  var ss = SpreadsheetApp.openById("1vxAhwOqfhO7TyAf4skzcrH9kHjKyus7skfccHwi5gH8");
  var sheet = ss.getSheetByName("quran");
  var data = sheet.getDataRange().getValues();
  
  var jsonData = [];
  var headers = data[0];
  
  for (var i = 1; i < data.length; i++) {
    var obj = {};
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = data[i][j];
    }
    jsonData.push(obj);
  }
  
  return ContentService.createTextOutput(JSON.stringify(jsonData))
    .setMimeType(ContentService.MimeType.JSON);
}
