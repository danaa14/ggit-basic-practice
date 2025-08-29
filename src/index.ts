import promptSync from "prompt-sync";

let sales:number = 123_456_789;
let course:string = "TypeScript";
let is_published:boolean = true;
let user:[number, string] = [1, "Dana"];
console.log(sales, " ", course, " ", is_published, " ", user);

const pi = Math.PI;
function circleArea(radius: number,): number{
    return pi*Math.pow(radius, 2);
}
console.log(circleArea(2));

let food: string[] = ['pelmeni', 'pizza', 'icecream', 'buterbrod'];
for(let i = 0; i<food.length ; i++){
        console.log(food[i] + ", ");
}


const prompt = promptSync();
const input = prompt("Enter your age: ");

if(input !== null){
    const age = Number(input);

    if(isNaN(age) || age<0)
        console.log('Please enter a valid number')
    else if(age>20)
        console.log('You are an adult')
    else if(age>12)
        console.log('You are a teenager')
    
    else
        console.log('You are a child')
}

let level:any= 'hello';
let levelLength = (level as string).length;
console.log(levelLength);

let sum: number = 0;
let list: any[] = ['salut', 2, 'ddjf', 'la revedere', 92374, 32];
list.forEach((i) => {
    if(typeof(i) === 'number')
        sum += (i as number);
});
console.log(sum);

// const enum Size {Small = 1, Medium, Large};
// let mySize : Size = Size.Medium;
// console.log(mySize);

// function calculateTax(income: number, taxYear = 2022): number{
//     if (taxYear < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }

//calculateTax(10_000, 2022);


// type Employee ={
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1,
//     name: "Dana",
//     retire: (date: Date) => {
//         console.log(date);
//     }    
// };


// function kgToLbs(weight: number | string): number{
//     if (typeof weight === 'number')
//         return weight * 2.2;
//     else 
//         return parseInt(weight) * 2.2;
// }

// type Draggable = {
//     drag: () => void
// };

// type Resizable = {
//     resize: () => void
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget ={
//     drag: () => {},
//     resize: () => {}
// } 

// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = "cm" | "inch";

// function greet(name : string | null | undefined){
//     if (name)
//         console.log(name.toUpperCase());
//     else
//         console.log("Hola!");
// }

// greet(null);


// type Customer = {
//     birthday?: Date
// };

// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0? null : { birthday: new Date()};
// }

// let customer = getCustomer(1);
//     console.log(customer?.birthday?.getFullYear());

// let log: any = null;
// log?.("a");