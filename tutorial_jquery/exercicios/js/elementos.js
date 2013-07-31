$(document).ready(function() {
	$('.inputTexto').change(function () {
		if(this.value.length > 5) {
			alert('Mais de 5 caracteres!');
			this.value = '';
			this.focus();
		}
	});
	
	$('#btnOK').click(function () {
		alert('Submitou o form');
	});
	
	$('#btnLimpar').click(function () {
		$('.inputTexto').val('');
	});

	$('#divMostrar').click(function () {
		$('#form1').slideToggle();
	});
	
	$('#btnDados').click(function () {
		getDados(function (retorno) { preencherDados(retorno); });
	});
	
});

function getDados(callback) {
	$.get('js/dados.json', function (retorno) {
		callback(retorno);
	},"json");
};

function preencherDados(retorno) {
	$('#input1').val(retorno.Id);
	$('#input2').val(retorno.Nome);
}