/*!
 * jQuery Collapser 1.0.0
 *
 * Copyright (c) 2010 Simon "Wallenium" Wallmann
 * Licensed under the LGPL license.
 * http://docs.jquery.com/License
 *
 * $Rev$
 * $Date::             $
 *
 */
(function($){
	$.fn.extend({

		//pass the options variable to the function
		jcollapser: function(options) {
			
			//Set the default values, use comma to separate the settings, example:
			var defaults = {
				state			: 'active',
				persistence		: true
			}
			
			var debug			= true;
			var options 		= $.extend(defaults, options);
			var o				= options;
			var cookie_name		= 'jcollapser_' + this.attr("id");
			var state			= $.cookie(cookie_name);
			var container		= this;
			state				= (state) ? state : options.state;
			
			//Collapse the container on load if needed
			$('.toggle_container', this).hide();
			if(state == 'active'){
				$('.toggle_container', this).show();
			}
			
			// add the active class to the active state..
			if($('.toggle_container', this).is(":visible")){
				$('.toggle_button', this).addClass("active");
			}
	
			//Slide up and down on click
			$('.toggle_button', this).click(function(){
				$('.toggle_container', container).slideToggle("slow", function() {
				if(options.persistence){
					if($('.toggle_container', container).is(":visible")){
							$.cookie(cookie_name, 'active', { expires: 365 });
					}else{
						$.cookie(cookie_name, null, { expires: 365 });
						$.cookie(cookie_name, 'inactive', { expires: 365 });
					}
					}
			  });
				$(this).toggleClass("active");
			});
		}
	});
})(jQuery);