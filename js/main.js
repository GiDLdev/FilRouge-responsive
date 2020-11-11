jQuery(function($){

	var angelFIRE = window.angelFIRE  || {};

	/* ==================================================
	   Mobile Navigation
	================================================== */
	var mobileMenuClone = $("#menu").clone().attr('id', 'navigation-mobile');

	angelFIRE.mobileNav = function(){
		var windowWidth = $(window).width();

		if( windowWidth <= 1365 ) {
			if( $("#mobile-nav").length > 0 ) {
				mobileMenuClone.insertAfter('#menu');
				$("#navigation-mobile #menu-nav").attr('id', 'menu-nav-mobile');
			}
		} else {
			$("#navigation-mobile").css('display', 'none');
			if ($("#mobile-nav").hasClass('open')) {
				$("#mobile-nav").removeClass('open');	
			}
		}
	};

	angelFIRE.listenerMenu = function(){
		$("#mobile-nav").on('click', function(e){
			$(this).toggleClass('open');

			if ($("#mobile-nav").hasClass('open')) {
				$("#navigation-mobile").css('display', 'block').addClass('select');

			} else {

			$("#mobile-nav").hasClass('close');
			$("#navigation-mobile").removeClass('open');
			$("#navigation-mobile").css('display', 'none');

			e.preventDefault();

			}
		});

		$("#menu-nav-mobile a").on('click', function(){
			$("#navigation-mobile").toggleClass('close');
			$("#mobile-nav").removeClass('open');
			$("#navigation-mobile").css('display', 'none');


		});
    };
    

    /* ==================================================
	   Navigation Fix
	================================================== */

	angelFIRE.nav = function(){
		var sticky = new Waypoint.Sticky({
	  		element: $('.sticky-nav')[0]
		});
    };


    /* ==================================================
		Init
    ================================================== */
    
	jQuery(function($){
		angelFIRE.nav();
		angelFIRE.mobileNav();
		angelFIRE.listenerMenu();
    });
	
	$(window).resize(function(){
		angelFIRE.mobileNav();
	}); 
});