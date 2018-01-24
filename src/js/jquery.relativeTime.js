/*!
 * jQuery relativeTime v1.0.1
 *
 * Copyright 2018 Eqdkp-Plus Dev Team
 */
(function($) {

	var relativeTime = {
		_elements: null,

		_selector: 'time.datetime',

		_settings: {
			disableAtDiff: 518400,
			debug: 0,
		},

		_domInserted: 0,

		_domNodeInserted: function(){
			if (this._settings.debug) console.log("dom");
			
			this._domInserted = 1;
		},

		init: function (options, selector){
			this._settings = options;
			this._selector = selector;
			
			this._elements = $(selector);
			this._refresh();
			
			$("html").bind("DOMNodeInserted", function( e ) {
				if (e.target.className != "user_time") {
					$.proxy(relativeTime, "_domNodeInserted")();
				}
			});
			
			this._periodic();
			this._periodicDomInserted();
		},
		
		_periodic: function (){
			if (this._settings.debug) console.log("periodic");
			
			this._refresh();
		
			window.setTimeout($.proxy(function() {
				relativeTime._periodic();
			}), 60000);
		},
		
		_periodicDomInserted: function() {
			if (this._domInserted){
				this._elements = $(this._selector);
				this._refresh();
				
				this._domInserted = 0;	
			}
			
			window.setTimeout($.proxy(function() {
				relativeTime._periodicDomInserted();
			}), 500);
		},
		
		_refresh: function (){
			if (this._settings.debug) console.log("refresh");
						
			this._elements.each($.proxy(this._refreshElement, this));
		},
		
		_refreshElement: function(index, element){
			var $element = $(element);
			timestamp = moment($element.attr('datetime'));
			unix = moment().unix();
			if (moment.isMoment(timestamp)){
				delta = unix - timestamp.unix();
				
				if (this._settings.debug) console.log("Delta: "+delta);
				if (this._settings.disableAtDiff){
					if (delta <= this._settings.disableAtDiff){
						$element.html(timestamp.fromNow());
					}
				}

			}
			
		}
		
		
	};
	
	$.fn.relativeTime = function(selector, options ) {

		// Establish our default settings
		var settings = $.extend({
			disableAtDiff	: 518400,
			debug: 0,
		}, options);

		relativeTime.init(settings, selector);
		return this;
	};
}(jQuery));
