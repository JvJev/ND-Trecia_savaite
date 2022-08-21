export function tipuAparsymu16Uzduociu () {




  console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
  {
    const array1: string[] = ['uno', 'dos', 'tres', 'quatro','five'];
    const printLastIndex = (arr:string[]) => { return arr.length -1}
    console.log(printLastIndex(array1))
    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
  {
    const array1: string[] = ['uno', 'dos', 'tres', 'quatro','five'];
    const printLastIndex = (arr:string[]) => {    
      const indexCount: number[] = [];
      for (let i = 0; i < arr.length; i+= 1) {
        indexCount.push(i);
          }
          indexCount.forEach((single) => {console.log(single)})
          console.log(indexCount)          }
          console.log(printLastIndex(array1))

    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
  {
    const array1: string[] = ['uno', 'dos', 'tres', 'quatro','five'];
    const printLastIndex = (arr:string[]) => { 
      for (let i = 0; i < arr.length; i+= 1) {
        console.log(arr[i])
          }
          }
          console.log(printLastIndex(array1))

    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
  // [0] => reikšmė
  // [1] => reikšmė
  // [2] => reikšmė
  {

    const array1: string[] = ['uno', 'dos', 'tres', 'quatro','five'];
    const printLastIndex = (arr:string[]) => { 
      let indexCount = 0;

      for (let i = 0; i < arr.length; i++) {
        indexCount = i;
        console.log(indexCount + ' => ' +  arr[i])
          }
          }
          console.log(printLastIndex(array1))





    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
  {

    const array1: string[] = ['uno', 'dos', 'tres', 'quatro','five'];
    const array1Rev = array1.reverse();
    const printLastIndex = (arr:string[]) => { 
      for (let i = 0; i < arr.length; i+= 1) {
        console.log(arr[i])
          }
          }
          console.log(printLastIndex(array1Rev))

    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
  {

    const array1: string[] = ['uno', 'dos', 'tres', 'quatro','five'];
    const res = array1.map((_, i) => i).join(' ');
    console.log(res);


          console.log('nesuprantu kaip veikia _, i ; paciam nepavyko padaryti')

    

    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
  {
    const array1: string[] = ['uno', 'dos', 'tres', 'quatro','five'];
    const res = array1.map((i) => i).join(' ');
    console.log(res);

    console.log('nutrynus _, veikia, nesuprantu kodel')
    console.log(' po valandos issiaiskinau')


    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
  //  [0]=>17, [1]=>8, [2]=>88 ..
  {

    const array1: string[] = ['uno', 'dos', 'tres', 'quatro','five'];
    const res = array1.map((currentValue, i) => i + '=>' + `${currentValue}`).join(', ');
    console.log(res);


    console.log('tik veliau supratau, kad reikia naudoti .join, kad rasytu norimu formatu o ne masyvu, padariau su Žilvino sprendimo pagalba')

    // const array1: string[] = ['uno', 'dos', 'tres', 'quatro','five'];
    // const res = array1.map((currentValue, i) => i + '=>' + `${currentValue}`);
    // console.log(res);
    
    //   function solution(array1: any[]): void {
    //     const res = array1.map((x, i) => `[${i}]=>${x}`).join(', ');
    //     console.log(res);
    //     // console.log(...arr.map((x, i) => `[${i}]=>${x} `));
    //   }
    
    //   console.log(array1);
    //   solution(array1);
    
      
    

    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
  {
    const jevNumberArray: number[] = [6, 48, -9, 666, 12, 4, -88, 17];
    function doublednumbers (arr: number[]) {
    return arr.map(singleNumber => singleNumber * 2);
    }
    console.log(jevNumberArray)
    console.log(doublednumbers(jevNumberArray))

console.log('truko return')
// //nepavyksta
//     const jevNumberArray: number[] = [6, 48, -9, 666, 12, 4, -88, 17];
//     function doublednumbers (arr: number[]): number[] {
//     arr.map((singleNumber) => {singleNumber * 2});
//     }
//     console.log(doublednumbers)

//     console.log(doublednumbers(jevNumberArray))



    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
  {

    const jevNumberArray: number[] = [6, 48, -9, 666, 12, 4, -88, 17];
    function doublednumbers (arr: number[]) {
    return arr.map(singleNumber => singleNumber * singleNumber);
    }
    console.log(jevNumberArray)
    console.log(doublednumbers(jevNumberArray))


    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
  {

    
    const jevNumberArray: number[] = [6, 48, -9, 666, 12, 4, -88, 17];
    function doublednumbers (arr: number[]) {
    return arr.map((singleNumber, index) => singleNumber * index);
    }
    console.log(jevNumberArray)
    console.log(doublednumbers(jevNumberArray))




    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
  {
    const jevNumberArray: number[] = [6, 48, -9, 666, 12, 4, -88, 17];
    function doublednumbers (arr: number[]) {
      let positiveArr:number[] = [];
        arr.map((singleNumber) => {
      if(singleNumber > 0){
        positiveArr.push(singleNumber)
       }
      else{return}
    })
    console.log(positiveArr)
  }
    console.log(jevNumberArray)
    console.log(doublednumbers(jevNumberArray))


    // const jevNumberArray: number[] = [6, 48, -9, 666, 12, 4, -88, 17];
    // function doublednumbers (arr: number[]) {
    // return arr.map((singleNumber) =>  
    // if (singleNumber > 0) {
    //   return singleNumber
    // });
    // }
    // console.log(jevNumberArray)
    // console.log(doublednumbers(jevNumberArray))

    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
  {

    const jevNumberArray: number[] = [6, 48, -9, 666, 12, 4, -88, 17];
    const result = jevNumberArray.filter(negative => negative < 0);

    
    console.log(result)
    console.log('galejau ir 12 uzdavinyje naudoti filter, bet tik dabar susipratau')
  }
    
    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  
  console.groupEnd();
  
  console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
  {


    const jevNumberArray: number[] = [6, 48, -9, 666, 12, 4, -88, 17];
    function doublednumbers (arr: number[]) {
      let positiveArr:number[] = [];
        arr.map((singleNumber) => {
      if(singleNumber > 0){
        positiveArr.push(singleNumber)
       }
      else{return}
    })
    console.log(positiveArr)
  }
    console.log(jevNumberArray)
    console.log(doublednumbers(jevNumberArray))




    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
  {

    const jevNumberArray: number[] = [6, 48, -9, 666, 12, 4, -88, 17];
    function doublednumbers (arr: number[]) {
      let positiveArr:number[] = [];
        arr.map((singleNumber) => {
      if(singleNumber % 2 == 0){
        return
       }
      else{positiveArr.push(singleNumber)}
    })
    console.log(positiveArr)
  }
    console.log(jevNumberArray)
    console.log(doublednumbers(jevNumberArray))

    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();
  
  console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
  {



    const jevNumberArray: number[] = [6, 48, -9, 666, 12, 4, -88, 17];
    function doublednumbers (arr: number[]) {
      let positiveArr:number[] = [];
        arr.map((singleNumber) => {
      if(singleNumber > 0){
        positiveArr.push(singleNumber)
       }
      else{
        let convert= singleNumber * -1
        positiveArr.push(convert)}
    })
    console.log(positiveArr)
  }
    console.log(jevNumberArray)
    console.log(doublednumbers(jevNumberArray))

    
    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  }
  console.groupEnd();



}


