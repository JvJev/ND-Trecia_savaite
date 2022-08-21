const addNumbers = (num1, num2) => {
    return num1 + num2;
};
const joinStrings = (str1, str2) => {
    return str1 + ' ' + str2;
};
const createInitials = function (str1, str2) {
    return str1[0].toLocaleUpperCase() + str2[0].toLocaleUpperCase();
};
const sum = addNumbers(5, 7);
const joinedString = joinStrings('Penediktas', 'Tušinis');
const initials = createInitials('Penediktas', 'Tušinis');
console.log({
    sum,
    joinedString,
    initials,
});
function printRedText(text) {
    console.log(`%c ${text}`, 'color: #ee0000');
}
printRedText('printRed funkcijos argumentas');
export function pirmaUzduotis() {
    console.group('1. Aprašykite funkcijoms tipus jas deklaruojant');
    {
        const multiply = (a, b) => {
            return a * b;
        };
        console.log(multiply(12, 10) + ' Patikrinimas ar veikia.(Jev)');
        const power = function (base, power) {
            return base ** power;
        };
        console.log(power(5, 3) + ' Tikrinu ar veikia kita funcija (Jev)');
        const squareRoot = (number) => number ** (1 / 2);
        console.log(squareRoot(25) + ' Tikrinu ar veikia squareRoot funkcija (Jev)');
        const root = function (base, nthRoot) {
            return base ** (1 / nthRoot);
        };
        console.log(root(25, 5) + ' Tikrinu ar veikia Root kita funkcija (Jev)');
        const printBlueText = (text) => console.log(`%c${text}`, 'color: #0000ee');
        printBlueText('super original text HHHHHHHEEEEEERRRRRRREEEEEEE (Jev)');
        const num1 = 454;
        const num2 = 88;
        console.log({
            [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
            [`power(${num1}, ${num2})`]: power(num1, num2),
            [`squareRoot(${num1})`]: squareRoot(num1),
            [`root(${num1}, ${num2})`]: root(num1, num2),
        });
        printBlueText('Irašau naują tekstą. 40% skaitau kodą, 50% galvoju, 10% rašau kodą');
    }
    console.groupEnd();
}
export function antraUzduotis() {
    console.group('2. Aprašykite funkcijų tipus prieš deklaruojant funkcijas');
    {
        const multiply = (a, b) => {
            return a * b;
        };
        const power = function (base, power) {
            return base ** power;
        };
        const squareRoot = (number) => number ** (1 / 2);
        const root = function (base, nthRoot) {
            return base ** (1 / nthRoot);
        };
        const printBlueText = (text) => console.log(`%c${text}`, 'color: #0000ee');
        const num1 = 3;
        const num2 = 4;
        console.log({
            [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
            [`power(${num1}, ${num2})`]: power(num1, num2),
            [`squareRoot(${num1})`]: squareRoot(num1),
            [`root(${num1}, ${num2})`]: root(num1, num2),
        });
        printBlueText('printBlueText funkcijos argumentas');
    }
    console.log('2. uzduotis done');
    console.groupEnd();
}
//# sourceMappingURL=functionsTask.js.map