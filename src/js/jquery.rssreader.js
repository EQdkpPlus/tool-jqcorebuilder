(function ($) {
	$.fn.rssReader = function (j) {
	  var container = this;
		var k = $.extend({
			targeturl: "http://www.clashdesign.net/blog/index.php/feed/rss2",
			items: 5,
			Maxlength: 80,
			loadingImg: '35-1.gif',
			background: '#fff',
			lang_readmore: 'Read more',
			lang_loadingalt: 'Feed is loading ...',
			lang_errorpage: 'Error requesting page'
		},
		j);
		if (!j.targeturl) return false;
		var l = $.extend(k, j);
		var m = ($.browser.msie);

		if (m) {
			$(container).ajaxStart(function () {
				$(container).css({
					backgroundColor: '#ccc',
					'z-index': 90,
					'opacity': 0.4
				});
				$('<img class="loading" src="' + l.loadingImg + '" alt="'+l.lang_loadingalt+'" />').css({
					'opacity': 1
				}).appendTo(container)
			});
			$(container).ajaxError(function () {
				$(this).append("<strong>"+l.lang_errorpage+"</strong>")
			});
			
			$.ajax({
				type: "get",
				url: l.targeturl,
				dataType: 'xml',
				processData: false,
				success: function (f) {
				$(container).children('img').remove();
				$(container).css({
					backgroundColor: l.background,
					'opacity': 1
				});
				var i = 0;
				var g = j.items;
				function h(e) {
					$(f).find('item').each(function (i) {
						if (i > e - 1) return;
						var a = $(this).find('title').text();
						var b = $(this).find('pubDate').text();
						var c = $(this).find('link').text();
						var d = $(this).find('description').text();
						$('<a href="' + c + '">' + a + '</a>').html(a).appendTo(container);
						$('<div class="date">' + b + '</div>').html(b).appendTo(container);
						$('<div class="description">' + o(d, j.Maxlength) + '</div>').html(o(d, j.Maxlength) + '...').appendTo(container);
						$(container).children('.description').find('img').remove();
						$('<a class="rss_readmore" href="' + c + '">' + l.lang_readmore + '</a><br />').appendTo(container);
					})
				}
				
				function atom(e){
					$(f).find('entry').each(function (i) {
						if (i > e - 1) return;
						var a = $(this).find('title').text();
						var b = $(this).find('published').text();
						var c = $(this).find('link').attr('href');
						var d = $(this).find('summary').text();
						$('<a href="' + c + '">' + a + '</a>').html(a).appendTo(container);
						$('<div class="date">' + b + '</div>').html(b).appendTo(container);
						$('<div class="description">' + o(d, j.Maxlength) + '</div>').html(o(d, j.Maxlength) + '...').appendTo(container);
						$(container).children('.description').find('img').remove();
						$('<a class="rss_readmore" href="' + c + '">' + l.lang_readmore + '</a><br />').appendTo(container);
					})
				}
				
				if (jQuery('channel', f).length == 1) {
					return h(g);
				} else if (jQuery('feed', f).length == 1) {
					return atom(g);
				}
			}
			});
			
		} else {
			var n = "xml";
			$.ajax({
				type: "get",
				url: l.targeturl,
				dataType: n,
				processData: false,
				beforeSend: function () {
					$(container).css({
						'z-index': 90,
						'opacity': 0.4
					});
					$('<img class="loading" src="' + l.loadingImg + '" alt="'+l.lang_loadingalt+'" />').css({
						'opacity': 1
					}).appendTo(container)
				},
				success: function (f) {
					$(container).css({
						'opacity': 1
					});
					$(container).children('img').remove();
					var i = 0;
					var g = j.items;
					function h(e) {
						$(f).find('item').each(function (i) {
							if (i > e - 1) return;
							var a = $(this).find('title').text();
							var b = $(this).find('pubDate').text();
							var c = $(this).find('link').text();
							var d = $(this).find('description').text();
							$('<a class="targetblank" href="' + c + '">' + a + '</a>').html(a).appendTo(container);
							$('<div class="date">' + b + '</div>').html(b).appendTo(container);
							$('<div class="description">' + o(d, j.Maxlength) + '</div>').html(o(d, j.Maxlength) + '...').appendTo(container);
							$(container).children('.description').find('img').remove();
							$('<a class="rss_readmore" href="' + c + '">' + l.lang_readmore + '</a><br /><br />').appendTo(container);
						})
					}
					
					function atom(e){
						$(f).find('entry').each(function (i) {
							if (i > e - 1) return;
							var a = $(this).find('title').text();
							var b = $(this).find('published').text();
							var c = $(this).find('link').attr('href');
							var d = $(this).find('summary').text();
							$('<a href="' + c + '">' + a + '</a>').html(a).appendTo(container);
							$('<div class="date">' + b + '</div>').html(b).appendTo(container);
							$('<div class="description">' + o(d, j.Maxlength) + '</div>').html(o(d, j.Maxlength) + '...').appendTo(container);
							$(container).children('.description').find('img').remove();
							$('<a class="rss_readmore" href="' + c + '">' + l.lang_readmore + '</a><br />').appendTo(container);
						})
					}
					
					if (jQuery('channel', f).length == 1) {
						return h(g);
					} else if (jQuery('feed', f).length == 1) {
						return atom(g);
					}
				}
			})
		}
	};
	function o(a, b) {
		var c = a.split(/\s/);
		if (c.length <= b) return a;
		var d = '';
		for (var i = 0; i < b; i++) {
			d += c[i] + ' '
		}
		return d
	}
})(jQuery);