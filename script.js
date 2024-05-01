let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const  userScorePara = document.querySelector("#user-score");
const  compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const DrowGame = () =>{
    console.log("Drow Game");
    msg.innerText = "Drow Game, Play Again !";
    msg.style.backgroundColor = "yellow";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;      // console.log("You Win !");
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        comScore++;    // console.log("You Lose !");
        compScorePara.innerText = comScore;
        msg.innerText =`You Lose ! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice : " , userChoice);
    // Generate the computerChoice
    const compChoice = genComChoice();
    console.log("computer choice : " , compChoice);

    if(userChoice === compChoice){
        // Drow game
        DrowGame();     //functioncall
    }else{
        let userWin = false;
        if(userChoice === "rock"){
            // scissor, paper
            userWin = compChoice === "paper" ? false : true ;
        } else if (userChoice === "paper" ) {
            //  rock, scissor
            userWin = compChoice === "scissors" ? false : true ;
        } else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true ;
         }
        showWinner(userWin , userChoice, compChoice );
    }
};      

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice =  choice.getAttribute("id")
    //   console.log("choice was clicked ", userChoice);
      playGame(userChoice);
        
    });
});

