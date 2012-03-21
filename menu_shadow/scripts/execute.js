/*

Main Javascript for jQuery Realistic Hover Effect
Created by Adrian Pelletier
http://www.adrianpelletier.com

*/

/* =Realistic Navigation
============================================================================== */

	// Begin jQuery
	
	$(document).ready(function() {

				
	/* =Shadow Nav
	-------------------------------------------------------------------------- */
	
		// Append shadow image to each LI
		
		$("#nav-shadow li").append('<img class="shadow" src="icons-shadow.jpg" width="81" height="27" alt="" />');
		
		//alert($("#nav-shadow-hover"));
	
		// Animate buttons, shrink and fade shadow
		
		$("#nav-shadow li").hover(function() {
			var me = $(this);
		    console.log(this);
		    //$(e).find("a").addClass("nav-shadow-hover", 250);
		    //me.find("a").filter(':not(:animated)').animate({ marginTop: "-14px" });
		    console.log(this.style);
		    me.find("a").stop().animate({ marginTop: "-14px" });
		    me.find("img.shadow").stop().animate({ width: "80%", height: "20px", marginLeft: "8px", opacity: 0.25 }, 250);
		},function(){
			var me = $(this);
			me.find("a").stop();
		    //$(e).find("a").removeClass("nav-shadow-hover", 250);
		    //me.find("a").animate({ marginTop: "0px" });
		    me.find("a").stop().animate({ marginTop: "-0px" });
		    me.find("img.shadow").stop().animate({ width: "100%", height: "27px", marginLeft: "0", opacity: 0.75 }, 250);
		});
						
	// End jQuery
	
	});