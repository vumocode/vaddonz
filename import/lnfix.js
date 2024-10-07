// ==UserScript==
// @name         LN FIX
// @version      1.0
// @description  Dodatek poprawiający wygląd wbudowanego Legendary Notificatora.
// @author       vumo
// @match        https://aether.margonem.pl/
// @exclude      https://www.margonem.pl/*
// @icon         https://vumocode.github.io/vaddonz/dependencies/assets/vaddonz.ico
// @grant        none
// ==/UserScript==

const lnfixStyle = document.createElement('style');
lnfixStyle.type = 'text/css';

const lnfixCSS = `
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

lnfixStyle.appendChild(document.createTextNode(lnfixCSS));
document.head.appendChild(lnfixStyle);
