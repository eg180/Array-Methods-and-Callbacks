import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


for(let i=0; i < fifaData.length; i++) {
    let homeTeamName = "";
    if (fifaData[i]["Year"] === 2014 && fifaData[i]["Stage"] === "Final") {
        
        homeTeamName += fifaData[i]["Home Team Name"];

        console.log(homeTeamName); // returns "Germany" as the home team name for 2014's Final.
        
    }
}

// Didn't quite narrow it down to just Germany - but was good practice.


const homeTeam2014Final = fifaData.filter(function(item) {
    // homeTeamName += fifaData[item]["Home Team Name"];
    // return fifaData[item] === 2014 && fifaData[item] === "Final";
    return item["Year"] === 2014 && item["Stage"] === "Final";
});

console.log(homeTeam2014Final);




/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    const finalData = data.filter(function(item) {
        return item["Stage"] === "Final";
    }); return finalData;
};
console.log("Answer to task 2: ")
console.log(getFinals(fifaData));

let finalsData = getFinals(fifaData);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(arrayGeneratedFromGetFinals) {
    let finalsYears = [];
 
    arrayGeneratedFromGetFinals.forEach(function(item){

    //   console.log(item["Year"]);
    finalsYears.push(item.Year);  // or finalsYears.push(item["Year"]);
    
    }); return finalsYears;

}
const getYearsData = getYears(finalsData);
console.log(getYears(finalsData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data) {

    let winners = [];

    let homeTeamScore = 0;
    let awayTeamScore = 0;

    data.forEach(function(item){
        //winners.push(Math.max([item["Home Team Goals"], item["Away Team Goals"]]));
        
        if(item["Home Team Goals"] > item["Away Team Goals"]) {
            winners.push(item["Home Team Name"]);
        } else if ((item["Home Team Goals"] < item["Away Team Goals"])){
            winners.push(item["Away Team Name"]);
        } else if (item["Win conditions"].includes(item["Home Team Name"] || item["Away Team Name"])) {
            winners.push(item["Home Team Name"] || item["Away Team Name"]);
        }
    }); return winners;

};
console.log("below is answer to task 4: ");
const winnersData = getWinners(finalsData);
console.log(winnersData); 

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb_getWinners, cb_getYears) {
    let map1 = cb_getWinners.map((item, index) => {
        return `${item} ${cb_getYears[index]}`;
      }); console.log(map1);
};
console.log("below is answer to task 5: ")
getWinnersByYear(winnersData, getYearsData);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    let totalHomeTeamGoals = 0,
        totalAwayTeamGoals = 0,
        totalMatches = 0;

    for(let i=0; i < data.length; i++) {
        totalHomeTeamGoals += data[i]["Home Team Goals"];
        totalAwayTeamGoals += data[i]["Away Team Goals"];
        totalMatches += 1;
    } return {totalHomeTeamGoals, totalAwayTeamGoals, totalMatches};



};

let homeGoalsAwayGoalsMatches = getAverageGoals(fifaData); // creates an object

function reportgetAverageGoals(cbGetAvgGoals) { // callback to homeGoalsAwayGoalsMatches
    return `Average Home Goals scored: ${(cbGetAvgGoals.totalHomeTeamGoals) / cbGetAvgGoals.totalMatches} Average Away goals scored: ${(cbGetAvgGoals.totalAwayTeamGoals) / cbGetAvgGoals.totalMatches}`
}


console.log("Answer to task 6: ");
console.log(reportgetAverageGoals(homeGoalsAwayGoalsMatches));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
