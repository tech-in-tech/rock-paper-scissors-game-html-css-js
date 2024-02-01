let userScore = 0;
let compScore = 0;

// selecting choice box;

const choices = document.querySelectorAll(".choice");

const getCompChoice = () => {
  const opt = ["rock","paper","scissors"];
  let randomNum = Math.floor(Math.random()*3);
  return opt[randomNum];

}

const drowGame = ()=>{
  console.log("!! Drow Game !!");
}
const showWinner = (userWin)=>{
  if(userWin){
    console.log("!! You Win !!");
  }
  else{
    console.log("!! You Loss !!");
  }
}
const playGame = (userChoice)=>{
  console.log("user choice is",userChoice)
  let compChoice = getCompChoice();
  console.log("comp choice is",compChoice);
  if(userChoice===compChoice){
    drowGame();
  }
  else{
    let userWin = true;
    if(userChoice ==="rock"){
      userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice ==="paper"){
      userWin = compChoice==="scissors" ? false : true;
    }
    else{
      userWin = compChoice === "rock" ? false : true ;
    }

    showWinner(userWin);

  }
}

//! user choice
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})
