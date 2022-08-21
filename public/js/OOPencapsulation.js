export function encapsulationInit() {
    console.group('1. Naudojant "getter" ir "setter" NESUTRUMPINTAS funkcijas:');
    {
        console.groupCollapsed(`1.1. Sukurkite klasę Person, kuri turėtų privačias savybes:
      name: string,
      surname: string,
      items: Array<{title: string, price: number}>,
      age: number,
    Aprašykite konstruktorių kuris priimtų šiom savybėms skirtus parametrus ir nustatytų reikšmes naudojant "setter" funkcijas.
  `);
        {
            class Person {
                name;
                surname;
                items;
                age;
                constructor(name, surname, items, age) {
                    this.name = name,
                        this.surname = surname,
                        this.items = items,
                        this.age = age;
                }
                ;
                setName(value) {
                    if (value.length < 2) {
                        console.error(('name is too short'));
                    }
                    if (value.replace('putin', 'shit')) {
                        console.error('done right');
                    }
                    if (value === this.surname) {
                        console.error('exchange with surname');
                    }
                    this.name = value;
                }
                ;
                setSurname(value) {
                    this.surname = value;
                }
                ;
                setItems(value) {
                    this.items = value;
                }
                ;
                setAge(value) {
                    this.age = value;
                }
                getName() {
                    return this.name;
                }
                ;
                getSurname() {
                    return this.surname;
                }
                ;
                getItem() {
                    return this.items;
                }
                ;
                getAge() {
                    return this.age;
                }
                getFullName() {
                    return this.name + ' ' + this.surname;
                }
                getTotalItemValue() {
                    return this.items.reduce((sum, prevValue) => sum + prevValue.price, 0);
                }
            }
            const person = new Person('Lazdonė', 'Silkienė', [
                { title: 'rėtis', price: 2.99 },
                { title: 'taburetė', price: 17.99 },
                { title: 'Mersas', price: 16000.12 },
            ], 34);
            console.log(person);
        }
        console.groupEnd();
        console.groupCollapsed('1.2. Aprašykite kiekvienai savybei "getter" funkcijas');
        {
        }
        console.groupEnd();
        console.groupCollapsed('1.3. Sukurkite papildomą getterį "getFullname", kuris grąžintų pilną žmogaus vardą.');
        {
        }
        console.groupEnd();
        console.groupCollapsed('1.4. Sukurkite papildomą getterį "getTotalItemValue", kuris grąžintų visų asmens daiktų kainų sumą');
        {
        }
        console.groupEnd();
        console.groupCollapsed('1.5. setName "setter"yje aprašykite 3 savo sugalvotas validacijas');
        {
        }
        console.groupEnd();
        console.groupCollapsed('1.6. setSurname "setter"yje aprašykite 3 savo sugalvotas validacijas');
        {
        }
        console.groupEnd();
        console.groupCollapsed('1.7. setAge "setter"yje aprašykite 2 savo sugalvotas validacijas');
        {
        }
        console.groupEnd();
        console.groupCollapsed('1.8. setItems "setter"yje aprašykite 3 savo sugalvotas validacijas KIEKVIENO priskiriamo masyvo "daiktams"');
        {
        }
        console.groupEnd();
    }
    console.groupEnd();
    console.group('2. Naudojant "get" ir "set" ES6 funkcijas:');
    {
        console.groupCollapsed(`2.1. Sukurkite klasę Person, kuri turėtų privačias savybes:
      name: string,
      surname: string,
      items: Array<{title: string, price: number}>,
      age: number,
    Aprašykite konstruktorių kuris priimtų šiom savybėms skirtus parametrus ir nustatytų reikšmes naudojant "setter" funkcijas.
  `);
        {
        }
        console.groupEnd();
        console.groupCollapsed('2.2. Aprašykite kiekvienai savybei ES6 "get" funkcijas');
        {
        }
        console.groupEnd();
        console.groupCollapsed('2.3. Sukurkite papildomą getterį "fullname", kuris grąžintų pilną žmogaus vardą.');
        {
        }
        console.groupEnd();
        console.groupCollapsed('2.4. Sukurkite papildomą getterį "totalItemValue", kuris grąžintų visų asmens daiktų kainų sumą');
        {
        }
        console.groupEnd();
        console.groupCollapsed('2.5. name "setter"yje aprašykite 3 savo sugalvotas validacijas');
        {
        }
        console.groupEnd();
        console.groupCollapsed('2.6. surname "setter"yje aprašykite 3 savo sugalvotas validacijas');
        {
        }
        console.groupEnd();
        console.groupCollapsed('2.7. age "setter"yje aprašykite 2 savo sugalvotas validacijas');
        {
        }
        console.groupEnd();
        console.groupCollapsed('2.8. items "setter"yje aprašykite 3 savo sugalvotas validacijas KIEKVIENO priskiriamo masyvo "daiktams"');
        {
        }
        console.groupEnd();
    }
    console.groupEnd();
}
encapsulationInit();
//# sourceMappingURL=OOPencapsulation.js.map