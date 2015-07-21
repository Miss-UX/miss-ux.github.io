jQuery(document).ready(function(){

	/* ==============================================
	jQuery to collapse the navbar on scroll
	=============================================== */
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	/* ==============================================
	jQuery for page scrolling feature
	=============================================== */
	$(function() {
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		
		//Scrolling	
		$(document).ready(
		function() {  
			$("body").niceScroll({
				cursorcolor:"#bcbcbc",
				cursorborder: "0",
				cursorborderradius: "0"
				
				});
			}
		);
		
	});
	
	new WOW().init();

	/* ==============================================
	Pretty Photo
	=============================================== */
    jQuery(".work-img a[data-rel^='prettyPhoto']").prettyPhoto({
        theme: "facebook",
    });
	
	/* ==============================================
	Video Background
	=============================================== */
	$(".player").mb_YTPlayer();
	
	/* ==============================================
	Our Portfolio / isotope Scripts
	===============================================	*/
	
    $(function(){
      
      var $container = $('.items').imagesLoaded( function() {

		  $container.isotope({
			itemSelector : '.work'
		  });
	  
	  });
      
      
      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });

      
    });
	
});



