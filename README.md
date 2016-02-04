tool-jqcorebuilder
==================
The single jQuery plugins and the jQuery core and the grunt combination & minification tool for the Eqdkp-Plus jquery core

core.js content
------------------
Plugin name  | URL
------------- | -------------
jquery  | http://www.jquery.com
jquery.ui  | http://www.jqueryui.com
moment.js  | http://momentjs.com
jquery.form	  | http://jquery.malsup.com/form/
jquery.collapser  | own
jquery.rssreader  | customized
jquery.superfish  | http://users.tpg.com.au/j_birch/plugins/superfish/
jquery.timepicker  | http://trentrichardson.com/examples/timepicker/
jquery.multiselect  | http://www.erichynds.com/jquery/jquery-ui-multiselect-widget/, https://github.com/gs-akhan/jquery-ui-multiselect-widget
jquery.multiselect.filter  | http://www.erichynds.com/examples/jquery-ui-multiselect-widget/demos/index.htm#filter
jquery.ui.framedialog  | http://plugins.jquery.com/project/jquery-framedialog
jquery.qtip2  | http://craigsworks.com/projects/qtip2/
jquery.eqdualheight  | http://www.cssnewbie.com/equalheights-jquery-plugin/
jquery.colorbox  | https://github.com/jackmoore/colorbox
jquery.spectrum  | https://github.com/bgrins/spectrum
jquery.toolbar  | https://github.com/paulkinzett/toolbar
jquery.raty  | https://github.com/wbotelhos/raty
jquery.nestedsortable  | https://github.com/mjsarfatti/nestedSortable/tree/2.0alpha, 	https://github.com/ilikenwf/nestedSortable
jquery.easydropdown  | https://github.com/patrickkunka/easydropdown

compile core
------------------
To build the query core, nodeJS and gruntJS is required. 
1. Install Node.js (packages available on nodejs.com)
2. Install grunt by using the node package manager: npm install grunt -g
3. open the console / command prompt
4. Go to the "Sites/tools/tool-jqcorebuilder/"
5. run the command "grunt" on unix and "grunt.cmd" on windows
6. wait and look if there is an error
7. the generated files are in the diet folder

Hint: Node.JS on MacOS X
http://quickandnerdy.com/installing-node-js-on-mac-osx/
http://www.devpatch.com/2010/02/installing-node-js-on-os-x-10-6/

own plugins in core
------------------
These pugins are not compiled into the core.js, they are moved to single folders and included on the pages using the plugin. If the plugin should be available globally, it must be compiled in the core.

Plugin name  | URL
------------- | -------------
jquery.jqplot  | http://www.jqplot.com
jquery.fullcalendar  | http://arshaw.com/fullcalendar/
jquery.placepicker  | https://github.com/benignware/jquery-placepicker
gmaps  | https://github.com/hpneo/gmaps
jquery.circles  | https://github.com/lugolabs/circles

only for dev versions
------------------
Plugins are loaded in the dev version of eqdkp-pkus only (uncompressed core, debug mode enabled)

Plugin name  | URL
------------- | -------------
jquery.migrate  | http://plugins.jquery.com/migrate/

to be replaced
------------------
These plugins are currently used, but will be substituted in a future version of Eqdkp-Plus

Plugin name  | URL
------------- | -------------
jquery.notify  | https://github.com/ehynds/jquery-notify
