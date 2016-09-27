<?php

$languages	= array('de', 'da', 'es', 'fr', 'it', 'pl', 'ro', 'ru', 'tr');

// files to be combined
$langfiles	= array(
	'https://raw.github.com/jquery/jquery-ui/master/ui/i18n/datepicker-{!language!}.js',
	'https://raw.github.com/ehynds/jquery-ui-multiselect-widget/master/i18n/jquery.multiselect.{!language!}.js',
	'https://raw.github.com/ehynds/jquery-ui-multiselect-widget/master/i18n/jquery.multiselect.filter.{!language!}.js',
	'https://raw.github.com/trentrichardson/jQuery-Timepicker-Addon/master/src/i18n/jquery-ui-timepicker-{!language!}.js',
	'https://raw.githubusercontent.com/jackmoore/colorbox/master/i18n/jquery.colorbox-{!language!}.js',
	'https://raw.github.com/bgrins/spectrum/master/i18n/jquery.spectrum-{!language!}.js',
	'https://raw.githubusercontent.com/moment/moment/develop/locale/{!language!}.js',
);

// files to be copied as single files
$singlefiles = array(
	#array('https://raw.githubusercontent.com/arshaw/fullcalendar/master/locale/{!language!}.js', 'lang_fullcalendar'),
);

$arrContextOptions=array(
    "ssl"=>array(
        "verify_peer"=>false,
        "verify_peer_name"=>false,
    ),
);

print 'Starting creation of file<br/>';
foreach($languages as $mylang){
	$language_folder	= './src/locales/'.$mylang.'/';
	@mkdir($language_folder, 0777, true);
	$file = fopen($language_folder.'lang_jquery.js','w');

	print 'Language: '.$mylang.PHP_EOL;
	foreach($langfiles as $langURL){
		$langURL	= str_replace('{!language!}', $mylang, $langURL);
		if($jsfile		= @file_get_contents($langURL, false, stream_context_create($arrContextOptions))){
			fputs($file,$jsfile);
			print 'Adding '.$langURL.' to the language file...'.PHP_EOL;
		}else{
			print 'The file '.$langURL.' is not available in this language...'.PHP_EOL;
		}

	}
	fclose($file);
	print PHP_EOL.PHP_EOL;
}

if(is_array($singlefiles) && count($singlefiles) > 0){
	foreach($languages as $mylang2){
		print 'Language: '.$mylang2.PHP_EOL;
		foreach($singlefiles as $slangparams){
			$file = fopen('./src/locales/'.$mylang2.'/'.$slangparams[1].'.js','w');
			$langURL	= str_replace('{!language!}', $mylang2, $slangparams[0]);
			$jsfile		= file_get_contents($langURL, false, stream_context_create($arrContextOptions));
			fputs($file,$jsfile);
			print 'Adding '.$langURL.' file to the language folder...'.PHP_EOL;
			fclose($file);
		}
		print PHP_EOL.PHP_EOL;
	}
}
print 'DONE!';
?>
