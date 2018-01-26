tool-jqcorebuilder  [![Build Status](https://travis-ci.org/EQdkpPlus/tool-jqcorebuilder.svg?branch=master)](https://travis-ci.org/EQdkpPlus/tool-jqcorebuilder)
==================
The single jQuery plugins and the jQuery core and the grunt combination & minification tool for the Eqdkp-Plus jquery core

Contents
--------
* [core.js](#corejs)
* [Standalone jQuery Plugins](#standalone-plugins)
* [Modules with dependency to core](#modules-with-dependency-to-jquery)
* [jQuery Plugins in debug mode](#only-for-dev-versions)
* [jQuery Plugins TBR](#to-be-replaced)
* [Deprecated jQuery Plugins](#deprecated)
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
jquery | 3.3.1 | [jquery.com](http://www.jquery.com)
jquery.ui | 1.12.1 | [jqueryui.com](http://www.jqueryui.com)
moment.js | 2.20.1 | [momentJS.com](http://momentjs.com)
jquery.form	| 4.2.2 | [jquery.form](https://github.com/jquery-form/form)
jquery.collapser | 2.0.1 | [jquery.collapser](https://github.com/EQdkpPlus/jquery.jcollapser)
jquery.rssreader | 1.1.0 | [jquery.RSSreader](https://github.com/EQdkpPlus/jquery.rssreader)
jquery.timepicker | 1.6.3 | [jquery.timepicker](http://trentrichardson.com/examples/timepicker/)
jquery.multiselect | latest dev | [jquery.multiselect](https://github.com/ehynds/jquery-ui-multiselect-widget)
jquery.multiselect.filter | 2.0 | [jquery.multiselect.filter](https://github.com/ehynds/jquery-ui-multiselect-widget)
jquery.ui.framedialog | custom | [old homepage](http://plugins.jquery.com/project/jquery-framedialog)
jquery.qtip2 | 3.0.3 | [jquery.qtip2](http://craigsworks.com/projects/qtip2/)
jquery.colorbox | 1.6.4 | [jquery.colorbox](https://github.com/jackmoore/colorbox)
jquery.spectrum | 1.8.0  | [jquery.spectrum](https://github.com/bgrins/spectrum)
jquery.toolbar | 1.1.0 | [jquery.toolbar](https://github.com/paulkinzett/toolbar)
jquery.raty | 2.8.0 | [jquery.raty](https://github.com/wbotelhos/raty)
jquery.nestedsortable | 2.0.0 | [original](https://github.com/mjsarfatti/nestedSortable/tree/2.0alpha) [current](https://github.com/ilikenwf/nestedSortable)
jquery.relativeTime | 1.0.1 | custom
favico.js | 0.3.10 | [favicon.js](https://github.com/ejci/favico.js)
jquery.toast | 1.3.2 | [jquery.toast.js](https://github.com/kamranahmedse/jquery-toast-plugin)
jquery.touchswipe | 1.6.18 | [jquery.touchswipe](https://github.com/mattbryson/TouchSwipe-Jquery-Plugin)

### standalone plugins
These pugins are not compiled into the core.js, they are moved to single folders and included on the pages using the plugin. If the plugin should be available globally, it must be compiled in the core.

Plugin name  | plugin | version | URL
------------- | ----- | ----- | -------------
jquery.jqplot | core | 1.0.8 | [jquery.JQplot](http://www.jqplot.com)
jquery.fullcalendar | core/calendar | 3.8.0 | [fullcalendar.io](http://arshaw.com/fullcalendar/)
jquery.placepicker | core/calendar | 0.0.4 | [jquery.placepicker](https://github.com/benignware/jquery-placepicker)
gmaps | core/calendar | 0.4.25 | [gmaps](https://github.com/hpneo/gmaps)
jquery.circles | core/admin | 0.0.6 | [jquery.circles](https://github.com/lugolabs/circles)
jquery.jcrop | plugin/mediacenter | 2.0.4 | [jquery.jcrop](https://github.com/tapmodo/Jcrop)
jquery.MonthPicker | plugin/monthpicker | 3.0.4 | [jquery.MonthPicker](https://kidsysco.github.io/jquery-ui-month-picker/)

### modules with dependency to jquery or jqueryUI
The following independent javascript programmes/modules have dependencies with jQuery or jQueryUI and needs to be tested before upgrading one of these two.

Plugin name  | Version | URL
------------- | ----- | -------------
elFinder  | 2.1 tree | [elFinder](https://github.com/Studio-42/elFinder)
tinyMCE | 4.4.x | [tinyMCE](https://www.tinymce.com)
openid-selector | 1.3 | [OpenID Selector](https://code.google.com/archive/p/openid-selector/)

### only for dev versions
Plugins are loaded in the dev version of eqdkp-pkus only (uncompressed core, debug mode enabled)

Plugin name | Version | URL
------------- | ----- | -------------
jquery.migrate | 3.0.0 | [jquery.migrate](https://github.com/jquery/jquery-migrate)

### to be replaced
These plugins are currently used, but will be substituted in a future version of Eqdkp-Plus

Plugin name | Version | URL
------------- | ----- | -------------


### deprecated
These plugins are deprecated and will be removed in the defined target version

 Plugin name | Version | Removed in | URL
------------- | ----- | ----- | -------------
jquery.superfish | 1.7.9 | 2.4.0/3.0.0 | [jquery.superfish](http://users.tpg.com.au/j_birch/plugins/superfish/)
jquery.eqdualheight | unknown | 2.3.0 | [jquery.equalheight](http://www.cssnewbie.com/equalheights-jquery-plugin/)
jquery.easydropdown | nightly | 2.3.0 | [jquery.easydropdown](https://github.com/patrickkunka/easydropdown)
jquery.notify | 1.5 | 2.3.0 | [jquery.notify](https://github.com/ehynds/jquery-notify)

jqueryUI themes
------------------
The jqueryUI template is build into the core by default. It uses less to reduce the overhead of files. The templates could inherit and change the less colour settings by adding a jquery.less file to the template root. This file contains the changed variables, the original variables are overwritten by this rule. The following table contains the links to the themeroller profiles for each template.

 Style name | Author | URL
------------- | ----- | -------------
eqdkp_modern | Dev team | [Link](http://jqueryui.com/themeroller/#!zThemeParams=5d00000100f705000000000000003d8888d844329a8dfe02723de3e5701fa198449035fc0613ff729a37dd818cf92b1f6938fefa90282d04ae436bb72367f5909357c629e832248af2c086db4ab730aa4cced933a88449eca61db9f7f3b23d47f58a712d809b6088edfb34ad39fdc365386d0fa05a1ac3ecd320d2c989729f79ebdc6c6c1efbdad4c8411d498f009ffe98fe129da7602fb950113abdae4a76a6c41a4b54b4f82bb8821d6d431cd3fdd76b9d621596a2728b93385f2e7aaf8ea6603553343d43829941536e2bdd3ed7d7d3207364bf3516ccea9e4eebfef31b497e9e274a39195797c0ed8e3eebf1418b2e5bfee4e0b3786e6d3e78ec88d79ec74ac3ffb39a81eba9f0efd183c7a130299d99c30a141c9c8f906b4b2bb95ebfc70b1ff50b7cb02d5d9029153d759f9e712c462d02bfc88c1be9cfc0ff9c31caea83a8b1e9f18395ee53e17061b71b50e160876e036c17d8d7f09a37f4f278a18bba187086f141860caf6e7215a4c77b8c4c4c712844bd12d4ce3382dded2270839033d0441522c343361bc636851ed4bc4f87bb430b550d76923f6812361be9fe2e75df0c8f8f466a4d09d887d5c976d61a8043537417a87905939bf5744efee677153c1ce78dd2693bd889b3f468bee09aac3d74e22798ffaab4e880)
eqdkp_default | Dev team | [Link](http://jqueryui.com/themeroller/?ffDefault=Verdana%2C%20Arial%2C%20sans-serif&fwDefault=normal&fsDefault=1.1em&cornerRadius=6px&bgColorHeader=444444&bgTextureHeader=highlight_soft&bgImgOpacityHeader=44&borderColorHeader=333333&fcHeader=ffffff&iconColorHeader=ffffff&bgColorContent=000000&bgTextureContent=flat&bgImgOpacityContent=0&borderColorContent=555555&fcContent=ffffff&iconColorContent=cccccc&bgColorDefault=222222&bgTextureDefault=highlight_soft&bgImgOpacityDefault=35&borderColorDefault=444444&fcDefault=eeeeee&iconColorDefault=cccccc&bgColorHover=19456b&bgTextureHover=highlight_soft&bgImgOpacityHover=33&borderColorHover=31628e&fcHover=ffffff&iconColorHover=ffffff&bgColorActive=2b6ba1&bgTextureActive=highlight_hard&bgImgOpacityActive=20&borderColorActive=31628e&fcActive=ffffff&iconColorActive=222222&bgColorHighlight=d69038&bgTextureHighlight=highlight_soft&bgImgOpacityHighlight=100&borderColorHighlight=ea1028&fcHighlight=000000&iconColorHighlight=4b8e0b&bgColorError=ffc73d&bgTextureError=glass&bgImgOpacityError=40&borderColorError=ffb73d&fcError=111111&iconColorError=a83300&bgColorOverlay=5c5c5c&bgTextureOverlay=flat&bgImgOpacityOverlay=50&opacityOverlay=80&bgColorShadow=cccccc&bgTextureShadow=flat&bgImgOpacityShadow=30&opacityShadow=60&thicknessShadow=7px&offsetTopShadow=-7px&offsetLeftShadow=-7px&cornerRadiusShadow=8px&ctl=themeroller)
eqdkp_neon | Inkraja | [Link](http://jqueryui.com/themeroller/#!zThemeParams=5d00000100ff05000000000000003d8888d844329a8dfe02723de3e5701fa198449035fc0613ff729a37dd818cf92b1f6938fefa90282d04ae2cd83e06bf0c861262b13da710abfe407026032aa890032f2d8f9180b38879d8ad2c3565ecd80359d2c489cba57116b75e551b90e684b90fc887826625372da9eaf5e74235bddd0466eb51983e2306448e4daf35096f4df5cba1cf647c6b70295885a72721f16f3910eb2ee7804a9e34f6022864a4575debc24b8af75781e91a1a0ea4832bf230a350c657b8668965e72e1dc148aaaf760d6592a9a07d2d8809fa51063ca466ea7cb096273c916def4f3e94fc14ae7bcf009ed1cf9461cc5d8e05bae7ec00fbbeb1a957275dccda0d55fbdf5ba88d041db8b1f1d2774bca3d8d1e0f2f603fc1b4c9b5d692531692077f8d9fe2a1dacc48d36ef0fcd76b11df5cef5bca0669a70450bda6b3bf054a405e38c1b551ae476066b234788aceaa4c621917a710bb1ab0198317e3c9f1be316bb1734dd6dfc0736c02ae79d2300480ba4ca87a34f284cac9d48b69836829343881b67b60613944c4fb5f5f064b6429c0525243d5557b8f173d50063abf869060731cb1f476f2ad2703702d78b333b3f2657357fdce743795e103a72ee47bdb3f3552beb6e1615d5c2081de989b51797fcf3989f279ea5baae2825183a5a4ca7bb42a71ba34915fffea566939)
eqdkp_bluesky | Inkraja | [Link](http://jqueryui.com/themeroller/#!zThemeParams=5d00000100ff05000000000000003d8888d844329a8dfe02723de3e5701fa198449035fc0613ff729a37dd818cf92b1f6938fefa90282d04ae2cd83e06bf0c861262b13da710abfe407026032aa890032f2d8f9180b38879d8ad2c3565ecd80359d2c489cba57116b75e551b90e684b90fc887826625372da9eaf5e74235bddd0466eb51983e2306448e4daf35096f4df5cba1cf647c6b70295885a72721f16f3910eb2ee7804a9e34f6022864a4575debc24b8af75781e91a1a0ea4832bf230a350c657b8668965e72e1dc148aaaf760d6592a9a07d2d8809fa51063ca466ea7cb096273c916def4f3e94fc14ae7bcf009ed1cf9461cc5d8e05bae7ec00fbbeb1a957275dccda0d55fbdf5ba88d041db8b1f1d2774bca3d8d1e0f2f603fc1b4c9b5d692531692077f8d9fe2a1dacc48d36ef0fcd76b11df5cef5bca0669a70450bda6b3bf054a405e38c1b551ae476066b234788aceaa4c621917a710bb1ab0198317e3c9f1be316bb1734dd6dfc0736c02ae79d2300480ba4ca87a34f284cac9d48b69836829343881b67b60613944c4fb5f5f064b6429c0525243d5557b8f173d50063abf869060731cb1f476f2ad2703702d78b333b3f2657357fdce743795e103a72ee47bdb3f3552beb6e1615d5c2081de989b51797fcf3989f279ea5baae2825183a5a4ca7bb42a71ba34915fffea566939)
eqdkp_tsw_orochi | Inkraja | [Link](http://jqueryui.com/themeroller/#ffDefault=Segoe%20UI%2CArial%2Csans-serif&fwDefault=bold&fsDefault=1.1em&cornerRadius=6px&bgColorHeader=333333&bgTextureHeader=gloss_wave&bgImgOpacityHeader=25&borderColorHeader=333333&fcHeader=ffffff&iconColorHeader=ffffff&bgColorContent=000000&bgTextureContent=inset_soft&bgImgOpacityContent=25&borderColorContent=666666&fcContent=ffffff&iconColorContent=cccccc&bgColorDefault=555555&bgTextureDefault=glass&bgImgOpacityDefault=20&borderColorDefault=666666&fcDefault=eeeeee&iconColorDefault=cccccc&bgColorHover=0078a3&bgTextureHover=glass&bgImgOpacityHover=40&borderColorHover=59b4d4&fcHover=ffffff&iconColorHover=ffffff&bgColorActive=0068AA&bgTextureActive=inset_soft&bgImgOpacityActive=30&borderColorActive=2B99F7&fcActive=ffffff&iconColorActive=222222&bgColorHighlight=eeeeee&bgTextureHighlight=highlight_soft&bgImgOpacityHighlight=80&borderColorHighlight=cccccc&fcHighlight=2e7db2&iconColorHighlight=4b8e0b&bgColorError=ffc73d&bgTextureError=glass&bgImgOpacityError=40&borderColorError=ffb73d&fcError=111111&iconColorError=a83300&bgColorOverlay=5c5c5c&bgTextureOverlay=flat&bgImgOpacityOverlay=50&opacityOverlay=80&bgColorShadow=cccccc&bgTextureShadow=flat&bgImgOpacityShadow=30&opacityShadow=60&thicknessShadow=7px&offsetTopShadow=-7px&offsetLeftShadow=-7px&cornerRadiusShadow=8px)
eqdkp_tsw_agartha | Inkraja | [Link](http://jqueryui.com/themeroller/?ffDefault=Segoe%20UI%2CArial%2Csans-serif&fwDefault=bold&fsDefault=1.1em&cornerRadius=6px&bgColorHeader=333333&bgTextureHeader=gloss_wave&bgImgOpacityHeader=25&borderColorHeader=333333&fcHeader=ffffff&iconColorHeader=ffffff&bgColorContent=000000&bgTextureContent=inset_soft&bgImgOpacityContent=25&borderColorContent=666666&fcContent=ffffff&iconColorContent=cccccc&bgColorDefault=555555&bgTextureDefault=glass&bgImgOpacityDefault=20&borderColorDefault=666666&fcDefault=eeeeee&iconColorDefault=cccccc&bgColorHover=0078a3&bgTextureHover=glass&bgImgOpacityHover=40&borderColorHover=59b4d4&fcHover=ffffff&iconColorHover=ffffff&bgColorActive=f58400&bgTextureActive=inset_soft&bgImgOpacityActive=30&borderColorActive=ffaf0f&fcActive=ffffff&iconColorActive=222222&bgColorHighlight=eeeeee&bgTextureHighlight=highlight_soft&bgImgOpacityHighlight=80&borderColorHighlight=cccccc&fcHighlight=2e7db2&iconColorHighlight=4b8e0b&bgColorError=ffc73d&bgTextureError=glass&bgImgOpacityError=40&borderColorError=ffb73d&fcError=111111&iconColorError=a83300&bgColorOverlay=5c5c5c&bgTextureOverlay=flat&bgImgOpacityOverlay=50&opacityOverlay=80&bgColorShadow=cccccc&bgTextureShadow=flat&bgImgOpacityShadow=30&opacityShadow=60&thicknessShadow=7px&offsetTopShadow=-7px&offsetLeftShadow=-7px&cornerRadiusShadow=8px)
eqdkp_swtor | Inkraja | [Link](http://jqueryui.com/themeroller/#ffDefault=Segoe%20UI%2CArial%2Csans-serif&fwDefault=bold&fsDefault=1.1em&cornerRadius=6px&bgColorHeader=%23333333&bgTextureHeader=gloss_wave&bgImgOpacityHeader=25&borderColorHeader=%23333333&fcHeader=%23ffffff&iconColorHeader=%23ffffff&bgColorContent=%23000000&bgTextureContent=inset_soft&bgImgOpacityContent=25&borderColorContent=%23666666&fcContent=%23ffffff&iconColorContent=%23cccccc&bgColorDefault=%23555555&bgTextureDefault=glass&bgImgOpacityDefault=20&borderColorDefault=%23666666&fcDefault=%23eeeeee&iconColorDefault=%23cccccc&bgColorHover=%23e7d278&bgTextureHover=glass&bgImgOpacityHover=40&borderColorHover=%23e7d278&fcHover=%23000&iconColorHover=%23000&bgColorActive=%23131313&bgTextureActive=inset_soft&bgImgOpacityActive=30&borderColorActive=%23191919&fcActive=%23ffffff&iconColorActive=%23222222&bgColorHighlight=%23eeeeee&bgTextureHighlight=highlight_soft&bgImgOpacityHighlight=80&borderColorHighlight=%23cccccc&fcHighlight=%23b64d20&iconColorHighlight=%234b8e0b&bgColorError=%23ffc73d&bgTextureError=glass&bgImgOpacityError=40&borderColorError=%23ffb73d&fcError=%23111111&iconColorError=%23f22402&bgColorOverlay=%235c5c5c&bgTextureOverlay=flat&bgImgOpacityOverlay=50&opacityOverlay=80&bgColorShadow=%23cccccc&bgTextureShadow=flat&bgImgOpacityShadow=30&opacityShadow=60&thicknessShadow=7px&offsetTopShadow=-7px&offsetLeftShadow=-7px&cornerRadiusShadow=8px)

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

### Build locale file
1. open the console / command prompt
2. Go to the "Sites/tools/tool-jqcorebuilder/"
3. run the command "grunt buildLocales" on unix and "grunt.cmd buildLocales" on windows
4. wait and look if there is an error
5. the generated files are in the locales folder

Authors
------------------
 * Wallenium (building tools and maintaining the stuff)
 * Godmod (development)
 * Asitara (JqueryUI Themereoller Less Extractor)
