function doGet(e) {
  return myFunction(e);
}

function myFunction(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle("Bible Study Web App");
}
