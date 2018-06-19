// ==UserScript==
// @name         Elliottools BN
// @namespace    http://*.blastingnews.com
// @version      3.0
// @updateURL    https://github.com/BNFrance/elliottools/raw/master/elliottoolbnstampermonkey.js
// @downloadURL  https://github.com/BNFrance/elliottools/raw/master/elliottoolbnstampermonkey.js
// @description  Elliottools BN buttons
// @author       Elliotto
// @match        *://*.blastingnews.com/*/*/*/*.html*
// @match        *://*.blastingpop.com/*/*/*/*.html*
// @grant        none
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
a.style = "background-color: rgb(220, 50, 51);border: none;color: #f5f5f5;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;box-shadow: rgb(58, 58, 58) 2px 2px 6px;border-radius: 2px;width: 24%;height: 16px;font-style: italic;font-weight: 400;float: right;margin-left: 5px;";
document.body.appendChild(a);
var elmExtra2 = document.getElementById('elliottools-buttons');
div.appendChild(a);

// Button 2
var a2 = document.createElement('a');
var elmNewContent2 = document.createTextNode("Edit video");
a2.appendChild(elmNewContent2);
a2.id = "elliottools-button2";
a2.title = "EDIT VIDEO";
a2.target = "_blank";
a2.href = "http://blast.blastingnews.com/video/published/"+(link);
a2.style = "background-color: rgb(220, 50, 51);border: none;color: #f5f5f5;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;box-shadow: rgb(58, 58, 58) 2px 2px 6px;border-radius: 2px;width: 24%;height: 16px;font-style: italic;font-weight: 400;float: right;margin-left: 5px;";
document.body.appendChild(a2);
var elmExtra3 = document.getElementById('elliottools-buttons');
div.appendChild(a2);


// Button 3
var a3 = document.createElement('a');
var elmNewContent3 = document.createTextNode("Debug news");
a3.appendChild(elmNewContent3);
a3.id = "elliottools-button3";
a3.title = "Debug news";
a3.target = "_blank";
a3.href = "https://developers.facebook.com/tools/debug/sharing/?q="+(urlp);
a3.style = "background-color: rgb(220, 50, 51);border: none;color: #f5f5f5;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;box-shadow: rgb(58, 58, 58) 2px 2px 6px;border-radius: 2px;width: 24%;height: 16px;font-style: italic;font-weight: 400;float: right;margin-left: 5px;";
document.body.appendChild(a3);
var elmExtra4 = document.getElementById('elliottools-buttons');
div.appendChild(a3);


// Button 4
var a4 = document.createElement('a');
var elmNewContent4 = document.createTextNode("Blastingpop check");
a4.appendChild(elmNewContent4);
a4.id = "elliottools-button4";
a4.title = "Blastingpop check";
a4.target = "_blank";
a4.href = urlpop;
a4.style = "background-color: rgb(220, 50, 51);border: none;color: #f5f5f5;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;box-shadow: rgb(58, 58, 58) 2px 2px 6px;border-radius: 2px;width: 24%;height: 16px;font-style: italic;font-weight: 400;float: right;margin-left: 5px;";
document.body.appendChild(a4);
var elmExtra5 = document.getElementById('elliottools-buttons');
div.appendChild(a4);


})();

