export function duomenuSTR() {
    console.group('1. Dėklo (Stack) duomenų struktūros kūrimas');
    {
        class StackClass {
            index;
            constructor() {
                this.index = -1;
            }
            push(arrayMember) {
                this.index += 1;
                this[this.index] = arrayMember;
            }
            pop() {
                const returnVal = this[this.index];
                if (returnVal !== undefined) {
                    delete this[this.index];
                    this.index -= 1;
                }
                return returnVal;
            }
            get length() {
                return this.index + 1;
            }
        }
        const numberStack = new StackClass();
        const stringStack = new StackClass();
        console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
        {
            console.log({
                numberStack,
                stringStack,
            });
        }
        console.groupEnd();
        console.groupCollapsed('1.2. Sukurkite metodą "push", kuris pridėtų elementą į struktūros galą, t.y.: vienetu didesniu indeksu nei dabartinis index. Po pridėjimo index savybę padidinkite vienetu');
        {
            numberStack.push(777);
            numberStack.push(888);
            numberStack.push(999);
            stringStack.push('Uno');
            stringStack.push('Dos');
            stringStack.push('Tres');
            console.log({
                numberStack,
                stringStack,
            });
        }
        console.groupEnd();
        console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros galo. Po išėmimo index savybę sumažinkite vienetu');
        {
            const lastNumber = numberStack.pop();
            const lastString = stringStack.pop();
            console.log({
                lastNumber,
                lastString,
            });
        }
        console.groupEnd();
        console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
        {
            console.log({
                'numberStack.length': numberStack.length,
                'stringStack.length': stringStack.length,
            });
        }
        console.groupEnd();
    }
    console.groupEnd();
    console.group('2. Eilės (Queue) duomenų struktūros kūrimas');
    {
        class Queue {
            index;
            constructor() {
                this.index = -1;
            }
            enqueue(x) {
                for (let i = this.index; i >= 0; i -= 1) {
                    this[i + 1] = this[i];
                }
                this[0] = x;
                this.index += 1;
            }
            get getterIndexLength() {
                return this.index + 1;
            }
            dqueue() {
                const returnValue = this[0];
                for (let i = 1; i <= this.index; i += 1) {
                    this[i - 1] = this[i];
                }
                delete this[this.index];
                this.index -= 1;
                return returnValue;
            }
            ;
        }
        ;
        const numberQueue = new Queue();
        const stringQueue = new Queue();
        console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
        {
            console.log({
                numberStack: numberQueue,
                stringStack: stringQueue,
            });
        }
        console.groupEnd();
        console.groupCollapsed('1.2. Sukurkite metodą "enqueue", kuris pridėtų elementą į struktūros priekį. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
        {
            numberQueue.enqueue(444);
            numberQueue.enqueue(555);
            numberQueue.enqueue(666);
            stringQueue.enqueue('Iron maiden');
            stringQueue.enqueue('Metallica');
            stringQueue.enqueue('RHCP');
            console.log({
                numberStack: numberQueue,
                stringStack: stringQueue,
            });
        }
        console.groupEnd();
        console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros priekio. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
        {
            const lastNumber = numberQueue.dqueue();
            const lastString = stringQueue.dqueue();
            console.log({
                lastNumber,
                lastString,
            });
        }
        console.groupEnd();
        console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
        {
            console.log({
                'numberQueue.length': numberQueue.getterIndexLength,
                'stringQueue.length': stringQueue.getterIndexLength,
            });
        }
        console.groupEnd();
    }
    console.groupEnd();
}
duomenuSTR();
//# sourceMappingURL=duomenuStrukturos.js.map