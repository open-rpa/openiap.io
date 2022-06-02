jQuery(document).ready(function() {
	jQuery(window).scroll(function() {
		var scroll = jQuery(window).scrollTop();

		if (scroll >= 100) {
			//clearHeader, not clearheader - caps H
			jQuery("header.header").addClass("fixeds");
		}
		else if (scroll < 100) {
			//clearHeader, not clearheader - caps H
			jQuery("header.header").removeClass("fixeds");
		}
	}); //missing );
});


jQuery(document).ready(function(){
  jQuery(".responsivemenubtn").click(function(){
    jQuery(this).toggleClass('open');
    jQuery(".top-links1").toggleClass('open');
  });
});