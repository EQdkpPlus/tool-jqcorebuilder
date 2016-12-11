/* Inicialización en español para la extensión 'UI date picker' para jQuery. */
/* Traducido por Vester (xvester@gmail.com). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.es = {
	closeText: "Cerrar",
	prevText: "&#x3C;Ant",
	nextText: "Sig&#x3E;",
	currentText: "Hoy",
	monthNames: [ "enero","febrero","marzo","abril","mayo","junio",
	"julio","agosto","septiembre","octubre","noviembre","diciembre" ],
	monthNamesShort: [ "ene","feb","mar","abr","may","jun",
	"jul","ago","sep","oct","nov","dic" ],
	dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
	dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
	dayNamesMin: [ "D","L","M","X","J","V","S" ],
	weekHeader: "Sm",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.es );

return datepicker.regional.es;

} ) );
/* Spanish initialisation for the jQuery UI multiselect plugin. */
/* Written by Vinius Fontoura Correa(vinusfc@gmail.com). */

(function ( $ ) {

$.extend($.ech.multiselect.prototype.options, {
	checkAllText: 'Marca todas',
	uncheckAllText: 'Desmarque todas',
	noneSelectedText: 'Seleccione las opciones',
	selectedText: '# seleccionado'
});
	
})( jQuery );
/* Spanish initialisation for the jQuery UI multiselect plugin. */
/* Written by Vinícius Fontoura Corrêa (vinusfc@gmail.com). */

(function ( $ ) {

$.extend($.ech.multiselectfilter.prototype.options, {
	label: "Filtro:",
	placeholder: "Introduzca una palabra"
});

})( jQuery );
/* Spanish translation for the jQuery Timepicker Addon */
/* Written by Ianaré Sévi */
/* Modified by Carlos Martínez */
(function($) {
	$.timepicker.regional['es'] = {
		timeOnlyTitle: 'Elegir una hora',
		timeText: 'Hora',
		hourText: 'Horas',
		minuteText: 'Minutos',
		secondText: 'Segundos',
		millisecText: 'Milisegundos',
		microsecText: 'Microsegundos',
		timezoneText: 'Uso horario',
		currentText: 'Hoy',
		closeText: 'Cerrar',
		timeFormat: 'HH:mm',
		timeSuffix: '',
		amNames: ['a.m.', 'AM', 'A'],
		pmNames: ['p.m.', 'PM', 'P'],
		isRTL: false
	};
	$.timepicker.setDefaults($.timepicker.regional['es']);
})(jQuery);
/*
  jQuery Colorbox language configuration
	language: Spanish (es)
	translated by: migolo
*/
jQuery.extend(jQuery.colorbox.settings, {
	current: "Imagen {current} de {total}",
	previous: "Anterior",
	next: "Siguiente",
	close: "Cerrar",
	xhrError: "Error en la carga del contenido.",
	imgError: "Error en la carga de la imagen."
});
// Spectrum Colorpicker
// Spanish (es) localization
// https://github.com/bgrins/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["es"] = {
        cancelText: "Cancelar",
        chooseText: "Elegir",
        clearText: "Borrar color seleccionado",
        noColorSelectedText: "Ningún color seleccionado",
        togglePaletteMoreText: "Más",
        togglePaletteLessText: "Menos"
    };

    $.extend($.fn.spectrum.defaults, localization);

})( jQuery );
//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
var monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

var es = moment.defineLocale('es', {
    months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort : function (m, format) {
        if (/-MMM-/.test(format)) {
            return monthsShort[m.month()];
        } else {
            return monthsShortDot[m.month()];
        }
    },
    monthsParseExact : true,
    weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY H:mm',
        LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar : {
        sameDay : function () {
            return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextDay : function () {
            return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        nextWeek : function () {
            return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastDay : function () {
            return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        lastWeek : function () {
            return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
        },
        sameElse : 'L'
    },
    relativeTime : {
        future : 'en %s',
        past : 'hace %s',
        s : 'unos segundos',
        m : 'un minuto',
        mm : '%d minutos',
        h : 'una hora',
        hh : '%d horas',
        d : 'un día',
        dd : '%d días',
        M : 'un mes',
        MM : '%d meses',
        y : 'un año',
        yy : '%d años'
    },
    ordinalParse : /\d{1,2}º/,
    ordinal : '%dº',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return es;

})));
