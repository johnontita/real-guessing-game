const secretNumber=Math.trunc(Math.random()*20)+1 //takes the range 1-20
document.querySelector('.value').textContent=secretNumber // value is class name for the?
document.querySelector('.btn-two').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value)
    console.log(guess,typeof guess)
    if(!guess){
       document.querySelector('.message').textContent='no number'

    }
    else if(guess===secretNumber){
        document.querySelector('.message').textContent='you are the winner🥰'
    }
    else if(guess>secretNumber){
        document.querySelector('.message').textContent='the guess is high than the secret number'

    }
})