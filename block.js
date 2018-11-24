// block YouTube ads
(function() {
	console.log("Hiiii");
	try {
		if (document.querySelector('video').duration) {
			document.querySelector('video').currentTime = document.querySelector('video').duration;
			console.log("Skipped :3");
		};
	}
	catch(e) {
		console.log(e.message);
	}
}) ();
		