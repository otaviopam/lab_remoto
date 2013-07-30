$(function() {
	$('#tabs').tabs({
		load: function (event,ui) {
			$('#btnJavascript1').click(function () {
				$('#exemploJavascript1').slideToggle();
			});
		}
	});
	
	
});