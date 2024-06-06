const secretNumber=Math.trunc(Math.random()*20)+1 //takes the range 1-20
document.querySelector('.value').textContent=secretNumber // value is class name for the?
document.querySelector('.two').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value)
    console.log(guess,typeof guess)
     if(!guess){
        //without using console.log() it fails to output 
        console.log(document.querySelector('.message').textContent='no number')
        

    }
    else if(guess===secretNumber){
       console.log(document.querySelector('.message').textContent='you are the winner🥰')
    }
    else if(guess>secretNumber){
        document.querySelector('.message').textContent='the guess is higher than the secret number😒'

    }
})