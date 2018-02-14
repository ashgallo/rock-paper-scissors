/*
1. User selects rock, paper, or scissors
2. Computer randomly chooses
   hint: have your choices in an array and randomly choose 
3. Display the user and computers choice on the screen
4. Display the winner
*/


function startGame(e) {
  var choice = e.target.id
  console.log(choice)
}

var rps = ["rock", "paper", "scissors"]
consol.log(rps)

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}