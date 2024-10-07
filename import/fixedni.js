// ==UserScript==
// @name         FIXED NI
// @version      1.0
// @description  Lekko Poprawiony dodatek DARKNESS NI. [ autorstwa Xaller i Zeph ]
// @author       vumo
// @match        https://*.margonem.pl/
// @exclude      https://www.margonem.pl/*
// @icon         https://vumocode.github.io/vaddonz/dependencies/assets/vaddonz.ico
// @grant        none
// ==/UserScript==

const fixedniStyle = document.createElement('style');
fixedniStyle.type = 'text/css';

const fixedniCSS = `
.sys_info .clan-message {
    color: #4d2600
}

.chat-message .clan-nick {
    color: #994d00;
    text-shadow: 0px 0px 12px #ce0000
}

.left-column .inner-wrapper .chat-tpl .input-wrapper {
    border-image: url(https://i.imgur.com/CkJiOJw.png) 0 111 0 104 fill repeat round
}

.bottom-panel {
    background: url(https://i.imgur.com/VW2e6d4.png) -6px -73px no-repeat
}

.bottom-panel.end-game {
    background: url(https://i.imgur.com/VW2e6d4.png) -6px -354px no-repeat
}

.bottom-panel .glass {
    background: url(https://i.imgur.com/VW2e6d4.png) -8px -199px
}

.bottom-panel .exp-bar-wrapper .exp-progress .overlay {
    background: url(https://i.imgur.com/VW2e6d4.png) no-repeat -123px -184px
}

.bottom-panel .exp-bar-wrapper .exp-progress.left .ribbon.end-game-ribbon,.bottom-panel .exp-bar-wrapper .exp-progress.right .ribbon.end-game-ribbon {
    background-image: url(https://i.imgur.com/VW2e6d4.png)
}

.bottom-panel .battle-bars-wrapper .battle-bar .background {
    background: url(https://i.imgur.com/VW2e6d4.png) -404px -199px
}

.bottom-panel .battle-bars-wrapper .battle-bar .overlay {
    background: url(https://i.imgur.com/VW2e6d4.png) -409px -186px
}

.layer.interface-layer .positioner.top .hud-container {
    background: url(https://i.imgur.com/VW2e6d4.png) -7px 0
}

.layer.interface-layer .positioner.top .hud-container .hero-data .hero_class {
    background: url(https://i.imgur.com/y8yj4E7.png)
}

.layer.interface-layer .positioner.top .bg {
    background: url(https://i.imgur.com/OORvWp4.png) 0 -61px repeat
}

.layer.interface-layer .positioner.bottom .bg {
    background: url(https://i.imgur.com/OORvWp4.png) 0 0 repeat
}

.left-column .inner-wrapper .chat-tpl .more-players-wrapper .more-players {
    background: url(https://i.imgur.com/TWrRN16.png) no-repeat -99px 0
}

.left-column .inner-wrapper .chat-tpl .more-players-wrapper .more-players:hover {
    background: url(https://i.imgur.com/TWrRN16.png) no-repeat -72px 0
}

.left-column .inner-wrapper .chat-tpl .right-tabs-wrapper .tab,.left-column .inner-wrapper .chat-tpl .tabs-wrapper .tab {
    background: url(https://i.imgur.com/TWrRN16.png) -36px -36px
}

.left-column .inner-wrapper .chat-tpl .tabs-pannel {
    border-image-source: url(https://i.imgur.com/16BV7pw.png)
}

.scroll-wrapper .scrollbar-wrapper .arrow-up,.scroll-wrapper.classic-bar .scrollbar-wrapper .arrow-up {
    background: url(https://i.imgur.com/5WJwI1d.png);
    background-position: -122px -167px
}

.scroll-wrapper .scrollbar-wrapper .track .handle,.scroll-wrapper.classic-bar .scrollbar-wrapper .track .handle {
    background: url(https://i.imgur.com/5WJwI1d.png);
    background-position: -122px -185px
}

.scroll-wrapper .scrollbar-wrapper .arrow-down,.scroll-wrapper.classic-bar .scrollbar-wrapper .arrow-down {
    background: url(https://i.imgur.com/5WJwI1d.png);
    background-position: -122px -230px
}

.auctions .scroll-wrapper .scrollbar-wrapper .track .handle,.border-window.transparent .scroll-wrapper .scrollbar-wrapper .track .handle,.dialogue-window .scroll-wrapper .scrollbar-wrapper .track .handle {
    background: url(https://i.imgur.com/5WJwI1d.png);
    background-position: -122px -185px
}

.auctions .scroll-wrapper .scrollbar-wrapper .arrow-up,.border-window.transparent .scroll-wrapper .scrollbar-wrapper .arrow-up,.dialogue-window .scroll-wrapper .scrollbar-wrapper .arrow-up {
    background: url(https://i.imgur.com/5WJwI1d.png);
    background-position: -137px -202px
}

.auctions .scroll-wrapper .scrollbar-wrapper .arrow-down,.border-window.transparent .scroll-wrapper .scrollbar-wrapper .arrow-down,.dialogue-window .scroll-wrapper .scrollbar-wrapper .arrow-down {
    background: url(https://i.imgur.com/5WJwI1d.png);
    background-position: -137px -230px
}

.left-column .inner-wrapper .chat-tpl .send-btn {
    background: url(https://i.imgur.com/5WJwI1d.png)
}

.game-window-positioner .inventory_wrapper .bags-navigation .item:hover {
    background: url(https://i.imgur.com/5WJwI1d.png) no-repeat 0 -105px
}

.game-window-positioner .inventory_wrapper .bags-navigation .item.active .highlight {
    background: url(https://i.imgur.com/5WJwI1d.png) no-repeat 0 -105px
}

.left-column .inner-wrapper .chat-tpl .input-wrapper {
    border-image: url(https://i.imgur.com/CkJiOJw.png) 0 111 0 104 fill repeat round
}

.battle-controller .graphics .header-graphic {
    background: url(https://i.imgur.com/MlJiqTt.png)!important
}

.battle-controller .graphics .timer-graphic {
    background: url(//img/gui/battle/battle-panel-timer.png)!important
}

.battle-controller .graphics .middle-graphic {
    background: url(https://i.imgur.com/RQ9bt2U.png) repeat!important
}

.battle-controller .battle-content .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat!important
}

.widget-button .icon:not(.onc-icon) {
    background-image: url(https://i.imgur.com/y8yj4E7.png) no-repeat -144px -11px
}

.battle-controller .graphics .bottom-graphic {
    background: url(https://i.imgur.com/7HiYbYf.png) 0 -35px!important
}

.additional-skill-panel {
    background: url(https://i.imgur.com/7HiYbYf.png)!important
}

.battle-msg.attack {
    border-image: url(https://i.imgur.com/QTtGPTu.png) 3 3 1 fill round repeat!important
}

.battle-window .battlelog div.attack {
    background: url(https://i.imgur.com/QTtGPTu.png) repeat-y 0 0!important
}

.battlelog .scroll-pane div.attack {
    background: url(https://i.imgur.com/QTtGPTu.png) repeat-y 0 0!important
}

.battle-msg.attack2 {
    border-image: url(https://i.imgur.com/LSsmGJ9.png) 3 3 1 fill round repeat!important
}

.battle-window .battlelog div.attack2 {
    background: url(https://i.imgur.com/LSsmGJ9.png) repeat-y 0 0!important
}

.battlelog .scroll-pane div.attack2 {
    background: url(https://i.imgur.com/LSsmGJ9.png) repeat-y 0 0!important
}

.battle-msg.neu {
    border-image: url(https://i.imgur.com/CAicdTl.png) 3 3 1 fill round repeat!important
}

.battle-window .battlelog div.neu {
    background: url(https://i.imgur.com/CAicdTl.png) repeat-y 0 0!important
}

.battlelog .scroll-pane div.neu {
    background: url(https://i.imgur.com/CAicdTl.png) repeat-y 0 0!important
}

.dialogue-window header .h_content {
    border-image: url(https://i.imgur.com/QjRD5oC.png) 0 51 fill repeat
}

.dialogue-window .background .left,.dialogue-window .background .right {
    background-image: url(https://i.imgur.com/2oVVs2J.png)
}

.dialogue-window .background .top {
    background-image: url(https://i.imgur.com/l8PViUb.png)
}

.dialogue-window .background .upper-left,.dialogue-window .background .upper-right {
    background-image: url(https://i.imgur.com/xLA65xd.png)
}

.border-window .header-label-positioner .header-label .left-decor {
    background: url(https://i.imgur.com/yQ3zX1c.png) -38px -2px
}

.border-window .header-label-positioner .header-label .right-decor {
    background: url(https://i.imgur.com/BTr7jPM.png) -38px -2px;
    background-position: -91px -2px;
    left: auto;
    right: -52px
}

.dialogue-window .content .answers li div.icon {
    background: url(https://i.imgur.com/SGu19e0.png) no-repeat -62px -32px
}

.trade-window header .h_background .left {
    background: url(https://i.imgur.com/SGu19e0.png) -38px -2px
}

.trade-window header .h_background .right {
    background: url(https://i.imgur.com/SGu19e0.png) -91px -2px
}

.border-window .header-label-positioner .header-label {
    background: url(https://i.imgur.com/NoepwZ5.png)
}

.trade-window header .h_background .middle {
    background: url(https://i.imgur.com/NoepwZ5.png)
}

.layer.interface-layer .main-column.left-column .border {
    background: url(https://i.imgur.com/tPbCJUQ.png) -240px 0
}

.layer.interface-layer .main-column.right-column {
    background: url(https://i.imgur.com/tPbCJUQ.png) -251px 0
}

.layer.interface-layer .main-column.right-column .border {
    background: url(https://i.imgur.com/tPbCJUQ.png) -251px 0
}

.layer.interface-layer .main-column .extended-stats .border {
    background: url(https://i.imgur.com/tPbCJUQ.png) -251px 0
}

.left-column .inner-wrapper .chat-tpl .chat-pannel {
    border-image: url(https://i.imgur.com/Cst5unI.png) 0 111 0 104 round round;
    background: #0f0f0f
}

.left-column .inner-wrapper .chat-tpl .messages-wrapper .under-tab-decor {
    border-image: url(https://i.imgur.com/ZpqncDF.png) 14 111 0 104 fill repeat round
}

.layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper.scrollable .scrollbar-wrapper .background,.layer.interface-layer .mini-map .mini-map-content .mini-map-local-content .scroll-wrapper.scrollable .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.extended-stats .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.alerts-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .background,.console-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .background,.mAlert-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .background,.mAlert-mobile-layer .scroll-wrapper.menu-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.auctions .scroll-wrapper .scrollbar-wrapper .background,.border-window.transparent .scroll-wrapper .scrollbar-wrapper .background,.dialogue-window .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.divide-panel .left-column .scroll-wrapper .scrollbar-wrapper .background,.divide-panel .right-column .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.console-window .scroll-wrapper.classic-bar .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) left 1px top repeat
}

.battle-controller .battle-content .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.quest-log .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.settings-window .section .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.addons-panel .left-column .scroll-wrapper .scrollbar-wrapper .background,.addons-panel .right-column .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.mail-box .mail-column .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.recovery-item .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.friend-enemy-list .column .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.clan .left-column .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) left 1px top repeat
}

.clan .right-column .scroll-wrapper.classic-bar .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) left 1px top repeat
}

.showcase .scroll-wrapper.classic-bar .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) left 1px top repeat
}

.motel-window .table-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.gold-shop .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.skills-window .left-column .scroll-wrapper .scrollbar-wrapper .background,.skills-window .right-column .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.help-window2 .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.divide-edit-panel .scroll-wrapper.scrollable .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.divide-and-color-edit .scroll-wrapper.scrollable .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.left-grouped-list-and-right-description-window .left-column .scroll-wrapper .scrollbar-wrapper .background,.left-grouped-list-and-right-description-window .right-column .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.mc-addon .scroll-wrapper.classic-bar .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) left 1px top repeat
}

.stats-and-history .season-wnd .reward-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.achievement-panel .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.item-changer .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.conquer-stats .scroll-wrapper.classic-bar .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) left 1px top repeat
}

.change-outfit .scroll-wrapper .scrollbar-wrapper .background {
    background: url(https://i.imgur.com/IbNTsJX.png) repeat
}

.layer.interface-layer .main-column .extended-stats {
    background: rgba(15,15,15,.9)
}

.button.green,.pressed,.widget-button.green {
    background-image: linear-gradient(to top,#444444,#1d1d1d)
}

.button.green:before,.pressed,.widget-button.green:before {
    box-shadow: inset 0 0 1px 1px #000000a6
}

.button.green,.widget-button.green,.pressed {
    box-shadow: inset 0 0 1px 1px #6a0c0c,inset 0 0 0 3px #0c0d0d
}

.widget-button:after {
    box-shadow: 0 2px 0 1px #0c0d0d
}

.button.black,.button:not(.no-hover):not(.disabled):hover:not(.active),.widget-button.black,.widget-button:not(.no-hover):not(.disabled):hover:not(.active),.button.small.green.pressed {
    background-image: linear-gradient(to top,#101010,#434343);
    box-shadow: inset 0 0 1px 1px #cecece,inset 0 0 0 3px #0c0d0d
}

.button.black:before,.button:not(.no-hover):not(.disabled):hover:not(.active):before,.widget-button.black:before,.widget-button:not(.no-hover):not(.disabled):hover:not(.active):before {
    box-shadow: inset 0 0 1px 1px #0f0f0fb3
}

.button.black.active:before,.button:not(.no-hover):not(.disabled):hover:not(.active).active:before,.widget-button.black.active:before,.widget-button:not(.no-hover):not(.disabled):hover:not(.active).active:before {
    box-shadow: inset 0 0 1px 1px #0f0f0fb3
}

.border-window {
    border-image: url(https://i.imgur.com/imQcsJh.png) 32 20 fill repeat
}

.bottom-panel-pointer-bg {
    background: url(https://i.imgur.com/uY6NO6n.png)
}

.border-window.transparent .border-image {
    background: rgba(15,15,15,.7);
    box-shadow: 0 0 0 1px #e65353,0 0 0 2px #e65353,0 0 0 3px #0c0d0d,2px 2px 3px 3px #0c0d0d66
}

.border-window.transparent .search-wrapper {
    border-top: 1px solid rgba(15,15,15,.7)
}

.heroes-discord__button {
    background-image: linear-gradient(to top,#444444,#1d1d1d);
    box-shadow: inset 0 0 1px 1px #e65353,inset 0 0 0 3px #0c0d0d
}

.heroes-discord__button:hover {
    background-image: linear-gradient(to top,#1d1d1d,#444444);
    box-shadow: inset 0 0 1px 1px #fff,inset 0 0 0 3px #0c0d0d
}

.heroes-discord__button-negative {
    background-image: linear-gradient(to top,#310b0b,#831f1f);
    box-shadow: inset 0 0 1px 1px #cecece,inset 0 0 0 3px #0c0d0d
}

.bottom-panel-pointer-bg {
    background: url(https://i.imgur.com/uY6NO6n.png)
}

.layer.interface-layer .mini-map .mini-map-map .graphic {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 0 11 fill repeat
}

.quest-log .scroll-wrapper .scroll-pane .middle-graphics {
    background: url(https://i.imgur.com/eDNvTHq.png)
}

.loot-window .middle-graphics {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 0 11 fill repeat
}

.recovery-item .scroll-wrapper .scroll-pane .middle-graphics {
    background: url(https://i.imgur.com/eDNvTHq.png)
}

.recovery-item .scroll-wrapper .scroll-pane .paper-graphics {
    background: url(https://i.imgur.com/eDNvTHq.png)
}

.friend-enemy-list .column .scroll-wrapper .scroll-pane .middle-graphics {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 0 11 fill repeat
}

.auctions-summary .middle-graphics {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 0 11 fill repeat
}

.premium-panel .premium-graphic {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 0 11 fill repeat
}

.stamina-shop .background-graphic {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 0 11 fill round
}

.depo .depo-graphic-background {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 0 11 fill repeat
}

.gold-shop .scroll-wrapper .scroll-pane .middle-graphics {
    background: url(https://i.imgur.com/eDNvTHq.png)
}

.divide-edit-panel .scroll-wrapper .scroll-pane .middle-graphic {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 0 11 fill repeat
}

.divide-and-color-edit .scroll-wrapper .scroll-pane .middle-graphic {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 0 11 fill repeat
}

.who-is-here-edit .con .middle-graphics {
    background: url(https://i.imgur.com/eDNvTHq.png);
    background-size: contain
}

.window-list-edit .con .middle-graphics {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 10 fill round
}

.promo-window .background-graphic {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 0 11 fill repeat
}

.chests-window .brown-background {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 0 11 fill repeat
}

.chests-animation .middle-graphics {
    background: url(https://i.imgur.com/eDNvTHq.png)
}

.matchmaking-summary .middle-graphics {
    background: url(https://i.imgur.com/eDNvTHq.png)
}

.matchmaking-panel .middle-graphics {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 10 fill round
}

.stats-and-history .season-wnd .middle-wood {
    background: url(https://i.imgur.com/eDNvTHq.png)
}

.achievement-panel .middle-graphics {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 10 fill round
}

.item-changer .scroll-wrapper .scroll-pane .middle-graphics {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 10 fill repeat
}

.news-panel .middle-graphics {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 10 fill round
}

.news-panel .news-content .crazy-bar {
    background: url(https://i.imgur.com/eDNvTHq.png)
}

.pre-premium-panel .brown-background {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 0 11 fill repeat
}

.conquer-stats .middle-graphics {
    border-image: url(https://i.imgur.com/eDNvTHq.png) 0 11 fill repeat
}

.change-outfit .middle-graphics {
    background: url(https://i.imgur.com/eDNvTHq.png);
    background-size: contain
}

.change-outfit .crazy-bar {
    background: url(https://i.imgur.com/eDNvTHq.png)
}

.quest-box .info-wrapper {
    background: url(https://i.imgur.com/wSJWzUH.png);
    background-size: 100% 100%
}

.settings-window .bottom-bar {
    background: url(https://i.imgur.com/wSJWzUH.png);
    background-size: auto;
    background-size: cover
}

.friend-enemy-list .amound-wrapper {
    background: url(https://i.imgur.com/wSJWzUH.png);
    background-size: 100% 100%
}

.friend-enemy-list .bottom-friend-panel {
    background: url(https://i.imgur.com/wSJWzUH.png);
    background-size: 100% 100%
}

.matchmaking-summary .summary-content .wood-bar {
    border-style: solid;
    border-width: 3px 3px;
    border-image: url(https://i.imgur.com/wSJWzUH.png) 3 3 fill stretch
}

.news-panel .news-content .section-header {
    background: url(https://i.imgur.com/wSJWzUH.png);
    background-size: 100% 100%
}

.change-outfit .preview-outfit .outfit-header,.change-outfit .your-outfit .outfit-header {
    border-style: solid;
    border-width: 3px 3px;
    border-image: url(https://i.imgur.com/wSJWzUH.png) 3 3 fill stretch
}

.game-window-positioner .character_wrapper .equipment-wrapper {
    background: url(https://i.imgur.com/0GTUXPD.png) 0 -229px
}

.game-window-positioner .inventory_wrapper .bags-navigation {
    background: url(https://i.imgur.com/0GTUXPD.png) no-repeat 0 -140px
}

.game-window-positioner .inventory_wrapper .bags-navigation .item {
    background: url(https://i.imgur.com/0GTUXPD.png) no-repeat -36px -181px
}

.game-window-positioner .inventory_wrapper .inventory-grid-bg {
    background: url(https://i.imgur.com/0GTUXPD.png) no-repeat -175px 0
}

.dialogue-window .content .npc-message .rew_item .container {
    background: url(https://i.imgur.com/0GTUXPD.png) -178px -264px
}

.show-eq .show-eq-bck .table-wrapper .right-side .other-items-wrapper .other-items {
    background: url(https://i.imgur.com/0GTUXPD.png) 0 -229px
}

.eq-items-set {
    background: url(https://i.imgur.com/0GTUXPD.png)
}

.game-window-positioner .character_wrapper .stats-wrapper {
    background: url(https://i.imgur.com/m375Pgs.png)
}

.shop-wrapper .shop-content.normal-shop-zl {
    background: url(https://i.imgur.com/Ii3BqaK.png) 0 -34px
}

.shop-wrapper .shop-content.pet-shop-sl {
    background: url(https://i.imgur.com/dV9MIcC.png) 0 -34px
}

.shop-wrapper .shop-content.normal-shop-sl {
    background: url(https://i.imgur.com/dV9MIcC.png) 0 -34px
}

.shop-wrapper .shop-content.pet-shop-zl {
    background: url(https://i.imgur.com/dV9MIcC.png) 0 -34px
}

.border-window .content {
    background: url(https://i.imgur.com/HagFslo.png)
}

.skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .board-wrapper .board-graphic {
    border-style: solid;
    border-width: 7px 5px;
    border-image: url(https://i.imgur.com/t2kPAmT.png) 7 5 fill repeat
}

.quest-box .quest-content {
    background: url(https://i.imgur.com/tj4Rsh3.png);
    background-size: cover
}

.recovery-item .info-3 {
    background: url(https://i.imgur.com/tj4Rsh3.png);
    background-size: cover
}

.depo .filter-section .filter-section-graphic {
    background: url(https://i.imgur.com/tj4Rsh3.png);
    background-size: cover
}

.depo .green-bar-section {
    background: url(https://i.imgur.com/tj4Rsh3.png);
    background-size: cover
}

.addons-panel .main-header {
    background: url(https://i.imgur.com/nckrrOA.png)
}

.left-grouped-list-and-right-description-window .main-header {
    background: url(https://i.imgur.com/nckrrOA.png)
}

.layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper .scroll-pane,.layer.interface-layer .mini-map .mini-map-content .mini-map-local-content .scroll-wrapper .scroll-pane {
    border-style: solid;
    border-width: 0 30px;
    border-image: url(https://i.imgur.com/OSPwnTV.png) 0 30 fill repeat
}

.additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper .scroll-pane:after,.additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-local-content .scroll-wrapper .scroll-pane:after {
    border-style: solid;
    border-width: 0 30px;
    border-image: url(https://i.imgur.com/OSPwnTV.png) 0 30 fill repeat
}

.addons-panel .left-column .middle-left-column-graphics {
    background: url(https://i.imgur.com/OSPwnTV.png)
}

.left-grouped-list-and-right-description-window .left-column .middle-left-column-graphics {
    background: url(https://i.imgur.com/OSPwnTV.png)
}

.addons-panel .right-column .middle-right-column-graphics {
    background: url(https://i.imgur.com/2DhmADf.png)
}

.left-grouped-list-and-right-description-window .right-column .middle-right-column-graphics {
    background: url(https://i.imgur.com/2DhmADf.png)
}

.addons-panel .left-column .bottom-left-column-graphics {
    background: url(https://i.imgur.com/hS8ffUD.png)
}

.left-grouped-list-and-right-description-window .left-column .bottom-left-column-graphics {
    background: url(https://i.imgur.com/hS8ffUD.png)
}

.border-window .bottom-bar {
    background: url(https://i.imgur.com/oA8svdu.png);
    background-size: 100% 100%
}

.divide-panel .bottom-part .bottom-panel-graphics {
    border-style: solid;
    border-width: 0 59px;
    border-image: url(https://i.imgur.com/oA8svdu.png) 0 59 fill stretch
}

.addons-panel .bottom-recipes-panel .bottom-panel-graphics {
    background: url(https://i.imgur.com/oA8svdu.png)
}

.mail-box .bottom-mail-panel .bottom-panel-graphics {
    background: url(https://i.imgur.com/oA8svdu.png)
}

.recovery-item .recover-bottom-panel {
    background: url(https://i.imgur.com/oA8svdu.png);
    background-size: 100% 100%
}

.premium-panel .premium-bottom-panel {
    background: url(https://i.imgur.com/oA8svdu.png);
    background-size: 100% 100%
}

.stamina-shop .footer .bottom-panel-graphics {
    background: url(https://i.imgur.com/oA8svdu.png)
}

.gold-shop .footer .bottom-panel-graphics {
    background: url(https://i.imgur.com/oA8svdu.png)
}

.skills-window .bottom-part .bottom-panel-graphics {
    border-style: solid;
    border-width: 0 59px;
    border-image: url(https://i.imgur.com/oA8svdu.png) 0 59 fill stretch
}

.divide-edit-panel .bottom-bar {
    background: url(https://i.imgur.com/oA8svdu.png);
    background-size: 100% 100%
}

.left-grouped-list-and-right-description-window .bottom-row-panel .bottom-panel-graphics {
    background: url(https://i.imgur.com/oA8svdu.png)
}

.promo-window .promo-bottom-panel {
    background: url(https://i.imgur.com/oA8svdu.png);
    background-size: 100% 100%
}

.chests-window .chests-bottom-panel {
    background: url(https://i.imgur.com/oA8svdu.png);
    background-size: 100% 100%
}

.matchmaking-summary .bottom-panel-graphics {
    background: url(https://i.imgur.com/oA8svdu.png)
}

.matchmaking-panel .bottom-panel-graphics {
    background: url(https://i.imgur.com/oA8svdu.png)
}

.achievement-panel .bottom-panel-graphics {
    background: url(https://i.imgur.com/oA8svdu.png)
}

.item-changer .filter-wrapper {
    background: url(https://i.imgur.com/oA8svdu.png) 1px -4px;
    background-size: 100% 100%
}

.item-changer .bottom-item-changer-panel .bottom-panel-graphics {
    border-style: solid;
    border-width: 0 59px;
    border-image: url(https://i.imgur.com/oA8svdu.png) 0 59 fill stretch
}

.pre-premium-panel .chests-bottom-panel {
    background: url(https://i.imgur.com/oA8svdu.png);
    background-size: 100% 100%
}

.change-outfit .bottom-change-outfit-panel .bottom-panel-graphics {
    border-style: solid;
    border-width: 0 59px;
    border-image: url(https://i.imgur.com/oA8svdu.png) 0 59 fill stretch
}

.addons-panel .right-column .paper-graphics {
    border-style: solid;
    border-width: 63px 27px 27px;
    border-image: url(https://i.imgur.com/ujiYWi7.png) 63 27 27 fill round
}

.recovery-item .scroll-wrapper .scroll-pane .paper-graphics {
    border-style: solid;
    border-width: 63px 27px 27px;
    border-image: url(https://i.imgur.com/ujiYWi7.png) 63 27 27 fill repeat
}

.left-grouped-list-and-right-description-window .right-column .paper-graphics {
    border-style: solid;
    border-width: 63px 27px 27px;
    border-image: url(https://i.imgur.com/ujiYWi7.png) 63 27 27 fill round
}

.item-changer .scroll-wrapper .scroll-pane .paper-graphics {
    border-style: solid;
    border-width: 63px 27px 27px;
    border-image: url(https://i.imgur.com/ujiYWi7.png) 63 27 27 fill repeat
}

.console-layer .border-window .content {
    border-style: solid;
    border-width: 0 12px;
    border-image: url(https://i.imgur.com/hStnH39.png) 0 10 repeat
}

.settings-window .section .scroll-wrapper .scroll-pane .graphic-background {
    border-style: solid;
    border-width: 27px 11px;
    border-image: url(https://i.imgur.com/hStnH39.png) 27 11 fill repeat;
    background-size: contain
}

.mail-box .mail-column .middle-graphic {
    border-style: solid;
    border-width: 27px 11px;
    border-image: url(https://i.imgur.com/hStnH39.png) 27 11 fill repeat;
    background-size: contain
}

.clan .right-column {
    border-style: solid;
    border-width: 0 11px;
    border-image: url(https://i.imgur.com/hStnH39.png) 0 9 repeat
}

.clan-list-find-panel {
    border-style: solid;
    border-width: 0 11px;
    border-image: url(https://i.imgur.com/hStnH39.png) 0 9 repeat
}

.showcase .card-content {
    border-style: solid;
    border-width: 0 11px;
    border-image: url(https://i.imgur.com/hStnH39.pngg) 0 9 repeat
}

.auctions .right-column {
    border-style: solid;
    border-width: 0 11px;
    border-image: url(https://i.imgur.com/hStnH39.png) 0 9 repeat
}

.skills-window .left-column .middle-graphic,.skills-window .right-column .middle-graphic {
    border-style: solid;
    border-width: 0 11px;
    border-image: url(https://i.imgur.com/hStnH39.png) 0 11 fill round;
    background-size: contain
}

.help-window2 .scroll-wrapper .scroll-pane .graphic-background {
    border-style: solid;
    border-width: 27px 11px;
    border-image: url(https://i.imgur.com/hStnH39.png) 27 11 fill repeat;
    background-size: contain
}

.mc-addon-window .content {
    border-style: solid;
    border-width: 0 12px;
    border-image: url(https://i.imgur.com/hStnH39.png) 0 10 repeat
}

.choose-outfit .middle-graphics {
    border-style: solid;
    border-width: 0 11px;
    border-image: url(https://i.imgur.com/hStnH39.png) 0 11 fill round;
    background-size: contain
}

.settings-window h2 {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 100% 100%
}

.settings-window .hot-keys-config .scroll-wrapper .static-bar-table tr {
    background: url(https://i.imgur.com/WOtlBIJ.png)
}

.mail-box .content-header {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 100% 100%
}

.recovery-item .scroll-wrapper .static-bar-table .table-header {
    background: url(https://i.imgur.com/WOtlBIJ.png)
}

.card-content .table-header-wrapper {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: auto auto;
    background-size: 788px 27px
}

.clan-list-find-panel .clan-list-find-content .scroll-pane .background-wrapper .clan-find-header-0,.clan-list-find-panel .clan-list-find-content .scroll-pane .background-wrapper .clan-find-header-1,.clan-list-find-panel .clan-list-find-content .scroll-pane .background-wrapper .clan-find-header-2 {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 100% 27px
}

.clan-list-find-panel .clan-list-butts-wrapper {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 100% 100%
}

.clan-bless-content .header-bar,.clan-diplomacy-content .header-bar,.clan-edit-page-content .header-bar,.clan-history-content .header-bar,.clan-manage-content .header-bar,.clan-official-page-content .header-bar,.clan-priv-page-content .header-bar,.clan-quests-content .header-bar,.clan-rank-edit-content .header-bar,.clan-recruit-content .header-bar,.clan-skills-content .header-bar,.clan-treasury-content .header-bar {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 100% 27px
}

.clan-other-recruit-content .clan-list-butts-wrapper,.clan-recruit-content .clan-list-butts-wrapper {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 100% 100%
}

.clan-other-recruit-content .clan-recruit-header-0,.clan-other-recruit-content .clan-recruit-header-1,.clan-other-recruit-content .clan-recruit-header-2,.clan-recruit-content .clan-recruit-header-0,.clan-recruit-content .clan-recruit-header-1,.clan-recruit-content .clan-recruit-header-2 {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 100% 27px
}

.clan-treasury-content .scroll-wrapper .scroll-pane .history-table tr:first-child {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 788px 27px
}

.clan-manage-content .rank-edit-table tr:first-child {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 788px 27px
}

.showcase .header-bar {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: auto auto;
    background-size: 100% 27px
}

.amount-label {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 100% 27px
}

.auctions .right-column .main-list .header-list {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 788px 25px
}

.skills-window .right-column .maku-wood {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 100% 100%
}

.MBEditor .buttons-wrapper {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 100% 100%
}

.help-window2 .scroll-wrapper .scroll-pane .content-header {
    background: url(https://i.imgur.com/WOtlBIJ.png);
    background-size: 100% 100%
}

.item-changer .scroll-wrapper .static-bar-table .table-header {
    background: url(https://i.imgur.com/WOtlBIJ.png)
}

.clan .left-column .clan-list-repeat {
    background: url(https://i.imgur.com/4nLbHc3.png) repeat
}

.clan-treasury-content .green-box {
    padding: 12px 30px 8px;
    background: url(https://i.imgur.com/eAtXPG7.png) repeat-y;
    background-size: 100%;
    color: #e6d6bf;
    font-weight: 700
}

.clan-other-recruit-content .green-box,.clan-recruit-content .green-box {
    background: url(https://i.imgur.com/eAtXPG7.png) repeat-y;
    background-size: 100%;
    color: #e6d6bf
}

.clan-manage-content .green-box {
    background: url(https://i.imgur.com/eAtXPG7.png) repeat-y;
    background-size: 100%;
    color: #e6d6bf
}

.clan-diplomacy-content .green-box {
    background: url(https://i.imgur.com/eAtXPG7.png) repeat-y;
    background-size: 100%
}

.clan-history-content .chose-show {
    background: url(https://i.imgur.com/eAtXPG7.pngg) repeat-y;
    background-size: 100%
}

.card-content .green-box input.default {
    color: #e6d6bf;
    border: 1px solid rgba(15,15,15,.7)
}

.card-content .table-header {
    color: #e6d6bf;
    font-weight: 700;
    text-shadow: 1px 1px black
}

.loot-window .bottom-wrapper .bottom-graphic {
    background: url(https://i.imgur.com/StUq73M.png)
}

.auctions-summary .bottom-wrapper .bottom-graphic {
    background: url(https://i.imgur.com/StUq73M.png)
}

.premium-panel .product-kind .premium-item-wrapper .premium-item {
    background: url(https://i.imgur.com/QgrjPrz.png)
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.chest {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -2px -2px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.upgrades {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -93px -2px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.stamina {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -184px -2px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.gold-shop {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -275px -2px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.boots {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -2px -93px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.helmets {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -93px -93px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.gloves {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -184px -93px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.armor {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -275px -93px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.necklaces {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -2px -184px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.rings {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -93px -184px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.arrows {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -184px -184px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.teleports {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -275px -184px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.consumtable {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -2px -275px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.pets {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -93px -275px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.outfits {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -184px -275px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.bags {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -275px -275px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.potions {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -2px -366px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.ornamentation {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -93px -366px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.sales {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -184px -366px
}

.premium-panel .product-kind .premium-item-wrapper .premium-item.blessing {
    background: url(https://i.imgur.com/QgrjPrz.png) no-repeat -275px -366px
}

.premium-panel .more-sl.pl:hover {
    background: url(https://i.imgur.com/QgrjPrz.png) -108px -577px
}

.premium-panel .promo-package.pl:hover {
    background: url(https://i.imgur.com/QgrjPrz.png) -328px -800px
}

.premium-panel .promo-package.en:hover {
    background: url(https://i.imgur.com/QgrjPrz.png) -328px -800px
}

.premium-panel .close.pl:hover {
    background: url(https://i.imgur.com/QgrjPrz.png) -4px -555px
}

.chests-window .chests-choice-wrapper .promo-chest {
    background: url(https://i.imgur.com/gNO2C2B.png) -436px 2px
}

.chests-window .chests-choice-wrapper .promo-chest .img-wrapper .chest-img.black-dragon-chest-g,.chests-window .chests-choice-wrapper .promo-chest .txt-wrapper .chest-img.black-dragon-chest-g {
    background: url(https://i.imgur.com/gNO2C2B.png) -575px -192px
}

.chests-window .chests-choice-wrapper .promo-chest .img-wrapper .chest-img.red-dragon-chest-g,.chests-window .chests-choice-wrapper .promo-chest .txt-wrapper .chest-img.red-dragon-chest-g {
    background: url(https://i.imgur.com/gNO2C2B.png) -436px -192px
}

.pre-premium-panel .tiles-wrapper .pre-premium-panel-tile {
    background: url(https://i.imgur.com/gNO2C2B.png) -299px 0
}

.pre-premium-panel .tiles-wrapper .pre-premium-panel-tile .graph.sl-cl {
    background: url(https://i.imgur.com/gNO2C2B.png) -20px 0
}

.pre-premium-panel .tiles-wrapper .pre-premium-panel-tile .graph.shop-cl {
    background: url(https://i.imgur.com/gNO2C2B.png) -165px 0
}

.pre-premium-panel .tiles-wrapper .pre-premium-panel-tile .graph.chest-cl {
    background: url(https://i.imgur.com/gNO2C2B.png) -14px -141px
}

.pre-premium-panel .tiles-wrapper .pre-premium-panel-tile .graph.for-you-cl {
    background: url(https://i.imgur.com/gNO2C2B.png) -161px -143px
}

.layer.interface-layer .positioner.top .hud-container .map_ball {
    background: url(https://i.imgur.com/y8yj4E7.png)
}

.layer.interface-layer .positioner.bottom .bg-additional-widget-left {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -177px -598px
}

.layer.interface-layer .positioner.bottom .bg-additional-widget-right {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -177px -598px
}

.layer.interface-layer .mini-map .mini-map-panel {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -413px -498px
}

.bottom-panel .lagmeter .lag {
    background: url(https://i.imgur.com/y8yj4E7.png)
}

.game-window-positioner .character_wrapper .equipment-wrapper .skill-switch {
    background: url(https://i.imgur.com/y8yj4E7.png)
}

.game-window-positioner .character_wrapper .stats-wrapper .stats-list li .icon {
    background: url(https://i.imgur.com/y8yj4E7.png)
}

.game-window-positioner .character_wrapper .pvp-btn {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -430px -369px
}

.right-column .inner-wrapper .battle-set-wrapper {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -517px -709px
}

.right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-2.active {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -428px -709px
}

.right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-2:hover {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -491px -709px
}

.right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-1.active {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -409px -709px
}

.right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-1:hover {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -472px -709px
}

.right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-0.active {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -390px -709px
}

.right-column .inner-wrapper .battle-set-wrapper .battle-set-nr-0:hover {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -453px -709px
}

.border-window .close-button-corner-decor {
    background: url(https://i.imgur.com/y8yj4E7.png) -380px -55px
}

.border-window .close-button-corner-decor .close-button {
    background: url(https://i.imgur.com/y8yj4E7.png) -263px -79px
}

.skill-req-wrapper {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -592px -160px
}

.profs-icon {
    background: url(https://i.imgur.com/y8yj4E7.png)
}

.battle-summary .bottom-bar-wrapper .bottom-bar {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -13px -539px
}

.loot-window .bottom-bar-wrapper .bottom-bar {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -13px -539px
}

.loot-window .items-wrapper .loot-item-wrapper {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -231px -274px
}

.shop-wrapper .shop-content .for-you-plug {
    background: url(https://i.imgur.com/y8yj4E7.png) 1px -709px
}

.mail-box .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .footer .atachment-exist {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -800px -79px
}

.mail-box .new-message .footer .atachments .foot-item .send-item {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -800px -79px
}

.party .list .party-member.stasis .table-wrapper .stasis-icon {
    background: url(https://i.imgur.com/y8yj4E7.png) -540px -337px
}

.party .exp-percent:before {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -838px -667px
}

.clan .left-column .clan-info {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -14px -244px
}

.clan .left-column .clan-list-bottom {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -228px -247px
}

.clan-members-content .scroll-wrapper .scroll-pane .clan-member .add-to-group .button .add-bck {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -334px -81px
}

.quest-bring-item .item-wrapper {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -800px -79px
}

.one-clan-skill .skill-clan-info .skill-progress .skill-points-wrapper .use-lvl {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -490px -336px
}

.one-clan-skill .skill-clan-info .skill-progress .skill-slots-wrapper .empty-lvl.right {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -546px -315px
}

.one-clan-skill .skill-clan-info .skill-progress .skill-slots-wrapper .empty-lvl.middle {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -518px -315px
}

.one-clan-skill .skill-clan-info .skill-progress .skill-slots-wrapper .empty-lvl.left {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -490px -315px
}

.auctions .left-column .container .header .list .cl-handler .cl-button {
    background: url(https://i.imgur.com/y8yj4E7.png);
    background-position: -772px -558px
}

.auctions .right-column .item-handler .container {
    background: url(https://i.imgur.com/y8yj4E7.png) -800px -79px
}

.depo .bottom-section .cards-menu .right-arrow:hover {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -883px -517px
}

.depo .bottom-section .cards-menu .right-arrow {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -867px -517px
}

.depo .bottom-section .cards-menu .left-arrow:hover {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -834px -517px
}

.depo .bottom-section .cards-menu .left-arrow {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -850px -517px
}

.item-slot {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -800px -79px
}

#lvl_up_notif {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -763px -323px
}

#loggedPriceNotif {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -763px -365px
}

#consoleNotif {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -763px -365px
}

#mailnotifier {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -762px -410px
}

.ability-points .ability-content .ability-row .img-wrapper .img {
    background: url(https://i.imgur.com/y8yj4E7.png)
}

.help-window .scroll-wrapper .scroll-pane .help-legend-section .prof-icon {
    background: url(https://i.imgur.com/y8yj4E7.png)
}

.help-profs-and-items .profs-content .help-one-prof .first-line .symbol {
    background: url(https://i.imgur.com/y8yj4E7.png)
}

.who-is-here .scroll-wrapper .scroll-pane .one-other .center .stasis.active {
    background: url(https://i.imgur.com/y8yj4E7.png) -540px -337px
}

.promo-window .items-wrapper .shop-promo-item {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -299px -712px
}

.matchmaking-panel .all-pages .choose-eq .eq-items-set .skill-set.skill-set-3 {
    background: url(https://i.imgur.com/y8yj4E7.png) -141px -600px
}

.matchmaking-panel .all-pages .choose-eq .eq-items-set .skill-set.skill-set-2 {
    background: url(https://i.imgur.com/y8yj4E7.png) -110px -600px
}

.matchmaking-panel .all-pages .choose-eq .eq-items-set .skill-set.skill-set-1 {
    background: url(https://i.imgur.com/y8yj4E7.png) -79px -600px
}

.matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-border.unavailable-level-last,.matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-slot.unavailable-level-last {
    background: url(https://i.imgur.com/y8yj4E7.png) -85px -663px
}

.matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-border.unavailable-level,.matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-slot.unavailable-level {
    background: url(https://i.imgur.com/y8yj4E7.png) 1px -663px
}

.matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-border.available-level-last,.matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-slot.available-level-last {
    background: url(https://i.imgur.com/y8yj4E7.png) -128px -663px
}

.matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-border.available-level,.matchmaking-progress-stage .bar-and-item-side .items-wrapper .item-chest-slot.available-level {
    background: url(https://i.imgur.com/y8yj4E7.png) -42px -663px
}

.item-changer-group .background-grid .background-grid-element {
    background: url(https://i.imgur.com/y8yj4E7.png) repeat -14px -444px
}

.cost-item,.item-changer-group .grid .require-item,.require-and-receive-item .require-wrapper .require-wrapper-align .require-item {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -14px -444px
}

.cost-item.can-choose-item,.item-changer-group .grid .require-item.can-choose-item,.require-and-receive-item .require-wrapper .require-wrapper-align .require-item.can-choose-item {
    background: url(https://i.imgur.com/y8yj4E7.png) repeat -99px -444px
}

.cost-item.can-choose-item:hover,.item-changer-group .grid .require-item.can-choose-item:hover,.require-and-receive-item .require-wrapper .require-wrapper-align .require-item.can-choose-item:hover {
    background: url(https://i.imgur.com/y8yj4E7.png) repeat -136px -444px
}

.require-and-receive-item .recive-wrapper .recive-wrapper-align .recive-item {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -53px -444px
}

.news-panel .news-content .right-arrow:hover,.news-panel .news-content .right-news-btn:hover {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -668px -313px
}

.news-panel .news-content .right-arrow,.news-panel .news-content .right-news-btn {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -618px -313px
}

.news-panel .news-content .left-arrow:hover,.news-panel .news-content .left-news-btn:hover {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -691px -313px
}

.news-panel .news-content .left-arrow,.news-panel .news-content .left-news-btn {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -641px -313px
}

.loot-preview .item-container {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat -857px -828px
}

.poll__answers-item [type=radio]+label {
    background: url(//img/gui/buttony.png?url=false) -801px -80px
}

.popup-menu .menu-item {
    border-radius: 4px;
    border: 1px solid rgba(15,15,15,.7);
    background-color: #0f0f0fb3
}

.popup-menu .menu-item:hover:not(.label):not(.disabled):not(.cooldown-disabled):not(.one-step-skill-menu) {
    border: 1px solid rgba(15,15,15,.7);
    background-color: #232323e6
}

.popup-menu {
    background-color: #0a0a0a80;
    background-clip: padding-box
}

.alerts-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option,.console-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option,.mAlert-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option,.mAlert-mobile-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option {
    border-radius: 4px;
    border: 1px solid rgba(62,2,0,.7);
    background-color: #0f0f0fb3
}

.alerts-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled),.console-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled),.mAlert-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled),.mAlert-mobile-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled) {
    border: 1px solid rgba(15,15,15,.7);
    background-color: #232323e6
}

.clan-treasury-content .scroll-wrapper .scroll-pane .right-part .outfit-content {
    background: url(https://i.imgur.com/y8yj4E7.png) no-repeat 0 -866px
}

.depo .find-and-manage-money-section .right-part .money-info {
    border-style: solid;
    border-width: 1px 1px 23px 11px;
    border-image: url(https://i.imgur.com/D5XZTb2.png) 1 1 23 11 fill
}

.depo .find-and-manage-money-section .left-part .manage-money-wrapper .manage-money-wrapper-graphic {
    border-style: solid;
    border-width: 1px 1px 23px 1px;
    border-image: url(https://i.imgur.com/k6EB8l7.png) 1 1 23 1 fill
}

.depo .bottom-section .actions-bar-content .actions-bar-background {
    border-style: solid;
    border-width: 1px 1px 23px 1px;
    border-image: url(https://i.imgur.com/k6EB8l7.png) 1 1 23 1 fill
}

.depo .item-section .slots-background {
    background: url(https://i.imgur.com/hP8u3B9.png)
}

.auctions .left-column {
    border-style: solid;
    border-width: 21px 33px 9px;
    border-image: url(https://i.imgur.com/dLdeLdk.png) 21 33 9 fill repeat
}

.btn-min:not(.disabled):hover {
    background: #1a1a1a
}

.btn-min {
    background: #6a0c0c
}

.tw-list-item {
    background: rgba(15,15,15,.5);
    box-shadow: 0 0 0 1px #0f0f0fe6 inset
}

.tip-wrapper {
    box-shadow: 0 0 #2b282a,0 0 0 1px #353131,0 0 0 2px #191311,0 0 0 3px #2b2727,0 0 0 4px #0f0f0f99,0 0 0 5px #0f0f0f,0 0 0 6px #5a585b,0 0 0 7px #2c2625
}

.tip-wrapper .content {
    padding: 5px;
    background: rgba(15,15,15,.85);
    word-break: break-word
}

.tip-wrapper[data-type=t_item] .item-head {
    border: 1px solid rgba(15,15,15,.7);
    border-radius: 2px
}

.tip-wrapper[data-type=t_item] .item-head .head-icons .cl-icon {
    border: 1px solid rgba(15,15,15,.3)
}

.tip-wrapper[data-type=t_item] .item-tip-section {
    border-bottom: 1px solid rgba(15,15,15,.5)
}

.tip-wrapper .content .info-wrapper .nick {
    border: 1px solid rgba(0,0,0,.89);
    border-radius: 2px;
    background: rgba(15,15,15,.1)
}

.tip-wrapper[data-type=t_other] .line {
    background: url(https://i.imgur.com/XifzayY.png)
}

@keyframes pulse-green {
    0%,to {
        background: rgba(94,94,94,0)
    }

    50% {
        background: rgb(63,3,0)
    }
}

@keyframes btnMinBlink {
    0%,to {
        background: rgb(195,156,71)
    }

    50% {
        background: rgb(230,183,83)
    }
}

.skills-window .left-column .list-label-wrapper .list-label .label {
    color: beige
}

.clan-treasury-content .table-header {
    background: url(https://i.imgur.com/WOtlBIJ.png)
}

.popup-menu .menu-item.disabled {
    background-color: #232323
}

.battle-controller .skill-hider {
    background: url(https://i.imgur.com/fah3Tyv.png)
}

.new-chat-window {
    background: #000000
}

.chat-channel-card-wrapper {
    height: 33px;
    border: 1px solid #6a0c0c;
    background: #000000
}

.chat-input-wrapper {
    background: #000000
}

.new-chat-window .chat-message-wrapper,.chat-input-wrapper .magic-input-wrapper,.chat-input-wrapper .control-wrapper .menu-card,.chat-input-wrapper .control-wrapper .chat-config-wrapper {
    border: 1px solid #6a0c0c
}

body {
background: url(https://i.imgur.com/tPbCJUQ.png) repeat;
}

.border-window.transparent .border-image {
    box-shadow: 0 0 0 1px #5c5c5c8c, 0 0 0 2px #5c5c5c8c, 0 0 0 3px #0c0d0d, 2px 2px 3px 3px #0c0d0d66;
}

.new-chat-window .chat-message-wrapper {
    border: 1px solid #7e7474;
    box-shadow: inset 0 0 3px 3px #000;
}

.button.green, .widget-button.green, .pressed {
    box-shadow: inset 0 0 1px 1px #80808061, inset 0 0 0 3px #0c0d0d;
}

.chat-channel-card-wrapper {
    border: 1px solid #7e7474;
    box-shadow: inset 0 0 3px 3px #000;

}

.chat-input-wrapper .magic-input-wrapper {
    border: 1px solid #7e7474;
}

.new-chat-window .chat-message-wrapper, .chat-input-wrapper .magic-input-wrapper, .chat-input-wrapper .control-wrapper .menu-card, .chat-input-wrapper .control-wrapper .chat-config-wrapper {
    border: 1px solid #7e7474;
}

.party .exp-percent {
    display: none;
}

.bottom-panel .hp-indicator .hpp {
    width: 100%;
    line-height: 60px;
    font-size: 24px;
    color: rgba(0,0,0,.2);
    text-align: center;
    font-weight: 700;
    text-shadow: 0 0 1px rgba(0,0,0,.2);
    position: relative;
    top: 20%;
    left: 0px;
    color: #111111;
}

`;

fixedniStyle.appendChild(document.createTextNode(fixedniCSS));
document.head.appendChild(fixedniStyle);
