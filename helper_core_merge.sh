######################################################################################
# Project:		eqdkpPLUS Libraries: Library Builder
# License:		Creative Commons - Attribution-Noncommercial-Share Alike 3.0 Unported
# Link:			http://creativecommons.org/licenses/by-nc-sa/3.0/
# -----------------------------------------------------------------------
# Began:		2011
# Date:			$Date: 2011-07-14 16:38:50 +0200 (Thu, 14 Jul 2011) $
# -----------------------------------------------------------------------
# @author		$Author: wallenium $
# @copyright	2009 - 2010 Simon (Wallenium) Wallmann
# @link			http://eqdkp-plus.com
# @package		libraries:libbuilder
# @version		$Rev: 10656 $
# 
# $Id: build_core_u.sh 10656 2011-07-14 14:38:50Z wallenium $
######################################################################################

# combine the js files
echo "1. Combining javascript"
cd js
cat jquery.js \
jquery-ui.js \
jquery.cookie.js \
jquery.colorpicker.js \
jquery.equalheights.js \
jquery.form.js \
jquery.jcollapser.js \
jquery.notify.js \
jquery.multiselect.js \
jquery.multiselect.filter.js \
jquery.qtip.js \
jquery.rssreader.js \
jquery.slimbox2.js \
jquery.superfish.js \
jquery.supersubs.js \
jquery.validate.js \
ui.framedialog.js \
jquery.ui.stars.js \
jquery-ui-timepicker-addon.js \
jquery.ui.fileinput.js \
detectmobilebrowser.js \
jqplot/jquery.jqplot.js \
jqplot/jqplot.cursor.js \
jqplot/jqplot.highlighter.js \
jqplot/jqplot.pieRenderer.js \
jqplot/jqplot.categoryAxisRenderer.js \
jqplot/jqplot.dateAxisRenderer.js \
jqplot/jqplot.canvasTextRenderer.js \
jqplot/jqplot.canvasAxisTickRenderer.js > ../out/tmpcore.js

#jquery.metadata.js \

# combine the css files
echo "2. Combining CSS"
cd ../css/
cat jquery-ui.css \
jquery.multiselect.css \
jquery.multiselect.filter.css \
jquery-ui-timepicker-addon.css \
colorpicker.css \
fileinput.css \
jquery.qtip.css \
jquery.ui.stars.css \
jquery.jqplot.css \
jquery.slimbox2.css \
ui.notify.css > ../out/tmpcore.css

# back to root
cd ..