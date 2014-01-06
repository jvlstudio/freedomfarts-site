var CURRENTLY_PLAYING;

function did_click_fart_button (btn) {
	$('.glyphicon', btn).remove();

	var title = $(btn).text().toLowerCase();

	console.log("Playing " + title + "...");
	
	var player = document.getElementById('audioplayer');

	if (!player.paused && CURRENTLY_PLAYING === title) {
		player.pause();
		player.currentTime = 0;
		$('.glyphicon', btn).remove();
		return;
	}

	addAudioSource('#src_wav', title, 'wav');
	addAudioSource('#src_mp3', title, 'mp3');
	addAudioSource('#src_ogg', title, 'ogg');

	player.load();
	player.play();
	CURRENTLY_PLAYING = title;

	$(btn).prepend('<span class="glyphicon glyphicon-play">&nbsp;</span>');

	$(player).on('ended', function() {
		console.log("Finished " + title + "!");
		$('.glyphicon', btn).remove();
		$(player).off();
	});
}

function addAudioSource(srcid, title, ext) {
	var src = $(srcid);
	src.attr('src', '/audio/' + title + '.' + ext);
}