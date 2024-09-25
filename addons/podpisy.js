// ==UserScript==
// @name         Podpisy KCS
// @version      1.16
// @description  Podpisy KCS'ów
// @author       vumo
// @match        https://*.margonem.pl/
// @downloadURL  https://vumocode.github.io/margonem-addons/addons/podpisy.js
// @updateURL    https://vumocode.github.io/margonem-addons/addons/podpisy.js
// @require      https://vumocode.github.io/margonem-addons/addons/podpisy.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=margonem.pl
// @grant        none
// ==/UserScript==

!function() {
    const config = {
        
        /* INNE */

        /* Kuźnia Kendala */ "1224": "KEND",
        /* Port Tuzmer */ "630": "PORT",
        /* AGIA TRIADA */ "1984": "AGIA";

        /* TYTANI */

        /* Dziewicza Orlica */ "189": "ORLA",
        /* Zabójczy Królik */ "1746": "KIC",
        /* Renegat Baulus */ "6949": "RENE",
        /* Piekielny Arcymag */ "7060": "ARCY",
        /* Versus Zoons */ "1898": "ZONS",
        /* Versus Zoons */ "6478": "ZONS",
        /* Łowczyni Wspomnień */ "6477": "ŁOWKA",
        /* Przyzywacz Demonów */ "6476": "PRZY",
        /* Maddok Magua */ "2024": "MAGU",
        /* Tezcatlipoca */ "5708": "TEZA",
        /* Tezcatlipoca */ "5709": "TEZA",
        /* Barbatos Smoczy Strażnik */ "3312": "BB",
        /* Tanroth */ "2355": "TH",

        /* KOLOSI */

        /* Mamlambo */ "3361": "LAMB",
        /* Regulus Mętnooki */ "3883": "REGU",
        /* Umibozu */ "2149": "UMI",
        /* Amaimon Soploręki */ "4046": "SOPEL",
        /* Hydrokora Chimeryczna */ "4066": "HYDRA",
        /* Vashkar */ "4161": "WASZ",
        /* Lulukav */ "4196": "LUKAV",
        /* Arachin Podstępny */ "4206": "ARACH",
        /* Reuzen */ "4266": "REUZ",
        /* Wernoradzki Drakolisz */ "4268": "DRAK",
    
        /* E2 */

        /* Mushita */ "1060": "MUSH",
        /* Kotołak Tropiciel */ "632": "KOTO",
        /* Shae Phu */ "5738": "SHAE",
        /* Shae Phu */ "5740": "SHAE",
        /* Zorg Jednooki Baron */ "2532": "ZORG",
        /* Władca rzek */ "727": "WłAD",
        /* Gobbos */ "3149": "GOBB",
        /* Tyrtajos */ "4156": "TYRT",
        /* Tollok Shimger */ "5293": "TOLL",
        /* Szczęt alias Gładki */ "2308": "ALI",
        /* Razuglag Oklash */ "125": "RAZU",
        /* Agar */ "177": "AGAR",
        /* Agar */ "176": "AGAR",
        /* Foverk Turrim */ "2729": "FOV",
        /* Foverk Turrim */ "816": "FOV",
        /* Owadzia Matka */ "5395": "OSA",
        /* Vari Kruger */ "333": "VARI",
        /* Furruk Kozug */ "3436": "KOZA",
        /* Jotun */ "6537": "JOT",
        /* Tolloki */ "6632": "TOLE",
        /* Lisz */ "6625": "LISZ",
        /* Grabarz świątynny */ "6623": "GRAB",
        /* Wielka Stopa */ "1204": "STOP",
        /* Podły zbrojmistrz */ "6615": "ZBROJ",
        /* Choukker */ "6634": "CHOUK",
        /* Choukker */ "6636": "CHOUK",
        /* Nadzorczyni krasnoludów */ "6772": "NADZ",
        /* Leśne Widmo */ "1324": "WIDMO",
        /* Leśne Widmo */ "1325": "WIDMO",
        /* Żelazoręki Ohydziarz */ "3466": "OHYD",
        /* Goplana */ "1150": "GOPA",
        /* Gnom Figlid */ "6780": "GNOM",
        /* Gnom Figlid */ "6781": "GNOM",
        /* Centaur Zyfryd */ "3765": "ZYF",
        /* Kambion */ "229": "KAMB",
        /* Jertek Moxos */ "6938": "JERT",
        /* Jertek Moxos */ "6937": "JERT",
        /* Miłośnik Rycerzy */ "6944": "MR",
        /* Miłośnik Magii */ "6946": "MM",
        /* Miłośnik Łowców */ "6945": "MŁ",
        /* Łowca Czaszek */ "7065": "P4",
        /* Łowca Czaszek */ "7066": "P4",
        /* Ozirus Władca Hieroglifów */ "7069": "OZI",
        /* Wójt Fistuła */ "2761": "WOJT",
        /* Krab pustelnik */ "4271": "KRAB",
        /* Krab Statek */ "1620": "REM",
        /* Królowa Śniegu */ "1238": "KRÓL",
        /* Teściowa Rumcajsa */ "1101": "TEŚĆ",
        /* Ifryt */ "7057": "IFRYT",
        /* Piraci */ "1525": "PIRACI",
        /* Młody Jack Truciciel */ "3409": "JACK",
        /* Helga Opiekunka Rumu */ "1527": "HELGA",
        /* Henry Kaprawe Oko */ "1526": "HENRY",
        /* Burkog Lorulk */ "5856": "BUREK",
        /* Burkog Lorulk */ "5855": "BUREK",
        /* Sheba Orcza Szamanka */ "5851": "SHEBA",
        /* Grubber Ochlaj */ "6955": "GRUB",
        /* Berserker Amuno */ "3265": "AMUN",
        /* Stworzyciel */ "3255": "STW",
        /* Fodug Zolash */ "716": "FODUG",
        /* Mistrz Worundriel */ "1276": "WOREK",
        /* Goons Asterus */ "359": "GOONS",
        /* Adariel */ "1322": "ADA",
        /* Duch Władcy Klanów */ "5872": "DWK",
        /* Ogr Stalowy Pazur */ "2526": "OGR",
        /* Sala Królewska */ "5861": "SK",
        /* Lusgrathera Królowa Pramatka */ "5862": "MATKA",
        /* Borgoros Garamir III */ "1641": "BYK",
        /* Chryzoprenia */ "6054": "CHRYZ",
        /* Chryzoprenia */ "6055": "CHRYZ",
        /* Cerasus */ "6057": "CERAS",
        /* Czempion Furboli */ "1912": "FURB",
        /* Torunia Ankelwald */ "6053": "TORKA",
        /* Breheret Żelazny Łeb */ "2063": "BREH",
        /* Mysiur Myświórowy Król */ "972": "MYSZ",
        /* Sadolia Nadzorczyni Hurys */ "5940": "SADO",
        /* Tajemnicza Siedziba */ "5941": "TŚ",
        /* Sataniel Skrytobójca */ "5942": "SAT",
        /* Bergermona Krwawa */ "5945": "BERGA",
        /* Zufulus Smakosz Serc */ "5943": "ZUF",
        /* Marlloth Malignitas */ "2766": "MARLL",
        /* Mocny Maddoks */ "1481": "MDKS",
        /* Arachniregina Colosseus */ "1142": "P5",
        /* Pancerny Maddok*/ "1462": "PANC",
        /* Pancerny Maddok*/ "1463": "PANC",
        /* Silvanus */ "3627": "SILVA",
        /* Silvanus */ "3628": "SILVA",
        /* Dendroculus */ "3597": "DENDR",
        /* Tolypeutes */ "5657": "TOLY",
        /* Cuaitl Citlalin */ "1901": "CIUT",
        /* Cuaitl Citlalin */ "5672": "CIUT",
        /* Pogardliwa Sybilla */ "4056": "SYBA",
        /* Pogardliwa Sybilla */ "4057": "SYBA",
        /* Yaotl */ "5694": "JAJO",
        /* Yaotl */ "5695": "JAJO",
        /* Quetzalcoatl */ "5685": "P9",
        /* Chopesz */ "3035": "CHOP",
        /* Neferkar Set */ "3039": "SET",
        /* Terrozaur */ "3327": "TER",
        /* Vaenra Charkhaam */ "3340": "VERA",
        /* Chaegd Agnrakh */ "3341": "CHAE",
        /* Pustynia */ "3339": "PUST",
        /* Nymphemonia */ "6064": "NYMF",
        /* Nymphemonia */ "6065": "NYMF",
        /* Artenius */ "2353": "ART",
        /* Furion */ "2356": "FUR",
        /* Zorin */ "2354": "ZOR",
    };

    const NI = typeof window.Engine !== "undefined";

    function createCustomDiv(id, text) {
        const div = document.createElement("div");
        div.classList.add("custom-item-overlay");
        div.textContent = text;
        div.style.position = "absolute";
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "top";
        div.style.color = "white";
        div.style.fontSize = "8px";
        div.style.marginTop = "-2px";
        div.style.zIndex = 1000;
        div.style.fontWeight = "650";
        div.style.letterSpacing = "0.5px";

        div.style.textShadow = `
            -1px -1px 2px rgba(0,0,0,0.75),
             1px -1px 2px rgba(0,0,0,0.75),
            -1px  1px 2px rgba(0,0,0,0.75),
             1px  1px 2px rgba(0,0,0,0.75),
            -2px -2px 4px rgba(0,0,0,0.75),
             2px -2px 4px rgba(0,0,0,0.75),
            -2px  2px 4px rgba(0,0,0,0.75),
             2px  2px 4px rgba(0,0,0,0.75)
        `;

        return div;
    }

    function removeCustomDiv(id) {
        const overlay = document.querySelector(`#overlay-${id}`);
        if (overlay) {
            overlay.remove();
        }
    }

    async function appendItemOverlay(id, text) {
        let overlay = document.querySelector(`#overlay-${id}`);
        const $it = NI ? document.querySelector(`.item-id-${id}`) : document.querySelector(`#item${id}`);
        const $parent = $it ? $it.closest(".depo") : null;

        if (!overlay && $it && !$parent) {
            overlay = createCustomDiv(id, text);
            const $canv = NI ? $it.querySelector("canvas") : $it.querySelector("img");
            $canv.parentElement.appendChild(overlay);
            overlay.id = `overlay-${id}`;
        } else if ($parent) {
            removeCustomDiv(id);
        }
    }

    function onItem(items) {
        for (const id in items) {
            const it = items[id];
            const tp = getItemTp(it);
            const tpMap = getTpMap(tp);
            const entry = config[tp] ?? config[tpMap];
            if (entry) {
                appendItemOverlay(id, entry);
            }
        }
    }

    function init() {
        const org = NI ? window.Engine.communication.parseJSON : window.parseInput;
        const override = function(data) {
            const res = org.apply(this, arguments);
            if (data.item) {
                onItem(data.item);
            }
            return res;
        }
        if (NI) {
            window.Engine.communication.parseJSON = override;
        } else {
            window.parseInput = override;
        }

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    const target = mutation.target;
                    const idMatch = target.className.match(/item-id-(\d+)/);
                    if (idMatch) {
                        const id = idMatch[1];
                        const overlay = document.querySelector(`#overlay-${id}`);
                        if (target.classList.contains("depo")) {
                            if (overlay) {
                                overlay.remove();
                            }
                        } else {
                            const tp = getItemTp({stat: target.getAttribute("data-stats")});
                            const tpMap = getTpMap(tp);
                            const entry = config[tp] ?? config[tpMap];
                            if (entry && !overlay) {
                                appendItemOverlay(id, entry);
                            }
                        }
                    }
                }
            });
        });

        const container = NI ? document.querySelector(".items-container") : document.body;
        observer.observe(container, { attributes: true, subtree: true });
    }

    function parseStats(stats) {
        if (!stats) return {};
        const spl = stats.split(";");
        const res = {};
        for (const entry of spl) {
            const pair = entry.split("=");
            res[pair[0]] = pair[1] ?? "true";
        }
        return res;
    }

    function getItemStats(it) {
        return it._cachedStats ?? parseStats(it.stat);
    }

    function getItemTp(it) {
        const stats = getItemStats(it);
        if (stats.teleport || (stats.custom_teleport && stats.custom_teleport !== "true")) {
            return stats.teleport ?? stats.custom_teleport;
        }
        return "";
    }

    function getTpMap(tp) {
        return tp.split(",")[0];
    }

    function getLocationItems(loc) {
        return NI ? Engine.items.fetchLocationItems(loc).map(it => it) : Object.values(g.item).filter(it => it.loc == loc);
    }

    window.listStones = function() {
        getLocationItems("g").forEach(it => {
            const stats = getItemStats(it);
            const tp = getItemTp(it);
            if (tp !== "") {
                const tpMap = getTpMap(tp);
                window.log(`${it.name} (${stats.opis}): ${tpMap} (${tp})`);
            }
        });
    }

    init();
}();
