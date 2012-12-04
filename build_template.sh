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
echo "***************************************"
echo "* jQuery.UI CSS Builder for templates *"
echo "*      © 2010 - 2011 by WalleniM      *"
echo "*            Version 2.0.0            *"
echo "***************************************"
echo " "
echo " Select Template to create CSS "
echo "-------------------------------------"
echo "[1] eqdkp_default"
echo "[0] Exit/Stop"
echo "======================="
echo "Enter your menu choice [0-4]: "
read yourch
case $yourch in
	1) tmplname=jquery-ui-default.css;;
	0) exit 0 ;;
	*) echo "Opps!!! Please select choice 1 or 0";
		 echo "Press a key. . ." ; read ;;
esac

echo "1. Combining CSS files..."
touch out/jquery_tmpl.css

# Combine all the javascript to a single temporary file
cat css_tmpl/$tmplname > out/tmp_tmpl2.css

# converting line endings
echo "2. Converting line endings of files"
perl -pe 's/\r\n|\n|\r/\n/g' out/tmp_tmpl2.css > out/tmp_tmpl.css
rm out/tmp_tmpl2.css

# get the filesize
filesizeold=$(ls -l out/tmp_tmpl.css | tr -s " " | cut -d " " -f 5)

# minify the combined CSS
echo "3. Minifiing with YUIcompressor.."
java -jar build/yuicompressor.jar --type css -o  out/jquery_tmpl.css out/tmp_tmpl.css
rm out/tmp_tmpl.css
filesizenew=$(ls -l out/jquery_tmpl.css | tr -s " " | cut -d " " -f 5)

# calculate percentage of new file size...
kompgrad=`echo "scale=2 ; $filesizenew / $filesizeold" | bc`
kompgrad=`echo "scale=2 ; $kompgrad * 100" | bc`
echo " "
echo "============================================="
echo "Filesize now $kompgrad% of unzipped file size"
echo "============================================="
echo " "
echo "File created successfully"