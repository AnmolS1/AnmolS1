$(document).on('scroll', function() {
	if ($(window).scrollTop() > 5) {
		$('#navbar').removeClass('attopbar');
		$('#navbar').addClass('scrolledbar');
	} else {
		$('#navbar').addClass('attopbar');
		$('#navbar').removeClass('scrolledbar');
	}

	
});

function openNav() {
	document.getElementById("overlay").style.width = "100%";
}

function closeNav() {
	document.getElementById("overlay").style.width = "0%";
}