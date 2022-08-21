export type PersonProperties = {
    id: string,
    name: string,
    surname: string,
};

abstract class Person {
    protected id: string;
    protected name: string;
    protected surname: string;

    constructor({ id, name, surname}: PersonProperties) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    public abstract toString(): string;

    public getPersonData = (): string => `${this.name} ${this.surname} ${this.id}`;
};
export default Person;


