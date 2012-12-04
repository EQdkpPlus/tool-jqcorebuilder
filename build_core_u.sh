######################################################################################
# Project:		eqdkpPLUS Libraries: Library Builder
# License:		Creative Commons - Attribution-Noncommercial-Share Alike 3.0 Unported
# Link:			http://creativecommons.org/licenses/by-nc-sa/3.0/
# -----------------------------------------------------------------------
# Began:		2009
# Date:			$Date$
# -----------------------------------------------------------------------
# @author		$Author$
# @copyright	2009 - 2011 Simon (Wallenium) Wallmann
# @link			http://eqdkp-plus.com
# @package		libraries:libbuilder
# @version		$Rev$
# 
# $Id$
######################################################################################

clear

# variables
EQDKPPATH=/Users/webmaster/Sites/eqdkp
BUILDNO=`date +%Y%m%d%H%M`

# start the header
echo "***************************************"
echo "*       jQuery.UI Core Builder        *"
echo "*        UNCOMPRESSED Version         *"
echo "*      © 2010 - 2011 by WalleniM      *"
echo "*            Version 2.3.0            *"
echo "***************************************"
echo " "
echo "Build number $BUILDNO"
echo " "

# remove the old file and change to the js folder
rm out/core?*

# combine all the javascript and CSS to single files
sh helper_core_merge.sh

# converting line endings
echo "3. Converting line endings of files"
perl -pe 's/\r\n|\n|\r/\n/g' out/tmpcore.js > out/core.js
perl -pe 's/\r\n|\n|\r/\n/g' out/tmpcore.css > out/core.css
rm out/tmpcore.css
rm out/tmpcore.js

# get the filesizes & calculate in kilobytes
filesizecss=$(ls -l out/core.css | tr -s " " | cut -d " " -f 5)
filesizejs=$(ls -l out/core.js | tr -s " " | cut -d " " -f 5)
fsjs=`echo "scale=2 ; $filesizejs / 1024" | bc`
fscss=`echo "scale=2 ; $filesizecss / 1024" | bc`

echo "4. Removing old files in eqdkp/libraries/jquery/core/"
rm $EQDKPPATH/libraries/jquery/core/core?*

echo "5. Copiing new core files to eqdkp/libraries/jquery/core/"
cp out/core?* $EQDKPPATH/libraries/jquery/core/

echo "6. Minify, compress & copy fullcalendar files to EQDKP-PLUS"
/Users/webmaster/Sites/tools/UglifyJS/bin/uglifyjs -nc -o out/fullcalendar.min.js js/fullcalendar.js
cp out/fullcalendar.min.js $EQDKPPATH/libraries/jquery/js/fullcalendar/
cp css/fullcalendar.print.css $EQDKPPATH/templates/
rm out/fullcalendar.min.js
echo "   - copied fullcalendar.min.js";

cd ..
# output the statistics
echo " "
echo "===================================================="
echo "Filesize of JavaScript is:   $fsjs kb"
echo "Filesize of CSS is:          $fscss kb"
echo "===================================================="
echo " "
echo "Files created successfully"

# done!