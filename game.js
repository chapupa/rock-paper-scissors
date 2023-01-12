        

        

        function getComputerChoice () {
            let randomNumber = Math.floor(Math.random() * 3);
            switch (randomNumber) {
            case 0:
            return "rock";
            break;
            case 1:
            return "scissors";
            break;
            case 2:
            return "paper";
            break;
            };
        }
            console.log(getComputerChoice());

        const playerSelection = "rock";
        const computerSelection = getComputerChoice();

        function playRound(playerSelection, computerSelection) {
            if (playerSelection > computerSelection) {
                return "You Won!"
            } else if (playerSelection < computerSelection) {
                return "You Lost."
            } else {
                return "You Tied."
            }
        }

        
        console.log(playRound(playerSelection, computerSelection));