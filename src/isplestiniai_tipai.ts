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
    * Užduočių rezultatų pateikimas tiek pat svarbus, kiek sprendimas.
*/



export function isplestiniaiTipai() {



// 30min
console.group('1. Sąjungos operatorius - UNIONS');
{
  // 10min
  console.groupCollapsed('1.1 Sukurkite funkciją "print" kuri priimą string, number arba boolean ir jį atspausdiną');
  {

    type printFunc = string|boolean|number
    let a:printFunc = true;
    console.log(a)
    let b:printFunc = 666;
    console.log(b)
    let c:printFunc = "nagas"
    console.log(c)

  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('1.2 Sukurkite funkciją "getLength" kuri priimą string arba masyvą ir grąžina elementų skaičių');
  {
    //type getLength = string|string[];
    const getLength = (a:string|string[]) => a.length ;

    const a:string|string[] = ['fdsv', 'ikdyhg', 'efr'];
    console.log(getLength(a))

  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('1.3 Sukurkite funkciją "isEmpty" kuri priimą string arba masyvą ir grąžiną true, jei parametras tuščias, priešingu atveju - false');
  {

    const isEmpty = (a:string|string[]) => {
        if (a.length === 0) {
            return true
        }
        else {return false}
    } 

    const a:string|string[] = [];
    console.log(isEmpty(a))


  }
  console.groupEnd();
}
console.groupEnd();

// 30min
console.group('2. Tipų rinkiniai - TUPLES');
{
  // 15min
  console.groupCollapsed('2.1. Sukurkite funkciją "getMinMax" kuri priima skaičių masyvą ir grąžina dviejų vietų tipų rinkinį. Pirmas grąžinamo rinkinio elementas - mažiausias skaičių masyvas, antras - didžiausias');
  {

    const getMinMax = (numbers: number[]): [number, number] => {
        const sortedNumbers = [...numbers].sort((a, b) => a - b); 
        //kodel reikia rasyti [...numbers] ir netinka ...numbers (meta klaida)
        console.log(...numbers)
        const [min] = sortedNumbers;
        //console.log(min) Is kur atsiranda min? nes mes issisort'inom skaicius, bet kaip paimame maziausia?

        const max = sortedNumbers[sortedNumbers.length - 1];
        //console.log(max) kodel gauname didziausia skaiciu nors imame masyvo ilgi -1?
        return [min, max];
      };
  
      console.table({
        'getMinMax[1, 7, -9, 5, 123]': getMinMax([1, 7, -9, 5, 123]),
        'getMinMax[7, 7, 4, 7, 8, 2, 7, 7]': getMinMax([7, 7, 4, 7, 8, 2, 7, 7]),
        'getMinMax[1, 2, 3, 4, 5, 6, 9, -7, -11, 2]': getMinMax([1, 2, 3, 4, 5, 6, 9, -7, -11, 2]),
      });

console.log('man pavykes sprendimas')

const elMasivo = [12, 666, 78, -4,-65, 2, 18]
console.log(elMasivo)
const getMinMaxValues = (nums: number[]) => {
    let minimal:number[] = nums.sort((a, b) => a - b )
    console.log(minimal[0])
    let maximal:number[] = nums.sort((a, b) => b - a )
    console.log(maximal[0])
};
console.log(getMinMaxValues(elMasivo))


  }
  console.groupEnd();

  // 15min
  console.groupCollapsed('2.2 Sukurkite funkciją "calcDistance", kuri pagal 2 taškus (Coordinate2D), suskaičiuotų atstumą tarp taškų');
  {

    type Coordinate2D = [number, number];

    const calcDistance = (p1: Coordinate2D, p2: Coordinate2D) => {
      const [x1, y1] = p1;
      const [x2, y2] = p2;
      //susivedam koordinates
      const deltaX = Math.abs(x1 - x2);
      const deltaY = Math.abs(y1 - y2);
      // kas yra delta?
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      //cia atstumo skaiciavimo formule, deja siam uzdaviniui man reikia mokytis ne tik programuoti bet ir matematikos

      return distance;
    };
    console.log('Uzduotis neatlikta, kopijuota susirasyti klausimus ir aiskintis sprendima: Sikart suprantu sprendima, bet nesuprantu matematinio atstumo skaiciavimo principo tarp dvieju tasku.')
    console.table({
      'calcDistance([0, 0], [3, 4])': calcDistance([0, 0], [3, 4]),
      'calcDistance([1, 1], [7, 9])': calcDistance([1, 1], [7, 9]),
      'calcDistance([-2, 3], [13, 11])': calcDistance([-2, 3], [13, 11]),
    });

  }
  console.groupEnd();
}
console.groupEnd();

// 35min
console.group('3. Prielaidos - ASSERTIONS');
{
  // 15min
  console.groupCollapsed('3.1 Parašykite kodą, kuris parsiųstų skelbimus pasiekiamus šiuo adresu: "https://jsonplaceholder.typicode.com/posts?userId=1". Parsiųstus duomenis įrašykite į kintamajį "posts", darant parsiųstų duomenų tipo prielaidą. Prieš parsiunčiant duomenis apsirašykite "Post" tipą.');
  {
    type Post = { 
        userId: number, 
        id: number, 
        title: string,
        body: string,
    };

    let posts: Post[];

    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response => response.json())
    .then(((postData) => {
        posts = postData as Post[];
        console.log('3.1 Užduoties rezultatas - Post[]');
        console.log(' vel tas pats, suprantu kaip veikia, bet paini sintakse, todel reikia daryti pagal destytojo pavyzdi')

        console.table(posts);
        console.log(' pats nesugalvojau sukurti: let posts: Post[]; ')

      }));



  }
  console.groupEnd();

  // 20min
  console.groupCollapsed('3.2 Parašykite kodą, kuris parsiųstų vartotojus pasiekiamus šiuo adresu: "https://jsonplaceholder.typicode.com/users". Parsiųstus duomenis įrašykite į kintamajį "users", darant parsiųstų duomenų tipo prielaidą. Prieš siunčiant duomenis apsirašykite "User" tipą.');
  {

    type User = { 
        id: number, 
        name: string,
        username: string,
        email: string,
        address: Address,
        phone: string,
        website: string
        company: Company,   
    };
    type Address = {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo:Geo,
    };           
    type Geo = {
        lat: string,
        lng: string,
    };
    type Company = {
        name: string,
      catchPhrase: string,
      bs: string,
    }

    let users: User[];
    let address: Address[];
    let company: Company[];

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(((user) => {
        users = user as User[];
        address = user as Address[];
        company = user as Company[];
        console.log('3.2 Užduoties rezultatas, USERS');
        console.log('Dariau pats, bet neveikia, paziurejau, kad reikia atskitai sukurti assertions ADDRESS ir GEO, paziurejes pavyzdi sukuriau');
        console.table(users);
        // console.table(address);
        // console.table(company);
        // uzkomentuota nes consoleje rodo ta pati
      }));
  }
  console.groupEnd();
}
console.groupEnd();

// 25min
console.group('4. Konkretūs tipai - LITERAL TYPES');
{
  // 25min
  console.groupCollapsed('4.1 Sukurkite objektą saugoti produktams, Product, pagal kategorijas: "food", "clothes" ir "other". "products" objektas turi 3 savybės pagal kategorijų pavadinimus, kurių reikšmės - Product[]. Sukūrus ir tipais aprašius "products" struktūrą, sukurkite funkciją "addProduct", kuri pridės produktą pagal kategoriją į "products" objektą. Ši funkcija turi priimti 2 parametrus: 1 - produktas, 2 - kategorijos pavadinimas. Kategorijos pavadinimas turi būti konkretus string tipas, pagal galimas produktų objekto kategorijas. Produkto tipą apsirašykite laisvai.');
  {
    type Category = 'Food'| 'Clothes'|'Other';
    
    type Product = {
        color: string,
        cost: number,
        warranty: string,
    };
    // kodel cia type, ne const/let?
    type Products = {
        Food: Product[],
      Clothes: Product[],
      Other: Product[],
    };
    // kodel cia savybese reikia rasyti Product, 2) kodel Product su [] 
    const products: Products = {
        Food: [],
        Clothes: [],
        Other: [],
      };
  
      const addProduct = (product: Product, category: Category) => {
        products[category].push(product);
      };
      console.log('VISAS UZDAVINYS DARYTAS PAGAL ZILVINO PVZ, PAINUS VEIKIMO PRINCIPAS TAD SUNKU SUFORMULUOTI KONKRETU KLAUSIMA')
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

// 25min
console.group('5. Išvardinimai - ENUMS');
{
  // 25min
  console.groupCollapsed('5.1 Sukurkite artmetinių veiksmų konstantų išvardinimą: Operation -> Add, Subtract, Multiply, Divide. Parašykite funkciją "calc" kuri priima 2 skaičius ir operaciją "Operation". Pagal perduotą operaciją atlikite veiksmus ir grąžinkite rezultatą');
  {
    enum aritmetiniaiVeiksmai {
        Add,
        Subbtract,
        Multiply,
        Divide,
      }
  
      const calculationSelection = (a: number, b: number, veiksmas: aritmetiniaiVeiksmai) => {
        switch (veiksmas) {
          case aritmetiniaiVeiksmai.Add: return a + b;
          case aritmetiniaiVeiksmai.Subbtract: return a - b;
          case aritmetiniaiVeiksmai.Multiply: return a * b;
          case aritmetiniaiVeiksmai.Divide: return a / b;
          default: throw new Error('Negalima atlikti tokio veiksmo');
        }
      };
  console.log('ENUMS veikimas aiskus, perdariau destytojo koda, nes nezinojau nuo ko pradeti, vel ta pati beda - sintakses nezinojimas. bet matau potenciala naudoti ateityje')
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



