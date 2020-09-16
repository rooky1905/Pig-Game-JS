/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores, current, active, playing, active_player, active_score;
var win;

init();
document.querySelector('.btn-roll').addEventListener('click', function () {
    
    if (playing){
        dice_number = Math.floor(Math.random() * 6) + 1;
        active_player = 'current-'+active;
        active_score = 'score-' + active;
        if (dice_number!==1){
            current += dice_number;
            document.getElementById(active_player).textContent = current;
            document.querySelector('.dice').style.display = 'block';
            document.querySelector('.dice').src = 'dice-' + dice_number + '.png';
        }else{
            nextPlayer();
          }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(playing){
        scores[active] += current;
        win = document.getElementById('input').value;
        console.log(win);
        
        if(scores[active]>=win)
            {   var act = 'name-'+active;
                document.getElementById(act).textContent = 'WINNER';
                document.getElementById(active_score).textContent = scores[active];
                document.querySelector('.dice').style.display = 'none';
                playing = false;
            }
        else{
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    
    playing = true;
    scores = [0, 0];
    current = 0;
    active = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
}

function nextPlayer(){
    document.getElementById(active_score).textContent = scores[active];
    active === 1?active=0:active=1;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    current = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}