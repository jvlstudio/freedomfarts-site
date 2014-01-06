
function did_click_fart_button (btn) {
	var title = $(btn).text().toLowerCase();
	
	console.log("Playing " + title + "...");

	addAudioSource('#src_wav', title, 'wav');
	addAudioSource('#src_mp3', title, 'mp3');
	addAudioSource('#src_ogg', title, 'ogg');

	document.getElementById('audioplayer').load();
	document.getElementById('audioplayer').play();
}

function addAudioSource(srcid, title, ext) {
	var src = $(srcid);
	src.attr('src', '/audio/' + title + '.' + ext);
}