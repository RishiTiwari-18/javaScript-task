let tabs = document.querySelectorAll("h3")
let content = document.querySelectorAll("p")

content[0].style.display = 'block'

tabs.forEach(function(tab , index){
    tab.addEventListener("click", function(){
        hideAllText()
        content[index].style.display = "block"
    })
})


function hideAllText(){
    content.forEach(function(text){
        text.style.display = "none"
    })
}

