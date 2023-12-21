/**
* Responsive
* 
* author: Thilo Ilg
* version: 1.1.6
* 
**/

/** 
* --- jAlbumGlobals ---
* jAlbumGlobals is responsible for constant parameter of the skin.
* In the process of creating an album the jAlbum parser will overwrite 
* the variables according to the skin with the selected ones in the
* program. jAlbumGlobals also includes global variables which describe
* the state of the skin like if it is embedded, viewed on a mobile device,
* online or in filesystem etc.
*/
var jAlbumGlobals1703182200380 = (function () {

	var styles = ["dark.css", "light.css", "transparent.css"]; // styles

	var mobile = isMobile(); // is the skin viewed on a mobile device
	var online = isOnline(); // is the skin viewed online or in the filesystem
	var jAlbumURL = getURL(); // what's the current url?

	var stylePath = ""; //path points to the styles folder
	var resPath = ""; // path points to the res folder

	var credits = "Álbumes de fotos web jAlbum"; // should skin show credits in footer
	var albumTitle = "Galeria de Titulación"; // what's the album title?
	var contentPath = ""; // path points to the skin folder
	var imgHoverScaleFactor = "scale(1.1)"; // scale factor of hovering an element

	var folderTitleUp = true; // positioning of folder title, under or above folder
	var folderImgCount = false; // says if folder deep count should be shown
	var maxImgInRow = 15; // restricts the number of elements in a row
	var imgBorderSize = 1; // define border size of element
	var imgBoxSize = 175; // defines size of container of element
	var showFolderName = true; // says if folder name should be displayed
	var textSize = 16; // defines text size of whole page
	var showComments = true; // defines if comments should be shown in slideshow
	var slideBorderSize = 0;
	var slideBorderColor = "#ffffffff";
	var slideMarginSize = 0; // Margin around full screen image.
	var style = "dark.css";

	var dataTree = {"path":"Galeria%20de%20Titulaci%C3%B3n","counters":{"total":24,"images":24,"files":24},"thumb":{"path":"thumbs\/412026569_361325479819598_1013254065001840470_n.jpg","width":192,"height":256},"objects":[{"path":"412026569_361325479819598_1013254065001840470_n.jpg","image":{"path":"slides\/412026569_361325479819598_1013254065001840470_n.jpg","width":720,"height":960},"thumb":{"path":"thumbs\/412026569_361325479819598_1013254065001840470_n.jpg","width":192,"height":256},"fileSize":51455,"name":"412026569_361325479819598_1013254065001840470_n.jpg","rating":5,"fileDate":"2023-12-21T12:45:22.485Z","category":"image","camera":{"originalDate":"2023-12-21T12:45:22.485Z"}},{"path":"412262069_361327483152731_1721702495225670950_n.jpg","image":{"path":"slides\/412262069_361327483152731_1721702495225670950_n.jpg","width":708,"height":1536},"thumb":{"path":"thumbs\/412262069_361327483152731_1721702495225670950_n.jpg","width":118,"height":256},"fileSize":51157,"name":"412262069_361327483152731_1721702495225670950_n.jpg","fileDate":"2023-12-21T12:45:32.417Z","category":"image","camera":{"originalDate":"2023-12-21T12:45:32.417Z"}},{"path":"410243429_361325333152946_5993932411272469394_n.jpg","image":{"path":"slides\/410243429_361325333152946_5993932411272469394_n.jpg","width":480,"height":1040},"thumb":{"path":"thumbs\/410243429_361325333152946_5993932411272469394_n.jpg","width":118,"height":256},"fileSize":37281,"name":"410243429_361325333152946_5993932411272469394_n.jpg","fileDate":"2023-12-21T12:51:06.223Z","category":"image","camera":{"originalDate":"2023-12-21T12:51:06.223Z"}},{"path":"411859422_361325273152952_4280688565169169557_n.jpg","image":{"path":"slides\/411859422_361325273152952_4280688565169169557_n.jpg","width":576,"height":1280},"thumb":{"path":"thumbs\/411859422_361325273152952_4280688565169169557_n.jpg","width":115,"height":256},"fileSize":68456,"name":"411859422_361325273152952_4280688565169169557_n.jpg","fileDate":"2023-12-21T12:51:19.938Z","category":"image","camera":{"originalDate":"2023-12-21T12:51:19.938Z"}},{"path":"411998638_361325213152958_2019137888210239169_n.jpg","image":{"path":"slides\/411998638_361325213152958_2019137888210239169_n.jpg","width":1280,"height":576},"thumb":{"path":"thumbs\/411998638_361325213152958_2019137888210239169_n.jpg","width":256,"height":115},"fileSize":57347,"name":"411998638_361325213152958_2019137888210239169_n.jpg","fileDate":"2023-12-21T12:51:49.190Z","category":"image","camera":{"originalDate":"2023-12-21T12:51:49.190Z"}},{"path":"411851850_361325146486298_1011022841001831890_n.jpg","image":{"path":"slides\/411851850_361325146486298_1011022841001831890_n.jpg","width":576,"height":1280},"thumb":{"path":"thumbs\/411851850_361325146486298_1011022841001831890_n.jpg","width":115,"height":256},"fileSize":52693,"name":"411851850_361325146486298_1011022841001831890_n.jpg","fileDate":"2023-12-21T12:51:58.829Z","category":"image","camera":{"originalDate":"2023-12-21T12:51:58.829Z"}},{"path":"411250152_361327453152734_3206696472358783791_n.jpg","image":{"path":"slides\/411250152_361327453152734_3206696472358783791_n.jpg","width":1152,"height":1536},"thumb":{"path":"thumbs\/411250152_361327453152734_3206696472358783791_n.jpg","width":192,"height":256},"fileSize":172471,"name":"411250152_361327453152734_3206696472358783791_n.jpg","fileDate":"2023-12-21T12:52:20.333Z","category":"image","camera":{"originalDate":"2023-12-21T12:52:20.333Z"}},{"path":"411161482_361327426486070_4120896097944128519_n.jpg","image":{"path":"slides\/411161482_361327426486070_4120896097944128519_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/411161482_361327426486070_4120896097944128519_n.jpg","width":256,"height":192},"fileSize":158736,"name":"411161482_361327426486070_4120896097944128519_n.jpg","fileDate":"2023-12-21T12:52:25.140Z","category":"image","camera":{"originalDate":"2023-12-21T12:52:25.140Z"}},{"path":"411692955_361325003152979_402033190740787379_n.jpg","image":{"path":"slides\/411692955_361325003152979_402033190740787379_n.jpg","width":960,"height":720},"thumb":{"path":"thumbs\/411692955_361325003152979_402033190740787379_n.jpg","width":256,"height":192},"fileSize":60340,"name":"411692955_361325003152979_402033190740787379_n.jpg","fileDate":"2023-12-21T12:52:47.110Z","category":"image","camera":{"originalDate":"2023-12-21T12:52:47.110Z"}},{"path":"411727233_361324969819649_1708153316015870088_n.jpg","image":{"path":"slides\/411727233_361324969819649_1708153316015870088_n.jpg","width":720,"height":960},"thumb":{"path":"thumbs\/411727233_361324969819649_1708153316015870088_n.jpg","width":192,"height":256},"fileSize":63493,"name":"411727233_361324969819649_1708153316015870088_n.jpg","fileDate":"2023-12-21T12:52:55.73Z","category":"image","camera":{"originalDate":"2023-12-21T12:52:55.73Z"}},{"path":"412015245_361324936486319_241962639733934588_n.jpg","image":{"path":"slides\/412015245_361324936486319_241962639733934588_n.jpg","width":720,"height":960},"thumb":{"path":"thumbs\/412015245_361324936486319_241962639733934588_n.jpg","width":192,"height":256},"fileSize":56822,"name":"412015245_361324936486319_241962639733934588_n.jpg","fileDate":"2023-12-21T12:53:13.86Z","category":"image","camera":{"originalDate":"2023-12-21T12:53:13.86Z"}},{"path":"412324280_361327249819421_830947851233640745_n.jpg","image":{"path":"slides\/412324280_361327249819421_830947851233640745_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/412324280_361327249819421_830947851233640745_n.jpg","width":256,"height":192},"fileSize":118211,"name":"412324280_361327249819421_830947851233640745_n.jpg","fileDate":"2023-12-21T12:54:52.308Z","category":"image","camera":{"originalDate":"2023-12-21T12:54:52.308Z"}},{"path":"411148115_361327226486090_2826812751480739645_n.jpg","image":{"path":"slides\/411148115_361327226486090_2826812751480739645_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/411148115_361327226486090_2826812751480739645_n.jpg","width":256,"height":192},"fileSize":163258,"name":"411148115_361327226486090_2826812751480739645_n.jpg","fileDate":"2023-12-21T12:55:16.392Z","category":"image","camera":{"originalDate":"2023-12-21T12:55:16.392Z"}},{"path":"412299793_361327206486092_6013399469484835376_n.jpg","image":{"path":"slides\/412299793_361327206486092_6013399469484835376_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/412299793_361327206486092_6013399469484835376_n.jpg","width":256,"height":192},"fileSize":151933,"name":"412299793_361327206486092_6013399469484835376_n.jpg","fileDate":"2023-12-21T12:55:25.423Z","category":"image","camera":{"originalDate":"2023-12-21T12:55:25.423Z"}},{"path":"411123510_361327193152760_8646135583885133408_n.jpg","image":{"path":"slides\/411123510_361327193152760_8646135583885133408_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/411123510_361327193152760_8646135583885133408_n.jpg","width":256,"height":192},"fileSize":147955,"name":"411123510_361327193152760_8646135583885133408_n.jpg","fileDate":"2023-12-21T12:55:37.884Z","category":"image","camera":{"originalDate":"2023-12-21T12:55:37.884Z"}},{"path":"412309052_361327163152763_1309957171259490543_n.jpg","image":{"path":"slides\/412309052_361327163152763_1309957171259490543_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/412309052_361327163152763_1309957171259490543_n.jpg","width":256,"height":192},"fileSize":171235,"name":"412309052_361327163152763_1309957171259490543_n.jpg","fileDate":"2023-12-21T12:56:00.543Z","category":"image","camera":{"originalDate":"2023-12-21T12:56:00.543Z"}},{"path":"411163817_361327126486100_4464725094087348860_n.jpg","image":{"path":"slides\/411163817_361327126486100_4464725094087348860_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/411163817_361327126486100_4464725094087348860_n.jpg","width":256,"height":192},"fileSize":168163,"name":"411163817_361327126486100_4464725094087348860_n.jpg","fileDate":"2023-12-21T12:56:24.328Z","category":"image","camera":{"originalDate":"2023-12-21T12:56:24.328Z"}},{"path":"411146402_361327079819438_3695606559307954850_n.jpg","image":{"path":"slides\/411146402_361327079819438_3695606559307954850_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/411146402_361327079819438_3695606559307954850_n.jpg","width":256,"height":192},"fileSize":173409,"name":"411146402_361327079819438_3695606559307954850_n.jpg","fileDate":"2023-12-21T12:56:36.106Z","category":"image","camera":{"originalDate":"2023-12-21T12:56:36.106Z"}},{"path":"412343501_361327063152773_2699645486267867596_n.jpg","image":{"path":"slides\/412343501_361327063152773_2699645486267867596_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/412343501_361327063152773_2699645486267867596_n.jpg","width":256,"height":192},"fileSize":154646,"name":"412343501_361327063152773_2699645486267867596_n.jpg","fileDate":"2023-12-21T12:56:38.938Z","category":"image","camera":{"originalDate":"2023-12-21T12:56:38.938Z"}},{"path":"411279913_361327033152776_3913643117249341664_n.jpg","image":{"path":"slides\/411279913_361327033152776_3913643117249341664_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/411279913_361327033152776_3913643117249341664_n.jpg","width":256,"height":192},"fileSize":169016,"name":"411279913_361327033152776_3913643117249341664_n.jpg","fileDate":"2023-12-21T12:56:46.931Z","category":"image","camera":{"originalDate":"2023-12-21T12:56:46.931Z"}},{"path":"412290321_361326993152780_2775730483018793940_n.jpg","image":{"path":"slides\/412290321_361326993152780_2775730483018793940_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/412290321_361326993152780_2775730483018793940_n.jpg","width":256,"height":192},"fileSize":170633,"name":"412290321_361326993152780_2775730483018793940_n.jpg","fileDate":"2023-12-21T12:57:01.282Z","category":"image","camera":{"originalDate":"2023-12-21T12:57:01.282Z"}},{"path":"412297459_361326976486115_7847552122701340519_n.jpg","image":{"path":"slides\/412297459_361326976486115_7847552122701340519_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/412297459_361326976486115_7847552122701340519_n.jpg","width":256,"height":192},"fileSize":159488,"name":"412297459_361326976486115_7847552122701340519_n.jpg","fileDate":"2023-12-21T12:57:13.158Z","category":"image","camera":{"originalDate":"2023-12-21T12:57:13.158Z"}},{"path":"412278471_361326959819450_2615562491015313575_n.jpg","image":{"path":"slides\/412278471_361326959819450_2615562491015313575_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/412278471_361326959819450_2615562491015313575_n.jpg","width":256,"height":192},"fileSize":154932,"name":"412278471_361326959819450_2615562491015313575_n.jpg","fileDate":"2023-12-21T12:57:18.478Z","category":"image","camera":{"originalDate":"2023-12-21T12:57:18.478Z"}},{"path":"411207382_361326933152786_2403753784468372469_n.jpg","image":{"path":"slides\/411207382_361326933152786_2403753784468372469_n.jpg","width":1536,"height":1152},"thumb":{"path":"thumbs\/411207382_361326933152786_2403753784468372469_n.jpg","width":256,"height":192},"fileSize":176183,"name":"411207382_361326933152786_2403753784468372469_n.jpg","fileDate":"2023-12-21T12:57:31.726Z","category":"image","camera":{"originalDate":"2023-12-21T12:57:31.726Z"}}],"name":"Galeria de Titulación","fileDate":"2023-12-21T13:09:08.394Z"}; // includes all the album data in a json tree
	var stylePath = ""; 

	var widgetColor = getWidgetColor(); // get suggested color for widget support

	var uniqueId = new Date().getTime();

	/** check if page viewed on mobile device **/
	function isMobile(){
		return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)));
	}

	/** check if page viewed online or from file system **/
	function isOnline(){
		switch(window.location.protocol) {
		   case 'http:':
		   		return true;
		   case 'https:':
		     	return true;
		   case 'file:':
		    	return false;
		}
	}

	/** get current url of page **/
	function getURL(){
		var scripts = document.getElementsByTagName('script');
		for (var index = scripts.length-1; index >= 0; --index) {
			if (scripts[index].id == 'jAlbum') {
				var curr = scripts[index].src;
				return curr.substring(0, curr.lastIndexOf("/") + 1);
			}
		}
		return "";
	}

	/** get fidget color according to current style **/
	function getWidgetColor(){
		if(style == styles[0]) return "black";
		else return "white";
	}

	/** returns all the public variables and functions **/
	return {
		mobile: mobile,
		online: online,
		jAlbumURL: jAlbumURL,
		stylePath: stylePath,
		resPath: resPath,
		credits: credits,
		albumTitle: albumTitle,
		contentPath: contentPath,
		imgHoverScaleFactor: imgHoverScaleFactor,
		folderTitleUp: folderTitleUp,
		folderImgCount: folderImgCount,
		maxImgInRow: maxImgInRow,
		imgBorderSize: imgBorderSize,
		imgBoxSize: imgBoxSize,
		showFolderName: showFolderName,
		textSize: textSize,
		showComments: showComments,
		dataTree: dataTree,
		stylePath: stylePath,
		slideBorderSize: slideBorderSize,
		slideBorderColor: slideBorderColor,
		slideMarginSize: slideMarginSize,
		widgetColor: widgetColor,
		uniqueId: uniqueId
	};

})();

/** --- jAlbumInject ---
* jAlbumInject is responsible for copying html code into
* the website. Stylesheet includes will be printed into
* the header, the body will be printed to the position
* of the embed code.
*/
var jAlbumInject = (function () {

	appendToHead(injLink('res/css/normalize.min.css', 'stylesheet')); // normalizes browser specific stylesheet defaults
	appendToHead(injLink('res/css/custom.css', 'stylesheet')); // customized desgin of the skin, will be partly overwritten by style.css
	appendToHead(injLink('res/styles.css', 'stylesheet')); // different styles to the skin which change the appearance

	appendToHead(injMeta("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0")); // viewport handles mobile scaling size

	inj('<div id="Responsive' + jAlbumGlobals1703182200380.uniqueId + '" class="jAlbum Responsive">'); // Responsive id surrounds all code of the body of the skin
	inj('<div id="fullscreen"></div>'); // element where to add fullscreen
	inj('<div id="jAlbum-header"></div>'); // header container
	inj('<div id="jAlbum-content"></div>'); // content container
	inj('<div style="clear: both"></div>');

	inj('<div id="jAlbum-footer">'); // footer
	inj('<div class="left leaveFolder">');
	inj('<p><a onclick="jAlbumController.back();"> &#10096;</a></p>'); // go back button in footer
	inj('</div><div class="center"><p><a href="http://jalbum.net/">Álbumes de fotos web jAlbum</a> - '); // credits in footer
	inj('<a href="http://jalbum.net/skins/skin/Responsive">Responsive</a></p>'); // skin advertisement in footer
	inj('</div></div></div>'); // close footer

	inj('<script src="' + jAlbumGlobals1703182200380.jAlbumURL + 'res/libs/jquery-2.1.4.min.js"></script>'); // embets jQuery library
	inj('<script type="text/javascript">$(document).bind("mobileinit", function(){$.extend($.mobile , {autoInitializePage: false})});</script>'); // deactivates jQuery unnecessary mobile feature
	inj('<script src="' + jAlbumGlobals1703182200380.jAlbumURL + 'res/libs/jquery.mobile-1.4.5.min.js"></script>'); // includes jQuery Mobile
	inj('<script src="' + jAlbumGlobals1703182200380.jAlbumURL + 'res/libs/jquery.touchswipe.min.js"></script>'); // jQuery touchswipe plugin
	inj('<script src="' + jAlbumGlobals1703182200380.jAlbumURL + 'main.js" type="text/javascript"></script>'); // includes skin controller
	
	/** injects html code at embedded position **/
	function inj(html){
		document.write(html);
	}

	/** injects html code in header **/
	function appendToHead(elem){
		document.getElementsByTagName('head').item(0).appendChild(elem);
	}

	/** injects header of embedded page with stylesheet includes **/
	function injLink(path, rel){
		var elem = document.createElement("link");
		elem.href = jAlbumGlobals1703182200380.jAlbumURL + path;
		elem.rel = rel;

		return elem;
	}

	function injMeta(name, content){
		var elem = document.createElement("meta");
		elem.name = name;
		elem.content = content;

		return elem;
	}

})();


/** --- Widget Support---
* provides JavaScript code for jAlbum widget support
*/
window._jaWidgetBarColor = jAlbumGlobals1703182200380.widgetColor;

if(!document.getElementById('non-embedded')){ // check if embedded
	window._jaUrl = jAlbumGlobals1703182200380.jAlbumURL;
	_jaSkin = "Responsive";
_jaStyle = "dark.css";
_jaVersion = "33.3.1";
_jaGeneratorType = "desktop";
_jaLanguage = "es";
_jaPageType = "index";
_jaRootPath = ".";
_jaGuid = "1702870509241";
var jalbumWidgetContainer = document.createElement('div');
jalbumWidgetContainer.setAttribute('id','jalbumwidgetcontainer');
var jalbumWidgetScript = document.createElement("script");
jalbumWidgetScript.type = "text/javascript";
jalbumWidgetScript.src = "http"+("https:"==document.location.protocol?"s":"")+"://jalbum.net/widgetapi/load.js";
jalbumWidgetScript.async = true;
jalbumWidgetContainer.appendChild(jalbumWidgetScript);
document.body.appendChild(jalbumWidgetContainer);
 // get JavaScript code for widget
}
