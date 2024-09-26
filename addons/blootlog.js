// ==UserScript==
// @name         BETTER LOOTLOG
// @version      1.0
// @description  Dodatek zmieniający wygląd lootloga.</div>
// @description  [ Timery, powiadomienia etc. ]
// @author       vumo
// @match        https://*.margonem.pl/
// @downloadURL  https://vumocode.github.io/vaddonz/addons/blootlog.js
// @updateURL    https://vumocode.github.io/vaddonz/addons/blootlog.js
// @require      https://vumocode.github.io/vaddonz/addons/blootlog.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=margonem.pl
// @grant        none
// ==/UserScript==

const style = document.createElement('style');
style.type = 'text/css';

const css = `
.cll-timer {
    background: rgb(0 0 0 / 50%);
    border: 1px solid #3b3b3b;
    border-radius: 0px;
    box-shadow: inset 0px 0px 14px 3px rgb(0 0 0);
    font-family: Arial;
    padding-top: 5px;
    padding-bottom: 5px;
}

.cll-timer {
    background: rgb(0 0 0 / 0%);
    border: 1px solid #3b3b3b;
    border-radius: 0px;
    box-shadow: inset 0px 0px 14px 3px rgb(0 0 0);
    font-family: Arial;
    padding-top: 5px;
    padding-bottom: 5px;
}

.cll-timer-highlighted {
    background: #4d4d4d57 !important;
    font-family: Arial;
    font-weight: 700;
    font-size: 11px;
    border: 3px double #424242 !important;
}

.cll-alert {
    background: rgb(0 0 0 / 30%) !important;
    color: white !important;
    border: 1px solid black !important;
    border-radius: 5px !important;
    box-shadow: 0px 0px 10px black;
    backdrop-filter: blur(5px);
}

#cll-ok, #cll-close-all {
    background-image: linear-gradient(to bottom, #890000, #000000);
    box-shadow: inset 0 0 1px 1px #353535, inset 0 0 0 3px #000000;
    border-image: url(../img/gui/btn-small-inset.png?v=1690873569667) 15 repeat;
    font-family: Arimo,Calibri,Segoe,"Segoe UI",Optima,Arial,sans-serif;
    font-size: 13px;
    border-color: rgba(255,240,0,.5);
    cursor: url('https://www.margonem.pl/_i/pl/cursor/5.png?v=6'), pointer;
    color: #E6D6BF;
    border-radius: 6px;
}

#cll-notify, #cll-confirm, #cll-reply {
    background-image: linear-gradient(to bottom, #185f00, #000000);
    box-shadow: inset 0 0 1px 1px #353535, inset 0 0 0 3px #000000;
    border-image: url(../img/gui/btn-small-inset.png?v=1690873569667) 15 repeat;
    font-family: Arimo,Calibri,Segoe,"Segoe UI",Optima,Arial,sans-serif;
    font-size: 13px;
    border-color: rgba(255,240,0,.5);
    cursor: url('https://www.margonem.pl/_i/pl/cursor/5.png?v=6'), pointer;
    color: #E6D6BF;
    border-radius: 6px;
}

.cll-alert-content {
    margin: 15px 0 0;
    font-size: 11px;
    width: 100%;
    border: none;
    resize: none;
    text-align: center;
    font-family: Arial;
    background: transparent;
    color: white;
}
`;

style.appendChild(document.createTextNode(css));

document.head.appendChild(style);
