// ==UserScript==
// @name         Quick Sell
// @version      1.0
// @description  Sprzedawanie pod przyciskami (1, 2, 3, enter)
// @author       vumo
// @match        https://*.margonem.pl/
// @downloadURL  https://vumocode.github.io/vaddonz/addons/qs.js
// @updateURL    https://vumocode.github.io/vaddonz/addons/qs.js
// @require      https://vumocode.github.io/vaddonz/addons/qs.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=margonem.pl
// @grant        none
// ==/UserScript==

document.addEventListener('keydown', function(event) {
    let buttonToClick = null;

    if (event.key === '1') {
        buttonToClick = document.querySelector('.button.green.small.btn-num');
    } else if (event.key === '2') {
        buttonToClick = document.querySelectorAll('.button.green.small.btn-num')[1];
    } else if (event.key === '3') {
        buttonToClick = document.querySelectorAll('.button.green.small.btn-num')[2];
    } else if (event.key === 'Enter') {
        buttonToClick = document.querySelector('.finalize-button.btns-spacing .button.green.small');
    }

    if (buttonToClick && buttonToClick.offsetParent !== null) {
        event.preventDefault();
        event.stopPropagation();
        buttonToClick.click();
    }
});
