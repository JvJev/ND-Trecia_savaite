export function lesson8() {
    let HeightUnits;
    (function (HeightUnits) {
        HeightUnits["CENTIMETRES"] = "cm";
        HeightUnits["METRES"] = "m";
        HeightUnits["INCHES"] = "in";
    })(HeightUnits || (HeightUnits = {}));
    class Person {
        static heightUnits = HeightUnits.CENTIMETRES;
        _name;
        _surname;
        _age;
        height;
        constructor({ name, surname, age, height, heightUnits }) {
            this._name = name;
            this._surname = surname;
            this.ageSetter(age);
            this.setHeight(height, heightUnits);
        }
        ageSetter(theAge) {
            if (theAge <= 0 || theAge >= 150) {
                console.error('This age is invalid');
            }
            else
                this._age = theAge;
        }
        nameSetter(theName) {
            this._name = theName;
        }
        surnameSetter(theSurname) {
            this._surname = theSurname;
        }
        setHeight(height, units) {
            switch (units) {
                case HeightUnits.CENTIMETRES:
                    this.height = height;
                    break;
                case HeightUnits.METRES:
                    this.height = height * 100;
                    break;
                case HeightUnits.INCHES:
                    this.height = height * 2.54;
                    break;
                default: this.height = height;
            }
        }
        getHeight() {
            if (this.height === undefined)
                return 0;
            let heightValue;
            switch (Person.heightUnits) {
                case HeightUnits.CENTIMETRES:
                    heightValue = this.height;
                    break;
                case HeightUnits.METRES:
                    heightValue = this.height / 100;
                    break;
                case HeightUnits.INCHES:
                    heightValue = this.height / 2.54;
                    break;
                default: heightValue = this.height;
            }
            return Math.round(heightValue * 100) / 100;
        }
        ageGetter() {
            return this._age;
        }
        nameGetter() {
            return this._name;
        }
        surnameGetter() {
            return this._surname;
        }
        getFullname() {
            return `${this._name} ${this._surname}`;
        }
        toString() {
            let formattedPerson = `${this._name} ${this._surname}\n`;
            formattedPerson += `height: ${this.getHeight()} ${Person.heightUnits}`;
            return formattedPerson;
        }
    }
    console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
    {
        const person = new Person({
            name: 'Serbentautas',
            surname: 'Bordiūras',
            age: 20,
            height: 185,
        });
        console.log(person);
    }
    console.groupEnd();
    console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
    {
        const person = new Person({
            name: 'kmynas',
            surname: 'gaga',
            age: 55,
            height: 130,
        });
        console.log(person);
        const person2 = new Person({
            name: 'kmynas',
            surname: 'gaga',
            age: 555,
            height: 147,
        });
        console.log(person2);
    }
    console.groupEnd();
    console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
    {
        const person2 = new Person({
            name: 'testas',
            surname: 'kamuolys',
            age: 32,
            height: 147,
        });
        Person.heightUnits = HeightUnits.METRES;
        console.log(person2);
        console.log('atliekant unduoti pasimeciau, tarp duomenu ir enums swich atliekamu funkciju. Aklai kopijuoti nenoriu.');
    }
    console.groupEnd();
    console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
    {
        console.log('kadangi analogiska 3 uzduociai, nenoriu kopijuoti ir einu prie sekancios');
    }
    console.groupEnd();
    console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');
    {
    }
    console.groupEnd();
    console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
    {
    }
    console.groupEnd();
    console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
    {
    }
    console.groupEnd();
    console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
    {
        const person = new Person({
            name: 'kmynas',
            surname: 'gaga',
            age: 55,
            height: 130,
        });
        console.log(person);
        const person2 = new Person({
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
lesson8();
//# sourceMappingURL=lesson_8.js.map