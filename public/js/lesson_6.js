export function lesson6Function() {
    const numbers = [111, 222, 333, 444, 555, 666, 777];
    const strings = ["Sausis", "balandis", "kovas", "birzelis", "rugpjutis", "spalis", "gruodis"];
    const booleans = [true, true, true, true, false];
    console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
    {
        const returnArrElement = (arr) => { return arr[0]; };
        console.log(returnArrElement(numbers));
        console.log(returnArrElement(strings));
        console.log(returnArrElement(booleans));
    }
    console.groupEnd();
    console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
    {
        const returnLastArrElement = (arr) => {
            console.log(arr.length - 1);
        };
        console.log(returnLastArrElement(numbers));
        console.log(returnLastArrElement(strings));
        console.log(returnLastArrElement(booleans));
    }
    console.groupEnd();
    console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
    {
        const deepCopy = (arr) => structuredClone(arr);
        console.log(deepCopy(numbers));
        console.log(deepCopy(strings));
        console.log(deepCopy(booleans));
    }
    console.groupEnd();
    console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
    {
        const solution = (value, count) => {
            return Array.from(new Array(count)).map(_ => value);
        };
        const dataSamples = [
            ['a', 3],
            [77, 4],
            [true, 6],
        ];
        dataSamples.forEach((args) => console.log(`solution(${args.join(' pakartojama -> ')}):`, solution(...args)));
        console.log('nusirasiau ir aiskinausi kaip veikia kaip veikia');
    }
    console.groupEnd();
    console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
    {
        const solutionTask5 = (arr1, arr2) => {
            return [...arr1, ...arr2];
        };
        console.log();
        const args1 = [[1, 2, 3], [4, 5, 6]];
        const args2 = [['labas', 'mano', 'vardas'], ['yra', 'ponas', 'krabas']];
        const args3 = [[true, true, true], [false, false, false]];
        console.log({ args: args1, result: solutionTask5(...args1) });
        console.log({ args: args2, result: solutionTask5(...args2) });
        console.log({ args: args3, result: solutionTask5(...args3) });
    }
    console.groupEnd();
    console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
    {
        const task6Solution = (existingValue) => {
            let x = existingValue;
            return {
                setter: (asignedValue) => x = asignedValue,
                getter: () => x,
            };
        };
        const value1 = 777;
        const value2 = ["Varna", "Kovas", "Balandis"];
        const value3 = { name: 'Ezys', surname: 'Berankis' };
        const obj1 = task6Solution(value1);
        const obj2 = task6Solution(value2);
        const obj3 = task6Solution(value3);
        console.log('initial values');
        console.log({
            value1: obj1.getter(),
            value2: obj2.getter(),
            value3: obj3.getter(),
        });
        console.log('changing values...');
        obj1.setter(9);
        obj2.setter(['Pakeista']);
        obj3.setter({ name: 'Pakaitalas', surname: 'Fuflo' });
        console.log({
            value1: obj1.getter(),
            value2: obj2.getter(),
            value3: obj3.getter(),
        });
    }
    console.groupEnd();
    console.group(`
      7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
      Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
      Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
    {
        const people = [
            { name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2 },
            { name: 'Kurpius', surname: 'Medainis' },
            { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
            { name: 'Ferodijus', surname: 'Cilcius' },
            { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
            { name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2 },
            { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
            { name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1 },
        ];
    }
}
lesson6Function();
//# sourceMappingURL=lesson_6.js.map