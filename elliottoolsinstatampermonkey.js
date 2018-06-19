// ==UserScript==
// @name         Instagram data
// @namespace    https://www.instagram.com/
// @version      0.1
// @updateURL    https://github.com/BNFrance/elliottools/raw/master/elliottoolsinstatampermonkey.js
// @downloadURL  https://github.com/BNFrance/elliottools/raw/master/elliottoolsinstatampermonkey.js
// @description  Copy data to clipboard
// @author       Elliotto
// @match        https://www.instagram.com/*/*
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_setClipboard
// @grant unsafeWindow
// @grant window.close
// @grant window.focus
// ==/UserScript==

(
    function() {
    'use strict';

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
    if(dd<10) {dd = '0'+dd;}
    if(mm<10) {mm = '0'+mm;}
today = dd + '/' + mm + '/' + yyyy;
console.log(today);

var url = window.location;
var pseudo = window.location.pathname.split('/')[1];
console.log(pseudo);

var source = document.getElementsByTagName('html')[0].innerHTML;
var n = source.search("profilePage_")+ "profilePage_".length;
var subcode = source.substring(n,source.length);
var m = subcode.search("\",");
var id = source.substring(n,n+m);
console.log(id);

var variurl = "https://www.instagram.com/" + pseudo;
console.log(variurl);

var staticurl = "https://www.instagram.com/web/friendships/" + id + "/follow";
console.log("staticurl=",staticurl);

var x = source.search("followed_by\":{\"count\"")+ "followed_by\":{\"count\"".length + 1;
var subcode2 = source.substring(x,source.length);
var y = subcode2.search("}");
var followers = source.substring(x,x+y);
followers = followers.slice(0,-3) + "000";
console.log(followers);

var email = "-";
    if (source.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi) != null)
    {email = source.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)[0];
    var test = source.indexOf(email);
     test = source.substring(test-1, test + email.length);
     email = test.replace("\\n", "");
    }
console.log(email);

var data = [[today,pseudo,followers,email,variurl,staticurl]];
        console.log(data);
// Button 1
var button = document.createElement("button");
button.innerHTML = "Copy data to clipboard";
button.type="button";
button.id="myIDbitch";
button.style = "top:0; right:0; position:absolute; z-index: 9999; background-color: rgb(220, 50, 51);border: none;color: #f5f5f5;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;box-shadow: rgb(58, 58, 58) 2px 2px 6px;border-radius: 2px;width: 345px;height: 16px;font-style: italic;font-weight: 400;";
button.onclick = function(){GM_setClipboard("=SPLIT(\""+data+"\"; \",\")");alert("Elliott says: Copied ! Please paste me on a Google spreadsheet :\)");};
document.body.appendChild(button);



}

)();
