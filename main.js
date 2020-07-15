let raceNumber = Math.floor(Math.random() * 1000); 

let registerTime = false; // true or false

let runnerAge = 18; // age 

if (registerTime && runnerAge > 18) {
  raceNumber += 1000;
}


// if age is >= 18 or <= 18  && register time is true or false change time of start race
if (registerTime && runnerAge >= 18) {
  console.log(`Race will begine at 9:30 your race number is ${raceNumber}.`);
} else if (!registerTime && runnerAge >= 18) {
  console.log(`Race will begine at 11:00 your race number is ${raceNumber}.`);
} else if (runnerAge <= 18) {
  console.log(`Race will begine at 12:30 your race number is ${raceNumber}.`);
} 
