
/*
  Funkcijos aprašomos tokiu būdu:
    * apibūdinami(aprašomi tipais) visi funkcijos parametrai
    * nurodomas funkcijos iškvietimo grąžinimo tipas
*/

// Funkcija aprašoma deklaruojant
const addNumbers = (num1: number, num2: number): number => {
    return num1 + num2;
  };
  
  // Funkcijos tipas aprašytas prieš funkcijos deklaravimą
  /*
    Aprašius funkciją tipu nebereikia įvardinti tipų deklaruojant funkciją.
    funkcijų tipai yra deklaruojami atskirai, kuomet:
      * norima funkcijos tipą pritaikyti ne vienai funkcijai
      * funkcijos parametrų ar grąžinimo tipas yra sudėtingi
  */
  type binaryStringBuilder = (str1: string, str2: string) => string;
  
  const joinStrings: binaryStringBuilder = (str1, str2) => {
    return str1 + ' ' + str2;
  };
  
  const createInitials: binaryStringBuilder = function (str1, str2) {
    return str1[0].toLocaleUpperCase() + str2[0].toLocaleUpperCase();
  }
  
  const sum: number = addNumbers(5, 7);
  const joinedString: string = joinStrings('Penediktas', 'Tušinis');
  const initials: string = createInitials('Penediktas', 'Tušinis');
  
  console.log({
    sum,
    joinedString,
    initials,
  });
  
  /*
    Kuomet funkcijos nieko negrąžina, turime nurodyti tipą
      * void - funkcijos grąžinimo tipas nebus reikalaujamas
  */
  
  function printRedText(text: string): void {
    console.log(`%c ${text}`, 'color: #ee0000');
  }
  
  printRedText('printRed funkcijos argumentas');
  


export function pirmaUzduotis(){


    console.group('1. Aprašykite funkcijoms tipus jas deklaruojant');
    {
      const multiply = (a:number, b:number) => {
        return a * b;
      };
      console.log(multiply(12,10) + ' Patikrinimas ar veikia.(Jev)');
  
      const power  = function (base:number, power:number) {
        return base ** power;
      };
      console.log(power(5,3) + ' Tikrinu ar veikia kita funcija (Jev)');
    
      const squareRoot = (number:number) => number ** (1 / 2);
      console.log(squareRoot(25) + ' Tikrinu ar veikia squareRoot funkcija (Jev)');
  
    
      const root = function (base:number, nthRoot:number) {
        return base ** (1 / nthRoot);
      }
      console.log(root(25,5) + ' Tikrinu ar veikia Root kita funkcija (Jev)');
  
      const printBlueText = (text:string) => console.log(`%c${text}`, 'color: #0000ee');
      printBlueText('super original text HHHHHHHEEEEEERRRRRRREEEEEEE (Jev)')
    
      const num1: number = 454;
      const num2: number = 88;
      
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


 export function antraUzduotis(){
    
  console.group('2. Aprašykite funkcijų tipus prieš deklaruojant funkcijas');
  {
    type sumOfTwoNumbers = (a:number, b:number) => number;
     const multiply:sumOfTwoNumbers = (a, b) => {
      return a * b;
    };
  type squareOfBase = (base:number, power:number) => number;
    const power:squareOfBase = function (base:number, power:number) {
      return base ** power;
    };

    type squareRootOfBase = (number:number) => number;

    const squareRoot: squareRootOfBase = (number) => number ** (1 / 2);
    
    type rootFunction = (number:number, nthRoot:number) => number;
    const root:rootFunction = function (base, nthRoot) {
      return base ** (1 / nthRoot);
    }
  interface colorTextInBlue {(text:string) : void}
    const printBlueText: colorTextInBlue = (text) => console.log(`%c${text}`, 'color: #0000ee');
  
    const num1: number = 3;
    const num2: number = 4;
  
    console.log({
      [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
      [`power(${num1}, ${num2})`]: power(num1, num2),
      [`squareRoot(${num1})`]: squareRoot(num1),
      [`root(${num1}, ${num2})`]: root(num1, num2),
    });
    printBlueText('printBlueText funkcijos argumentas');
  }
  console.log('2. uzduotis done' )
  console.groupEnd();
}
