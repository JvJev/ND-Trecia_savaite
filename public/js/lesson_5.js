export function lesson5Tasks() {
    const people = [
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
    console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
    {
        const personToIdentity = ({ name, surname }) => {
            return { name, surname };
        };
        const identities = people.map(personToIdentity);
        console.table(people);
        console.table(identities);
    }
    console.groupEnd();
    console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
    {
        const selectTaskProps = ({ married, hasCar }) => ({
            married: Boolean(married),
            hasCar: Boolean(hasCar),
        });
        const result = people.map(selectTaskProps);
        console.table(people);
        console.table(result);
    }
    console.groupEnd();
    console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
    {
        const namesAndMarried = ({ name, surname, married }) => ({
            married: Boolean(married),
            name: String(name),
            surname: String(surname)
        });
        const result = console.log(namesAndMarried);
        console.log(result);
    }
    console.groupEnd();
    console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
    {
        const selectTaskProps = ({ sex, income }) => ({
            income: Number(income),
            sex: sex,
        });
        const result = people.map(selectTaskProps);
        console.table(people);
        console.table(result);
    }
    console.groupEnd();
    console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
    {
        const selectTaskProps = ({ name, surname, sex }) => ({
            name: String(name),
            surname: String(surname),
            sex: sex,
        });
        const result = people.map(selectTaskProps);
        console.table(people);
        console.table(result);
    }
    console.groupEnd();
    console.groupCollapsed('6. Atspausdinkite visus vyrus');
    {
        const getMen = ({ sex }) => sex === 'male';
        const printMen = people.filter(getMen);
        console.table(people);
        console.table(printMen);
    }
    console.groupEnd();
    console.groupCollapsed('7. Atspausdinkite visas moteris');
    {
        const getMen = ({ sex }) => sex === 'female';
        const menResult = people.filter(getMen);
        console.table(people);
        console.table(menResult);
    }
    console.groupEnd();
    console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
    {
        const getCar = ({ hasCar }) => hasCar === true;
        const car = people.filter(getCar);
        console.table(people);
        console.table(car);
    }
    console.groupEnd();
    console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
    {
        const getStatus = ({ married }) => married === true;
        const isMarried = people.filter(getStatus);
        console.table(people);
        console.table(isMarried);
    }
    console.groupEnd();
    console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
    {
        console.table(people);
        console.table('gavosi nesamone');
    }
    console.groupEnd();
    console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
    {
        const incomeX = ({ income, ...person }) => {
            const newIncome = { ...person };
            if (income) {
                newIncome.salary = income;
            }
            ;
            return newIncome;
        };
        const newPerson = people.map(incomeX);
        console.table(people);
        console.table(newPerson);
    }
    console.groupEnd();
    console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
    {
        const noMan = ({ name, surname, sex, ...anonPerson }) => anonPerson;
        const noManArr = people.map(noMan);
        console.table(people);
        console.table(noManArr);
    }
    console.groupEnd();
    console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
    {
    }
    console.groupEnd();
}
lesson5Tasks();
//# sourceMappingURL=lesson_5.js.map