class Employee {
    constructor(name, ID, email){
        this.name = name;
        this.ID = ID;
        this.email = email;
    }
    getId(){
        return this.ID;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;
