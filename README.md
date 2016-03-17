tool-jqcorebuilder
==================
The single jQuery plugins and the jQuery core and the grunt combination & minification tool for the Eqdkp-Plus jquery core

Contents
--------
* [core.js](#corejs)
* [Standalone jQuery Plugins](#standalone-plugins)
* [Modules with dependency to core](#modules-with-dependency-to-jquery)
* [jQuery Plugins in debug mode](#only-for-dev-versions)
* [jQuery Plugins TBR](#to-be-replaced)
* [jQueryUI themes](#jqueryui-themes)
* [compile JS core](#compilation-of-js-core)
* [Compile templates](#compilation-of-jqueryui-templates)
* [Authors](#authors)

Javascript core
------------------

### core.js
The following plugins are compiled to the core.js file

Plugin name  | Version | URL
------------- | ----- | -------------
jquery | 2.2.1 | http://www.jquery.com
jquery.ui | 1.12.0 RC 1 | http://www.jqueryui.com
moment.js | 2.12.0 | http://momentjs.com
jquery.form	| 3.51.0 | http://jquery.malsup.com/form/
jquery.collapser | 2.0.0 | https://github.com/EQdkpPlus/jquery.jcollapser
jquery.rssreader | 1.0.0 | customized
jquery.superfish | 1.7.7 | http://users.tpg.com.au/j_birch/plugins/superfish/
jquery.timepicker | 1.6.1 | http://trentrichardson.com/examples/timepicker/
jquery.multiselect | nightly | http://www.erichynds.com/jquery/jquery-ui-multiselect-widget/, https://github.com/gs-akhan/jquery-ui-multiselect-widget
jquery.multiselect.filter | nightly | http://www.erichynds.com/examples/jquery-ui-multiselect-widget/demos/index.htm#filter
jquery.ui.framedialog | custom | http://plugins.jquery.com/project/jquery-framedialog
jquery.qtip2 | 2.2.1 | http://craigsworks.com/projects/qtip2/
jquery.eqdualheight | unknown | http://www.cssnewbie.com/equalheights-jquery-plugin/
jquery.colorbox | 1.6.3 | https://github.com/jackmoore/colorbox
jquery.spectrum | 1.7.0  | https://github.com/bgrins/spectrum
jquery.toolbar | 1.0.4 | https://github.com/paulkinzett/toolbar
jquery.raty | 2.7.0 | https://github.com/wbotelhos/raty
jquery.nestedsortable | nightly | https://github.com/mjsarfatti/nestedSortable/tree/2.0alpha, 	https://github.com/ilikenwf/nestedSortable
jquery.easydropdown | nightly | https://github.com/patrickkunka/easydropdown

### standalone plugins
These pugins are not compiled into the core.js, they are moved to single folders and included on the pages using the plugin. If the plugin should be available globally, it must be compiled in the core.

Plugin name  | plugin | version | URL
------------- | ----- | ----- | -------------
jquery.jqplot | core | 1.0.8 | http://www.jqplot.com
jquery.fullcalendar | core/calendar | 2.6.1 | http://arshaw.com/fullcalendar/
jquery.placepicker | core/calendar | 0.0.2 | https://github.com/benignware/jquery-placepicker
gmaps | core/calendar | 0.4.22 | https://github.com/hpneo/gmaps
jquery.circles | core/admin | 0.0.6 | https://github.com/lugolabs/circles
jquery.jcrop | plugin/mediacenter | 2.0.4 | https://github.com/tapmodo/Jcrop

### modules with dependency to jquery or jqueryUI
The following independent javascript programmes/modules have dependencies with jQuery or jQueryUI and needs to be tested before upgrading one of these two.

Plugin name  | Version | URL
------------- | ----- | -------------
elFinder  | 2.1 tree | https://github.com/Studio-42/elFinder
tinyMCE | 4.3.x | https://www.tinymce.com
openid-selector | 1.3 | https://code.google.com/archive/p/openid-selector/

### only for dev versions
Plugins are loaded in the dev version of eqdkp-pkus only (uncompressed core, debug mode enabled)

Plugin name | Version | URL
------------- | ----- | -------------
jquery.migrate | 1.4.0 | https://github.com/jquery/jquery-migrate

### to be replaced
These plugins are currently used, but will be substituted in a future version of Eqdkp-Plus

Plugin name | Version | URL
------------- | ----- | -------------
jquery.notify | 1.5 | https://github.com/ehynds/jquery-notify

jqueryUI themes
------------------
All templates use the jqueryUI theme for styles. The following table contains the links to the themeroller settings for the specific eqdkp-plus template

 Style name | Author | URL
------------- | ----- | -------------
eqdkp_modern | Dev team | [Link](http://jqueryui.com/themeroller/#!zThemeParams=5d00000100f705000000000000003d8888d844329a8dfe02723de3e5701fa198449035fc0613ff729a37dd818cf92b1f6938fefa90282d04ae436bb72367f5909357c629e832248af2c086db4ab730aa4cced933a88449eca61db9f7f3b23d47f58a712d809b6088edfb34ad39fdc365386d0fa05a1ac3ecd320d2c989729f79ebdc6c6c1efbdad4c8411d498f009ffe98fe129da7602fb950113abdae4a76a6c41a4b54b4f82bb8821d6d431cd3fdd76b9d621596a2728b93385f2e7aaf8ea6603553343d43829941536e2bdd3ed7d7d3207364bf3516ccea9e4eebfef31b497e9e274a39195797c0ed8e3eebf1418b2e5bfee4e0b3786e6d3e78ec88d79ec74ac3ffb39a81eba9f0efd183c7a130299d99c30a141c9c8f906b4b2bb95ebfc70b1ff50b7cb02d5d9029153d759f9e712c462d02bfc88c1be9cfc0ff9c31caea83a8b1e9f18395ee53e17061b71b50e160876e036c17d8d7f09a37f4f278a18bba187086f141860caf6e7215a4c77b8c4c4c712844bd12d4ce3382dded2270839033d0441522c343361bc636851ed4bc4f87bb430b550d76923f6812361be9fe2e75df0c8f8f466a4d09d887d5c976d61a8043537417a87905939bf5744efee677153c1ce78dd2693bd889b3f468bee09aac3d74e22798ffaab4e880)
eqdkp_default | Dev team | [Link](http://jqueryui.com/themeroller/?ffDefault=Verdana%2C%20Arial%2C%20sans-serif&fwDefault=normal&fsDefault=1.1em&cornerRadius=6px&bgColorHeader=444444&bgTextureHeader=highlight_soft&bgImgOpacityHeader=44&borderColorHeader=333333&fcHeader=ffffff&iconColorHeader=ffffff&bgColorContent=000000&bgTextureContent=flat&bgImgOpacityContent=0&borderColorContent=555555&fcContent=ffffff&iconColorContent=cccccc&bgColorDefault=222222&bgTextureDefault=highlight_soft&bgImgOpacityDefault=35&borderColorDefault=444444&fcDefault=eeeeee&iconColorDefault=cccccc&bgColorHover=19456b&bgTextureHover=highlight_soft&bgImgOpacityHover=33&borderColorHover=31628e&fcHover=ffffff&iconColorHover=ffffff&bgColorActive=2b6ba1&bgTextureActive=highlight_hard&bgImgOpacityActive=20&borderColorActive=31628e&fcActive=ffffff&iconColorActive=222222&bgColorHighlight=d69038&bgTextureHighlight=highlight_soft&bgImgOpacityHighlight=100&borderColorHighlight=ea1028&fcHighlight=000000&iconColorHighlight=4b8e0b&bgColorError=ffc73d&bgTextureError=glass&bgImgOpacityError=40&borderColorError=ffb73d&fcError=111111&iconColorError=a83300&bgColorOverlay=5c5c5c&bgTextureOverlay=flat&bgImgOpacityOverlay=50&opacityOverlay=80&bgColorShadow=cccccc&bgTextureShadow=flat&bgImgOpacityShadow=30&opacityShadow=60&thicknessShadow=7px&offsetTopShadow=-7px&offsetLeftShadow=-7px&cornerRadiusShadow=8px&ctl=themeroller)

compile core
------------------
To build the query core, [nodeJS](https://nodejs.org) and the javascript task runner [grunt](http://gruntjs.com) is required.

### Installation
1. Install Node.js (packages available on nodejs.com)
2. Install grunt by using the node package manager: npm install grunt -g

### compilation of js core
1. open the console / command prompt
2. Go to the "Sites/tools/tool-jqcorebuilder/"
3. run the command "grunt" on unix and "grunt.cmd" on windows
4. wait and look if there is an error
5. the generated files are in the dist folder

### compilation of jqueryUI templates
1. open the console / command prompt
2. Go to the "Sites/tools/tool-jqcorebuilder/"
3. run the command "grunt templates" on unix
4. wait and look if there is an error, the files are directly moved to the core folder

Authors
------------------
 * Wallenium (building tools and maintaining the stuff)
 * Godmod (development)
