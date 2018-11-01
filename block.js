// block YouTube ads
(function() {
	console.log("Hiiii");
	try {
		if (document.querySelector('video').duration < 60) {
			document.querySelector('video').currentTime = document.querySelector('video').duration;
			console.log("Skipped :3");
		};
	}
	catch(e) {
		console.log(e.message);
	}
}) ();
		