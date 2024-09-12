let progress = document.querySelector(".progress")
let info = document.querySelector("h3")
let intervel;
let count = 0

intervel = setInterval(function(){
    if(count === 100){
        clearInterval(intervel)
    info.style.display = "block"

    }else{
            count++;
    progress.style.width = count + "%"
    }

}, 50)
