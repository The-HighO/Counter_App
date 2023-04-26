document.title = "Counter App"

const count = document.getElementById("num");
const err =  document.getElementById("error")
let counter = 0;

const increment = () =>{
    if (counter === 10) {
        counter = 10;
        err.textContent = "counter cannot be greater than 10"
        count.style.color = "red"
        err.style.backgroundColor = "red"
        err.style.color = "white"
    }
    else{
        counter += 1
        count.textContent = counter
        count.style.color = "black"
    }
}

const decremet = () =>{
    
    if (counter === 0) {
        counter = 0;
        err.textContent = "counter cannot be less than 0"
        count.style.color = "red"
    }
    else{
        counter -= 1
    count.textContent = counter
    count.style.color = "black"
    }
}
