let dice1 = 0;
let dice2 = 0;
let score = 0;

function rollDice(choice) {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById('dice1').textContent = dice1;
    document.getElementById('dice2').textContent = dice2;

    let total = dice1 + dice2;
    if ((choice === 'up' && total > 7) || (choice === 'down' && total < 7) || (choice === 'seven' && total === 7)) {
        score++;
    } else {
        score--;
    }

    document.getElementById('score').textContent = 'Score: ' + score;
}
