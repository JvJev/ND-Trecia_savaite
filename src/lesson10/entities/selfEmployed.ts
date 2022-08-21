import { type PersonProperties } from './person.js';
import Employee from './employee.js';
import formatLine from '../helpers/format-line.js';



export type SelfEmployedPersonProperties = PersonProperties & {
    hourlyRate: number,
    hoursPerMonthWorked: number,
};

class SelfEmployedPerson extends Employee {
    private hourlyRate: number;
    private hoursPerMonth: number;

    constructor ({hourlyRate, hoursPerMonthWorked, ...personProperties}: SelfEmployedPersonProperties) {
        super(personProperties);
        this.hourlyRate = hourlyRate;
        this.hoursPerMonth = hoursPerMonthWorked;
    }
    public calcPay = (): number => this.hourlyRate * this.hoursPerMonth;
    public override toString(): string {
        return `${this.getPersonData()
          + formatLine(`hour pay: ${this.hourlyRate}`, 1)
          + formatLine(`hours worked: ${this.hoursPerMonth}`, 1)}`;
      }
}
export default SelfEmployedPerson;

