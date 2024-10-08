// 100 Days Of Coding Challenge!

/* Day-72 Task
Learn about TypeScript generics by using the following guide and coding along with the examples provided in it:

Generics in TypeScript https://github.com/AsharibAli/100-days-of-code/blob/main/day-72/TS-Generics/README.md */

//----------------------------------------------------------------------------------------------------------------

/* Generics in TypeScript
Generics allow you to create reusable components that can work with a variety of types rather than a single one.
This is particularly useful for functions, classes, and interfaces. */

// Example: Generic Function

function identity<T>(arg: T): T {
  return arg;
}

// Usage
let output1 = identity<string>("Hello, TypeScript!"); // Explicitly setting the type
let output2 = identity(42); // Type inference

/* In this example, T is a type variable that allows the identity function to work with any type.
The function returns a value of the same type as the argument. */

//--------------------------------------------------------------------------------------------------------------

/* Generics with Multiple Types:
You can use multiple type variables to create more flexible and reusable components. */

// Example: Generic Function with Multiple Types

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Usage
const person = merge({ name: "Bruce" }, { age: 25 });
console.log(person.name); // Bruce
console.log(person.age); // 25

// Here, merge takes two objects of different types and combines them into a single object that has properties of both types.

//------------------------------------------------------------------------------------------------------------------------------

/* Generics in Classes:
Generics can also be used in classes to create flexible and reusable data structures. */

// Example: Generic Class

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zeroValue: T, add: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = add;
  }
}

// Usage
let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
console.log(myGenericNumber.add(5, 10)); // 15

/* In this example, GenericNumber is a class that works with any type T.
The add method and zeroValue property are defined using this type. */

//-------------------------------------------------------------------------------------------------------------------

/* Generics and Interfaces:
Interfaces can also use generics to define flexible and reusable contracts. */

// Example: Generic Interface

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Usage
let kvp: KeyValuePair<string, number> = { key: "age", value: 30 };
console.log(kvp.key); // age
console.log(kvp.value); // 30

// Here, KeyValuePair is a generic interface that can hold a key-value pair of any types K and V.
