function skip() {
	chrome.tabs.query({
		active: true,
		lastFocusedWindow: true
	}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {
			// code: 'console.log("Heeeeellllloooooo")'
			file: 'block.js'
		});
	});
}

function stream() {
	// TODO: add unlimited music stream mode
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#skip').addEventListener(
      'click', skip);
  document.querySelector('#stream').addEventListener(
      'click', stream);
});