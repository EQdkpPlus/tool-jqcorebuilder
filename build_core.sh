######################################################################################
# Project:		eqdkpPLUS Libraries: Library Builder
# License:		Creative Commons - Attribution-Noncommercial-Share Alike 3.0 Unported
# Link:			http://creativecommons.org/licenses/by-nc-sa/3.0/
# -----------------------------------------------------------------------
# Began:		2009
# Date:			$Date$
# -----------------------------------------------------------------------
# @author		$Author$
# @copyright	2009 - 2010 Simon (Wallenium) Wallmann
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
echo "*          COMPRESSED Version         *"
echo "*      © 2010 - 2011 by WalleniM      *"
echo "*            Version 2.3.0            *"
echo "***************************************"
echo " "
echo "Build number $BUILDNO"
echo " "
rm out/core?*

# combine all the javascript and CSS to single files
sh helper_core_merge.sh

# converting line endings
echo "3. Converting line endings of files"
perl -pe 's/\r\n|\n|\r/\n/g' out/tmpcore.js > out/tmp.js
perl -pe 's/\r\n|\n|\r/\n/g' out/tmpcore.css > out/tmp.css
rm out/tmpcore.css
rm out/tmpcore.js

# minify & compress the combined js
echo "4. Minifiing & compressing JS with uglifyJS.."
/Users/webmaster/Sites/tools/UglifyJS/bin/uglifyjs -nc -o out/core.js out/tmp.js
rm out/tmp.js

# minify the combined CSS
echo "5. Minifiing CSS with YUIcompressor.."
java -jar build/yuicompressor.jar --type css -o out/core.css out/tmp.css

# get the filesizes & calculate in kilobytes
filesizeold=$(ls -l out/tmp.css | tr -s " " | cut -d " " -f 5)
filesizenew=$(ls -l out/core.css | tr -s " " | cut -d " " -f 5)
filesizejs=$(ls -l out/core.js | tr -s " " | cut -d " " -f 5)
rm out/tmp.css

# calculate percentage of new file size...
kompgrad=`echo "scale=2 ; $filesizenew / $filesizeold" | bc`
kompgrad=`echo "scale=2 ; $kompgrad * 100" | bc`
fsjs=`echo "scale=2 ; $filesizejs / 1024" | bc`

echo "6. Removing old files in eqdkp/libraries/jquery/core/"
rm $EQDKPPATH/libraries/jquery/core/core?*

echo "7. Copiing new core files to eqdkp/libraries/jquery/core/"
cp out/core?* $EQDKPPATH/libraries/jquery/core/

echo "8. Minify, compress & copy fullcalendar files to EQDKP-PLUS"
/Users/webmaster/Sites/tools/UglifyJS/bin/uglifyjs -nc -o out/fullcalendar.min.js js/fullcalendar.js
cp out/fullcalendar.min.js $EQDKPPATH/libraries/jquery/js/fullcalendar/
cp css/fullcalendar.print.css $EQDKPPATH/templates/
rm out/fullcalendar.min.js
echo "   - copied fullcalendar.min.js";

# output the statistics
echo " "
echo "===================================================="
echo "Filesize of JavaScript $fsjs kb"
echo "Filesize of CSS now $kompgrad% of unzipped file size"
echo "===================================================="
echo " "
echo "Files created successfully"

# done!