<?php
const DEBUG				= 5;// Debug Level (how will we debug)
const DEBUG_FILE		= 'error.log';

// System Requirements
chdir(dirname(__FILE__));
const _DEBUG_DISABLED	= 0;// disable debug
const _DEBUG_DIE		= 1;// return with die()
const _DEBUG_PRINT		= 2;// use print
const _DEBUG_LOG		= 4;// create error.log


class jquery_themeroller {
	
	private $file_config			= 'themeroller_config.json';
	private $overwrite_config		= ['jquery_themeroller_url','jquery_parsetheme_url','jquery_default_vars','file_variables','file_theme','var_prefix','less_vars',];
	//-------------------------------
	private $jquery_themeroller_url	= 'http://jqueryui.com/themeroller/';
	private $jquery_parsetheme_url	= 'http://download.jqueryui.com/themeroller/parsetheme.css?';
	private $jquery_default_vars	= ['dynamicImage'=>'true', 'dynamicImageHost'=>''];
	
	private $file_variables			= '../css/0_jquery-ui.lessvariables.css';
	private $file_theme				= '../css/21_jquery-ui.theme.less.css';
	
	private $var_prefix				= '@jqueryUI';
	private $merged_vars			= '';
	
	private $less_vars		= [
		'dynamicImage'			=> ['use'=>'jquery_value', 'value'=>'true'],
		'dynamicImageHost'		=> ['use'=>'jquery_value', 'value'=>''],
		'scope'					=> ['use'=>false, 'value'=>''],
		'folderName'			=> ['use'=>false, 'value'=>'custom-theme'],
		
		// Font Settings
		'ffDefault'				=> ['name'=>'FontFamily', 'value'=>'Verdana,Arial,sans-serif'],
		'fsDefault'				=> ['name'=>'FontSize', 'value'=>'1.1em'],
		'fwDefault'				=> ['name'=>'FontWeight', 'value'=>'normal'],
		
		// Corner Radius
		'cornerRadius'			=> ['name'=>'BorderRadius', 'value'=>'4px'],
		
		// Header/Toolbar
		'bgColorHeader'			=> ['name'=>'HeaderBackground', 'value'=>'#999999'],
		'bgTextureHeader'		=> ['use'=>'jquery_value', 'jquery_value'=>'flat'],// "flat" to disable image
		'bgImgOpacityHeader'	=> ['use'=>false],
		'borderColorHeader'		=> ['name'=>'HeaderBorderColor', 'value'=>'#ccc'],
		'fcHeader'				=> ['name'=>'HeaderFontColor', 'value'=>'#000'],
		'iconColorHeader'		=> ['use'=>'jquery_value', 'name'=>'HeaderIconColor', 'value'=>'\'ffffff\'', 'jquery_value'=>'#F00001'],// unique color to better identify on $this->parse_costum
		
		// Content
		'bgColorContent'		=> ['name'=>'ContentBackground', 'value'=>'#fff'],
		'bgTextureContent'		=> ['use'=>'jquery_value', 'jquery_value'=>'flat'],// "flat" to disable image
		'bgImgOpacityContent'	=> ['use'=>false],
		'borderColorContent'	=> ['name'=>'ContentBorderColor', 'value'=>'#ccc'],
		'fcContent'				=> ['name'=>'ContentFontColor', 'value'=>'#000'],
		'iconColorContent'		=> ['use'=>'jquery_value', 'name'=>'ContentIconColor', 'value'=>'\'cccccc\'', 'jquery_value'=>'F00002'],// unique color to better identify on $this->parse_costum
		
		// Clickable: default state
		'bgColorDefault'		=> ['name'=>'StateDefaultBackground', 'value'=>'#e6e6e6'],
		'bgTextureDefault'		=> ['use'=>'jquery_value', 'jquery_value'=>'flat'],// "flat" to disable image
		'bgImgOpacityDefault'	=> ['use'=>false],
		'borderColorDefault'	=> ['name'=>'StateDefaultBorderColor', 'value'=>'#ccc'],
		'fcDefault'				=> ['name'=>'StateDefaultFontColor', 'value'=>'#000'],
		'iconColorDefault'		=> ['use'=>'jquery_value', 'name'=>'StateDefaultIconColor', 'value'=>'\'ffffff\'', 'jquery_value'=>'F00003'],//$1 unique color to better identify on $this->parse_costum
		
		// Clickable: hover state
		'bgColorHover'			=> ['name'=>'StateHoverBackground', 'value'=>'#cdcdcd'],
		'bgTextureHover'		=> ['use'=>'jquery_value', 'jquery_value'=>'flat'],// "flat" to disable image
		'bgImgOpacityHover'		=> ['use'=>false],
		'borderColorHover'		=> ['name'=>'StateHoverBorderColor', 'value'=>'#4d4d4d'],
		'fcHover'				=> ['name'=>'StateHoverFontColor', 'value'=>'#000'],
		'iconColorHover'		=> ['use'=>'jquery_value', 'name'=>'StateHoverIconColor', 'value'=>'\'ffffff\'', 'jquery_value'=>'F00004'],// unique color to better identify on $this->parse_costum
		
		// Clickable: active state
		'bgColorActive'			=> ['name'=>'StateActiveBackground', 'value'=>'#ffffff'],
		'bgTextureActive'		=> ['use'=>'jquery_value', 'jquery_value'=>'flat'],// "flat" to disable image
		'bgImgOpacityActive'	=> ['use'=>false],
		'borderColorActive'		=> ['name'=>'StateActiveBorderColor', 'value'=>'#ccc'],
		'fcActive'				=> ['name'=>'StateActiveFontColor', 'value'=>'#000'],
		'iconColorActive'		=> ['use'=>'jquery_value', 'name'=>'StateActiveIconColor', 'value'=>'\'222222\'', 'jquery_value'=>'F00005'],// unique color to better identify on $this->parse_costum
		
		// Highlight
		'bgColorHighlight'		=> ['name'=>'HighlightBackground', 'value'=>'#f5f5f5'],
		'bgTextureHighlight'	=> ['use'=>'jquery_value', 'jquery_value'=>'flat'],// "flat" to disable image
		'bgImgOpacityHighlight'	=> ['use'=>false],
		'borderColorHighlight'	=> ['name'=>'HighlightBorderColor', 'value'=>'#ccc'],
		'fcHighlight'			=> ['name'=>'HighlightFontColor', 'value'=>'#000'],
		'iconColorHighlight'	=> ['use'=>'jquery_value', 'name'=>'HighlightIconColor', 'value'=>'\'4b8e0b\'', 'jquery_value'=>'F00006'],// unique color to better identify on $this->parse_costum
		
		// Error
		'bgColorError'			=> ['name'=>'ErrorBackground', 'value'=>'#cd0a0a'],
		'bgTextureError'		=> ['use'=>'jquery_value', 'jquery_value'=>'flat'],// "flat" to disable image
		'bgImgOpacityError'		=> ['use'=>false],
		'borderColorError'		=> ['name'=>'ErrorBorderColor', 'value'=>'#cd0a0a'],
		'fcError'				=> ['name'=>'ErrorFontColor', 'value'=>'#cd0a0a'],
		'iconColorError'		=> ['use'=>'jquery_value', 'name'=>'ErrorIconColor', 'value'=>'\'a83300\'', 'jquery_value'=>'F00007'],// unique color to better identify on $this->parse_costum
		
		// Modal Screen for Overlays
		'bgColorOverlay'		=> ['name'=>'OverlayBackground', 'value'=>'#333333'],
		'bgTextureOverlay'		=> ['use'=>'jquery_value', 'jquery_value'=>'flat'],// "flat" to disable image
		'bgImgOpacityOverlay'	=> ['use'=>false],
		'opacityOverlay'		=> ['name'=>'OverlayOpacity', 'value'=>'.5'],
		
		// Drop Shadows
		'bgColorShadow'			=> ['name'=>'ShadowColor', 'value'=>'#ccc'],
		'bgTextureShadow'		=> ['use'=>'jquery_value', 'jquery_value'=>'flat'],// "flat" to disable image
		'bgImgOpacityShadow'	=> ['use'=>false],
		'opacityShadow'			=> ['use'=>false],// "No longer in use in 1.12.x"
		'thicknessShadow'		=> ['name'=>'ShadowThickness', 'value'=>'8px'],
		'offsetTopShadow'		=> ['name'=>'ShadowTop', 'value'=>'-8px'],
		'offsetLeftShadow'		=> ['name'=>'ShadowLeft', 'value'=>'-8px'],
		'cornerRadiusShadow'	=> ['use'=>false],// "No longer in use in 1.12.x"
	];
	
	public function __construct(){
		$this->init_config_file();
		
		$this->read_jquery_data();
		$this->merge_jquery_vars();
		
		$strCSS = $this->fetch_url($this->jquery_parsetheme_url.substr($this->merged_vars, 0, -1));
		if(substr($strCSS, 0, 7) != 'Error: ') $this->parse_custom($strCSS);
		else{
			trigger_error($strCSS, E_USER_ERROR);// Throw Error: jquery error
		}
		
		$this->create_theme_file($strCSS);
		$this->create_var_file();
		
		die();
	}
	
	private function init_config_file(){
		if(file_exists($this->file_config)){
			$arrSettings = json_decode(file_get_contents($this->file_config), true);
			
			foreach($arrSettings as $strSettingName => $arrSettingData){
				if(isset($this->$strSettingName) && in_array($strSettingName, $this->overwrite_config)) $this->$strSettingName = $arrSettingData;
			}
		}
	}
	
	private function read_jquery_data(){
		$strHTML = $this->fetch_url($this->jquery_themeroller_url);
		preg_match('/<div id="themeroller"(.*)">/', $strHTML, $match);
		unset($strHTML);
		
		$objDOM = new DOMDocument();
		@$objDOM->loadHTML($match[0]);
		foreach($objDOM->getElementById('themeroller')->attributes as $attr){
			if($attr->nodeName == 'data-base-vars') $this->parse_default_variables($attr->nodeValue);
			if($attr->nodeName == 'data-download-jqueryui-host') $this->jquery_parsetheme_url = 'http:'.$attr->nodeValue.'/themeroller/parsetheme.css?';
		}
	}
	
	private function parse_default_variables($strVariables){
		foreach(explode('&', $strVariables) as $strVariable){
			$arrVariable = explode('=', $strVariable);
			$this->jquery_default_vars[$arrVariable[0]] = $arrVariable[1];
		}
	}
	
	private function merge_jquery_vars(){
		foreach($this->jquery_default_vars as $default_var => $default_value){
			
			if(isset($this->less_vars[$default_var]['use'])){
				// skip is defined: "true" = continue ; "false" = use value instead name
				switch($this->less_vars[$default_var]['use']){
					case 'name': $use_var = ((isset($this->less_vars[$default_var]['name']))? $this->less_vars[$default_var]['name'] : $default_value); break;
					case 'value': $use_var = ((isset($this->less_vars[$default_var]['value']))? $this->less_vars[$default_var]['value'] : $default_value); break;
					case 'jquery_value': $use_var = ((isset($this->less_vars[$default_var]['jquery_value']))? $this->less_vars[$default_var]['jquery_value'] : $default_value); break;
					default: continue;
				}
				$this->merged_vars .= $default_var.'='.$use_var.'&';
				
			}else{
				if(isset($this->less_vars[$default_var])){
					// Var is defined and will be added as a HTML GET-Paramater String
					//$this->var_prefix.$this->less_vars[$default_var]['name']
					$this->merged_vars .= $default_var.'='.$this->var_prefix.((isset($this->less_vars[$default_var]['name']))? $this->less_vars[$default_var]['name'] : $default_var).'&';
				}else{
					// Throw error: missing var
					trigger_error('MISSING LESS Variable: '.$default_var, E_USER_WARNING);
				}
			}
		}
	}
	
	private function parse_custom(&$strCSS){
		// Put here your own preg_replace rules etc...
		
		// Change Icon Images
		$strPattern = '/background-image: url\(\"\/themeroller\/images\/ui-icons_([\d\w]{3,6})_256x240.png\"\);/i';
		$strCSS = preg_replace_callback($strPattern, function($match){
			switch($match[1]){
				case 'F00001': $less_var = $this->var_prefix.$this->less_vars['iconColorHeader']['name'];		break;
				case 'F00002': $less_var = $this->var_prefix.$this->less_vars['iconColorContent']['name'];		break;
				case 'F00003': $less_var = $this->var_prefix.$this->less_vars['iconColorDefault']['name'];		break;
				case 'F00004': $less_var = $this->var_prefix.$this->less_vars['iconColorHover']['name'];		break;
				case 'F00005': $less_var = $this->var_prefix.$this->less_vars['iconColorActive']['name'];		break;
				case 'F00006': $less_var = $this->var_prefix.$this->less_vars['iconColorHighlight']['name'];	break;
				case 'F00007': $less_var = $this->var_prefix.$this->less_vars['iconColorError']['name'];		break;
				case '454545': $less_var = $this->var_prefix.$this->less_vars['iconColorHeader']['name'];		break;
				default: $less_var = $this->var_prefix.'UnkownImage';
			}
			return 'background-image: url("../../../@{_path}images/ui-icons_@{'.substr($less_var, 1).'}_256x240.png")';
		}, $strCSS);
		
		// Fix: Overlay Opacity
		// $strPattern = '/(.ui-widget-overlay {.*opacity: )NaN(;.*filter: Alpha\(Opacity=)@jqueryUIOverlayOpacity(\);.*})/si';
		// $strCSS = preg_replace($strPattern, '$1'.$this->var_prefix.$this->less_vars['opacityOverlay']['name'].'$2percentage('.$this->var_prefix.$this->less_vars['opacityOverlay']['name'].')$3', $strCSS);
		
	}
	
	private function create_theme_file(&$strCSS){
		file_put_contents($this->file_theme, PHP_EOL.$strCSS.PHP_EOL);
	}
	
	private function create_var_file(){
		$strFileText = PHP_EOL.'// jQueryUI Themeroller'.PHP_EOL;
		foreach($this->less_vars as $var){
			if(isset($var['use']) && $var['use'] != false || !isset($var['use'])){
				if(isset($var['name']) && !empty($var['name'])){
					if(isset($var['value'])){
						$strFileText .= $this->var_prefix.$var['name'].': '.((!empty($var['value']))? $var['value'] : "''").';'.PHP_EOL;
					}else{
						$strFileText .= '//themeroller_parse_error: "name"=>"'.$var['name'].'", "value"=>"'.$var['value'].'";'.PHP_EOL;
					}
				}
			}
		}
		
		file_put_contents($this->file_variables, $strFileText);
	}
	
	private function fetch_url($strURL){
		$objCurl = curl_init();
		curl_setopt($objCurl, CURLOPT_URL, $strURL);
		curl_setopt($objCurl, CURLOPT_RETURNTRANSFER, 1);
		$return = curl_exec($objCurl);
		curl_close($objCurl);
		return $return;
	}
}

// Error Handler
function catch_error($num, $str, $file, $line, $context = NULL){
	handle_exception(new ErrorException($str, $num, $num, $file, $line));
}
function catch_fatal_error(){
	$error = error_get_last();
	if($error["type"] == E_ERROR) catch_error($error["type"], $error["message"], $error["file"], $error["line"]);
}

function handle_exception(Exception $objException){
    switch($objException->getCode()){
		case E_WARNING:				$e_type = 'E_WARNING'; break;			// 2
        case E_PARSE:				$e_type = 'E_PARSE'; break;				// 4
        case E_NOTICE:				$e_type = 'E_NOTICE'; break;			// 8
        case E_CORE_ERROR:			$e_type = 'E_CORE_ERROR'; break;		// 16
        case E_CORE_WARNING:		$e_type = 'E_CORE_WARNING'; break;		// 32
        case E_COMPILE_ERROR:		$e_type = 'E_COMPILE_ERROR'; break;		// 64
        case E_COMPILE_WARNING:		$e_type = 'E_COMPILE_WARNING'; break;	// 128
        case E_USER_ERROR:			$e_type = 'E_USER_ERROR'; break;		// 256
        case E_USER_WARNING:		$e_type = 'E_USER_WARNING'; break;		// 512
        case E_USER_NOTICE:			$e_type = 'E_USER_NOTICE'; break;		// 1024
        case E_STRICT:				$e_type = 'E_STRICT'; break;			// 2048
        case E_RECOVERABLE_ERROR:	$e_type = 'E_RECOVERABLE_ERROR'; break;	// 4096
        case E_DEPRECATED:			$e_type = 'E_DEPRECATED'; break;		// 8192
        case E_USER_DEPRECATED:		$e_type = 'E_USER_DEPRECATED'; break;	// 16384
		case E_ERROR:
        default:					$e_type = 'E_ERROR';					// 1
    }
	
	if(DEBUG &_DEBUG_LOG){
		$strErrorLog = PHP_EOL.'['.date('d-m-Y H:i:s').'] Type: '.$e_type.' Message: '.$objException->getMessage().' File: '.$objException->getFile().' Line: '.$objException->getLine();
		file_put_contents(DEBUG_FILE, $strErrorLog, FILE_APPEND);
	}
	if(DEBUG &_DEBUG_PRINT){
		print '<div style="text-align: center;">';
		print '<h2 style="color: rgb(190, 50, 50);">Exception Occured</h2>';
		print '<table style="width: 800px; display: inline-block;">';
		print 	'<tr style="background-color:rgb(230,230,230);"><th style="width: 80px;">Type</th><td>'.$e_type.'</td></tr>';
		print 	'<tr style="background-color:rgb(240,240,240);"><th>Message</th><td>'.$objException->getMessage().'</td></tr>';
		print 	'<tr style="background-color:rgb(230,230,230);"><th>File</th><td>'.$objException->getFile().'</td></tr>';
		print 	'<tr style="background-color:rgb(240,240,240);"><th>Line</th><td>'.$objException->getLine().'</td></tr>';
		print '</table></div>';
    }
	if(DEBUG &_DEBUG_DIE){
		die(json_encode([
			'error' => [
				'type'	=> $e_type,
				'msg'	=> $objException->getMessage(),
				'file'	=> $objException->getFile(),
				'line'	=> $objException->getLine(),
			],
		]));
    }
   
}

register_shutdown_function('catch_fatal_error');
set_error_handler('catch_error');
set_exception_handler('handle_exception');
ini_set('display_errors', 'off');
error_reporting(E_ALL);

// Execute Class
(new jquery_themeroller());

?>