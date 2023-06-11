// popup.js
  
document.addEventListener("DOMContentLoaded", function () {
  var changeColorButton = document.getElementById("changeColorButton");
  changeColorButton.addEventListener("click", function () {
    console.log("popup.js envió el mensaje");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { type: "colors-divs" });
    });
  });

  console.log("se hizo clic en el botón LinkedIn");
  var linkedinButton = document.getElementById("linkedinButton");
  linkedinButton.addEventListener("click", function () {
    chrome.tabs.create({ url: "https://www.linkedin.com/in/eduard-duarte-s/" });
  });
});
