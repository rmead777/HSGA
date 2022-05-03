<?php
/**
 * @var $file
 *
 */

/*
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://localhost/hswm/test2/webroot/gitlab/out/_next/static/chunks/polyfills-5cd94c89d3acac5f.js");
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);
curl_close($ch);
print_r($output);


echo "\r\n\r\n\r\n\r\n\r\n\r\n";


$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://localhost/hswm/test2/jsservs/_next/static/chunks/polyfills-5cd94c89d3acac5f.js");
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);
curl_close($ch);
print_r($output);


exit;*/

$mimetype = "";
//print_r(mime_content_type($file));exit;
switch (substr($file, strripos($file, '.'))){
    case ".js":
    $mimetype = 'application/javascript';
        $this->response->setTypeMap('js', ['application/javascript']);
        $this->response = $this->response->withType('js');


        break;
    case ".css":
        $mimetype = 'text/css';
        $this->response->setTypeMap('cs', ['text/css']);
        $this->response = $this->response->withType('cs');
        break;
    default:
        $mimetype = mime_content_type($file);
        $typemap = substr($mimetype, strripos($mimetype, '/'));
        $this->response->setTypeMap($typemap, [$mimetype]);
        $this->response = $this->response->withType($typemap);
        break;
}

function callback($buffer){

/*    $pattern = "/<script.+?>/i";*/
//    preg_match_all($pattern, $buffer, $matches);
//    return (print_r($matches[0], true));
    if(strpos($_SERVER['REQUEST_URI'], 'jsservs')>0) {
        $pathreplace = ".";
    }
    else{
        $pathreplace = "./jsservs";
    }

    $buffer = str_replace("/gitlab/out/", $pathreplace . '/', $buffer);
    $buffer = str_replace(".html\"", "\"", $buffer);
    $buffer = str_replace("/gitlab/out", $pathreplace, $buffer);
    if(substr($_SERVER['REQUEST_URI'], strripos($_SERVER['REQUEST_URI'], '.')) == ".js" && array_key_exists('HTTP_REFERER', $_SERVER) &&  !strpos($_SERVER['HTTP_REFERER'], 'jsservs')>0) {
        $hardpaths = ['/_next/', 'assets/', 'images/'];
        foreach ($hardpaths as $hardpath) {
            $jsservs = substr($hardpath,0, 1)=="/" ? "/" : "";
            $jsservs.= "jsservs";
            $jsservs.= substr($hardpath,0, 1)=="/" ? "" : "/";

            $buffer = str_replace('"'.$hardpath, '"'.$jsservs. $hardpath, $buffer);
        }
    }


    if(!strpos($_SERVER['REQUEST_URI'], 'jsservs')>0) {
        $pattern = '/((?<!data-)src|href)="\.\/.+?"/i';
        preg_match_all($pattern, $buffer, $matches);
        foreach ($matches[0] as $match) {
            $v = substr($match, strpos($match, '"')+1, -1);
            if(strpos($v, "jsservs")<=0){
                $buffer = str_replace($v, $pathreplace.substr($v, 1), $buffer);
            }
        }
//        return print_r($matches[0], true);
    }

//    $buffer = str_replace("/gitlab/out/", $pathreplace.'/', $buffer);
//    $buffer = str_replace(".html\"", "\"", $buffer);
    return $buffer;

}

function scripts_callback($buffer){

    $pattern = "/<script.+?>/i";
    preg_match_all($pattern, $buffer, $matches);
    $returnstring = "<textarea>". print_r($matches[0], true)."\r\n\r\n\r\n\r\n"."</textarea>";

    $theFormArray = [];
    foreach ($matches[0] as $match) {
        $pattern = '/src=".+?"/i';
        preg_match_all($pattern, $match, $matches_s);
        $theForm = [];
        foreach ($matches_s[0] as $matches_) {
            $n = substr($matches_, 0, strpos($matches_, "="));
            $v = substr($matches_, strpos($matches_, '"')+1, -1);
            $theForm[] = $v;
        }
        $theFormArray[] = $theForm;
    }
    foreach ($theFormArray as $item) {
        $item = reset($item);
        $returnstring.= "<a href=\"$item\">$item</a><br>\r\n";
    }
//    $returnstring.= print_r($theFormArray, true);
    return $returnstring;

}


$callbackfunc = 'callback';
if(isset($getscripts)){
    $callbackfunc = 'scripts_callback';
//    $this->response->setTypeMap('js', ['application/javascript']);
//    $this->response = $this->response->withType('js');
}
$mimearray = [
    'application/javascript',
    'text/css',
    'text/html'
];
if(in_array($mimetype, $mimearray)){
    ob_start($callbackfunc);
    include $file;
    ob_end_flush();

//    $buff = file_get_contents($file);
//    echo $callbackfunc($buff);
}
else{
    include $file;
//    $buff = file_get_contents($file);
//    echo $buff;
}



