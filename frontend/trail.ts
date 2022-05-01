interface Person {
    name: string;
    email: string;
}

let p1: Person = { name:"Jon", email:"Steve.com" }; // OK
let p2: Person = { name:"Lory", email:"Steve.com" }; // OK


console.log(p1.name +" "+p1.email)
console.log(p2.name +" "+p2.email)