var PLAYER = document.getElementById('audioplayer');
var CURRENTLY_PLAYING = null;

function did_click_fart_button (btn) {
	if (!CURRENTLY_PLAYING) {
		$('#firstbtn').tooltip('destroy');
	}

	$('.fa-music', CURRENTLY_PLAYING).remove();

	var title = $(btn).text().toLowerCase();

	if (!PLAYER.paused && CURRENTLY_PLAYING === btn) {
		stopAudioForButton(btn);
		return;
	}

	addAudioSources(title);

	playAudioForButton(btn);
}

function playAudioForButton(btn) {
	PLAYER.load();
	PLAYER.play();
	CURRENTLY_PLAYING = btn;

	$(btn).prepend('<span class="fa fa-music">&nbsp;&nbsp;</span>');

	$(PLAYER).on('ended', function() {
		$('.fa-music', btn).remove();
		$(PLAYER).off();
	});
}

function stopAudioForButton(btn) {
	PLAYER.pause();
	PLAYER.currentTime = 0;
	$('.fa-music', btn).remove();
}

function addAudioSources(title) {
	addAudioSourceType('#src_wav', title, 'wav');
	addAudioSourceType('#src_mp3', title, 'mp3');
	addAudioSourceType('#src_ogg', title, 'ogg');
}

function addAudioSourceType(srcid, title, ext) {
	var src = $(srcid);
	src.attr('src', '/audio/' + title + '.' + ext);
}

function onLoad() {
	$('#firstbtn').tooltip('show');
}
