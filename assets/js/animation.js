$(document).ready(function(){

	function animation(){
		//Procurando a div
		$('div.mosaico-single').each(function(){
			var posicaoDiv = $(this).offset().top;						//Pegando a posição da div
				alturaDiv = $(this).height();							//Pegando a altura da div
				alturaTela = $(window).height();						//Pegando altura da tela
				posicaoScroll = $(window).scrollTop() + alturaTela; 	//Pegando a posição do scroll
			//Se a posição do scroll for maior que a posicao da div
			if ((posicaoScroll - alturaDiv) >= posicaoDiv){
				//Fazendo a div aparecer
				$(this).css('opacity', '1').css('top', '0');
			}else {
				//Fazendo a div desaparecer
				$(this).css('opacity', '0').css('top', '-100px');
			}

		});
	}

	//Chamando a função animation assim que a página atualizar
	animation();

	//Chamando a função toda vez que a página for scrollada
	$(window).scroll(function(){
		animation();
	});
				
});