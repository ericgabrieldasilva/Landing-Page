$(document).ready(function(){

	//Se clicar no botão, irá abrir o menu responsivo
	$('nav.menu-mobile h2, nav.menu-mobile a').click(function(){
		//Pegando o menu
		var links = $('nav.menu-mobile ul');
		$('header').css('transition', '.5s')

		if (links.is(':hidden') == true){
			//Se o menu estiver fechado, irá abrir e trocas o icone
			$('.fa').removeClass('fa-bars');
			$('.fa').addClass('fa-times');
			$('header').css('background-color', '#584EF9');
			$('body').css('overflow', 'hidden');
		} else{
			//Se o menu estover aberto, irá fechar e trocas o icone
			$('.fa').removeClass('fa-times');
			$('.fa').addClass('fa-bars');
			$('header').css('background-color', '#6C63FF');
			$('body').css('overflow', 'auto');
		}

		//Abrindo e fechando o menu
		links.slideToggle();

	});

	// Add smooth scrolling to all links
  	$("nav.menu-desktop a, nav.menu-mobile a").on('click', function(event) {

	    if (this.hash !== ''){
	    	event.preventDefault();
	    	var hash = this.hash;
	    	$('html, body').animate({
	    		scrollTop: $(hash).offset().top
	    	}, 800)
	    }
  	});

});