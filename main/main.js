$(function() {
	//getFeed('http://sindmetau.org.br/site/index.php?format=feed&type=rss');
	getFeed('http://feeds.arstechnica.com/arstechnica/index?format=xml');
	
});

//$(document).ready(function () {
//	$('#grid').dataTable({
//		"sPaginationType": "full_numbers"
//	});
//	
//})

function parseRSS(url, callback) {
	$.ajax({
		//&num=10
	    url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=?&q=' + encodeURIComponent(url),
	    dataType: 'json',
	    success: function(data) {
	    	callback(data.responseData.feed.entries);
	    }
	});
}

function getFeed(url) {
	parseRSS(url,function(retorno) { getConteudo(retorno); });
}

function getConteudo(retorno) {
	//console.debug($(retorno));
//	console.debug(JSON.stringify($(retorno),null,2));

	var objRetorno = $(retorno);
	var aaData=[];
	
//	console.debug(objRetorno);
	
	$.each(objRetorno, function(i,val) {
		aaData.push([val.title,val.content]);
		//console.debug(val.title);
	});
	
//	console.debug(aaData);

	$('#grid').dataTable({
		"sPaginationType": "full_numbers",
		"aaData": aaData
	});
	
	
//	$('#grid').dataTable({
//		"sPaginationType": "full_numbers",
//		"aaData": JSON.stringify($(retorno),null,2)
//	});
	
} 

