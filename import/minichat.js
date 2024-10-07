// ==UserScript==
// @name         MINI CHAT
// @version      1.0
// @description  Dodatek zmieniający chat na mniejszy.
// @author       vumo
// @match        https://aether.margonem.pl/
// @exclude      https://www.margonem.pl/*
// @icon         https://vumocode.github.io/vaddonz/dependencies/assets/vaddonz.ico
// @grant        none
// ==/UserScript==

const minichatStyle = document.createElement('style');
minichatStyle.type = 'text/css';

const minichatCSS = `
.chat-input-wrapper .magic-input-wrapper {
    border: 1px solid #7e7474;
}

.new-chat-window .chat-message-wrapper, .chat-input-wrapper .magic-input-wrapper, .chat-input-wrapper .control-wrapper .menu-card, .chat-input-wrapper .control-wrapper .chat-config-wrapper {
    border: 1px solid #7e7474;
}

.new-chat-window .chat-message-wrapper {
    border: 1px solid #7e7474;
    box-shadow: inset 0 0 3px 3px #000;
}

.chat-plug{
    display:none;
}

.chat-size-1 .layer.interface-layer .main-column.left-column{
    width:250px;
    box-shadow: 0 0 10px 1px black;
    height:40%;
}
`;

minichatStyle.appendChild(document.createTextNode(minichatCSS));
document.head.appendChild(minichatStyle);
