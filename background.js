// background.js

// omnibox
chrome.omnibox.onInputChanged.addListener(function (text, suggest) {
    suggest([{ content: "color-divs", description: "Make everything red" }]);
  });
  chrome.omnibox.onInputEntered.addListener(function (text) {
    if (text == "color-divs") colorDivs();
  });
  // listening for an event / one-time requests
  // coming from the popup
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.type) {
      case "color-divs":
        colorDivs();
        break;
    }
    return true;
  });
  // listening for an event / long-lived connections
  // coming from devtools
  chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
      switch (port.name) {
        case "color-divs-port":
          colorDivs();
          break;
      }
    });
  });
  // send a message to the content script
  var colorDivs = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { type: "colors-divs", color: "#F00" }, function (response) {
        // Manejar la respuesta si es necesario
      });
    });
  };
  
  
