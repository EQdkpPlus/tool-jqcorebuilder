/* Italian initialisation for the jQuery UI date picker plugin. */
/* Written by Antonello Pasella (antonello.pasella@gmail.com). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.it = {
	closeText: "Chiudi",
	prevText: "&#x3C;Prec",
	nextText: "Succ&#x3E;",
	currentText: "Oggi",
	monthNames: [ "Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno",
		"Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre" ],
	monthNamesShort: [ "Gen","Feb","Mar","Apr","Mag","Giu",
		"Lug","Ago","Set","Ott","Nov","Dic" ],
	dayNames: [ "Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato" ],
	dayNamesShort: [ "Dom","Lun","Mar","Mer","Gio","Ven","Sab" ],
	dayNamesMin: [ "Do","Lu","Ma","Me","Gi","Ve","Sa" ],
	weekHeader: "Sm",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.it );

return datepicker.regional.it;

} ) );
/* Italian initialization for the jQuery UI multiselect plugin. */
/* Written by Vincenzo Farruggia(mastropinguino@networky.net). */

(function ( $ ) {

$.extend($.ech.multiselect.prototype.options, {
	checkAllText: 'Seleziona tutto',
	uncheckAllText: 'Deseleziona tutto',
	noneSelectedText: 'Seleziona le opzioni',
	selectedText: '# selezionati'
});
	
})( jQuery );
/* Italian initialization for the jQuery UI multiselect plugin. */
/* Written by Vincenzo Farruggia(mastropinguino@networky.net). */

(function ( $ ) {

$.extend($.ech.multiselectfilter.prototype.options, {
	label: "Filtro:",
	placeholder: "Digita una parola chiave"
});

})( jQuery );

/* Italian translation for the jQuery Timepicker Addon */
/* Written by Marco "logicoder" Del Tongo */
(function($) {
    $.timepicker.regional['it'] = {
        timeOnlyTitle: 'Scegli orario',
        timeText: 'Orario',
        hourText: 'Ora',
        minuteText: 'Minuti',
        secondText: 'Secondi',
        millisecText: 'Millisecondi',
        microsecText: 'Microsecondi',
        timezoneText: 'Fuso orario',
        currentText: 'Adesso',
        closeText: 'Chiudi',
        timeFormat: 'HH:mm',
        timeSuffix: '',
        amNames: ['m.', 'AM', 'A'],
        pmNames: ['p.', 'PM', 'P'],
        isRTL: false
    };
    $.timepicker.setDefaults($.timepicker.regional['it']);
})(jQuery);
/*
	jQuery Colorbox language configuration
	language: Italian (it)
	translated by: maur8ino
*/
jQuery.extend(jQuery.colorbox.settings, {
	current: "Immagine {current} di {total}",
	previous: "Precedente",
	next: "Successiva",
	close: "Chiudi",
	xhrError: "Errore nel caricamento del contenuto.",
	imgError: "Errore nel caricamento dell'immagine.",
	slideshowStart: "Inizia la presentazione",
	slideshowStop: "Termina la presentazione"
});
// Spectrum Colorpicker
// Italian (it) localization
// https://github.com/bgrins/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["it"] = {
		cancelText: "annulla",
		chooseText: "scegli",
		clearText: "Annulla selezione colore",
		noColorSelectedText: "Nessun colore selezionato"
	};

    $.extend($.fn.spectrum.defaults, localization);

})( jQuery );
//! moment.js locale configuration
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var it = moment.defineLocale('it', {
        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays : 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
        weekdaysShort : 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
        weekdaysMin : 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : function (s) {
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
            },
            past : '%s fa',
            s : 'alcuni secondi',
            m : 'un minuto',
            mm : '%d minuti',
            h : 'un\'ora',
            hh : '%d ore',
            d : 'un giorno',
            dd : '%d giorni',
            M : 'un mese',
            MM : '%d mesi',
            y : 'un anno',
            yy : '%d anni'
        },
        ordinalParse : /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return it;

}));