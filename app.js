let userScore = 0;
let compScore = 0;
let msgPara = document.querySelector("#msg");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");
// selecting choice box;

const choices = document.querySelectorAll(".choice");

const getCompChoice = () => {
  const opt = ["rock","paper","scissors"];
  let randomNum = Math.floor(Math.random()*3);
  return opt[randomNum];

}

const drowGame = ()=>{
  console.log("!! Game Drow !!");
  msgPara.innerText = "Game was Drow. Play again.";
}
const showWinner = (userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorepara.innerText = userScore;
    console.log("You Win");
    msgPara.innerText = (`You win! Your ${userChoice} beats ${compChoice}`);
  }
  else{
    compScore++;
    compScorepara.innerText = compScore;
    console.log("You Lose");
    msgPara.innerText = "You Lose";
    msgPara.innerText = (`You Lose! comp ${compChoice} beats your ${userChoice}`);
  }
}
const playGame = (userChoice)=>{
  console.log("user choice is = ",userChoice)
  let compChoice = getCompChoice();
  console.log("comp choice is = ",compChoice);
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
    showWinner(userWin,userChoice,compChoice);
  }
}

//! user choice
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})
