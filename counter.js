
let counter = document.querySelector('.counter');
let count = 0;
counter.innerText = count;
counter.style.color = 'green';

function giveColor(){
    if(count===0) counter.style.color = 'green';
    else if(count > 0) counter.style.color = 'blue';
    else counter.style.color = 'red';
}
function plus(){
    console.log('plus')
    count++;
    counter.innerText = count;
    giveColor();

}
function minus(){
    console.log('minus')
    count--;
    counter.innerText = count;
    giveColor();

}