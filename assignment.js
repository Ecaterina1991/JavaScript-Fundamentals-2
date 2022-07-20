//1. Declare variables called 'country', 'continent' and 'population' and
//assign their values according to your own country (population in millions)
//2. Log their values to the console

/*const myCountry = "Romania";
console.log(myCountry);

const myContinent = "Europe";
console.log(myContinent);

let myPopulation = 19;
console.log(myPopulation);

const language = "romanian";
console.log(language);*/

/*LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console*/

//

// console.log(typeof isIsland);
// console.log(typeof myCountry);
// console.log(typeof myContinent);
// console.log(typeof myPopulation);
// console.log(typeof language);

/*LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens



LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than 
Finland?
4. The average population of a country is 33 million people. Does your country 
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese'*/

//console.log(myPopulation / 2);

// console.log(myPopulation++);
// console.log(myPopulation++);

// let populationFinland = 6000000;

// console.log(myPopulation > populationFinland);

// let averagePopulation = 33000000;
// console.log(myPopulation < averagePopulation);

// let description =
//   myCountry +
//   " is in " +
//   myContinent +
//   ", and its " +
//   myPopulation +
//   " people speak " +
//   language +
//   ".";
// console.log(description);

// let descriptionSecond = `${myCountry} is in ${myContinent}, and its ${myPopulation} people speak ${language}.`;
// console.log(descriptionSecond);

/*
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original */

// if (myPopulation > 33000000) {
//   console.log("Portugals's Population is above average.");
// } else {
//   console.log("Portugal's population is 22 million below average.");
// }

/*LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5';  //4
"9" - "5"; //617
'19' - '13' + 17; //617
'123' < 57; //false
5 + 6 + '4' + 9 - 4 - 2; //5643
2. Execute the operations to check if you were righ*/

// "9" - "5"; //4
// "19" - "13" + "17"; //617
// "19" - "13" + 17; //617 - 23 correct
// "123" < 57; //false
// 5 + 6 + "4" + 9 - 4 - 2; //5643  - 1143 correct

/*LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 
'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
when you input 1
8. Reflect on why we should use the === operator and type conversion in this 
situation*/

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// console.log(numNeighbours);

// if (numNeighbours === 1) {
//   console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

/* LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
country that speaks english, has less than 50 million people and is not an 
island.
3. Write an if statement to help Sarah figure out if your country is right for her. 
You will need to write a condition that accounts for all of Sarah's criteria. Take 
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily 
change some variables in order to make the condition true (unless you live in 
Canada :D */
/*
const myCountry = "Romania";
// console.log(myCountry);

const myContinent = "Europe";
//console.log(myContinent);

//const myPopulation = 19;
//console.log(myPopulation);

//const language = "romanian";
//console.log(language);

/*let isIsland = false;

if (language === "english" && myPopulation < 50 && !isIsland) {
  console.log("You should live in Romania");
} else {
  console.log("Romania does not meet your criteria :(");
}*/

/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK */

/*let dolphinsOne = 97;
let dolphinTwo = 1;
let dolphinsThree = 101;
let koalasOne = 109;
let koalasTwo = 95;
let koalasThree = 1;

console.log(
  dolphinsOne,
  dolphinTwo,
  dolphinsThree,
  koalasOne,
  koalasTwo,
  koalasThree
);

let averageScorDolphins = (dolphinsOne + dolphinTwo + dolphinsThree) / 3;
console.log(averageScorDolphins);

let averageScorKoalas = (koalasOne + koalasTwo + koalasThree) / 3;
console.log(averageScorKoalas);

if (averageScorDolphins > averageScorKoalas) {
  console.log("The winner is Dolphins team");
} else if ("averageScorDolphins === averageScorKoalas") {
  console.log("Both teams are winners!");
} else {
  ("The winner is Koalas team");*/
//}

/*
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
*/

/*if (averageScorDolphins > averageScorKoalas && averageScorDolphins >= 100) {
  console.log("The winner is Dolphins team");
} else if (
  averageScorKoalas > averageScorDolphins &&
  averageScorKoalas >= 100
) {
  console.log("The winner is Koalas team");
} else if (
  averageScorDolphins === averageScorKoalas &&
  averageScorDolphins >= 100 &&
  averageScorKoalas >= 100
) {
  console.log("Both teams are winners!");
} else {
  console.log("No one wins the trophy");
} */

/*LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'*/

/*const language = "romanian";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/
/*LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator 
to log a string like this to the console: 'Portugal's population is above average'. 
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original*/

/*const myPopulation = 19;

myPopulation > 33
  ? console.log(`Romania's population is above average`)
  : console.log(`Romania's population is below average`);*/

/*LECTURE: Functions
  1. Write a function called 'describeCountry' which takes three parameters: 
  'country', 'population' and 'capitalCity'. Based on this input, the 
  function returns a string with this format: 'Finland has 6 million people and its 
  capital city is Helsinki'
  2. Call this function 3 times, with input data for 3 different countries. Store the 
  returned values in 3 different variables, and log them to the console*/

"use strict";

/*function describeCountry(country, population, capitalCity) {
    const product = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return product;
  }
  
  const descFinland = describeCountry("Finland", 6, "Helsinki");
  
  const descRomania = describeCountry("Romania", 19, "Bucharest");
  
  const descRussia = describeCountry("Russia", 200, "Moscova");
  
  console.log(descFinland, descRomania, descRussia);*/

/*LECTURE: Function Declarations vs. Expressions
  1. The world population is 7900 million people. Create a function declaration
  called 'percentageOfWorld1' which receives a 'population' value, and
  returns the percentage of the world population that the given population 
  represents. For example, China has 1441 million people, so it's about 18.2% of 
  the world population
  2. To calculate the percentage, divide the given 'population' value by 7900 
  and then multiply by 100
  3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
  store the results into variables, and log them to the console
  4. Create a function expression which does the exact same thing, called 
  'percentageOfWorld2', and also call it with 3 country populations (can be 
  the same populations)*/

/*LECTURE: Arrow Functions
  1. Recreate the last assignment, but this time create an arrow function called 
  'percentageOfWorld3*/

//function expression

/*const percentageOfWorld1 = function (population) {
    return (population * 100) / 7900;
  };
  const popRomania = percentageOfWorld1(30);
  const popChina = percentageOfWorld1(1441);
  const popGermany = percentageOfWorld1(80);
  console.log(popRomania, popChina, popGermany);*/

//function declaration

/*function percentageOfWorld2(population) {
    return (population * 100) / 7900;
  }
  
  const popRomania2 = percentageOfWorld2(30);
  const popChina2 = percentageOfWorld2(1441);
  const popGermany2 = percentageOfWorld2(80);
  
  console.log(popRomania2, popChina2, popGermany2);*/

//arrow function

/*const percentageOfWorld3 = (population) => (population * 100) / 7900;
  //const popRomania3 = percentageOfWorld3(30);
  const popChina3 = percentageOfWorld3(1441);
  //const popGermany3 = percentageOfWorld3(80);
  //console.log(popChina3);
  
  //function calling other functions
  
  function describePopulation(country, population) {
    const aCountry = percentageOfWorld3(population);
    const final = `${country} has ${population} million people, which is about ${aCountry} of the world.`;
    return final;
  }
  const dPop = describePopulation("China", 1441);
  console.log(dPop);
  const dPop2 = describePopulation("Romania", 30);
  console.log(dPop2);
  const dPop3 = describePopulation("Germany", 80);
  console.log(dPop3);*/

//first try//////////////////////////////////////////////////////////////
///////////////////////////////

/*let scoreDolphinsOne = 44;
  let scoreDolphinsTwo = 23;
  let scoreDolphinsThree = 71;
  
  let scoreKoalasOne = 65;
  let scoreKoalasTwo = 54;
  let scoareKoalasThree = 49;*/

//const calcAverageDolphins = (scoreDolphinsOne + scoreDolphinsTwo + scoreDolphinsThree) / 3;

//const calcAverageKoalas = (scoreKoalasOne + scoreKoalasTwo + scoareKoalasThree) / 3;

/*const calcAverage = (calcAverageDolphins, calcAverageKoalas) => {}
  const average1 = scoreDolphinsOne + scoreDolphinsTwo + scoreDolphinsThree) / 3;
  return average1;
  const average2 = scoreKoalasOne + scoreKoalasTwo + scoreKoalasThree) / 3;
  return average2;
  }*/

/////////////////////////
///second try
////////////////////////////

/*function calcAverage(score1, score2, score3) {
    const average = (score1 + score2 + score3) / 3;
    return average;
  }
  
  const Dolphins = calcAverage(44, 23, 71);
  const Koalas = calcAverage(65, 54, 49);
  console.log(Dolphins, Koalas);*/

/////////////////array

/*const calcAverage2 = (score1, score2, score3) => {
    (score1 + score2 + score3) / 3;
    if (dolphins1 > 2 * koalas1) {
      console.log("Dolphins win (${dolphins1} vs ${koalas1})");
    }
  };
  
  const dolphins1 = calcAverage2(44, 23, 71);
  const koalas1 = calcAverage2(65, 54, 49);
  console.log(dolphins1, koalas1);*/

/*function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > 2 * avgKoalas) {
      console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
      return;
    } else if (avgKoalas > 2 * avgDolphins) {
      console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
      return;
    } else {
      console.log(`No team wins.`);
    }
  }
  
  const winner = checkWinner(Dolphins, Koalas);
  console.log(winner);
  
  checkWinner(600, 111);*/

/*const population = [19, 200, 8, 12];
  
  console.log(population);
  console.log(population.length === 4);
  
  const percentageOfWorld1 = function (population) {
    return (population * 100) / 7900;
  };
  
  const percentages = [
    percentageOfWorld1(population[0]),
    percentageOfWorld1(population[1]),
    percentageOfWorld1(population[2]),
    percentageOfWorld1(population[3]),
  ];
  
  console.log(percentages);
  */

/*LECTURE: Basic Array Operations (Methods)
  1. Create an array containing all the neighbouring countries of a country of your 
  choice. Choose a country which has at least 2 or 3 neighbours. Store the array 
  into a variable called 'neighbours'
  2. At some point, a new country called 'Utopia' is created in the neighbourhood of 
  your selected country. So add it to the end of the 'neighbours' array
  3. Unfortunately, after some time, the new country is dissolved. So remove it from 
  the end of the array
  4. If the 'neighbours' array does not include the country ‘Germany’, log to the 
  console: 'Probably not a central European country :D'
  5. Change the name of one of your neighbouring countries. To do that, find the 
  index of the country in the 'neighbours' array, and then use that index to 
  change the array at that index position. For example, you can search for
  'Sweden' in the array, and then replace it with 'Republic of Sweden'.*/

/*const neighbours = ["Ucraina", "Moldova", "Bulgaria"];
  neighbours.push("Utopia");
  console.log(neighbours);
  neighbours.pop("");
  console.log(neighbours);
  
  if (!neighbours.includes("Germany")) {
    console.log("'Probably not a central European country");
  }
  neighbours[neighbours.indexOf("Moldova")] = "Republica Moldova";
  console.log(neighbours);*/

/*LECTURE: Introduction to Objects
  1. Create an object called 'myCountry' for a country of your choice, containing 
  properties 'country', 'capital', 'language', 'population' and 
  'neighbours' (an array like we used in previous assignments)
  LECTURE: Dot vs. Bracket Notation
  1. Using the object from the previous assignment, log a string like this to the 
  console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
  and a capital called Helsinki.'
  2. Increase the country's population by two million using dot notation, and then 
  decrease it by two million using brackets notation*/

/*const myCountry = {
    country: "Romania",
    capital: "Bucharest",
    language: "romanian",
    population: 30,
    neighbours: ["Ungaria", "Ucraina", "Moldova", "Serbia", "Bulgaria"],
  
    describe: function () {
      console.log(
        `${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
      );
    },*/

/*console.log(
    `${myCountry2.country} has ${myCountry2.population} million finnish-speaking people, ${myCountry2.neighbours.length} neighbouring countries and a capital called ${myCountry2.capital}.`
  );*/

// console.log(myCountry2.population - 2);
// console.log(myCountry2["population"] + 2);

/*LECTURE: Object Methods
  1. Add a method called 'describe' to the 'myCountry' object. This method 
  will log a string to the console, similar to the string logged in the previous 
  assignment, but this time using the 'this' keyword.
  2. Call the 'describe' method
  3. Add a method called 'checkIsland' to the 'myCountry' object. This 
  method will set a new property on the object, called 'isIsland'. 
  'isIsland' will be true if there are no neighbouring countries, and false if 
  there are. Use the ternary operator to set the property*/

/*const myCountry = {
    country: "Romania",
    capital: "Bucharest",
    language: "romanian",
    population: 30,
    neighbours: ["Ungaria", "Ucraina", "Moldova", "Serbia", "Bulgaria"],
  
    describe: function () {
      console.log(
        `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
      );
    },
  
    checkIsland: function () {
      this.isIsland = this.neighbours.length === 0 ? true : false;
      //this.isIsland = !Boolean(this.neighbours.length);
    },
  };
  
  myCountry.describe();
  myCountry.checkIsland();
  console.log(myCountry);*/

// There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting`);
// }

/*
  
  
  
  LECTURE: Looping Arrays, Breaking and Continuing
  1. Let's bring back the 'populations' array from a previous assignment
  2. Use a for loop to compute an array called 'percentages2' containing the 
  percentages of the world population for the 4 population values. Use the 
  function 'percentageOfWorld1' that you created earlier
  3. Confirm that 'percentages2' contains exactly the same values as the 
  'percentages' array that we created manually in the previous assignment, 
  and reflect on how much better this solution is
  */

const population = [19, 200, 8, 12];
const percentage2 = [];

console.log(population);
console.log(population.length === 4);

const percentageOfWorld1 = function (population) {
  return (population * 100) / 7900;
};

const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];

console.log(percentages);

const percentages2 = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];

/*for (let i = 0; i < percentages.length; i++) {
    console.log(percentages[i]);
  }*/

/*for (let i = 0; i < population.length; i++) {
    const perc = percentageOfWorld1(population[i]);
    percentage2.push(perc);
  }
  console.log(percentage2);*/

/*LECTURE: Looping Backwards and Loops in Loops
  1. Store this array of arrays into a variable called 'listOfNeighbours'
  [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
  'Russia']];
  2. Log only the neighbouring countries to the console, one by one, not the entire 
  arrays. Log a string like 'Neighbour: Canada' for each country
  3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't 
  worry if it's too difficult for you! But you can still try to figure this out anyway*/

/*const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
  ];
  
  for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
      console.log(`Neighbour: ${listOfNeighbours[i][y]}`);*/

/*LECTURE: The while Loop
  1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
  but this time using a while loop (call the array 'percentages3')
  2. Reflect on what solution you like better for this task: the for loop or the while
  loop?*/

/*const population = [19, 200, 8, 12];
  const percentage2 = [];
  
  for (let i = 0; i < population.length; i++) {
    const perc = percentageOfWorld1(population[i]);
    percentage2.push(perc);*/

/*const population = [19, 200, 8, 12];
  const percentage3 = [];
  
  let i = 0;
  while (i < population.length) {
    const perc = percentageOfWorld1(population[i]);
    percentage3.push(perc);
    i++;
  }*/
