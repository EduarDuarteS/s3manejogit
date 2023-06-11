// content.js este es el archivo de contenido javaScript


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log("content.js se ejecutó");
    console.log("message:", message);
    var container = document.querySelector('.app-header__rightside');
    var firstButton = container.querySelector('button:first-child');
    console.log(firstButton);
    firstButton.click();
    
    switch (message.type) {
      case "colors-divs":
        var divs = document.querySelectorAll("div");
        if (divs.length === 0) {
          alert("There are no any divs in the page.");
        } else {
          for (var i = 0; i < divs.length; i++) {
            divs[i].style.backgroundColor = message.color;
          }
        }
        break;
    }
  });
  

