//noprotect
let restartGame = false;
let players = [];
let x = 0;

do{

let userLimit = Number(prompt("Until what limit do you wanna play ?"));

while(Number.isNaN(userLimit)){
  userLimit = Number(prompt("Come on dude, a number please"))
};

while(userLimit > 1000){
  userLimit = Number(prompt("I think 1000 is a decent limit, try that ;)"))
}

let computerNumber = Math.floor((Math.random()+0.1) * userLimit);
let pastGuesses = [];
let playTimes= Number(prompt("How many tries do you want?"));

while(Number.isNaN(playTimes)){
  playTimes = Number(prompt("Come on dude, a number please"))
};

while(playTimes > userLimit){
  playTimes = Number(prompt("No more guesses than the limit..."))
}

let userGuess = Number(prompt("What number do you think it is?"));
var getting = "";
var remainingGuesses;
;



function showChoices() {
  console.log(`the computer chose ${computerNumber}`);
  console.log(`your number is ${userGuess}`);
};




for (var i = 0; i < playTimes  ; i++) {
  for(var j = 0; j < playTimes ; j++){
    if(pastGuesses.indexOf(userGuess) !== -1){
        userGuess = Number(prompt("You already typed this number!"));
      }
  }
  if (Number.isNaN(userGuess) || userGuess < 0 ) {
    userGuess = Number(prompt(`WHAT YOU DOIN, we want a number between 0 and ${userLimit} ...`));
  }  else if (userGuess < computerNumber) {
    var remainingGuesses = (playTimes-1) - i;
    showChoices();
    if (pastGuesses[0] === undefined) {
      pastGuesses.push(userGuess);
      let showPastGuesses = pastGuesses.toString();
      userGuess = Number(prompt(`Wrong, ${remainingGuesses} guesses left. Your previous guesses were ${showPastGuesses}`));
    } else {
      pastGuesses.push(userGuess);
      let showPastGuesses = pastGuesses.toString();
      if ((computerNumber - pastGuesses[i]) < (computerNumber - pastGuesses[i - 1])) {
        var getting = "hotter";
        console.log(`${userGuess} is ${getting}`);
      } else if ((computerNumber - pastGuesses[i]) > (computerNumber - pastGuesses[i - 1])) {
        var getting = "colder";
        console.log(`answer is ${getting}`);
      }
      console.log(showPastGuesses);
      userGuess = Number(prompt(`${userGuess} is ${getting} , ${remainingGuesses} guesses left. Your previous guesses were ${showPastGuesses}`));
    }
  } else if (userGuess > computerNumber) {
    var remainingGuesses = (playTimes-1) - i;
    showChoices();
    if (pastGuesses[0] === undefined) {
      pastGuesses.push(userGuess);
      let showPastGuesses = pastGuesses.toString();
      userGuess = Number(prompt(`Wrong, ${remainingGuesses} guesses left. Your previous guesses were ${showPastGuesses}`));
    } else {
      pastGuesses.push(userGuess);
      let showPastGuesses = pastGuesses.toString();
      if ((computerNumber + pastGuesses[i]) < (computerNumber + pastGuesses[i - 1])) {
        var getting = "hotter";
        console.log(`answer is ${getting}`);
      } else if ((computerNumber + pastGuesses[i]) > (computerNumber +  pastGuesses[i - 1])) {
        var getting = "colder";
        console.log(`answer is ${getting}`);
      }
      console.log(showPastGuesses);
      userGuess = Number(prompt(`${userGuess} is ${getting}, you have ${remainingGuesses} tries left. Your previous guesses were ${showPastGuesses}`));
    }
  } else if (userGuess === computerNumber){
    showChoices();
    initials = prompt(`Great guess! ${computerNumber} is my number you win. Enter your initials for the record books! 3 letters maximum`);
     while(initials.length > 3) {
       initials = prompt("We said 3 letters ...")
     }

    players[x] = {};
    players[x].rank = '';
    players[x].score = 11000 - pastGuesses.length * 1000;
    players[x].name = initials;


    // sort and rank players by highest score
    players.sort(function(a, b){return b.score - a.score});
    for (let j=0; j<players.length; j++) {
      players[j].rank = j + 1;
    }

    // output the scoreboard to the console
    console.clear();
    console.log('--- HALL OF FAME ---')
    console.log('Rank | Score | Name');
    for (let y=0; y < players.length; y++) {
      console.log(Object.values(players[y]).join('      '));
    }

    x = x + 1;
    restartGame = confirm('Play again?');
    break;
  } else if(i === (playTimes-1) ){
    alert("game is finished !! you didn't guess it in time")
  }
}

} while (restartGame == true);