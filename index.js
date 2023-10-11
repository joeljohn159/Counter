const counterValue = document.querySelector('.counter-value');
const counterIncrease = document.querySelector('.counter-increase');
const counterDecrease = document.querySelector('.counter-decrease');
const counterReset = document.querySelector('.counter-reset');
const container = document.querySelector('.container');
const counterTitle = document.querySelector('.counter-title');

counterIncrease.addEventListener('click', ()=>{
    if(counterValue.textContent >= 10){
        counterValue.textContent = 10;
        container.classList.add("container--max");
        counterTitle.textContent = "MAX"
    }else{
        counterValue.textContent = parseInt(counterValue.textContent) + 1;
    }

})
counterDecrease.addEventListener('click', ()=>{
    if(counterValue.textContent <= 0){
        counterValue.textContent = 0;
    }else{
        counterValue.textContent = parseInt(counterValue.textContent) -  1;
        counterTitle.textContent = "COUNTER 1-10"
        container.classList.remove("container--max");
    }
})
counterReset.addEventListener('click', ()=>{
        counterValue.textContent = 0;
        counterTitle.textContent = "COUNTER 1-10"
        container.classList.remove("container--max");
})

