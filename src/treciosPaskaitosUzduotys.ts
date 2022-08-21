/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:
  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.
  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?
  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.
    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.
  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/
export function treciaPaskaita() {

  function treciaPaskaita(){

    // 10 min
    console.group('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
    {
      //type textPrinterInCapital = (text:string) => string;
      const paverstiDidziosiom = (text:string) => text.toUpperCase() ;
      const zodis = 'Zodis didziosiomis raidemis';
    console.log(paverstiDidziosiom(zodis))
    }
    console.groupEnd();
    
    // 10 min
    console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
    {
      
    
    // type aprasymas = (x:number, y:number) => number;
    // const rezultatas:aprasymas = function (x, y) {x + y} ;
    // rezultatas.length
    // const x:number = 9;
    //   const y:number = 118;
    // console.log(rezultatas(x, y))
    
    // const rezultatoIlgis:number = (rezultatas.length);
    
    // console.log(rezultatoIlgis(x1,y2))
    
    
    const ilgis = (x:string, y:string) : number => x.length + y.length;
    const x:string = 'vienas';
    const y:string = 'du';
    console.log(ilgis(x,y))
    
    }
    
    console.groupEnd();
    
    }
    // 10 min
    console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
    {
    
    const isTrue = (a:string, b:string) => a.includes(b);
    const a:string = 'vienas';
    const b:string = 'i';
    console.log(isTrue(a,b))
    
    
    
    
    }
    console.groupEnd();
    
    // 10 min
    console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
    {
    
      const lyginisSkaicius = (zodis:string) : boolean => zodis.length % 2 === 0 ;
      const zodis: string = 'kamikaze';
      console.log(lyginisSkaicius(zodis))
    
    }
    console.groupEnd();
    
    // 15 min
    console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
    {
      //nepavyko, netinkama buna pasirinkau
    // const kiekBalsiu:string[] = (zodis:string, searchValue:string[]) : string => zodis.includes(searchValue): 
    // const zodis:string = 'vienas';
    // const searchValue:string = [a, e,y,u,i,o];
    // console.log(kiekBalsiu(zodis,searchValue))
    
    
    // kazkas veikia bet grazina nesamones
    const kiekBalsiu = (zodis:string, balsiuSarasas:string[]) => {
      let result:number = 0;
          balsiuSarasas.map((balse) => {
            if(zodis.includes(balse)) 
            {
            result = result +=1
    
            }
            console.log(result)
         }
        )
      };
      const a:string = 'pomidoriene';
      const b:string[] = ['a', 'e', 'y', 'u', 'i', 'o'];
      console.log(kiekBalsiu(a, b))
      console.log('kazkas veikia bet grazina nesamones, bandziau toje pacioje funkcijoje naudoti string ir string[] = TS neleido. Isseko idejos. Kaip padaryti be zodyno metodo?')
    
    //vel nepavyko
    //   (let i = 0; i < zodis.length; i += 1) {
    //     if (zodis.includes(balsiuSarasas)){
    //       result + 1
    //     }
    //     return result;
    //   }
    //   const a:string = 'pomidoriene';
    //   const b:string[] = ['a', 'e', 'y', 'u', 'i', 'o'];
    
    // console.log(kiekBalsiu(a, b));
    // console.log(result)
    
    // }
    
    //-------------------------------------------------------------------
    // nepavyko
    // const kiekBalsiu = (zodis:string, balsiuSarasas:string[]) => {
    //   let result = 0;
    //   for (let i = 0; i < zodis.length; i += 1) {
    //     if (zodis.includes(balsiuSarasas)){
    //       result + 1
    //     }
    //     return result;
    //   }
    //   const a:string = 'pomidoriene';
    //   const b:string[] = ['a', 'e', 'y', 'u', 'i', 'o'];
    
    // console.log(kiekBalsiu(a, b));
    // console.log(result)
    // }
    
    
    // const countVowels = (str: string): number => {
      //   let count = 0;
      //   for (let i = 0; i < str.length; i += 1) {
      //     if (VOWEL_REGEX.test(str[i])) {
      //       count += 1;
      //     }
      //   }
    
      //   return count;
      // };
    
      // const arg1 = 'labas';
      // const arg2 = 'visogero';
      // const arg3 = 'man patinka bananai';
    
      // console.table({
      //   [`countVowels(${arg1})`]: countVowels(arg1),
      //   [`countVowels(${arg2})`]: countVowels(arg2),
      //   [`countVowels(${arg3})`]: countVowels(arg3),
      //   empty: undefined,
      // });
    
    }
    
    console.groupEnd();
    
    // 15 min
    console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
    {
      const a:string = 'pomidoriene';
      const b:string = 'e';
      const kiekBalsiu = (zodis:string, balsiuSarasas:string) => {
            let result:number = 0;
            for (let i = 0; i < zodis.length; i += 1) {
              if (zodis[i] === balsiuSarasas) {
                result += 1;
              }}
                console.log(result)
              }
              console.log(kiekBalsiu(a, b)) 
              };
        //-----------------pagaliau veikia 
    
    console.groupEnd();
    
    // 15 min
    console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
    {
    const istrynimoIndeksas = (word:string, symbol:string) => {
      const newWord = word.replace(symbol, '');
      console.log(word)
       return newWord;
      }  
     const sh:string = "nervas";
     const d:string = 'v';
     console.log(istrynimoIndeksas(sh, d))
    }
    console.groupEnd();
    
    // 20 min
    //  7. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
    //  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
    //  Atlikus veiksmus, grąžinti pakeistą žodį
    console.groupCollapsed('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
    {
    const xxx = (a:string, b:string[]) => {
     const newArray = b.push(a)
     console.log(newArray)
     return newArray
    }
    const word = 'kompotas';
    const array = ['O', 'M', 'G'];
    xxx(word,array)
    console.log('nesuprantu kodel grazina 4')
    }
    console.groupEnd();
    
    // 60 min
    // 8. Sukurkite funkciją, kuri taiso teksto klaidas, pagal tokius reikalavimus:
    //  * Pirma sakinio raidė didžioji.
    //  * Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
    //  * Bet koks kiekis tarpų pakeičiamas vienu tarpu
    //  * Pašalinti tarpus aplink visą tekstą
    console.groupCollapsed('9. Sukurkite funkciją, kuri taiso pastraipos klaidas');
    {
    
    }
    console.groupEnd();
    {
    };
    
}
