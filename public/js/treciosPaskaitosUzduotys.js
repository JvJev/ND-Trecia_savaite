export function treciaPaskaita() {
    console.group('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
    {
        const paverstiDidziosiom = (text) => text.toUpperCase();
        const zodis = 'Zodis didziosiomis raidemis';
        console.log(paverstiDidziosiom(zodis));
    }
    console.groupEnd();
    console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
    {
        const ilgis = (x, y) => x.length + y.length;
        const x = 'vienas';
        const y = 'du';
        console.log(ilgis(x, y));
    }
    console.groupEnd();
}
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
    const isTrue = (a, b) => a.includes(b);
    const a = 'vienas';
    const b = 'i';
    console.log(isTrue(a, b));
}
console.groupEnd();
console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
    const lyginisSkaicius = (zodis) => zodis.length % 2 === 0;
    const zodis = 'kamikaze';
    console.log(lyginisSkaicius(zodis));
}
console.groupEnd();
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
    const kiekBalsiu = (zodis, balsiuSarasas) => {
        let result = 0;
        balsiuSarasas.map((balse) => {
            if (zodis.includes(balse)) {
                result = result += 1;
            }
            console.log(result);
        });
    };
    const a = 'pomidoriene';
    const b = ['a', 'e', 'y', 'u', 'i', 'o'];
    console.log(kiekBalsiu(a, b));
    console.log('kazkas veikia bet grazina nesamones, bandziau toje pacioje funkcijoje naudoti string ir string[] = TS neleido. Isseko idejos. Kaip padaryti be zodyno metodo?');
}
console.groupEnd();
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
    const a = 'pomidoriene';
    const b = 'e';
    const kiekBalsiu = (zodis, balsiuSarasas) => {
        let result = 0;
        for (let i = 0; i < zodis.length; i += 1) {
            if (zodis[i] === balsiuSarasas) {
                result += 1;
            }
        }
        console.log(result);
    };
    console.log(kiekBalsiu(a, b));
}
;
console.groupEnd();
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
    const istrynimoIndeksas = (word, symbol) => {
        const newWord = word.replace(symbol, '');
        console.log(word);
        return newWord;
    };
    const sh = "nervas";
    const d = 'v';
    console.log(istrynimoIndeksas(sh, d));
}
console.groupEnd();
console.groupCollapsed('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
    const xxx = (a, b) => {
        const newArray = b.push(a);
        console.log(newArray);
        return newArray;
    };
    const word = 'kompotas';
    const array = ['O', 'M', 'G'];
    xxx(word, array);
    console.log('nesuprantu kodel grazina 4');
}
console.groupEnd();
console.groupCollapsed('9. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
}
console.groupEnd();
{
}
;
//# sourceMappingURL=treciosPaskaitosUzduotys.js.map