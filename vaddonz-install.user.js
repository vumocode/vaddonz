// ==UserScript==
// @name         v/ADDONZ - Menadżer dodatków vumo [NI]
// @version      1.02
// @author       vumo
// @description  Menadżer dodatków do gry Margonem.
// @match        http*://*.margonem.pl/
// @match        http*://*.margonem.com/
// @exclude      http*://margonem.*/*
// @exclude      http*://www.margonem.*/*
// @exclude      http*://new.margonem.*/*
// @exclude      http*://forum.margonem.*/*
// @exclude      http*://commons.margonem.*/*
// @exclude      http*://dev-commons.margonem.*/*
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
