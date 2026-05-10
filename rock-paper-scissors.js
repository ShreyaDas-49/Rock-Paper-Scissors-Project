const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScoreElement();

    function playGame(userMove) {
      const computerMove = pickComputerMove();

      let result = '';

      if (userMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You lose.';
        } else {
          result = 'You win.';
        }
      }

      else if (userMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'Tie.';
        } else {
          result = 'You lose.';
        }
      }

      else {
        if (computerMove === 'rock') {
          result = 'You lose.';
        } else if (computerMove === 'paper') {
          result = 'You win.';
        } else {
          result = 'Tie.';
        }
      }

      if (result === 'You win.') {
        score.wins += 1;
      }
      else if (result === 'You lose.') {
        score.losses += 1;
      }
      else {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `You <img src="images/${userMove}.png" class="button-img"> <img src="images/${computerMove}.png" class="button-img"> Computer`;
    }

    function updateScoreElement() {
      document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
      document.querySelector('.js-result').innerHTML = '';
      document.querySelector('.js-moves').innerHTML = '';
    }

    function pickComputerMove() {
      const randomNumber = (Math.random());
      let computerMove = '';
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else {
        computerMove = 'scissors';
      }

      return computerMove;
    }