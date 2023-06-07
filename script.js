const game = () => {
    let playerScore = 0;
    let compScore = 0;
    let rounds = 0;
   
    const playGame = () => {
        const rockButton = document.querySelector('.rock');
        const paperButton = document.querySelector('.paper');
        const scissorButton = document.querySelector('.scissors');
        const playerChoice = [rockButton,paperButton,scissorButton];
        const compOptions = ['rock','paper','scissors']
          
        playerChoice.forEach(option => {
            option.addEventListener('click',function(){
  
                const roundsLeft = document.querySelector('.roundsLeft');
                rounds++;
                roundsLeft.innerText = `Rounds Left: ${5-rounds}`;
                  
  
                const choiceNumber = Math.floor(Math.random()*3);
                const compChoice = compOptions[choiceNumber];
  
                roundResult(this.innerText,compChoice)
                  
                if(rounds == 5){
                    gameResult(playerChoice,roundsLeft);
                }
            })
        })
          
    }

    const roundResult = (player,comp) => {
        const results = document.querySelector('.results');
        const pScoreBoard = document.querySelector('.playerCount');
        const cScoreBoard = document.querySelector('.compCount');
        player = player.toLowerCase();
        comp = comp.toLowerCase();
        if(player === comp){
            results.textContent = 'Tie!'
        }
        else if(player == 'rock'){
            if(comp == 'paper'){
                results.textContent = 'Comp won, paper beats rock!';
                compScore++;
                cScoreBoard.textContent = compScore;
  
            }else{
                results.textContent = 'You won, rock beats scissors!';
                playerScore++;
                pScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(comp == 'rock'){
                results.textContent = 'Comp won, rock beats scissors!';
                compScore++;
                cScoreBoard.textContent = compScore;
            }else{
                results.textContent = 'You won, scissors beats paper!';
                playerScore++;
                pScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(comp == 'scissors'){
                results.textContent = 'Comp won, scissors beat paper!';
                compScore++;
                cScoreBoard.textContent = compScore;
            }else{
                results.textContent = 'You won, paper beats rock!';
                playerScore++;
                pScoreBoard.textContent = playerScore;
            }
        }
    }

    const gameResult = (playerOptions) => {     
        const results = document.querySelector('.results');
        const reloadButton = document.querySelector('.startOver');
  
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
  
        if(playerScore > compScore){
            results.textContent = 'You Win! Woohoo!';
            results.style.color = '#1f2937';
        }
        else if(playerScore < compScore){
            results.textContent = 'You Lost! Boohoo!';
            results.style.color = '#1f2937';
        }
        else{
            results.textContent = 'Tie!!';
            results.style.color = '#1f2937';
        }
        reloadButton.innerText = 'Play Again';
        reloadButton.style.display = 'flex';
        reloadButton.style.justifyContent = 'center';
        reloadButton.style.alignItems = 'center';
        reloadButton.addEventListener('click',() => {
            window.location.reload();
        })
    }
  
    playGame();
   
}
game();