

/* eslint-disable no-lone-blocks */

export function lesson8() {




enum HeightUnits {
    CENTIMETRES = 'cm',
    METRES = 'm',
    INCHES = 'in',
}






type PersonData = {
    name: string,
    surname:string,
    age: number,
    height: number,
    heightUnits?: HeightUnits,

}



class Person {
    static heightUnits: HeightUnits = HeightUnits.CENTIMETRES;
    private _name: string;
    private _surname: string;
    private _age?: number;
    private height?: number;

    

    constructor({name, surname, age, height, heightUnits}: PersonData){
        this._name = name;
        this._surname = surname;
        this.ageSetter(age);
        this.setHeight(height, heightUnits);
        }

       
        
//------------------------ setters
    public ageSetter(theAge: number) {
        if(theAge <= 0 || theAge>= 150) {
            console.error('This age is invalid');
        }
        else
        this._age = theAge;
    }

    public nameSetter(theName: string) {
        this._name = theName;
    }

    public surnameSetter(theSurname: string) {
        this._surname = theSurname;
    }

    

    public setHeight(height: number, units?: HeightUnits): void {

        switch (units) {
          case HeightUnits.CENTIMETRES: this.height = height; break;
          case HeightUnits.METRES: this.height = height * 100; break;
          case HeightUnits.INCHES: this.height = height * 2.54; break;
          default: this.height = height;
        }
      }

      
      

      

    //--------------------------------getters

    public getHeight():number {
        if (this.height === undefined) return 0;

        let heightValue;
        switch (Person.heightUnits){
            case HeightUnits.CENTIMETRES: heightValue = this.height;
                break;
            case HeightUnits.METRES: heightValue = this.height / 100;
                break;
            case HeightUnits.INCHES: heightValue = this.height / 2.54;
                break;
            default: heightValue = this.height;

        } 
        return Math.round(heightValue * 100) / 100;
    }

    public ageGetter(): Person['_age'] {
        return this._age;
    }
    public nameGetter(): Person['_name'] {
        return this._name;
    }
    public surnameGetter(): Person['_surname'] {
        return this._surname;
        }

    public getFullname(): string {
        return `${this._name} ${this._surname}`;
    }

    public toString(): string {
        let formattedPerson = `${this._name} ${this._surname}\n`;
        formattedPerson += `height: ${this.getHeight()} ${Person.heightUnits}`;
    
        return formattedPerson;
      }
    
}




// class Person {
//     private _age: number;
//     private _firstName: string;
//     private _lastName: string;

 
//     public get age() {
//         return this._age;
//     }

//     public set age(theAge: number) {
//         if (theAge <= 0 || theAge >= 200) {
//             throw new Error('The age is invalid');
//         }
//         this._age = theAge;
//     }

//     public getFullName(): string {
//         return `${this._firstName} ${this._lastName}`;
//     }
// }


//-------------------------------konstruktorius
// constructor(name: string, surname: string, age: number){
    //     this.name = name;
    //     this.surname = surname;
    //     this.age = age;
    // }


    console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai i?? j?? sukurkite setterius, ir bendr?? getter?? fullname');
    {

        // class Person {
        //     private _name: string;
        //     private _surname: string;
        //     private _age: number;

        //     constructor(name: string, surname: string, age: number){
        //     this._name = name;
        //     this._surname = surname;
        //     this._age = age;
        //     }
        
        //     public get age() {
        //         return this._age;
        //     }
        //     public get name() {
        //         return this._name;
        //     }
        //     public get surname() {
        //         return this._surname;
        //     }
        
        //     public set age(theAge: number) {
        //         if(theAge <= 0 || theAge>= 150) {
        //             throw new Error('This age is invalid');
        //         }
        //         this._age = theAge;
        //     }
        
        //     public set name(theName: string) {
        //         this. _name = theName;
        //     }
        
        //     public set surname(theSurname: string) {
        //         this. _surname = theSurname;
        //     }
        
        //     public getFullName(): string {
        //         return `${this._name} ${this._surname}`
        //     }
        
            
        // } 
        // let person: Person = new Person()
        
        
        // console.log(person)

        const person: Person = new Person({
            name: 'Serbentautas',
            surname: 'Bordi??ras',
            age: 20,
            height: 185,

        });

          console.log(person)

        

 //------------------------------------------------------------------------------------------------------------------       
        // const person: Person = new Person({
        //     name: 'Serbentautas',
        //     surname: 'Bordi??ras',
        //     age: 20,
        //     height: 180,
        //     weight: 80,
        //   });
        //   const newName: string = 'Bolvaris';
        //   const newSurname: string = 'Kepur??';
        
        //   console.log('Pradinis ??mogaus pilnas vardas:\n\t', person.getFullname());
        //   console.log('Kei??iamas vardas ir pavard??:', { newName, newSurname });
        
        //   person.setName(newName);
        //   person.setSurname(newSurname);
        
        //   console.log('Pakeistas ??mogaus pilnas vardas:\n\t', person.getFullname());
//--------------------------------------------------------------------------------------------------------------------
        // const person: Person = new Person({
        //     name: 'Serbentautas',
        //     surname: 'Bordi??ras',
        //     age: 20,
        //     height: 180,
        //     weight: 80,
        //   });

    
    }
    console.groupEnd();
    
    console.group('2. Sukurkite Person klasei savyb?? "age". Inkapsuliuokite ??i?? savyb?? taip, jog reik??m?? gal??t?? b??ti tik sveiki skai??iai nuo 1 iki 150');
    {

        const person: Person = new Person({
            name: 'kmynas',
            surname: 'gaga',
            age: 55,
            height: 130,

        });

          console.log(person)

          const person2: Person = new Person({
            name: 'kmynas',
            surname: 'gaga',
            age: 555,
            height: 147,

        });

          console.log(person2)
    
    }
    console.groupEnd();
    
    console.group('3. Sukurkite Person klasei savyb?? "height" kurios vert?? b??t?? saugoma centimetrais. Sukurkite ??iai savybei setter??, kuris pirmu parametru priimt?? reik??m??, o antru parametru priimt?? matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras n??ra perduotas, numatytas(default) matavimo vienetas turi b??ti cm. Getteris turi gr????inti reik??m?? centimetrais.');
    {
        const person2: Person = new Person({
            name: 'testas',
            surname: 'kamuolys',
            age: 32,
            height: 147,

        });
        Person.heightUnits = HeightUnits.METRES;

          console.log(person2)
    



        console.log('atliekant unduoti pasimeciau, tarp duomenu ir enums swich atliekamu funkciju. Aklai kopijuoti nenoriu.')
    
    }
    console.groupEnd();
    
    console.group('4. Sukurkite Person klasei statin?? savyb?? "heightUnits". Jos tipas turi b??ti i??vardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reik??m?? turi b??ti centimetrai');
    {
        console.log('kadangi analogiska 3 uzduociai, nenoriu kopijuoti ir einu prie sekancios')

    }
    console.groupEnd();
    
    console.group('5. "height" setterio antram parametrui pakeiskite s??jungos tip?? ?? [4.] u??duotyje sukurt?? i??vardinim??(enum). Priderinkite pavyzd??ius ir metod??.');
    {

    }
    
    console.groupEnd();

    console.group('6. "height" geteriui sukurkite logik??, jog jis gr????int?? matavimo vienetus, pagal statin??s savyb??s "heightUnits" reik??m??.');
    {
    
    }
    console.groupEnd();
    
    console.group('7. Analogi??kai pagal [4.]-[6.] punktus sukurkite savyb?? weight su statiniu i??vardinimu "weightUnits", kurio pasirinkimai turi b??ti: "KG", "LBS"');
    {
    
    }
    console.groupEnd();
    
    console.group('8. Sukurkite klasei Person metod?? "toString". Kuris paverst?? ??mogaus savybes gra??iu formatu: vardas ir pavard?? pirmoje eilut??je, o "height" ir "weight" savyb??s atskirose eilut??se, atitrauktos nuo kairio kra??to per "tab" simbol??, ir su matavimo vienetais(kurie i??saugoti) statin??se Person klas??s savyb??se');
    {
        
        const person: Person = new Person({
            name: 'kmynas',
            surname: 'gaga',
            age: 55,
            height: 130,

        });

          console.log(person)

          const person2: Person = new Person({
            name: 'kmynas',
            surname: 'gaga',
            age: 45,
            height: 147,

        });
        
          Person.heightUnits = HeightUnits.METRES;
          console.log('European Standard');
          console.log(person.toString());
          console.log(person2.toString());
        
          Person.heightUnits = HeightUnits.INCHES;
          console.log('American Standard');
          console.log(person.toString());
          console.log(person2.toString());
    }


}

lesson8()
