// ==UserScript==
// @name         BETTER TOOLTIPS
// @version      1.01
// @description  Dodatek poprawiający widok tooltipów.
// @author       vumo
// @match        https://*.margonem.pl/
// @downloadURL  https://vumocode.github.io/vaddonz/addons/btooltips.js
// @updateURL    https://vumocode.github.io/vaddonz/addons/btooltips.js
// @require      https://vumocode.github.io/vaddonz/addons/btooltips.js
// @icon         https://vumocode.github.io/vaddonz/dependencies/assets/vaddonz.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function applyStyles() {
        const styleContent = `
            /* NORMAL */
            .tip-wrapper[data-item-type=normal], .tip-wrapper[data-item-type=t-norm] {
                box-shadow: none !important;
            }
            
            /* LEGENDARY */
            .tip-wrapper[data-item-type=legendary], .tip-wrapper[data-item-type=t-leg] {
                box-shadow: 0px 0px 20px 8px #79002e;
                border: 2px solid #a5013f;
            }
            
            .tip-wrapper[data-type=t_item] .item-tip-section.s-5 {
                color: #fa41ff;
            }
            
            .tip-wrapper[data-type=t_item] .item-head .legendary, .tip-wrapper[data-type=t_item] .item-tip-section .legendary {
                color: #b00042;
            }
            
            /* UPGRADED */
            .tip-wrapper[data-type=t_item] .item-head .upgraded, .tip-wrapper[data-type=t_item] .item-tip-section .upgraded {
                color: #ff9567;
            }
            
            .tip-wrapper[data-item-type=t-upgraded], .tip-wrapper[data-item-type=upgraded] {
                box-shadow: 0px 0px 20px 8px #af6140;
                border: 2px solid #ff9264;
            }
            
            /* HEROIC */
            .tip-wrapper[data-item-type=heroic], .tip-wrapper[data-item-type=t-her] {
                box-shadow: 0px 0px 20px 8px #00263e;
                border: 2px solid #007cca;
            }
            
            .tip-wrapper[data-type=t_item] .item-head .heroic, .tip-wrapper[data-type=t_item] .item-tip-section .heroic {
                color: #007cca;
            }
            
            /* ELITE */
            .tip-wrapper[data-item-type=elite], .tip-wrapper[data-item-type=t-elite], .tip-wrapper[data-item-type=t-uniupg], .tip-wrapper[data-item-type=unique] {
                box-shadow: 0px 0px 20px 8px #ce9403;
                border: 2px solid #ffb600;
            }
            
            .tip-wrapper[data-type=t_item] .item-head .unique, .tip-wrapper[data-type=t_item] .item-tip-section .unique {
                color: #e7a602;
            }
            
            .item-builds {
                display: none;
            }
            
            .icon-container.highlight, .margoitem.highlight {
                background-image: url(https://i.postimg.cc/B6qWDBPy/ramkiprofil.png);
                height: 32px;
                width: 32px;
            }
        `;

        const styleElement = $('<style>').html(styleContent);
        $('head').append(styleElement);
    }

    $(document).ready(function() {
        applyStyles();

        setTimeout(checkStyles, 1000);
    });

    const observer = new MutationObserver(function(mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                checkStyles();
            }
        }
    });

    observer.observe(document.body, { attributes: true, childList: true, subtree: true });
})();
