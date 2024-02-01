let userScore = 0;
let compScore = 0;

// selecting choice box;

const choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    console.log("Choice was click",userChoice);
  })
})
