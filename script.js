let increment = document.querySelector(".incr");
let decrement = document.querySelector(".dec");
let reset = document.querySelector(".reset");
let counter = document.querySelector("p");
let input = document.querySelector("input");

let incrdec = 1;

input.addEventListener("change",function(){

    let value = input.value;

    if(value == ""){
        incrdec = 1;
        return;
    }

    if(incrdec<0){
        incrdec = 1;
        alert("Please enter the positive values");
        return;
    }
    incrdec = parseInt(value);
})

increment.addEventListener("click",function(){
    let value = parseInt(counter.innerText);
    value = value + incrdec;
    counter.innerText = value;
})

decrement.addEventListener("click",function(){
    let value = parseInt(counter.innerHTML);
    value = value - incrdec;
    counter.innerHTML = value
})

reset.addEventListener("click",function(){
    counter.innerHTML = 0;
    incrdec = 1;
    input.value = 0;
})