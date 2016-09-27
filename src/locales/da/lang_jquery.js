/* Danish initialisation for the jQuery UI date picker plugin. */
/* Written by Jan Christensen ( deletestuff@gmail.com). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.da = {
	closeText: "Luk",
	prevText: "&#x3C;Forrige",
	nextText: "Næste&#x3E;",
	currentText: "Idag",
	monthNames: [ "Januar","Februar","Marts","April","Maj","Juni",
	"Juli","August","September","Oktober","November","December" ],
	monthNamesShort: [ "Jan","Feb","Mar","Apr","Maj","Jun",
	"Jul","Aug","Sep","Okt","Nov","Dec" ],
	dayNames: [ "Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag" ],
	dayNamesShort: [ "Søn","Man","Tir","Ons","Tor","Fre","Lør" ],
	dayNamesMin: [ "Sø","Ma","Ti","On","To","Fr","Lø" ],
	weekHeader: "Uge",
	dateFormat: "dd-mm-yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.da );

return datepicker.regional.da;

} ) );
/* Danish translation for the jQuery Timepicker Addon */
/* Written by Lars H. Jensen (http://www.larshj.dk) */
(function ($) {
    $.timepicker.regional['da'] = {
        timeOnlyTitle: 'Vælg tid',
        timeText: 'Tid',
        hourText: 'Time',
        minuteText: 'Minut',
        secondText: 'Sekund',
        millisecText: 'Millisekund',
        microsecText: 'Mikrosekund',
        timezoneText: 'Tidszone',
        currentText: 'Nu',
        closeText: 'Luk',
        timeFormat: 'HH:mm',
        timeSuffix: '',
        amNames: ['am', 'AM', 'A'],
        pmNames: ['pm', 'PM', 'P'],
        isRTL: false
    };
    $.timepicker.setDefaults($.timepicker.regional['da']);
})(jQuery);
/*
	jQuery Colorbox language configuration
	language: Danish (da)
	translated by: danieljuhl
	site: danieljuhl.dk
*/
jQuery.extend(jQuery.colorbox.settings, {
	current: "Billede {current} af {total}",
	previous: "Forrige",
	next: "Næste",
	close: "Luk",
	xhrError: "Indholdet fejlede i indlæsningen.",
	imgError: "Billedet fejlede i indlæsningen.",
	slideshowStart: "Start slideshow",
	slideshowStop: "Stop slideshow"
});
//! moment.js locale configuration
//! locale : Danish [da]
//! author : Ulrik Nielsen : https://github.com/mrbase

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var da = moment.defineLocale('da', {
        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd [d.] D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[I dag kl.] LT',
            nextDay : '[I morgen kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[I går kl.] LT',
            lastWeek : '[sidste] dddd [kl] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'få sekunder',
            m : 'et minut',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dage',
            M : 'en måned',
            MM : '%d måneder',
            y : 'et år',
            yy : '%d år'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return da;

}));