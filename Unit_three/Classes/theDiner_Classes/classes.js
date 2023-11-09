console.log("Hello World");

/* 
    Employees
        Manager
        create tables
        Host
        host tables
        Server
        set tables

    employee number
    
    Table
*/

const employeeNumbers = [];//array to track employee id numbers that already exist

class Employee {
    static setEmployee(role,emName,payRate){
        //Create a random employee number
        const setEmployeeNumber = Math.floor(Math.random()*(100 - 1) + 1);
        let numberToUse;

        if(employeeNumbers.includes(setEmployeeNumber)) {
            let tempNumber = setEmployeeNumber + "a";
            employeeNumbers.push(tempNumber);
            numberToUse = tempNumber;
        } else {
            employeeNumbers.push(setEmployeeNumber);
            numberToUse = setEmployeeNumber;
        }

        //set hire date
        let today = new Date();

        //set role
        const usedClass = role;//designates the class to target

        return new usedClass(emName,numberToUse,today,payRate);
    }

    constructor(emName, emNumber, date, payRate){
        this.emName = emName;
        this.employee_number = emNumber;
        this.dateHired = date;
        this.payRate = Number(payRate.toFixed(2)); //JS number class for data to be detailed as a number and fixed to two decimal spaces
    }

    //* Challenge Write a method to change their hire date
}

class Manager extends Employee {
    constructor(emName, emNumber, date, payRate){
        super(emName, emNumber, date, payRate);
        this.role = 'Manager';
    }

    createTable(tableNum,numOfSeats) {
        let table = new Table(tableNum,numOfSeats);
        //*Challenge: How can we evaluate if a table number already exist?
        return table;
    }
}

class Server extends Employee {
    constructor(emName, emNumber, date, payRate){
        super(emName, emNumber, date, payRate);
        this.role = 'Server';
    }

    serveTable(table) {
        table.updateStatus('eating...');
    }
}

class Host extends Employee {
    constructor(emName, emNumber, date, payRate){
        super(emName, emNumber, date, payRate);
        this.role = 'Host';
    }

    setTable(table) {
        table.updateSeating();
    }
}

// const employee = new Employee('Joe', 1, new Date(),18);
// const manager = new Manager('Jane', 12, new Date(),18);
// console.log(employee,manager);

const manager = Employee.setEmployee(Manager, 'Jane', 12, new Date(),18);
const server = Employee.setEmployee(Server, "Barbie",18);
const host = Employee.setEmployee(Host, "Ken", 18);
console.log(manager, server, host);

class Table {
    constructor(tableNum, numOfSeats){
        this.tableNum = tableNum;
        this.numOfSeats = numOfSeats;
        this.seated = false;
        this.status = "empty";
    }

    updateSeating() {
        if(this.seated) {
            this.seated = false;
            this.status = "empty";
        } else {
            this.seated = true;
            this.status = "waiting...";
        }
    }

    updateStatus(status) {
        if(status !== undefined) {
            this.status = status;
        } else {
            this.status = 'waiting...';
        }
    }

}

const table10 = manager.createTable(10,2);
host.setTable(table10);
console.log(table10);
server.serveTable(table10);
//table.updateStatus('dining');
console.log(table10);