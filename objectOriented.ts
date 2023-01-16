//Classes


class Greeter {
    greeting: string;
    constructor(message: string) {
    this.greeting = message;
    }
    greet() {
    return "Hello, " + this.greeting;
    }
  
}    
let greeter = new Greeter("world");

console.log(greeter);


//Interface


interface Person {
    firstName: string;
    lastName: string;
    age: number;
    getFullName(): string;
}  


class Employee implements Person {
    firstName: string;
    lastName: string;
    age: number;
  
    constructor(firstName: string, lastName: string, age: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getFullName() {
      return this.firstName + ' ' + this.lastName;
    }
}


  let fullName = new Employee("Shariful Islam","Shohag",23);

console.log(fullName);

//Inheritance

class Animal {
    move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
    class Dog extends Animal {
    bark() {
    console.log("Woof! Woof!");
    }
}

    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
    
    console.log(dog);

