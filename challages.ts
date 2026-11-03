// 1st function with name and age with correct types

function task_1(name: string, age: number) {
    return `hello ${name} of ${age}`;
}

task_1('prit', 1)

// 2nd log variable with union typing 
function task_2(demo: string | number) {
    console.log(`\n Task 2 : ${typeof demo}`);
}

task_2(100)
task_2('prit')

// 3rd implement and interface structure
interface Person {
    name: string;
    age: number;
    email?: string;
}

const task_3: Person = {
    name: "hello",
    age: 30,
};

// 4th create optional iterface properties
interface Person {
    name: string;
    age: number;
    email?: string;
}

const task_4_1: Person = {
    name: "world",
    age: 30,
};

const task_4_2: Person = {
    name: "modified",
    age: 50,
    email: "abc@gmail.com",
};

// 5th Build a simple class

class Car {
    brand: string;
    private speed: number;

    constructor(brand: string, speed: number) {
        ((this.brand = brand), (this.speed = speed));
    }

    accelerate() {
        return this.speed++;
    }

    // this is for task-6
    getSpeed(): number {
        return this.speed;
    }
}

const task_5_and_6 = new Car("Diablo", 10000);
task_5_and_6.accelerate();

// 6th use Access Modifier in classes
console.log(`\n Task 5-6 : ${task_5_and_6.getSpeed()}`);

// 7th apply generic function usage

function task_7<T>(value: T): T {
    console.log(`\n Task 7 : ${typeof value}`);
    return value;
}

task_7(1)
task_7("hello world!")

// 8th work with tuples

type Prit = [string, number];
let data: Prit = ["Smart and have iq of = ", 190];

// 9th handle type assertions

let task_9: unknown = "world";
if (typeof task_9 === 'string') {
    console.log(`\n the length of this unkown string is :  ${task_9.length}`);
}

// 10th Debug a union Type Error

// error in code
/*
function showLength(val: number | string) {
    console.log(val.length)
    // above will show error in lenght as lenght is not a type of number
}
*/

// fixed
function getLength(x: number | string) {
    if (typeof x === "string") {
        console.log(` \n ${x.length}`);
    } else {
        console.log(" \n given peram is number");
    }
}

getLength(1)
getLength("~hello World!")




// ==============================================================

// improved verison of code 

// ==============================================================

// Task 1 ->improved version of task 1

function task_1_1(name: string, age: number): string {
    return `Helllo From ${name} and my age is ${age}`;
}

console.log(task_1_1("vishesh", 21));


// Task 2

function task_2_2(demo: string | number): void {
    console.log(`\nTask 2: ${typeof demo}`);
}

task_2_2(100);
task_2_2("vishesh");


// Task 3 ->improved version

interface Person1 {
    name: string;
    age: number;
    email?: string;
}

const task_3_3: Person1 = {
    name: "vishesh",
    age: 21
}


class Car1 {
    brand: string;
    private speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate() {
        return this.speed++;
    }

    // Used for Task 6
    getSpeed(): number {
        return this.speed;
    }
}

const task_5_and_6_ = new Car("Diablo", 10000);
task_5_and_6_.accelerate();


// ==========================================
// TASK 6: Access Modifiers in Classes
// ==========================================

console.log(`\nTask 5-6: ${task_5_and_6_.getSpeed()}`);


// Task 7 Generic Function Usage

function task_7_7<T>(value: T): T {
    console.log(`\nTask 7: ${typeof value}`);
    return value;
}

task_7_7(1);
task_7_7("Hello World!");


// Task 8 ->Work With tiple

type vishesh = [string, number];

let data1: vishesh = ["smart and iq of = ", 190];

// Log tuple values using indexes
console.log("\nTask 8:");
console.log("Tuple index 0:", data1[0]);
console.log("Tuple index 1:", data1[1]);


// task 9 ->Handle Type Assertion and Narrowing

let task_9: unknown = "world";

if (typeof task_9 === "string") {
    console.log(
        `\nThe length of this unknown string is: ${task_9.length}`
    );
}

// ==========================================
// TASK 10: Debug a Union Type Error
// ==========================================

// Incorrect implementation (intentional error)
/*
function showLength(val: number | string) {
    console.log(val.length);
    // Error: Property 'length' does not exist on type 'number'.
}
*/

// Correct implementation using type narrowing

function getLength(x: number | string): void {
    if (typeof x === "string") {
        console.log(`\n${x.length}`);
    } else {
        console.log("\nGiven parameter is a number");
    }
}

getLength(1);
getLength("~hello World!");