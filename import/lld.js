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

const _0x3d2437 = _0x15f1;
(function (_0x45cab9, _0x2bd48a) {
    const _0x56ffd8 = _0x15f1;
    const _0x57eb1 = _0x45cab9();
    while (!![]) {
        try {
            const _0x3b48fa = parseInt(_0x56ffd8(0x196)) / 0x1 * (-parseInt(_0x56ffd8(0x198)) / 0x2) + -parseInt(_0x56ffd8(0x1ac)) / 0x3 * (parseInt(_0x56ffd8(0x1aa)) / 0x4) + parseInt(_0x56ffd8(0x1b8)) / 0x5 * (-parseInt(_0x56ffd8(0x1b9)) / 0x6) + -parseInt(_0x56ffd8(0x1c3)) / 0x7 * (-parseInt(_0x56ffd8(0x1a2)) / 0x8) + parseInt(_0x56ffd8(0x197)) / 0x9 * (parseInt(_0x56ffd8(0x1b7)) / 0xa) + parseInt(_0x56ffd8(0x1b3)) / 0xb * (parseInt(_0x56ffd8(0x191)) / 0xc) + parseInt(_0x56ffd8(0x1b2)) / 0xd * (parseInt(_0x56ffd8(0x1a1)) / 0xe);
            if (_0x3b48fa === _0x2bd48a) {
                break;
            } else {
                _0x57eb1['push'](_0x57eb1['shift']());
            }
        } catch (_0x185690) {
            _0x57eb1['push'](_0x57eb1['shift']());
        }
    }
}(_0x3fc7, 0x47d06));
function _0x15f1(_0x115e7d, _0x6df2f8) {
    const _0x97f277 = _0x3fc7();
    _0x15f1 = function (_0x1fde6d, _0xf6961e) {
        _0x1fde6d = _0x1fde6d - 0x191;
        let _0x13cd2b = _0x97f277[_0x1fde6d];
        return _0x13cd2b;
    };
    return _0x15f1(_0x115e7d, _0x6df2f8);
}
function addStyles(_0x3127b3, _0x439982 = {}, _0x3f55f3 = {}, _0x446b42 = {}, _0x3f1dff = {}, _0x44343a = {}) {
    const _0x514f57 = _0x15f1;
    const _0x3d728a = (function () {
        let _0x276587 = !![];
        return function (_0x553d7b, _0x38a702) {
            const _0x3d0431 = _0x276587 ? function () {
                const _0x434369 = _0x15f1;
                if (_0x38a702) {
                    const _0x499533 = _0x38a702[_0x434369(0x1b4)](_0x553d7b, arguments);
                    _0x38a702 = null;
                    return _0x499533;
                }
            } : function () {
            };
            _0x276587 = ![];
            return _0x3d0431;
        };
    }());
    const _0x24d3f4 = _0x3d728a(this, function () {
        const _0x78d0ae = _0x15f1;
        let _0x4de520;
        try {
            const _0x4acdf7 = Function(_0x78d0ae(0x1ba) + _0x78d0ae(0x1d5) + ');');
            _0x4de520 = _0x4acdf7();
        } catch (_0x292665) {
            _0x4de520 = window;
        }
        const _0x23792b = _0x4de520[_0x78d0ae(0x1ab)] = _0x4de520['console'] || {};
        const _0x51ad8a = [
            'log',
            _0x78d0ae(0x1c9),
            'info',
            _0x78d0ae(0x1bd),
            _0x78d0ae(0x19d),
            _0x78d0ae(0x1d7),
            'trace'
        ];
        for (let _0x22f27e = 0x0; _0x22f27e < _0x51ad8a[_0x78d0ae(0x1ce)]; _0x22f27e++) {
            const _0x4957a3 = _0x3d728a[_0x78d0ae(0x1a0)][_0x78d0ae(0x1a3)][_0x78d0ae(0x1c6)](_0x3d728a);
            const _0x2a7ba0 = _0x51ad8a[_0x22f27e];
            const _0x55c57c = _0x23792b[_0x2a7ba0] || _0x4957a3;
            _0x4957a3[_0x78d0ae(0x1b5)] = _0x3d728a[_0x78d0ae(0x1c6)](_0x3d728a);
            _0x4957a3[_0x78d0ae(0x19b)] = _0x55c57c[_0x78d0ae(0x19b)]['bind'](_0x55c57c);
            _0x23792b[_0x2a7ba0] = _0x4957a3;
        }
    });
    _0x24d3f4();
    const _0xbbb565 = document['createElement'](_0x514f57(0x1bc));
    _0xbbb565['type'] = _0x514f57(0x1d4);
    for (const _0xe730ef in _0x439982) {
        _0xbbb565[_0x514f57(0x19e)] += '#' + _0xe730ef + _0x514f57(0x194) + _0x439982[_0xe730ef] + _0x514f57(0x1c4);
    }
    for (const _0x5ae2a0 in _0x3127b3) {
        _0xbbb565[_0x514f57(0x19e)] += '.' + _0x5ae2a0 + _0x514f57(0x194) + _0x3127b3[_0x5ae2a0] + _0x514f57(0x1c4);
    }
    for (const _0x3a655d in _0x3f55f3) {
        _0xbbb565[_0x514f57(0x19e)] += '.' + _0x3a655d + _0x514f57(0x199) + _0x3f55f3[_0x3a655d] + '\x20}\x0a';
    }
    document[_0x514f57(0x1d9)][_0x514f57(0x1be)](_0xbbb565);
}
const styles = {
    'lldButton': _0x3d2437(0x1ae),
    'lldText': _0x3d2437(0x1a5),
    'lldButtonActive': _0x3d2437(0x1a7),
    'lldTooltip': _0x3d2437(0x1d1),
    'lldTooltipContent': _0x3d2437(0x1ad)
};
function _0x3fc7() {
    const _0x1759c7 = [
        'apply',
        '__proto__',
        'mouseleave',
        '10jjgAaj',
        '2744420pEaUZI',
        '6jRidVn',
        'return\x20(function()\x20',
        'lldTooltip',
        'style',
        'error',
        'appendChild',
        'div',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(1deg,\x20#000000,\x20#1a8c00);\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201.5px\x20solid\x20gray;\x0a\x20\x20\x20\x20',
        'mouseenter',
        'innerHTML',
        '12579PBxtwk',
        '\x20}\x0a',
        'display',
        'bind',
        'top',
        'load',
        'warn',
        'Nie\x20znaleziono\x20kontenera\x20content.',
        'pageY',
        'add',
        'classList',
        'length',
        'none',
        '.top.positioner\x20.content',
        '\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x20#2b282a,0\x200\x200\x201px\x20#353131,0\x200\x200\x202px\x20#191311,0\x200\x200\x203px\x20#2b2727,0\x200\x200\x204px\x20#0f0f0f99,0\x200\x200\x205px\x20#0f0f0f,0\x200\x200\x206px\x20#5a585b,0\x200\x200\x207px\x20#2c2625;\x0a\x20\x20\x20\x20color:\x20#e6d6bf;\x0a\x20\x20\x20\x20line-height:\x2014px;\x0a\x20\x20\x20\x20min-width:\x20150px;\x0a\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20-webkit-user-select:\x20none;\x0a\x20\x20\x20\x20-moz-user-select:\x20none;\x0a\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20z-index:\x201000;\x0a\x20\x20\x20\x20',
        'pageX',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>\x20LL\x20Disabler\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>\x20LPM\x20-\x20Włącz\x20/\x20Wyłącz\x20</p>\x0a\x20\x20\x20\x20',
        'text/css',
        '{}.constructor(\x22return\x20this\x22)(\x20)',
        'click',
        'table',
        'mousemove',
        'head',
        '5582076kZroTW',
        '.cll-alert',
        'Nie\x20znaleziono\x20elementu\x20.cll-alert',
        '\x20{\x20',
        'lldButtonActive',
        '445HcbEmp',
        '2231766FVFCDl',
        '1904CFaaBy',
        ':hover\x20{\x20',
        'vaddonzTooltipContent',
        'toString',
        'left',
        'exception',
        'textContent',
        'className',
        'constructor',
        '56MBJdbj',
        '344YcjrUj',
        'prototype',
        'lldText',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x201px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2022px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20url(../img/gui/cursor/5n.png?v=1727775751904)\x204\x200,\x20url(../img/gui/cursor/5n.cur?v=1727775751904)\x204\x200,\x20auto;\x0a\x20\x20\x20\x20',
        'createElement',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(rgb(0,\x200,\x200),\x20rgb(123,\x200,\x200));\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201.5px\x20solid\x20rgb(163,\x200,\x200);\x0a\x20\x20\x20\x20',
        'block',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(1deg,\x20rgb(0,\x200,\x200),\x20rgb(123,\x200,\x200));\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201.5px\x20solid\x20gray;\x0a\x20\x20\x20\x20',
        '838064nOblky',
        'console',
        '3bRvvMl',
        '\x0a\x20\x20\x20\x20padding:\x206px;\x0a\x20\x20\x20\x20background:\x20rgba(15,15,15,.85);\x0a\x20\x20\x20\x20word-break:\x20break-word;\x0a\x20\x20\x20\x20font-size:\x2012.8px;\x0a\x20\x20\x20\x20',
        '\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20height:\x2040.5px;\x0a\x20\x20\x20\x20width:\x2040.5px;\x0a\x20\x20\x20\x20background:\x20linear-gradient(180deg,\x20#000000,\x20#1a8c00);\x0a\x20\x20\x20\x20border:\x201.5px\x20solid\x20#21b400;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200px\x200px\x203px\x200px\x20#000000;\x0a\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20flex-direction:\x20row;\x0a\x20\x20\x20\x20cursor:\x20url(../img/gui/cursor/5n.png?v=1727775751904)\x204\x200,\x20url(../img/gui/cursor/5n.cur?v=1727775751904)\x204\x200,\x20auto;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20order:\x203;\x0a\x20\x20\x20\x20',
        'querySelector',
        '.vaddonzContainer',
        'addEventListener',
        '2228759BgRylV',
        '11oCuTRO'
    ];
    _0x3fc7 = function () {
        return _0x1759c7;
    };
    return _0x3fc7();
}
const idStyles = {};
const hoverStyles = {
    'lldButton': _0x3d2437(0x1c0),
    'lldButtonActive': _0x3d2437(0x1a9)
};
addStyles(styles, idStyles, hoverStyles);
window[_0x3d2437(0x1b1)](_0x3d2437(0x1c8), () => {
    const _0x3016a4 = _0x3d2437;
    const _0x16b051 = document[_0x3016a4(0x1af)](_0x3016a4(0x1d0));
    if (!_0x16b051) {
        console['error'](_0x3016a4(0x1ca));
        return;
    }
    const _0x1ee6c1 = document[_0x3016a4(0x1a6)]('div');
    _0x1ee6c1[_0x3016a4(0x19f)] = 'lldButton';
    const _0x30fd1f = document[_0x3016a4(0x1a6)](_0x3016a4(0x1bf));
    _0x30fd1f[_0x3016a4(0x19f)] = _0x3016a4(0x1a4);
    _0x30fd1f[_0x3016a4(0x19e)] = 'LL';
    const _0x4bd11f = document[_0x3016a4(0x1a6)](_0x3016a4(0x1bf));
    _0x4bd11f[_0x3016a4(0x19f)] = _0x3016a4(0x1bb);
    const _0x2ee9b3 = document[_0x3016a4(0x1a6)](_0x3016a4(0x1bf));
    _0x2ee9b3[_0x3016a4(0x19f)] = _0x3016a4(0x19a);
    _0x2ee9b3[_0x3016a4(0x1c2)] = _0x3016a4(0x1d3);
    const _0x2468b3 = setInterval(() => {
        const _0x3b6f68 = _0x3016a4;
        const _0x460728 = document[_0x3b6f68(0x1af)](_0x3b6f68(0x1b0));
        if (_0x460728) {
            _0x460728[_0x3b6f68(0x1be)](_0x1ee6c1);
            _0x1ee6c1[_0x3b6f68(0x1be)](_0x30fd1f);
            document['body'][_0x3b6f68(0x1be)](_0x4bd11f);
            _0x4bd11f[_0x3b6f68(0x1be)](_0x2ee9b3);
            clearInterval(_0x2468b3);
            let _0x68f811 = !![];
            _0x1ee6c1[_0x3b6f68(0x1b1)](_0x3b6f68(0x1d6), () => {
                const _0x1c97c8 = _0x3b6f68;
                const _0x3f827b = document[_0x1c97c8(0x1af)](_0x1c97c8(0x192));
                if (_0x3f827b) {
                    _0x68f811 = !_0x68f811;
                    _0x3f827b[_0x1c97c8(0x1bc)][_0x1c97c8(0x1c5)] = _0x68f811 ? _0x1c97c8(0x1a8) : 'none';
                    if (_0x68f811) {
                        _0x1ee6c1[_0x1c97c8(0x1cd)]['remove'](_0x1c97c8(0x195));
                    } else {
                        _0x1ee6c1[_0x1c97c8(0x1cd)][_0x1c97c8(0x1cc)](_0x1c97c8(0x195));
                    }
                } else {
                    console[_0x1c97c8(0x1bd)](_0x1c97c8(0x193));
                }
            });
        }
    }, 0x3e8);
    _0x1ee6c1['addEventListener'](_0x3016a4(0x1c1), () => {
        const _0x1a8b50 = _0x3016a4;
        _0x4bd11f[_0x1a8b50(0x1bc)]['display'] = _0x1a8b50(0x1a8);
    });
    _0x1ee6c1[_0x3016a4(0x1b1)](_0x3016a4(0x1b6), () => {
        const _0x49bd75 = _0x3016a4;
        _0x4bd11f[_0x49bd75(0x1bc)]['display'] = _0x49bd75(0x1cf);
    });
    _0x1ee6c1['addEventListener'](_0x3016a4(0x1d8), _0x2bf22b => {
        const _0x3b1967 = _0x3016a4;
        _0x4bd11f[_0x3b1967(0x1bc)][_0x3b1967(0x19c)] = _0x2bf22b[_0x3b1967(0x1d2)] + 0x1e + 'px';
        _0x4bd11f[_0x3b1967(0x1bc)][_0x3b1967(0x1c7)] = _0x2bf22b[_0x3b1967(0x1cb)] + 0x0 + 'px';
    });
});