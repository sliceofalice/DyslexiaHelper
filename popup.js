window.addEventListener('DOMContentLoaded', function(){

  let isFontActive = false;
  let isContrastActive = false;
  let fontSize = 16;

  document.getElementById('activateButton').addEventListener('click', function() {
      isFontActive = !isFontActive;
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleFont', isActive: isFontActive });
      });
      document.getElementById('activateButton').textContent = isFontActive ? 'Desativar Fonte' : 'Ativar Fonte';
  });

  document.getElementById('increaseButton').addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'increaseFont' });
      });
  });

  document.getElementById('resetButton').addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'resetFont' });
      });
  });

  document.getElementById('decreaseButton').addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'decreaseFont' });
      });
  });

  document.getElementById('contrastButton').addEventListener('click', function() {
      isContrastActive = !isContrastActive;
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleContrast', isActive: isContrastActive });
      });
      document.getElementById('contrastButton').textContent = isContrastActive ? 'Desativar Contraste' : 'Ativar Contraste';
  });

})