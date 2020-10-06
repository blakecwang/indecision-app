class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` and is majoring in ${this.major}`;
    }
    return description;
  }
}


class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()) {
      greeting += ` and I am from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveler('Blake Wang', 30, 'San Diego');
const other = new Traveler();

console.log(me.getGreeting());
console.log('hasHomeLocation', me.hasHomeLocation());
console.log(me.getDescription());

console.log(other.getGreeting());
console.log('hasHomeLocation', other.hasHomeLocation());
console.log(other.getDescription());
