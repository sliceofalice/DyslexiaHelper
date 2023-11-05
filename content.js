let isFontActive = false;
let isContrastActive = false;
let fontSize = 16;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'toggleFont') {
        isFontActive = request.isActive;

        if (isFontActive) {
            applyFontStyle();
        } else {
            removeFontStyle();
        }
    } else if (request.action === 'increaseFont') {
        increaseFontSize();
    } else if (request.action === 'resetFont') {
        resetFontSize();
    } else if (request.action === 'decreaseFont') {
        decreaseFontSize();
    } else if (request.action === 'toggleContrast') {
        isContrastActive = request.isActive;

        if (isContrastActive) {
            applyContrastStyle();
        } else {
            removeContrastStyle();
        }
    }
});

let styleElement = null;

function applyFontStyle() {
  styleElement = document.createElement('style');
  styleElement.id = 'styleElement';
  styleElement.innerHTML = `
    * {
      font-family: 'Comic Sans MS' !important;
    }
  `;
  document.head.appendChild(styleElement);
}

function removeFontStyle() {
  if (styleElement) {
    document.head.removeChild(styleElement);
    styleElement = null;
  }
}

function increaseFontSize() {
  fontSize += 2; // Aumente o tamanho da fonte em 2 pixels
  updateFontSize();
}

function resetFontSize() {
  fontSize = 16; // Redefina o tamanho da fonte para o padrão
  updateFontSize();
}

function decreaseFontSize() {
  fontSize -= 2; // Diminua o tamanho da fonte em 2 pixels
  updateFontSize();
}

function updateFontSize() {
    document.body.style.fontSize = fontSize + 'px';
}

function applyContrastStyle() {
  styleElement2 = document.createElement('style');
  styleElement2.id = 'styleElement2';
  styleElement2.innerHTML = `
    * {
      background-color: white;
      color: black;
    }
  `;
  document.head.appendChild(styleElement2);
}

function removeContrastStyle() {
  if (styleElement2) {
    document.head.removeChild(styleElement2);
    styleElement2 = null;
  }
}


