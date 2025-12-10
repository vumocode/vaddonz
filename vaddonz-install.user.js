// ==UserScript==
// @name         v/ADDONZ
// @version      1.04
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
// @icon         https://vumocode.github.io/vaddonz/icon.gif
// @downloadURL  https://vumocode.github.io/vaddonz/install.user.js
// @updateURL    https://vumocode.github.io/vaddonz/install.user.js
// @grant        none
// ==/UserScript==

"use strict";
(function() {
    const script = document.createElement("script");
    script.src = "https://pub-05e2f98fb5b34633ae42c4866ef64081.r2.dev/vaddonz-bundle.js?v=" + Date.now();
    document.body.appendChild(script);
})();
