"use strict";
// *1111111111111111111
// *1111111111111111111
// *1111111111111111111
// *1111111111111111111
console.log("Завдання 1:");
class Address {
    constructor(street, city, postalCode) {
        this.street = street;
        this.city = city;
        this.postalCode = postalCode;
    }
    getFullAddress() {
        return `${this.street} ${this.city} ${this.postalCode}`;
    }
}
class Customer {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getFullInfo() {
        return `${this.name} is ${this.age} years old and lives in ${this.address.getFullAddress()}}`;
    }
}
const address = new Address("Soborna", "Rivne", 33005);
const customer = new Customer("John", 20, address);
console.log(customer.getFullInfo());
// *1111111111111111111
// *1111111111111111111
// *1111111111111111111
// *1111111111111111111
// !2222222222222222222
// !2222222222222222222
// !2222222222222222222
// !2222222222222222222
console.log("Завдання 2:");
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const rectangleArea = new Rectangle(10, 5);
console.log(`Площа квадрату ${rectangleArea.calculateArea()}`);
const circleArea = new Circle(5);
console.log(`Площа кола ${circleArea.calculateArea()}`);
// !2222222222222222222
// !2222222222222222222
// !2222222222222222222
// !2222222222222222222
// todo 333333333333333
// todo 333333333333333
// todo 333333333333333
// todo 333333333333333
class Store {
    constructor(name) {
        this.name = name;
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(product) {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }
    displayProducts() {
        console.log(this.products);
    }
}
const myStore = new Store("Мій магазин");
myStore.addProduct("Товар 1");
myStore.addProduct("Товар 2");
myStore.displayProducts();
myStore.removeProduct("Товар 2");
myStore.displayProducts();
// todo 333333333333333
// todo 333333333333333
// todo 333333333333333
// todo 333333333333333
