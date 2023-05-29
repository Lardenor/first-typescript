// *1111111111111111111
// *1111111111111111111
// *1111111111111111111
// *1111111111111111111
console.log("Завдання 1:");

class Address{
    street:string;
    city: string;
    postalCode: number;
    constructor(street:string,city:string,postalCode:number){
        this.street = street;
        this.city = city;
        this.postalCode = postalCode;

    }
getFullAddress():string{
    return `${this.street} ${this.city} ${this.postalCode}` 
}
}
class Customer {
    name: string;
    age:number;
    address: Address;
    constructor(name:string,age:number,address:Address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getFullInfo():string{
        return `${this.name} is ${this.age} years old and lives in ${this.address.getFullAddress()}}`
    }
}
const address=new Address("Soborna","Rivne",33005);
const customer = new Customer("John",20,address);

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

interface Shape {
    calculateArea(): number;
}
class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
            this.width = width;
            this.height = height;
        }
        calculateArea(): number {
            return this.width * this.height;
        }
}
class Circle implements Shape {
    radius: number;
    constructor(radius: number) {
                this.radius = radius;
            }
            calculateArea(): number {
                return Math.PI * this.radius * this.radius;
            }
}
const rectangleArea = new Rectangle(10,5);

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
console.log("Завдання 3:");

class Store {
    name: string;
    products: string[] ;
    constructor(name: string){
        this.name = name;
        this.products = [];
    }
    addProduct(product: string){
        this.products.push(product);
    }
   removeProduct(product: string) {
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
