$(function() {
	getFeed('http://sindmetau.org.br/site/index.php?format=feed&type=rss');
});

$(document).ready(function () {
	$('#grid').dataTable({
		"sPaginationType": "full_numbers"
	});
	
})

function parseRSS(url, callback) {
	$.ajax({
	    url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
	    dataType: 'json',
	    success: function(data) {
	    	callback(data.responseData.feed);
	    }
	});
}

function getFeed(url) {
	parseRSS(url,function(retorno) { getConteudo(retorno); });
}

function getConteudo(retorno) {
	console.debug($(retorno).find('item'));
} 

