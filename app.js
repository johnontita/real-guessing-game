const secretNumber=Math.trunc(Math.random()*20)+1 //takes the range 1-20
document.querySelector('.value').textContent=secretNumber // value is class name for the?
document.querySelector('.two').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value)
    console.log(guess,typeof guess)
     if(!guess){
         
        document.querySelector('.message').textContent='no number'
        //manipulating the css 
        document.querySelector('body').style.backgroundColor='yellow'
        document.querySelector('.value').style.backgroundColor='cyan'
        document.querySelector('.value').style.width='10%'

    }
    else if(guess===secretNumber){
       document.querySelector('.message').textContent='you are the winner🥰'
       document.querySelector('body').style.backgroundColor='#3434'
       document.querySelector('.value').style.backgroundColor='white'
    }
    else if(guess>secretNumber){
        document.querySelector('.message').textContent='the guess is higher than the secret number😒'
        document.querySelector('body').style.backgroundColor='#6007'
        

    }
    else if(guess<secretNumber){
        document.querySelector('.message').textContent='the guess is low'
        document.querySelector('body').style.backgroundColor='#5000'
    }
})