export function tipuAparsymu16Uzduociu() {
    console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
    {
        const array1 = ['uno', 'dos', 'tres', 'quatro', 'five'];
        const printLastIndex = (arr) => { return arr.length - 1; };
        console.log(printLastIndex(array1));
    }
    console.groupEnd();
    console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
    {
        const array1 = ['uno', 'dos', 'tres', 'quatro', 'five'];
        const printLastIndex = (arr) => {
            const indexCount = [];
            for (let i = 0; i < arr.length; i += 1) {
                indexCount.push(i);
            }
            indexCount.forEach((single) => { console.log(single); });
            console.log(indexCount);
        };
        console.log(printLastIndex(array1));
    }
    console.groupEnd();
    console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
    {
        const array1 = ['uno', 'dos', 'tres', 'quatro', 'five'];
        const printLastIndex = (arr) => {
            for (let i = 0; i < arr.length; i += 1) {
                console.log(arr[i]);
            }
        };
        console.log(printLastIndex(array1));
    }
    console.groupEnd();
    console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
    {
        const array1 = ['uno', 'dos', 'tres', 'quatro', 'five'];
        const printLastIndex = (arr) => {
            let indexCount = 0;
            for (let i = 0; i < arr.length; i++) {
                indexCount = i;
                console.log(indexCount + ' => ' + arr[i]);
            }
        };
        console.log(printLastIndex(array1));
    }
    console.groupEnd();
    console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
    {
        const array1 = ['uno', 'dos', 'tres', 'quatro', 'five'];
        const array1Rev = array1.reverse();
        const printLastIndex = (arr) => {
            for (let i = 0; i < arr.length; i += 1) {
                console.log(arr[i]);
            }
        };
        console.log(printLastIndex(array1Rev));
    }
    console.groupEnd();
    console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
    {
        const array1 = ['uno', 'dos', 'tres', 'quatro', 'five'];
        const res = array1.map((_, i) => i).join(' ');
        console.log(res);
        console.log('nesuprantu kaip veikia _, i ; paciam nepavyko padaryti');
    }
    console.groupEnd();
    console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
    {
        const array1 = ['uno', 'dos', 'tres', 'quatro', 'five'];
        const res = array1.map((i) => i).join(' ');
        console.log(res);
        console.log('nutrynus _, veikia, nesuprantu kodel');
        console.log(' po valandos issiaiskinau');
    }
    console.groupEnd();
    console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
    {
        const array1 = ['uno', 'dos', 'tres', 'quatro', 'five'];
        const res = array1.map((currentValue, i) => i + '=>' + `${currentValue}`).join(', ');
        console.log(res);
        console.log('tik veliau supratau, kad reikia naudoti .join, kad rasytu norimu formatu o ne masyvu, padariau su Žilvino sprendimo pagalba');
    }
    console.groupEnd();
    console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
    {
        const jevNumberArray = [6, 48, -9, 666, 12, 4, -88, 17];
        function doublednumbers(arr) {
            return arr.map(singleNumber => singleNumber * 2);
        }
        console.log(jevNumberArray);
        console.log(doublednumbers(jevNumberArray));
        console.log('truko return');
    }
    console.groupEnd();
    console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
    {
        const jevNumberArray = [6, 48, -9, 666, 12, 4, -88, 17];
        function doublednumbers(arr) {
            return arr.map(singleNumber => singleNumber * singleNumber);
        }
        console.log(jevNumberArray);
        console.log(doublednumbers(jevNumberArray));
    }
    console.groupEnd();
    console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
    {
        const jevNumberArray = [6, 48, -9, 666, 12, 4, -88, 17];
        function doublednumbers(arr) {
            return arr.map((singleNumber, index) => singleNumber * index);
        }
        console.log(jevNumberArray);
        console.log(doublednumbers(jevNumberArray));
    }
    console.groupEnd();
    console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
    {
        const jevNumberArray = [6, 48, -9, 666, 12, 4, -88, 17];
        function doublednumbers(arr) {
            let positiveArr = [];
            arr.map((singleNumber) => {
                if (singleNumber > 0) {
                    positiveArr.push(singleNumber);
                }
                else {
                    return;
                }
            });
            console.log(positiveArr);
        }
        console.log(jevNumberArray);
        console.log(doublednumbers(jevNumberArray));
    }
    console.groupEnd();
    console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
    {
        const jevNumberArray = [6, 48, -9, 666, 12, 4, -88, 17];
        const result = jevNumberArray.filter(negative => negative < 0);
        console.log(result);
        console.log('galejau ir 12 uzdavinyje naudoti filter, bet tik dabar susipratau');
    }
    console.groupEnd();
    console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
    {
        const jevNumberArray = [6, 48, -9, 666, 12, 4, -88, 17];
        function doublednumbers(arr) {
            let positiveArr = [];
            arr.map((singleNumber) => {
                if (singleNumber > 0) {
                    positiveArr.push(singleNumber);
                }
                else {
                    return;
                }
            });
            console.log(positiveArr);
        }
        console.log(jevNumberArray);
        console.log(doublednumbers(jevNumberArray));
    }
    console.groupEnd();
    console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
    {
        const jevNumberArray = [6, 48, -9, 666, 12, 4, -88, 17];
        function doublednumbers(arr) {
            let positiveArr = [];
            arr.map((singleNumber) => {
                if (singleNumber % 2 == 0) {
                    return;
                }
                else {
                    positiveArr.push(singleNumber);
                }
            });
            console.log(positiveArr);
        }
        console.log(jevNumberArray);
        console.log(doublednumbers(jevNumberArray));
    }
    console.groupEnd();
    console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
    {
        const jevNumberArray = [6, 48, -9, 666, 12, 4, -88, 17];
        function doublednumbers(arr) {
            let positiveArr = [];
            arr.map((singleNumber) => {
                if (singleNumber > 0) {
                    positiveArr.push(singleNumber);
                }
                else {
                    let convert = singleNumber * -1;
                    positiveArr.push(convert);
                }
            });
            console.log(positiveArr);
        }
        console.log(jevNumberArray);
        console.log(doublednumbers(jevNumberArray));
    }
    console.groupEnd();
}
//# sourceMappingURL=tip%C5%B3_apra%C5%A1ymo_u%C5%BEtvirtinimas.js.map