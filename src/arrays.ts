/*
  Aprašant masyvų tipus reikia nurodyti kokie elementai sudarys masyvai, galimos 2 sintaksės:
    * tipas[] -> number[], string[], Person[] ir t.t.
    * Array<tipas> -> Array<number>, Array<string>, Array<Person> ir t.t.
*/

/* eslint-disable */

export function exportAllArrays(){

  type Person = {
    id: string,
    name: string,
    surname: string,
    age: number,
    height?: number, // Neprivaloma savybė
    weight?: number, // Neprivaloma savybė
  };
  
  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  const names: Array<string> = ['Jagnita', 'Kimparas', 'Pitonkas', 'Fasalija'];
  const people: Person[] = [{
    id: '39304075689',
    name: 'Verundijus',
    surname: 'Bauda',
    age: 51,
  }, {
    id: '39304075689',
    name: 'Ryja',
    surname: 'Žaneirytė',
    age: 41,
    height: 1.65,
    weight: 55,
  }, {
    id: '39304075689',
    name: 'Brudas',
    surname: 'Veilokas',
    age: 11,
    height: 1.45,
    weight: 45,
  }];
  
  // Kaip ir kiti tipai, masyvai gali būti naudojami funkcijų parametrams arba funkcijų grąžinimo tipams aprašyti
  type CreatePeopleArrayFunction = (p1: Person, p2: Person) => Person[];
  
  const printStrings = (strings: string[]): void => {
    const printString = (str: string): void => console.log(str);
  
    strings.forEach(printString);
  };
  
  const sumNumbers = (nums: Array<number>): number => {
    const numberSumReducer = (sum: number, num: number): number => sum + num;
  
    return nums.reduce(numberSumReducer, 0);
  };
  
  const createPeopleArray: CreatePeopleArrayFunction = (p1, p2) => [p1, p2];
  
  console.group('Panaudojimo pavyzdžiai:');
  {
    console.group('printStrings');
    {
      printStrings(names);
    }
    console.groupEnd();
  
    console.group('sumNumbers');
    {
      const result: number = sumNumbers(numbers);
      console.log({
        numbers,
        result,
      });
    }
    console.groupEnd();
  
    console.group('createPeopleArray');
    {
      const couple: Array<Person> = createPeopleArray(people[0], people[1]);
      console.log(couple);
    }
    console.groupEnd();
  }
  console.groupEnd();
  
  console.group('Užduotys');
  {
    console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
    {
      const numbers: number[] = [1, -8, -6, 7, 5, 1];
  
      function addPositiveNumbers(arr:number[]) {
        const positiveNumberReducer = (sum:number, num:number) => (num > 0 ? sum + num : sum);
  
        return arr.reduce(positiveNumberReducer, 0);
      }
  
      console.log({
        numbers,
        sumOfPositiveNumbers: addPositiveNumbers(numbers),
      });
    }
    console.groupEnd();
  
    console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');

    

//nepavyko
// const brazauskasAMB:string[] = ['algirdas', 'mykolas', 'brazauskas'];
// const addFirstLetters :string[] = arr[0].charAt(0) + arr[1].charAt(0) + arr[2].charAt(0) : string
// function addFirstLetters :addFirstLetters (arr:string[]){return arr[0].charAt(0) + arr[1].charAt(0) + arr[2].charAt(0)}
// console.log(addFirstLetters(brazauskasAMB));
// addFirstLetters(brazauskasAMB)
// console.log('atsispausdinu AMB ')

//nesamone gavosi
// let taisykles:makeShort = (nariai[]) => string ;
// let short:makeShort = nariai.map(narys) => (narys[0])

const brazauskasAMB:string[] = ['algirdas', 'mykolas', 'brazauskas'];

const addFirstLetters = (givenArray:string[]) :string => givenArray.reduce((pradineVerte, pridedamasZodis) => pradineVerte + pridedamasZodis[0], '');
console.log(addFirstLetters(brazauskasAMB))
console.log('algirdas mykolkas brazauskas' + '  Plius uzduotis: 2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių')





// function addFirstLetters :addFirstLetters (arr:string[]){return arr[0].charAt(0) + arr[1].charAt(0) + arr[2].charAt(0)}
// console.log(addFirstLetters(brazauskasAMB));
// addFirstLetters(brazauskasAMB)
// console.log('atsispausdinu AMB ')




// const createAbbrevation = (words: string[]): string => words.reduce((prevAbbrv, word) => prevAbbrv + word[0], '');

//     const stringMatrix: string[][] = [
//       ['Lietuviškas', 'Nepriklausomas', 'Kanalas'], // 0
//       ['Lietuvos', 'Respublikos', 'Televizija'], // 1
//       ['Loughing', 'Out', 'Loud'], // 2
//     ];

//     stringMatrix.forEach((words) => {
//       console.log(`[ ${words.join(', ')}] ->`, createAbbrevation(words));
//     });
//   }

//     {
//       /*
//         Pvz.:
//          * ['Lietuviškas', 'Nepriklausomas', 'Kanalas'] -> LNK
//          * ['Lietuvos', 'Respublikos', 'Televizija'] -> LRT
//          * ['Loughing', 'Out', 'Loud'] -> LOL
//       */
//     }
//     console.groupEnd();
  
    console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
    {

  

const dauginamSkaicius = (masyvas:number[]) : number => masyvas.reduce((pagrindinis, duomuo) => pagrindinis * duomuo);
const array:number[] = [5, 3, 10] ;
console.log(dauginamSkaicius(array))
// type numsMultF = (mainNumber:number, secondNumber:number) => number;
// type funcRules = (array:number[]) => number;

// const theFunc:number[] = array.reduce(main)


// // const result:numsMultF = numsMultF







// const multiplyNumbers = (nums: number[]): number => nums.reduce(
//   (prevProduct, num) => prevProduct * num,
// );

// const numberMatrix: number[][] = [
//   [1, 7, 8],
//   [98, 74, 5, 0],
//   [17, 10, 5],
// ];

// numberMatrix.forEach((nums) => {
//   console.log(`[ ${nums.join(', ')}] ->`, multiplyNumbers(nums));
// });
// }






// // Sprendimas
// type NumbersMultiplyReducer = (number: number, secondNumber: number) => number;
// type MultiplyNumbers = (numbers: Array<number>) => number;

// const numbersProductReducer: NumbersMultiplyReducer = (product, factor) => product * factor;

// const multiplyNumbers: MultiplyNumbers = (numbers) => numbers.reduce<number>(numbersProductReducer, 1);

// // Spausdinimas - ŠI SPAUSDINIMO DALIS TIK DĖL ĮDOMUMO, TIEMS KAM BUVO PER LENGVA(kolkas...)
// type AnswerObject = {
//   [key: string]: number,
// };

// type FormatAnswerObject = (samples: Array<Array<number>>) => AnswerObject;

// type AnswerObjectReducer = (answerObject: AnswerObject, numbers: Array<number>) => AnswerObject;

// const samples: Array<Array<number>> = [
//   [1, 7, 8],
//   [98, 74, 5, 0],
//   [17, 10, 5],
// ];

// const answerObjectReducer: AnswerObjectReducer = (answerObject, numbers) => {
//   const functionName: string = multiplyNumbers.name;
//   const functionArgsString: string = `[${numbers.join(', ')}]`;
//   const key: string = `${functionName}(${functionArgsString})`;
//   const value: number = multiplyNumbers(numbers);
//   answerObject[key] = value;
//   return answerObject;
// };

// const formatAnswerObject: FormatAnswerObject = (samples) => {
//   const initialValue: AnswerObject = {};
//   const result: AnswerObject = samples.reduce<AnswerObject>(answerObjectReducer, initialValue);
//   return result;
// };

// const answerObject: AnswerObject = formatAnswerObject(samples);

// console.log(answerObject);





//       /*
//         Pvz.:
//          * [1, 7, 8] -> 56
//          * [98, 74, 5, 0] -> 0
//          * [17, 10, 5] -> 850
//       */
//     }
//     console.groupEnd();
  
//   console.groupEnd();
//   }
// exportAllArrays()
  
//   ;

console.groupEnd();

    }}}
