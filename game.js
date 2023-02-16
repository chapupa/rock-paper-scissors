        
        let humanScore = 0;
        let computerScore = 0;
        let tieGame = 0;
        

        function getComputerChoice () {
            let randomNumber = Math.floor(Math.random() * 3) + 1;
            switch (randomNumber) {
            case 1:
            return "rock";
            break;
            case 2:
            return "scissors";
            break;
            case 3:
            return "paper";
            break;
            };
        }

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === 'rock' && computerSelection === 'scissors') {
                humanScore += 1;
                return `${playerSelection} beats ${computerSelection}! You Won!`;
            } else if (playerSelection === 'rock' && computerSelection === 'paper') {
                computerScore += 1;
                return `${playerSelection} loses to ${computerSelection}. You Lost.`;
            }
            
            if (playerSelection === 'scissors' && computerSelection === 'paper') {
                humanScore += 1;
                return `${playerSelection} beats ${computerSelection}! You Won!`;
            } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                computerScore += 1;
                return `${playerSelection} loses to ${computerSelection}. You Lost.`;
            }

            if (playerSelection === 'paper' && computerSelection === 'rock') {
                humanScore += 1;
                return `${playerSelection} beats ${computerSelection}! You Won!`;
                } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                computerScore += 1;
                return `${playerSelection} loses to ${computerSelection}. You Lost.`;
                }

            if (playerSelection === computerSelection) {
                tieGame += 1;
                return "It's a tie.";
                } 
            }
        
            let computerSelection = getComputerChoice();

        function game () {
            for (let i = 0; i < 5; i++) {
            let question = prompt('Rock, Paper, or Scissors?');
            playerSelection = question; 
            question = question.toLowerCase;   
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            }
        return `You won ${humanScore} game(s), the computer won ${computerScore} game(s) and you tied ${tieGame} out of 10 games.`
        }
        game();
        alert(game());

        