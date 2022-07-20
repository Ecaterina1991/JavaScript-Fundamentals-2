"use strict";

/*function logger() {
  console.log("My name is Jonas");
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));
("use strict");

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");*/

//function declaration

/*const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(age1);

//Function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2); */

//Function expression

//Arrow function

/*const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));*/

/*function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3)); */

/*const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired ☀`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));*/

/*const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years2 = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
//friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);*/

/*const friends = ["Michael", "Steven", "Peter"];

//Add elements

const newLength = friends.push("Jay"); //+ last element
console.log(friends);
console.log(newLength);

friends.unshift("John"); // + first element
console.log(friends);

//Remove elements
friends.pop(); // - Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // - First
console.log(friends);

console.log(friends.indexOf("Steven")); // return the index which the element is located
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven")); // return true if the value is in the array
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/
/*Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) �
GOOD LUCK */

//const billValue = 100;
//let tipValue1 = billValue*0.15;
//let tipValue2 = billValue*0.2;

/*Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100*/

/*function calculationTip(tip1, tip2) {
  return tip1*0.15, tip2*0.2;
  
}*/

//my solution

/*function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
    //console.log(` The tip is ${tip1}`);
  } else {
    return billValue * 0.2;
    //console.log(`The tip is ${tip2}`);
  }
}

const checkValue1 = calcTip(100);
const checkValue2 = calcTip(155);
const checkValue3 = calcTip(555);
const checkValue4 = calcTip(44);
console.log(checkValue1, checkValue2, checkValue3, checkValue4);

const bills = [125, 555, 44];
const tips1 = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips1);*/

//const tips = [15, 23.23, 111, 8.8];
//console.log(tips);

//const total = [115, 155 + 23.23, 555 + 111, 44 + 8.8];
//console.log(total);

//experts solution

/*const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

//const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips2 = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips2[0], bills[1] + tips2[1], bills[2] + tips2[2]];

console.log(bills, tips2, totals);*/

/*const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};*/

/*const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]); // we can put expressions here

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}
//how to add new elements to the object

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

//"Jonas has 3 friends, and his best friend is called Michael"*/

/*const challenge1 = firstName + " has " + ${friends.length} + ' friends, and his best friend is called' + jonas.friends[0]';
console.log(challenge1); */

/*console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);*/

/*const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   //console.log(this);
  //   return 2037 - this.birthYear;
  // },

  /*calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drives's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.getSummary());*/

/////////////////////////////////////////////

//Challenge nr 3

//////////////////////////////////////////

/*Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK*/

//1

/*const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(mark.calcBMI());

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(john.calcBMI());

if (mark.calcBMI() < john.calcBMI()) {
  console.log(
    `${
      john.firstName + " " + john.lastName
    }'s BMI (${john.calcBMI()}) is higher than ${
      mark.firstName + " " + mark.lastName
    }'s (${mark.calcBMI()})!`
  );
} else if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${
      mark.firstName + " " + mark.lastName
    }'s BMI (${mark.calcBMI()}) is higher than ${
      john.firstName + " " + john.lastName
    }'s BMI (${mark.calcBMI()})`
  );
}*/

/*console.log("Lifting weights repetition 1");
console.log("Lifting weights repetition 2");
console.log("Lifting weights repetition 3");
console.log("Lifting weights repetition 4");
console.log("Lifting weights repetition 5");
console.log("Lifting weights repetition 6");
console.log("Lifting weights repetition 7");
console.log("Lifting weights repetition 8");
console.log("Lifting weights repetition 9");
console.log("Lifting weights repetition 10");*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

/*const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);
//jonas[5] does not exist

for (let i = 0; i < jonas.length; i++) {
  //Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //Filling types array
  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  2037 - years[i];
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log("---ONLY STRINGS---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("---BREAK WITH NUMBERS---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}*/

//LOOPING BACKWARDS AND LOOPS IN LOOPS

/*const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
//NOW WE WANT TO START AT 4, 3..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}*/

//the while loop

// for (let rep1 = 1; rep1 <= 10; rep1++) {
//   console.log(`Lifting weights repetition ${rep1}`);
// }

/*let rep = 1;
while (rep <= 10) {
  //console.log(`While: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}*/

/*const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  2037 - years[i];
  ages.push(2037 - years[i]);
}
console.log(ages);*/

/////////////my solution

/*const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bill.length; i++) {
  const calcTip = (bill) =>
    bill[i] >= 50 && bill[i] <= 300 ? bill[i] * 0.15 : bill[i] * 0.2;

  tips.push(bill[i] >= 50 && bill[i] <= 300 ? bill[i] * 0.15 : bill[i] * 0.2);

  for (let i = 0; i < bill.length; i++) {
    const sume = bill[i] + tips[i];
    totals.push(bill[i] + tips[i]);
  }
}
console.log(tips);
console.log(totals);*/

////////////the master solution

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

//////my wrong solution to the last challenge

/*const arr = [1, 2, 3, 4, 5, 6, 7];
const totals = [];

const calcAverage = function (arr) {
  for (let sum = 0; sum < arr.length; sum++) {
    const total = (sum + arr(sum)) / (arr.length + 1);
    totals.push(total);
  }
};

console.log(arr, totals);*/

///the experts solution

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
