// ==UserScript==
// @name         LN FIX
// @version      1.0
// @description  Dodatek poprawiający wbudowany Legendary Notificator.
// @description  [ Usuwa brzydki border dookoła okna lootu ]
// @author       vumo
// @match        https://*.margonem.pl/
// @exclude      https://www.margonem.pl/*
// @downloadURL  https://vumocode.github.io/vaddonz/addons/lnfix.js
// @updateURL    https://vumocode.github.io/vaddonz/addons/lnfix.js
// @require      https://vumocode.github.io/vaddonz/addons/lnfix.js
// @icon         https://vumocode.github.io/vaddonz/dependencies/assets/vaddonz.ico
// @grant        none
// ==/UserScript==

const style = document.createElement('style');
style.type = 'text/css';

const css = `
body.ln-active.ln-frame-loot-active .loot-wnd:has([data-item-type=t-leg]).border-window::before {
    border: none;
}

body.ln-active.ln-frame-loot-active .loot-wnd:has([data-item-type=t-leg]).border-window::after {
    top: -28px;
    left: -14px;
    width: calc(100% + 29px);
    height: calc(100% + 57px);
}
`;

style.appendChild(document.createTextNode(css));

document.head.appendChild(style);
