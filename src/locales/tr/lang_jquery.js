/* Turkish initialisation for the jQuery UI date picker plugin. */
/* Written by Izzet Emre Erkan (kara@karalamalar.net). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.tr = {
	closeText: "kapat",
	prevText: "&#x3C;geri",
	nextText: "ileri&#x3e",
	currentText: "bugün",
	monthNames: [ "Ocak","Şubat","Mart","Nisan","Mayıs","Haziran",
	"Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık" ],
	monthNamesShort: [ "Oca","Şub","Mar","Nis","May","Haz",
	"Tem","Ağu","Eyl","Eki","Kas","Ara" ],
	dayNames: [ "Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi" ],
	dayNamesShort: [ "Pz","Pt","Sa","Ça","Pe","Cu","Ct" ],
	dayNamesMin: [ "Pz","Pt","Sa","Ça","Pe","Cu","Ct" ],
	weekHeader: "Hf",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.tr );

return datepicker.regional.tr;

} ) );
/* Turkish initialisation for the jQuery UI multiselect plugin. */
/* Written by Yusuf Özer (realsby@gmail.com). */

(function ( $ ) {

$.extend($.ech.multiselect.prototype.options, {
  checkAllText: 'Tümünü seç',
  uncheckAllText: 'Tümünü sil',
  noneSelectedText: 'Seçenekleri belirleyin',
  selectedText: '# adet seçildi'
});
	
})( jQuery );
/* Brazilian initialisation for the jQuery UI multiselect plugin. */
/* Written by Yusuf Özer (realsby@gmail.com). */

(function ( $ ) {

$.extend($.ech.multiselectfilter.prototype.options, {
  label: "Filtre:",
  placeholder: "Bir kelime yazın"
});

})( jQuery );
/* Turkish translation for the jQuery Timepicker Addon */
/* Written by Fehmi Can Saglam, Edited by Goktug Ozturk */
(function($) {
	$.timepicker.regional['tr'] = {
		timeOnlyTitle: 'Zaman Seçiniz',
		timeText: 'Zaman',
		hourText: 'Saat',
		minuteText: 'Dakika',
		secondText: 'Saniye',
		millisecText: 'Milisaniye',
		microsecText: 'Mikrosaniye',
		timezoneText: 'Zaman Dilimi',
		currentText: 'Şu an',
		closeText: 'Tamam',
		timeFormat: 'HH:mm',
		timeSuffix: '',
		amNames: ['ÖÖ', 'Ö'],
		pmNames: ['ÖS', 'S'],
		isRTL: false
	};
	$.timepicker.setDefaults($.timepicker.regional['tr']);
})(jQuery);
/*
	jQuery Colorbox language configuration
	language: Turkish (tr)
	translated by: Caner ÖNCEL
	site: egonomik.com
	
	edited by: Sinan Eldem
	www.sinaneldem.com.tr
*/
jQuery.extend(jQuery.colorbox.settings, {
  current: "Görsel {current} / {total}",
  previous: "Önceki",
  next: "Sonraki",
  close: "Kapat",
  xhrError: "İçerik yüklenirken hata meydana geldi.",
  imgError: "Resim yüklenirken hata meydana geldi.",
  slideshowStart: "Slaytı Başlat",
  slideshowStop: "Slaytı Durdur"
});
// Spectrum Colorpicker
// Turkish (tr) localization
// https://github.com/bgrins/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["tr"] = {
		cancelText: "iptal",
		chooseText: "tamam"
	};

    $.extend($.fn.spectrum.defaults, localization);

})( jQuery );
//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var suffixes = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',
        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',
        3: '\'üncü',
        4: '\'üncü',
        100: '\'üncü',
        6: '\'ncı',
        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',
        60: '\'ıncı',
        90: '\'ıncı'
    };

    var tr = moment.defineLocale('tr', {
        months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[bugün saat] LT',
            nextDay : '[yarın saat] LT',
            nextWeek : '[haftaya] dddd [saat] LT',
            lastDay : '[dün] LT',
            lastWeek : '[geçen hafta] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s önce',
            s : 'birkaç saniye',
            m : 'bir dakika',
            mm : '%d dakika',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir gün',
            dd : '%d gün',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir yıl',
            yy : '%d yıl'
        },
        ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
        ordinal : function (number) {
            if (number === 0) {  // special case for zero
                return number + '\'ıncı';
            }
            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;
            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });

    return tr;

}));