// ==UserScript==
// @name         v/ADDONZ - Menadżer dodatków vumo [NI]
// @version      1.01
// @author       vumo
// @description  Menadżer dodatków do gry Margonem.
// @match        https://*.margonem.pl/
// @match        https://*.margonem.com/
// @icon         https://vumocode.github.io/vaddonz/assets/vaddonz.ico
// @downloadURL  https://vumocode.github.io/vaddonz/vaddonz-install.user.js
// @updateURL    https://vumocode.github.io/vaddonz/vaddonz-install.user.js
// @grant        none
// ==/UserScript==

"use strict";
(function() {
    const date = new Date();
    const version = `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
    const build = "https://addons2.margonem.pl/get/153/153109dev.js";
    const script = document.createElement("script");
    script.src = `${build}?v=${version}`;
    document.body.appendChild(script);
})();
