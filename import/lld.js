// ==UserScript==
// @name         LL DISABLER
// @version      1.0
// @description  Dodatek umożliwiający wyłączenie wiadomości na lootlogu.
// @author       vumo
// @match        https://aether.margonem.pl/
// @exclude      https://www.margonem.pl/*
// @icon         https://vumocode.github.io/vaddonz/dependencies/assets/vaddonz.ico
// @grant        none
// ==/UserScript==

function addStyles(lldStyles, lldHoverStyles = {}) {
    const lldStyle = document.createElement('style');
    lldStyle.type = 'text/css';

    for (const className in lldStyles) {
        lldStyle.textContent += `.${className} { ${lldStyles[className]} }\n`;
    }

    for (const className in lldHoverStyles) {
        lldStyle.textContent += `.${className}:hover { ${lldHoverStyles[className]} }\n`;
    }

    document.head.appendChild(lldStyle);
}

const lldStyles = {
    lldButton: `
    display: flex;
    height: 40.5px;
    width: 40.5px;
    background: linear-gradient(180deg, #000000, #1a8c00);
    border: 1.5px solid #21b400;
    box-shadow: inset 0px 0px 3px 0px #000000;
    border-radius: 4px;
    flex-direction: row;
    cursor: url(../img/gui/cursor/5n.png?v=1727775751904) 4 0, url(../img/gui/cursor/5n.cur?v=1727775751904) 4 0, auto;
    justify-content: center;
    align-items: center;
    order: 3;
    `,
    lldText: `
        margin-top: 3px;
        margin-left: 1px;
        font-size: 22px;
        font-weight: bold;
        cursor: url(../img/gui/cursor/5n.png?v=1727775751904) 4 0, url(../img/gui/cursor/5n.cur?v=1727775751904) 4 0, auto;
    `,
    lldButtonActive: `
        background: linear-gradient(rgb(0, 0, 0), rgb(123, 0, 0));
        border: 1.5px solid rgb(163, 0, 0);
    `,
    lldTooltip: `
    box-shadow: 0 0 #2b282a,0 0 0 1px #353131,0 0 0 2px #191311,0 0 0 3px #2b2727,0 0 0 4px #0f0f0f99,0 0 0 5px #0f0f0f,0 0 0 6px #5a585b,0 0 0 7px #2c2625;
    color: #e6d6bf;
    line-height: 14px;
    min-width: 150px;
    position: absolute;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    z-index: 1000;
    `,
    lldTooltipContent: `
    padding: 6px;
    background: rgba(15,15,15,.85);
    word-break: break-word;
    font-size: 12.8px;
    `,
};

const lldHoverStyles = {
    lldButton: `
        background: linear-gradient(1deg, #000000, #1a8c00);
        border: 1.5px solid gray;
    `,
    lldButtonActive: `
        background: linear-gradient(1deg, rgb(0, 0, 0), rgb(123, 0, 0));
        border: 1.5px solid gray;
    `,
};

addStyles(lldStyles, lldHoverStyles);

window.addEventListener('load', () => {
    const contentContainer = document.querySelector('.top.positioner .content');

    if (!contentContainer) {
        console.error('Nie znaleziono kontenera content.');
        return;
    }  

    const lldButton = document.createElement('div');
    lldButton.className = 'lldButton';

    const lld = document.createElement('div');
    lld.className = 'lldText';
    lld.textContent = 'LL';

    const lldTooltip = document.createElement('div');
    lldTooltip.className = 'lldTooltip';

    const lldTooltipContent = document.createElement('div');
    lldTooltipContent.className = 'vaddonzTooltipContent';
    lldTooltipContent.innerHTML = `
        <p> LL Disabler </p>
        <p> LPM - Włącz / Wyłącz </p>
    `;


    const interval = setInterval(() => {
        const vaddonzContainer = document.querySelector('.vaddonzContainer');
        if (vaddonzContainer) {
            vaddonzContainer.appendChild(lldButton);
            lldButton.appendChild(lld);
            document.body.appendChild(lldTooltip);
            lldTooltip.appendChild(lldTooltipContent);
            clearInterval(interval);

            let isVisible = true;

            lldButton.addEventListener('click', () => {
                const llAlerts = document.querySelector('.cll-alert');
                if (llAlerts) {
                    isVisible = !isVisible;
                    llAlerts.style.display = isVisible ? 'block' : 'none';

                    if (isVisible) {
                        lldButton.classList.remove('lldButtonActive');
                    } else {
                        lldButton.classList.add('lldButtonActive');
                    }
                } else {
                    console.error('Nie znaleziono elementu .cll-alert');
                }
            });
        }
    }, 1000);

    lldButton.addEventListener('mouseenter', () => {
        lldTooltip.style.display = 'block';
    });
    
    lldButton.addEventListener('mouseleave', () => {
        lldTooltip.style.display = 'none';
    });
    
    lldButton.addEventListener('mousemove', (e) => {
        lldTooltip.style.left = `${e.pageX + 30}px`;
        lldTooltip.style.top = `${e.pageY + 0}px`;
    });

});
