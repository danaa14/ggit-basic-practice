// type User = {
//     readonly _id: string
//     name: string
//     email: string
//     isActive: boolean
//     creditDetails?: number

// }

// type cardNumber = {
//     cardnumber: string
// }

// type cardDate = {
//     carddate: string
// }

// type cardDetails = cardNumber & cardDate & {
//     cvv: number
// }

// let myUser: User = {
//     _id: "1234",
//     name: "h",
//     email: 'h@h.com',
//     isActive: true
// }

// myUser.email = 'd@s.com';

// function createUser(user: User){
//     return
// }

// createUser({name: "", email:"", isActive: true})



// let score: number | string = 33;
// score = 44;
// score = '55';


// type User = {
//     name : string,
//     id: number
// }

// type Admin = {
//     username : string,
//     id: number
// }

// let hitesh: User | Admin = {name: "hitesh", id: 334}
// hitesh = {username: 'hc', id: 334}

// function getDbId(id: number | string){
//     console.log(`Db Id is ${id}`);

// }



// function getDbId(id: number | string){
//     if(typeof id === 'string'){
//         id.toLowerCase()
//     }
//     console.log(`Db Id is ${id}`);

// }

// getDbId(3);
// getDbId('3');

// const data: number[] = [1,2,3];
// const data2: string[] = ['1','2','3'];
// const data3: (number | string | boolean)[] = [1,'2',3, true];


// let seatAllotment: 'aisle' | 'middle' | 'window' ;
// seatAllotment = "aisle";



//const user: (string | number)[] = [1, 'hc']
// let user: [string, number, boolean];
// user = ['hc', 1, true]

// let rgb: [number,number,number] = [255, 255, 122];
// type User = [number, string];
// const newUser : User = [112, 'example.google.com'];
// newUser[1] = 'hc.com';



// interface User {
//     readonly dbId: number,
//     email: string,
//     userId: number,
//     googleId?: string,
//     //startTrail: () => string
//     startTrail(): string,
//     getCoupon(couponName: string, value: number): number
// }

// interface User{
//     githubToken: string
// }

// interface Admin extends User{
//     role: 'admin' | 'ta' | 'learner'
// }

// const hitesh: Admin = {dbId: 22, email: 'h@h.com', userId: 2211, 
//     githubToken: 'github',
//     role: 'admin',
//     startTrail: () => {return 'trail started'},
//     getCoupon: (name: 'dana10', off:10) => {
//         return 10
//     }
// }
// hitesh.email = 'h@hc.com'



// function getSearchedProducts<T>(products: T[]): T {
//     const myIndex = 3;
//     return products[myIndex]
// }

// const getMoreSearchProducts = <T,>(products: T[]):T => {
//     const myIndex = 3;
//     return products[myIndex]
// }