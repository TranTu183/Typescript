//1. khoi class : Java / OOP / Angular
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// 2. khoi tao doi tuong
const p1 = new Person("tuta", 22);
console.log("Person 1:", p1);


const product1: IProduct = {
    name: "Iphone 14",
    price: 2000,
    isActive: true,
    //