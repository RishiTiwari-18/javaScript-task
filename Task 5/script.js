let count = document.querySelector(".count")
let button = document.querySelector(".button")

let counter = 0
let interval;
let startStop = true


button.addEventListener("click", function(){
    if(startStop === true){
        interval = setInterval(() => {
            counter++
            count.textContent = counter
            button.textContent = "Stop"
            startStop = false
        }, 1000);
    }else{
        clearInterval(interval)
        button.textContent = "Start"
        startStop = true
    }
})