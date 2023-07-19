console.log("Hello World");

// Classes

class Person {
  constructor(firstName, lastName, age, address, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
  getFullName() {
    return `Full Name: ${this.firstName} ${this.lastName}`;
  }

  sayHello() {
    return `Good morning ${this.firstName} ${this.lastName}`;
  }

  addTwoNumbers(num1, num2) {
    return `Result: ${num1} + ${num2}`;
  }
}

const cam = new Person("Cameron", "Cobb", 28, "123 Main St", "123-456-7890");

console.log(cam);
console.log(cam.getFullName());
console.log(cam.sayHello());

class Customer extends Person {
  constructor(
    firstName,
    lastName,
    age,
    address,
    phoneNumber,
    dob,
    membershipType
  ) {
    super(firstName, lastName, age, address, phoneNumber);

    this.dob = dob;
    this.membershipType = membershipType;
  }

  static getMembershipCost() {
    let cost = 100;
    return `Membership Cost: ${cost}`;
  }

  getMembershipType() {
    return `Membership Type: ${this.membershipType}`;
  }
}

const jamie = new Customer(
  "Jamie",
  "Smith",
  30,
  "123 Main St",
  "123-456-7890",
  "01/01/1990",
  "Gold"
);

const gertrude = new Customer(
  "Gertrude",
  "Borgen",
  36,
  "123 Main St",
  "123-873-7890",
  "01/01/1987",
  "Brown"
);

const grant = new Customer(
  "Grant",
  "Pollock",
  28,
  "123 Main St",
  "123-754-7890",
  "01/01/1995",
  "Silver"
);

let customers = [];
customers.push(jamie);
customers.push(gertrude);
customers.push(grant);
console.log(customers);

class UI {
  constructor() {
    this.tableBody = document.getElementById("#table-body");
  }

  renderCustomers() {
    this.tableBody.innerHTML = [];

    for (let i = 0; i < customers.length; i++) {}
  }
}

const ui = new UI();
ui.renderCustomers();

console.log(jamie);
console.log(jamie.getMembershipType());
console.log(Customer.getMembershipCost());
console.log(jamie.getFullName());
