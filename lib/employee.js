class Employee {
    
    constructor(name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
      this.office = office;
    }
  ​
    getName() {
      return this.name;
    }
  ​
    getId() {
      return this.id;
    }
  ​
    getEmail() {
      return this.email;
    }
  ​
    getRole() {
      return this.role;
    }
    {getOffice (){
        return this.office;
    }}
  ​
  }
  ​
  module.exports = Employee;
  
  
  
  
  