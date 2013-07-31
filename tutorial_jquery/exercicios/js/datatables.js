$(document).ready(function() {
	getFeed('http://sindmetau.org.br/site/index.php?format=feed&type=rss');
	//getFeed('http://feeds.arstechnica.com/arstechnica/index?format=xml');
	
});

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
	parseRSS(url,function(retorno) { preencherDados(retorno); });
}

function preencherDados(retorno) {
	var objRetorno = $(retorno);
	var aaData=[];
	
	$.each(objRetorno, function(i,val) {
		aaData.push([val.title,val.content]);
	});
	
	$('#grid').dataTable({
		"oLanguage": {
			"sUrl": "datatables.ptbr.txt" //url do arquivo de tradução
		},
		"sPaginationType": "full_numbers", //tipo de paginação
		"iDisplayLength": 3, //numero de linhas por pagina
		 "aaSorting": [ [0,'asc'] ], //nr do campo,ordem
		"aaData": aaData //dados
	});
	
} 

