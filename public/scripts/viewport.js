var d = window.document;
var ua = navigator.userAgent;
if((ua.indexOf('iPhone') > -1) || (ua.indexOf('iPod') > -1) || (ua.indexOf('Mobile') > -1) && (ua.indexOf('Android') > -1)){
	d.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=3.0,user-scalable=yes">');
}else if(ua.indexOf('iPad') > -1 || (ua.indexOf('Mobile') <= -1) && (ua.indexOf('Android') > -1)){
	d.write('<meta name="viewport" content="width=1200px">');
	d.write('<meta name="format-detection" content="telephone=no">');
}else {
}