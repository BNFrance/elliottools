// ==UserScript==
// @name         Elliottools BN
// @namespace    http://*.blastingnews.com
// @version      5.1
// @updateURL    https://github.com/BNFrance/elliottools/raw/master/elliottoolbnstampermonkey.js
// @downloadURL  https://github.com/BNFrance/elliottools/raw/master/elliottoolbnstampermonkey.js
// @description  Elliottools BN buttons
// @author       Elliotto
// @match        *://*.blastingnews.com/*/*/*/*.html*
// @match        *://*.blastingpop.com/*/*/*/*.html*
// @grant        GM_addStyle
// @require http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

(function() {
    'use strict';
var urlp = window.location;
var urlpop = window.location.href.replace("blastingnews","blastingpop");
var urlf = window.location.pathname.split('-00');
var urlLink = urlf[urlf.length-1];
var link = urlLink.split('.html')[0];


// DIV contains the buttons
var div = document.createElement('div');
div.id = "elliottools-buttons";
div.style = "width: 65.5%";
var elmExtra1 = document.getElementById('content-breadcrumb');
elmExtra1.parentNode.insertBefore(div, elmExtra1.nextSibling);

// Button 1
var a = document.createElement('a');
var elmNewContent = document.createTextNode("Edit news");
a.appendChild(elmNewContent);
a.id = "elliottools-button1";
a.title = "EDIT NEWS";
a.target = "_blank";
a.href = "http://blast.blastingnews.com/news/edit/"+(link);
a.style = "background-color: rgb(220, 50, 51);border: none;color: #f5f5f5;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;box-shadow: rgb(58, 58, 58) 2px 2px 6px;border-radius: 2px;width: 15%;height: 16px;font-style: italic;font-weight: 400;float: right;margin-left: 11px;";
div.appendChild(a);

// Button 2
var a2 = document.createElement('a');
var elmNewContent2 = document.createTextNode("Edit video");
a2.appendChild(elmNewContent2);
a2.id = "elliottools-button2";
a2.title = "EDIT VIDEO";
a2.target = "_blank";
a2.href = "http://blast.blastingnews.com/video/published/"+(link);
a2.style = "background-color: rgb(220, 50, 51);border: none;color: #f5f5f5;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;box-shadow: rgb(58, 58, 58) 2px 2px 6px;border-radius: 2px;width: 15%;height: 16px;font-style: italic;font-weight: 400;float: right;margin-left: 11px;";
div.appendChild(a2);


// Button 3
var a3 = document.createElement('a');
var elmNewContent3 = document.createTextNode("Facebook debug");
a3.appendChild(elmNewContent3);
a3.id = "elliottools-button3";
a3.title = "Facebook debug";
a3.target = "_blank";
a3.href = "https://developers.facebook.com/tools/debug/sharing/?q="+(urlp);
a3.style = "background-color: rgb(220, 50, 51);border: none;color: #f5f5f5;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;box-shadow: rgb(58, 58, 58) 2px 2px 6px;border-radius: 2px;width: 15%;height: 16px;font-style: italic;font-weight: 400;float: right;margin-left: 11px;";
div.appendChild(a3);


// Button 4
var a4 = document.createElement('a');
var elmNewContent4 = document.createTextNode("Bpop link");
a4.appendChild(elmNewContent4);
a4.id = "elliottools-button4";
a4.title = "Blastingpop check";
a4.target = "_blank";
a4.href = urlpop;
a4.style = "background-color: rgb(220, 50, 51);border: none;color: #f5f5f5;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;box-shadow: rgb(58, 58, 58) 2px 2px 6px;border-radius: 2px;width: 15%;height: 16px;font-style: italic;font-weight: 400;float: right;margin-left: 11px;";
div.appendChild(a4);

// Button 5
var a6 = document.createElement('a');
var elmNewContent6 = document.createTextNode("Control room");
a6.appendChild(elmNewContent6);
a6.id = "elliottools-button6";
a6.className = "trigger_popup_fricc2";
a6.title = "Blastingpop check";
a6.style = "background-color: rgb(220, 50, 51);border: none;color: #f5f5f5;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;box-shadow: rgb(58, 58, 58) 2px 2px 6px;border-radius: 2px;width: 15%;height: 16px;font-style: italic;font-weight: 400;float: right;margin-left: 11px;";
div.appendChild(a6);

// Button 6
var a5 = document.createElement('a');
var elmNewContent5 = document.createTextNode("Traffic");
a5.appendChild(elmNewContent5);
a5.id = "elliottools-button5";
a5.className = "trigger_popup_fricc";
a5.title = "Traffic";
a5.style = "background-color: rgb(220, 50, 51);border: none;color: #f5f5f5;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;box-shadow: rgb(58, 58, 58) 2px 2px 6px;border-radius: 2px;width: 15%;height: 16px;font-style: italic;font-weight: 400;float: right;margin-left: 11px;";
div.appendChild(a5);



//CSS for popup
GM_addStyle(".myiframepopup {margin-bottom: -200px;-ms-zoom: 0.65;-moz-transform: scale(0.65);-moz-transform-origin: 0 0;-o-transform: scale(0.65);-o-transform-origin: 0 0;-webkit-transform: scale(0.65);-webkit-transform-origin: 0 0;} .hover_bkgr_fricc{background:rgba(0,0,0,.4); cursor:; display:none; height:100%; position:fixed; text-align:center; top:0; width:100%;  z-index:10000;} .hover_bkgr_fricc .helper{display:inline-block; height:100%; vertical-align:middle;} .hover_bkgr_fricc > div {background-color: #fff; box-shadow: 10px 10px 60px #555; display: inline-block; height: auto; max-width: 1000px; min-height: 500px; vertical-align: middle; width: 60%; position: relative; border-radius: 8px; padding: 15px 5%;} .popupCloseButton {background-color: #fff; border: 3px solid #999; border-radius: 50px; cursor: pointer; display: inline-block; font-family: arial; font-weight: bold; position: absolute; top: -20px; right: -20px; font-size: 25px; line-height: 20px; width: 30px; height: 30px; text-align: center;} .popupCloseButton:hover {background-color: #ccc;} .trigger_popup_fricc {cursor: pointer;}");
GM_addStyle(".myiframepopup2 {margin-bottom: -200px;-ms-zoom: 0.65;-moz-transform: scale(0.65);-moz-transform-origin: 0 0;-o-transform: scale(0.65);-o-transform-origin: 0 0;-webkit-transform: scale(0.65);-webkit-transform-origin: 0 0;} .hover_bkgr_fricc2{background:rgba(0,0,0,.4); cursor:; display:none; height:100%; position:fixed; text-align:center; top:0; width:100%;  z-index:10000;} .hover_bkgr_fricc2 .helper2{display:inline-block; height:100%; vertical-align:middle;} .hover_bkgr_fricc2 > div {background-color: #fff; box-shadow: 10px 10px 60px #555; display: inline-block; height: auto; max-width: 1000px; min-height: 500px; vertical-align: middle; width: 60%; position: relative; border-radius: 8px; padding: 15px 5%;} .popupCloseButton2 {background-color: #fff; border: 3px solid #999; border-radius: 50px; cursor: pointer; display: inline-block; font-family: arial; font-weight: bold; position: absolute; top: -20px; right: -20px; font-size: 25px; line-height: 20px; width: 30px; height: 30px; text-align: center;} .popupCloseButton2:hover {background-color: #ccc;} .trigger_popup_fricc2 {cursor: pointer;}");

//jquery for popup
$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
//    $('.hover_bkgr_fricc').click(function(){
//        $('.hover_bkgr_fricc').hide();
//    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});

$(window).load(function () {
    $(".trigger_popup_fricc2").click(function(){
       $('.hover_bkgr_fricc2').show();
    });
//    $('.hover_bkgr_fricc2').click(function(){
//        $('.hover_bkgr_fricc2').hide();
//    });
    $('.popupCloseButton2').click(function(){
        $('.hover_bkgr_fricc2').hide();
    });
});

// HTML for popup
var divp = document.createElement('div');
divp.id = "popupdiv1";
divp.className = "hover_bkgr_fricc";
var elmExtra6 = document.getElementById('content-page');
elmExtra6.parentNode.insertBefore(divp, elmExtra6.nextSibling);

    var span = document.createElement('span');
    span.id = "popupspan2";
    span.className = "helper";
    divp.appendChild(span);

    var divafterspan = document.createElement('div');
    divp.appendChild(divafterspan);

        var divclose = document.createElement('div');
        divclose.className = "popupCloseButton";
        divclose.innerHTML = "x"
        divafterspan.appendChild(divclose);

        var pcontent = document.createElement('p');
        pcontent.innerHTML = "Copy this ID and search it on the page below: <br><b>" + link + "</b>";
        divafterspan.appendChild(pcontent);

        var iframepopup = document.createElement('iframe');
        iframepopup.className = "myiframepopup";
        iframepopup.id = "myiframepopup";
        iframepopup.setAttribute("src", "https://blast.blastingnews.com/news/analysis/");
        iframepopup.style.width = "1050px";
        iframepopup.style.height = "615px";
        divafterspan.appendChild(iframepopup);

// HTML for popup2
var divp2 = document.createElement('div');
divp2.id = "popupdiv21";
divp2.className = "hover_bkgr_fricc2";
var elmExtra7 = document.getElementById('content-page');
elmExtra7.parentNode.insertBefore(divp2, elmExtra7.nextSibling);

    var span2 = document.createElement('span');
    span2.id = "popupspan2";
    span2.className = "helper2";
    divp2.appendChild(span2);

    var divafterspan2 = document.createElement('div');
    divp2.appendChild(divafterspan2);

        var divclose2 = document.createElement('div');
        divclose2.className = "popupCloseButton2";
        divclose2.innerHTML = "x"
        divafterspan2.appendChild(divclose2);

        var pcontent2 = document.createElement('p');
        pcontent2.innerHTML = "Copy this ID and search it on the page below: <br><b>" + link + "</b>";
        divafterspan2.appendChild(pcontent2);

        var iframepopup2 = document.createElement('iframe');
        iframepopup2.className = "myiframepopup2";
        iframepopup2.id = "myiframepopup2";
        iframepopup2.setAttribute("src", "https://blast.blastingnews.com/news/feed/news-quality-control-room/");
        iframepopup2.style.width = "1050px";
        iframepopup2.style.height = "615px";
        divafterspan2.appendChild(iframepopup2);
})();

