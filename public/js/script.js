const roll = document.querySelector('#roll_cs');
const hold = document.querySelector('#hold_cs');
const dices = document.querySelector('.dice_cs');
const cur0 = document.querySelector('#cur_score-0');
const cur1 = document.querySelector('#cur_score-1');
const player0 = document.querySelector('.player0_cs');
const player1 = document.querySelector('.player1_cs');
const restart = document.querySelector('#restart_cs');
const p0score = document.querySelector('.p0score');
const p1score = document.querySelector('.p1score');
let score,activePlayer,curScore,playing;
const init = ()=>{
     score = [0,0];
     activePlayer = 0 ;
     curScore = 0;
     playing = true;
    p0score.textContent = 0;
    p1score.textContent = 0; 
    cur0.textContent=0;
    cur1.textContent=0;
    document.querySelector(`.player${activePlayer}_cs`).classList.remove('winner');
    document.querySelector(`#socre-${activePlayer}`).textContent = score[activePlayer];

}
init();
swithPlayer = ()=>{
    document.querySelector(`#cur_score-${activePlayer}`).textContent = 0;
    document.querySelector(`#socre-${activePlayer}`).textContent = score[activePlayer];
    activePlayer = activePlayer === 0 ?  1: 0;
    curScore = 0;
    player0.classList.toggle('activeplayer');
    player1.classList.toggle('activeplayer');
}
roll.addEventListener('click',function(){
    if(playing){
        const diceNo = Math.trunc(Math.random() * 6) + 1;
        dices.src=`public/src/img/dice-${diceNo}.png`
        if(diceNo != 1){
            curScore += diceNo;
            document.querySelector(`#cur_score-${activePlayer}`).textContent = curScore;
        }else{
            if(score[activePlayer] >= 100){
                document.querySelector(`.player${activePlayer}_cs`).classList.add('winner');
                playing=false;
            }else{
             swithPlayer();
            }
            
        }
    }
   
})

hold.addEventListener('click',function(){
    if(playing){
        score[activePlayer]+=curScore;
        // document.querySelector(`#socre-${activePlayer}`).textContent = score[activePlayer];
        // document.querySelector(`#cur_score-${activePlayer}`).textContent = 0;
        if(score[activePlayer] >= 100){
            document.querySelector(`.player${activePlayer}_cs`).classList.add('winner');
            playing=false;
        }else{
            swithPlayer();
        }
    }
   
})

restart.addEventListener('click',function(){
    init();
})