let myName = "Rashad";
console.log(myName); // Rashad
myName = "Hunter"
console.log(myName); // Hunter

const numOfStates number= 50;

let sumOfNumbers number = (5 + 4) + (5 + 4);

function sayHello() void {
    alert("Hello Blake");
}
sayHello();

const checkAge(name: string age: Number) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}
// checkAge("Rashad", 20);
// checkAge("Josh", 26);
// checkAge("Hunter", 25);
// checkAge("JB", 19);

let myFavVeggies string[] = ["Broccoli", "Squash", "Carrots", "Asparagus"];
console.log(myFavVeggies[0]) // "Broccoli"
console.log(myFavVeggies[1]) // "Squash"
console.log(myFavVeggies[2]) // "Carrots"
console.log(myFavVeggies[3]) // "Asparagus"

for (let i = 0; i < myFavVeggies.length; i++) {
    console.log(myFavVeggies[i])
}

let myPet = {
    name: "Pink",
    breed: "bird"
}


console.log(myPet.breed, myPet.name);

let people = [
    {
        name: "Josh",
        age: 26
    },
    {
        name: "Rashad",
        age: 20
    },
    {
        name: "Hunter",
        age: 25
    },
    {
        name: "DJ",
        age: 26
    },
    {
        name: "Will",
        age: 26
    }
];

people[0].name // Rashad

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength(string: string): number {
   return string.length
}

let stringLength = getLength("hello world");
if (stringLength % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}

interface pet {
    name:string,
    Breed:string,
    lifespan: number 
}

interface person{
    name:string,
   age:number 
}