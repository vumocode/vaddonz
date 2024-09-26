// ==UserScript==
// @name         BETTER TEXT
// @version      1.0
// @description  Lepszy, nieklikalny tekst powiadomień. 
// @description  [ Działa tylko z zestawem dodatków Maddonz ]
// @author       vumo
// @match        https://*.margonem.pl/
// @downloadURL  https://vumocode.github.io/vaddonz/addons/btext.js
// @updateURL    https://vumocode.github.io/vaddonz/addons/btext.js
// @require      https://vumocode.github.io/vaddonz/addons/btext.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=margonem.pl
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
$(`<style>
        .alerts-layer .big-messages .message, .console-layer .big-messages .message, .mAlert-layer .big-messages .message, .mAlert-mobile-layer .big-messages .message {
        pointer-events: none;
        width: 100%;
        font-size: 15px;
        line-height: 35px;
        color: gold;
        font-weight: 700;
        padding: 10px 10px;
        margin: 5px;
        text-shadow: 0 0 10px #000,0 0 5px #000;
}
</style>`).appendTo('html');
})();
