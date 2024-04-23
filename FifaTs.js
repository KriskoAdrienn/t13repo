var csapatAdatok = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];
function ObjektumFeltolto2(feltoltendoElem) {
    var beolvasottAdatok = [];
    for (var i = 0; i < feltoltendoElem.length; i++) {
        var daraboltAdatok = feltoltendoElem[i].split(";");
        var ujCsapat = {
            nev: daraboltAdatok[0],
            helyezes: Number(daraboltAdatok[1]),
            valtozas: Number(daraboltAdatok[2]),
            pont: Number(daraboltAdatok[3])
        };
        beolvasottAdatok.push(ujCsapat);
    }
    return beolvasottAdatok;
}
var fifaAdatok = ObjektumFeltolto2(csapatAdatok);
//1. fealdat
function csapatokSzama(vizsgaltTomb) {
    return vizsgaltTomb.length;
}
console.log(csapatokSzama(fifaAdatok));
//2. feladat
function atlag(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += Number(vizsgaltTomb[i].pont);
    }
    return Math.round(osszeg / vizsgaltTomb.length);
}
console.log(atlag(fifaAdatok));
//3. feladat
function legtobbetJavito(vizsgaltTomb) {
    var atlagPont = atlag(fifaAdatok);
    var atlagFeletti = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].pont > atlagPont) {
            atlagFeletti.push(vizsgaltTomb[i].nev);
        }
    }
    return atlagFeletti;
}
console.log(legtobbetJavito(fifaAdatok));
//4.feladat
function LegtobbetJavitoCsapatIndexe(vizsgaltTomb) {
    var kivalasztottCsapatIndexe = 0;
    var kivalasztottCsapatNeve = "";
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].valtozas > vizsgaltTomb[kivalasztottCsapatIndexe].valtozas) {
            kivalasztottCsapatIndexe = i;
            kivalasztottCsapatNeve = vizsgaltTomb[i].nev;
        }
    }
    return kivalasztottCsapatNeve;
}
console.log(LegtobbetJavitoCsapatIndexe(fifaAdatok));
//5.feladat
function SzepelEMo(vizsgaltTomb) {
    var szerepelE = true;
    var szerepelESzöveg = "";
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == "Magyarország") {
            szerepelE = true;
            szerepelESzöveg = "Magyarország szerepel a ranglistán.";
        }
        else {
            szerepelE = false;
            szerepelESzöveg = "Magyarország nem szerepel a ranglistán.";
        }
    }
    return szerepelESzöveg;
}
console.log(SzepelEMo(fifaAdatok));
//6.feladat
function ValtozasTipusok(vizsgaltTomb) {
    var valtozasTipusok = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < valtozasTipusok.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            valtozasTipusok.push(vizsgaltTomb[i].valtozas);
        }
    }
    console.log(valtozasTipusok);
    return valtozasTipusok;
}
function ValtozasokMennyisege(vizsgaltTomb, valtozasTipusok) {
    var valtozasokMennyisege = [];
    for (var i = 0; i < valtozasTipusok.length; i++) {
        valtozasokMennyisege.push(0);
    }
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        for (var j = 0; j < valtozasTipusok.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusok[j]) {
                valtozasokMennyisege[j]++;
            }
        }
    }
    console.log(valtozasokMennyisege);
    return valtozasokMennyisege;
}
console.log(ValtozasokMennyisege(fifaAdatok, ValtozasTipusok(fifaAdatok)));
