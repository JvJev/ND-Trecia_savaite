


export function lesson5Tasks() {





    type Person = {
        readonly name: string,
        readonly surname: string,
        readonly sex: 'male' | 'female',
        age: number,
        income?: number,
        married?: boolean,
        hasCar?: boolean,
      }
       
      
      const people: Person[] = [
        {
          name: 'Jonas',
          surname: 'Jonaitis',
          sex: 'male',
          age: 26,
          income: 1200,
          married: false,
          hasCar: false,
        },
        {
          name: 'Severija',
          surname: 'Piktutytė',
          sex: 'female',
          age: 26,
          income: 1300,
          married: false,
          hasCar: true,
        },
        {
          name: 'Valdas',
          surname: 'Vilktorinas',
          sex: 'male',
          age: 16,
          income: 0,
          married: false,
          hasCar: false,
        },
        {
          name: 'Virginijus',
          surname: 'Uostauskas',
          sex: 'male',
          age: 32,
          income: 2400,
          married: true,
          hasCar: true,
        },
        {
          name: 'Samanta',
          surname: 'Uostauskienė',
          sex: 'female',
          age: 28,
          income: 1200,
          married: true,
          hasCar: true,
        },
        {
          name: 'Janina',
          surname: 'Stalautinskienė',
          sex: 'female',
          age: 72,
          income: 364,
          married: false,
          hasCar: false,
        },
      ];
      
      /*
        Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
        Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
          * Aprašome tipus
          * Aprašome funkcijas
          * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
          * Atliekame užduoties sprendimą
          * Spausdiname sprendimo rezultatus
        
        Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)
          
      */
      console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
      {
        // Tipai:
        type Identity = {
          name: Person["name"],
          surname: Person["surname"],
        }
      
        // Funkcijos:
        const personToIdentity = ({ name, surname }: Person): Identity => {
          return { name, surname };
        }
      
        // Sprendimas:
        const identities: Identity[] = people.map(personToIdentity);
      
        // Spausdinimas:
        console.table(people);
        console.table(identities);
      }
      console.groupEnd();
      
      console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
      {
        // type TaskProps = {
        //   married: NonNullable<Person["married"]>,
        //   hasCar: NonNullable<Person["hasCar"]>,
        // }
      
        type TaskProps = Pick<Required<Person>, "hasCar" | "married">;
      
        const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
          married: Boolean(married),
          hasCar: Boolean(hasCar),
        });
      
        const result: TaskProps[] = people.map(selectTaskProps);
      
        console.table(people);
        console.table(result);
      }
      console.groupEnd();
      
      console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
      {

        type NSM = Omit<Person, 'sex'| 'age' | 'income' | 'hasCar'>;

       const namesAndMarried = ({name, surname, married}: Person ): NSM => ({
        married: Boolean(married), 
        name: String(name), 
        surname: String(surname)
    });

       const result: void = console.log(namesAndMarried)
       console.log(result)
       
       //= ({name, surname, married}: Person ): NSM => ({married: Boolean, })




        // ...sprendimas ir spausdinimas



      }
      console.groupEnd();
      
      console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
      {

        type GenderAndIncome = {
              sex: "male" | "female",
              income: Person["income"],
             }

       // type GenderAndIncome = Pick< "sex", | "income" >;

        const selectTaskProps = ({ sex, income }: Person): GenderAndIncome => ({
            income: Number(income),
            sex: sex,
          });

          const result: GenderAndIncome[] = people.map(selectTaskProps);
      
        console.table(people);
        console.table(result);
        

        // ...sprendimas ir spausdinimas
      }
      console.groupEnd();
      
      console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
      {

        type NameSurnameGender = {
            name: Person['name'],
            surname: Person["surname"],
            sex: "male" | "female",
           }

      const selectTaskProps = ({ name, surname,sex }: Person): NameSurnameGender => ({
          name: String(name),
          surname: String(surname),
          sex: sex,
        });

        const result: NameSurnameGender[] = people.map(selectTaskProps);
    
      console.table(people);
      console.table(result);
      



        // ...sprendimas ir spausdinimas
      }
      console.groupEnd();
      
      console.groupCollapsed('6. Atspausdinkite visus vyrus');
      {



        // type Male = Omit<Person, 'sex'> & {
        //     sex: 'male',
        //   }
        
        //   const isMale = ({ sex }: Person): boolean => sex === 'male';
        
        //   const males: Male[] = people.filter(isMale) as Male[];
        
        //   console.table(people);
        //   console.table(males);





        
        type OnlyMenType = Omit<Person, 'sex'> & {
            sex: "male" ,
        };
        //const filterMen = (sex: Person) => sex.sex.includes('male');
       
        const getMen = ({sex}: Person): boolean => sex === 'male';

        const printMen: OnlyMenType[] = people.filter(getMen) as OnlyMenType[];
        //const men: OnlyMen['sex'] = menResult.filter('male')

        console.table(people);
      console.table(printMen);
      //console.table(filterMen);









//       type OnlyMen = {
//         name: Person['name'],
//         sex: "male" | "female",
//     };
   
//     const getMen = ({name, sex}: Person): OnlyMen => ({
//         name:String(name),
//         sex: sex, 
//     });

//     const menResult: OnlyMen[] = people.filter(getMen);

//     console.table(people);
//   console.table(menResult);


      
// const ifMan: OnlyMen = 
        // // if( OnlyMen["sex"] === "male") {

        // }

        // const menResult = 
        //     if( sex === "male") {
        //         people.map(getMen); 
      
            
        // }
       // type Man = {
        //     name: OnlyMen['name'],
        //     sex: OnlyMen,
        // }

        // ...sprendimas ir spausdinimas
      }
      console.groupEnd();
      
      console.groupCollapsed('7. Atspausdinkite visas moteris');
      {

         
        type OnlyMen = Omit<Person, 'sex'> & {
            sex: "female" ,
        };
        //const filterMen = (sex: Person) => sex.sex.includes('male');
       
        const getMen = ({sex}: Person): boolean => sex === 'female';

        const menResult: OnlyMen[] = people.filter(getMen) as OnlyMen[];
        //const men: OnlyMen['sex'] = menResult.filter('male')

        console.table(people);
      console.table(menResult);
        // ...sprendimas ir spausdinimas
      }
      console.groupEnd();
      
      console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
      {

        // type Identity = {
        //     name: Person["name"],
        //     surname: Person["surname"],
        //   }

        type HasACar = {
            name: Person["name"],
            surname: Person["surname"],
            hasCar: boolean;
        }

        //const carChecker = ({hasCar}: Person): boolean => hasCar === true;
        const getCar = ({hasCar}: Person): boolean => hasCar === true;
        const car: HasACar[] = people.filter(getCar) as HasACar[];

    //   const selectTaskProps = ({ hasCar, name, surname }: Person): HasACar => ({
    //     hasCar: Boolean(hasCar),
    //     name: String(name),
    //     surname: String(surname)
    //     });

        

    
      console.table(people);
      console.table(car);
      
      

        // ...sprendimas ir spausdinimas
      }
      console.groupEnd();
      
      console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
      {
        type IsMarried = {
            name: Person["name"],
            surname: Person["surname"],
            married: boolean;
        }

        const getStatus = ({married}: Person): boolean => married === true;
        const isMarried: IsMarried[] = people.filter(getStatus) as IsMarried[];

      console.table(people);
      console.table(isMarried);      

      }
      console.groupEnd();

      console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
      {

        // type DriversCount = {
        //     name: Person['name'],
        //     surname: Person['surname'],
        //     hasCar: Person['hasCar'],
        //     sex: Person['sex'],
        // }
        // const conter =({sex, hasCar}: Person): void => {for(let i = 0; i < people.length; i++) {
        //     let drivingMan = 0;
        //     let drivingWoman = 0;


        //     if(sex === 'male' && hasCar === true){
        //         drivingMan +i;
        //     }
        //     if(sex === 'female' && hasCar === true){
        //         drivingWoman +i;
        //     }

        // }}
        console.table(people);
        console.table('gavosi nesamone'); 

        // ...sprendimas ir spausdinimas
      }
      console.groupEnd();
      
      console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
      {

        
    type PersonRearranged = Omit<Person, 'income'> & {
        salary?: Person['income'],
      };

      const incomeX = ({income, ...person}: Person): PersonRearranged => {
        const newIncome: PersonRearranged = {...person};
      
      if(income) {newIncome.salary = income};
      return newIncome;
      }
      const newPerson: PersonRearranged[] = people.map(incomeX)

      console.table(people);
      console.table(newPerson);


        // ...sprendimas ir spausdinimas
      }
      console.groupEnd();
      
      console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
      {

        type NoGenderNameSurname = Omit<Person, 'name' | 'sex' | 'surname'>;

        // const naManX = (age:NoGenderNameSurname):Person => {return age};
        // const noMan:NoGenderNameSurname[] = people.map(naManX)

        const noMan = ({ name, surname, sex, ...anonPerson }: Person): NoGenderNameSurname => anonPerson;
        const noManArr: NoGenderNameSurname[] = people.map(noMan)

        console.table(people);
        console.table(noManArr);


        // ...sprendimas ir spausdinimas
      }
      console.groupEnd();
      
      console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
      {


    







        // ...sprendimas ir spausdinimas
      }
      console.groupEnd();

}
lesson5Tasks()


