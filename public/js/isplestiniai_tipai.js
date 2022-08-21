export function isplestiniaiTipai() {
    console.group('1. Sąjungos operatorius - UNIONS');
    {
        console.groupCollapsed('1.1 Sukurkite funkciją "print" kuri priimą string, number arba boolean ir jį atspausdiną');
        {
            let a = true;
            console.log(a);
            let b = 666;
            console.log(b);
            let c = "nagas";
            console.log(c);
        }
        console.groupEnd();
        console.groupCollapsed('1.2 Sukurkite funkciją "getLength" kuri priimą string arba masyvą ir grąžina elementų skaičių');
        {
            const getLength = (a) => a.length;
            const a = ['fdsv', 'ikdyhg', 'efr'];
            console.log(getLength(a));
        }
        console.groupEnd();
        console.groupCollapsed('1.3 Sukurkite funkciją "isEmpty" kuri priimą string arba masyvą ir grąžiną true, jei parametras tuščias, priešingu atveju - false');
        {
            const isEmpty = (a) => {
                if (a.length === 0) {
                    return true;
                }
                else {
                    return false;
                }
            };
            const a = [];
            console.log(isEmpty(a));
        }
        console.groupEnd();
    }
    console.groupEnd();
    console.group('2. Tipų rinkiniai - TUPLES');
    {
        console.groupCollapsed('2.1. Sukurkite funkciją "getMinMax" kuri priima skaičių masyvą ir grąžina dviejų vietų tipų rinkinį. Pirmas grąžinamo rinkinio elementas - mažiausias skaičių masyvas, antras - didžiausias');
        {
            const getMinMax = (numbers) => {
                const sortedNumbers = [...numbers].sort((a, b) => a - b);
                console.log(...numbers);
                const [min] = sortedNumbers;
                const max = sortedNumbers[sortedNumbers.length - 1];
                return [min, max];
            };
            console.table({
                'getMinMax[1, 7, -9, 5, 123]': getMinMax([1, 7, -9, 5, 123]),
                'getMinMax[7, 7, 4, 7, 8, 2, 7, 7]': getMinMax([7, 7, 4, 7, 8, 2, 7, 7]),
                'getMinMax[1, 2, 3, 4, 5, 6, 9, -7, -11, 2]': getMinMax([1, 2, 3, 4, 5, 6, 9, -7, -11, 2]),
            });
            console.log('man pavykes sprendimas');
            const elMasivo = [12, 666, 78, -4, -65, 2, 18];
            console.log(elMasivo);
            const getMinMaxValues = (nums) => {
                let minimal = nums.sort((a, b) => a - b);
                console.log(minimal[0]);
                let maximal = nums.sort((a, b) => b - a);
                console.log(maximal[0]);
            };
            console.log(getMinMaxValues(elMasivo));
        }
        console.groupEnd();
        console.groupCollapsed('2.2 Sukurkite funkciją "calcDistance", kuri pagal 2 taškus (Coordinate2D), suskaičiuotų atstumą tarp taškų');
        {
            const calcDistance = (p1, p2) => {
                const [x1, y1] = p1;
                const [x2, y2] = p2;
                const deltaX = Math.abs(x1 - x2);
                const deltaY = Math.abs(y1 - y2);
                const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
                return distance;
            };
            console.log('Uzduotis neatlikta, kopijuota susirasyti klausimus ir aiskintis sprendima: Sikart suprantu sprendima, bet nesuprantu matematinio atstumo skaiciavimo principo tarp dvieju tasku.');
            console.table({
                'calcDistance([0, 0], [3, 4])': calcDistance([0, 0], [3, 4]),
                'calcDistance([1, 1], [7, 9])': calcDistance([1, 1], [7, 9]),
                'calcDistance([-2, 3], [13, 11])': calcDistance([-2, 3], [13, 11]),
            });
        }
        console.groupEnd();
    }
    console.groupEnd();
    console.group('3. Prielaidos - ASSERTIONS');
    {
        console.groupCollapsed('3.1 Parašykite kodą, kuris parsiųstų skelbimus pasiekiamus šiuo adresu: "https://jsonplaceholder.typicode.com/posts?userId=1". Parsiųstus duomenis įrašykite į kintamajį "posts", darant parsiųstų duomenų tipo prielaidą. Prieš parsiunčiant duomenis apsirašykite "Post" tipą.');
        {
            let posts;
            fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
                .then(response => response.json())
                .then(((postData) => {
                posts = postData;
                console.log('3.1 Užduoties rezultatas - Post[]');
                console.log(' vel tas pats, suprantu kaip veikia, bet paini sintakse, todel reikia daryti pagal destytojo pavyzdi');
                console.table(posts);
                console.log(' pats nesugalvojau sukurti: let posts: Post[]; ');
            }));
        }
        console.groupEnd();
        console.groupCollapsed('3.2 Parašykite kodą, kuris parsiųstų vartotojus pasiekiamus šiuo adresu: "https://jsonplaceholder.typicode.com/users". Parsiųstus duomenis įrašykite į kintamajį "users", darant parsiųstų duomenų tipo prielaidą. Prieš siunčiant duomenis apsirašykite "User" tipą.');
        {
            let users;
            let address;
            let company;
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(((user) => {
                users = user;
                address = user;
                company = user;
                console.log('3.2 Užduoties rezultatas, USERS');
                console.log('Dariau pats, bet neveikia, paziurejau, kad reikia atskitai sukurti assertions ADDRESS ir GEO, paziurejes pavyzdi sukuriau');
                console.table(users);
            }));
        }
        console.groupEnd();
    }
    console.groupEnd();
    console.group('4. Konkretūs tipai - LITERAL TYPES');
    {
        console.groupCollapsed('4.1 Sukurkite objektą saugoti produktams, Product, pagal kategorijas: "food", "clothes" ir "other". "products" objektas turi 3 savybės pagal kategorijų pavadinimus, kurių reikšmės - Product[]. Sukūrus ir tipais aprašius "products" struktūrą, sukurkite funkciją "addProduct", kuri pridės produktą pagal kategoriją į "products" objektą. Ši funkcija turi priimti 2 parametrus: 1 - produktas, 2 - kategorijos pavadinimas. Kategorijos pavadinimas turi būti konkretus string tipas, pagal galimas produktų objekto kategorijas. Produkto tipą apsirašykite laisvai.');
        {
            const products = {
                Food: [],
                Clothes: [],
                Other: [],
            };
            const addProduct = (product, category) => {
                products[category].push(product);
            };
            console.log('VISAS UZDAVINYS DARYTAS PAGAL ZILVINO PVZ, PAINUS VEIKIMO PRINCIPAS TAD SUNKU SUFORMULUOTI KONKRETU KLAUSIMA');
            console.log("addProduct({ id: '1', title: 'Cepelinai', price: 0.89 }, 'Food');");
            addProduct({ color: '1', cost: 5, warranty: 'No warranty' }, 'Food');
            console.log("addProduct({ id: '2', title: 'Duona', price: 1.19 }, 'Food');");
            addProduct({ color: '2', cost: 6, warranty: 'No warranty' }, 'Food');
            console.log("addProduct({ id: '3', title: 'Kovine Van'Damke', price: 35.99 }, 'clothes');");
            addProduct({ color: '3', cost: 39, warranty: 'Two days' }, 'Clothes');
            console.log("addProduct({ id: '4', title: 'Adidas 3 paloskiu treningai', price: 19.99 }, 'clothes');");
            addProduct({ color: '4', cost: 0.99, warranty: '12 months' }, 'Clothes');
            console.log("addProduct({ id: '5', title: 'Katinas', price: 17.99 }, 'other');");
            addProduct({ color: '5', cost: 55, warranty: 'No warranty' }, 'Other');
            console.log(products);
        }
        console.groupEnd();
    }
    console.groupEnd();
    console.group('5. Išvardinimai - ENUMS');
    {
        console.groupCollapsed('5.1 Sukurkite artmetinių veiksmų konstantų išvardinimą: Operation -> Add, Subtract, Multiply, Divide. Parašykite funkciją "calc" kuri priima 2 skaičius ir operaciją "Operation". Pagal perduotą operaciją atlikite veiksmus ir grąžinkite rezultatą');
        {
            let aritmetiniaiVeiksmai;
            (function (aritmetiniaiVeiksmai) {
                aritmetiniaiVeiksmai[aritmetiniaiVeiksmai["Add"] = 0] = "Add";
                aritmetiniaiVeiksmai[aritmetiniaiVeiksmai["Subbtract"] = 1] = "Subbtract";
                aritmetiniaiVeiksmai[aritmetiniaiVeiksmai["Multiply"] = 2] = "Multiply";
                aritmetiniaiVeiksmai[aritmetiniaiVeiksmai["Divide"] = 3] = "Divide";
            })(aritmetiniaiVeiksmai || (aritmetiniaiVeiksmai = {}));
            const calculationSelection = (a, b, veiksmas) => {
                switch (veiksmas) {
                    case aritmetiniaiVeiksmai.Add: return a + b;
                    case aritmetiniaiVeiksmai.Subbtract: return a - b;
                    case aritmetiniaiVeiksmai.Multiply: return a * b;
                    case aritmetiniaiVeiksmai.Divide: return a / b;
                    default: throw new Error('Negalima atlikti tokio veiksmo');
                }
            };
            console.log('ENUMS veikimas aiskus, perdariau destytojo koda, nes nezinojau nuo ko pradeti, vel ta pati beda - sintakses nezinojimas. bet matau potenciala naudoti ateityje');
            console.table({
                'calc(10, 15, Operation.Add)': calculationSelection(2, 3, aritmetiniaiVeiksmai.Add),
                'calc(10, 15, Operation.Subbtract)': calculationSelection(2, 3, aritmetiniaiVeiksmai.Subbtract),
                'calc(10, 15, Operation.Multiply)': calculationSelection(2, 3, aritmetiniaiVeiksmai.Multiply),
                'calc(10, 15, Operation.Divide)': calculationSelection(2, 3, aritmetiniaiVeiksmai.Divide),
            });
        }
        console.groupEnd();
    }
    console.groupEnd();
}
//# sourceMappingURL=isplestiniai_tipai.js.map