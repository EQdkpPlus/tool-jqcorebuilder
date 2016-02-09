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
* [compile JS core](#compilation-of-js-core)
* [Compile templates](#compilation-of-jqueryui-templates)
* [Authors](#authors)

Javascript core
------------------

### core.js
The following plugins are compiled to the core.js file

Plugin name  | Version | URL
------------- | ----- | -------------
jquery | 2.2.0 | http://www.jquery.com
jquery.ui | 1.12.0 Beta 1 | http://www.jqueryui.com
moment.js | 2.11.2 | http://momentjs.com
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

Plugin name  | plugin | URL
------------- | ----- | -------------
jquery.jqplot | core | http://www.jqplot.com
jquery.fullcalendar | core/calendar | http://arshaw.com/fullcalendar/
jquery.placepicker | core/calendar | https://github.com/benignware/jquery-placepicker
gmaps | core/calendar | https://github.com/hpneo/gmaps
jquery.circles | core/admin | https://github.com/lugolabs/circles
jquery.jcrop | plugin/mediacenter | https://github.com/tapmodo/Jcrop

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
jquery.migrate | 1.3.0 | http://plugins.jquery.com/migrate/

### to be replaced
These plugins are currently used, but will be substituted in a future version of Eqdkp-Plus

Plugin name | Version | URL
------------- | ----- | -------------
jquery.notify | 1.5 | https://github.com/ehynds/jquery-notify

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
