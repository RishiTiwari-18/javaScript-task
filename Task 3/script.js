let input = document.querySelectorAll('input[type="text"')
let form = document.querySelector(".myForm")



form.addEventListener("submit", function(event){
    event.preventDefault();
    input.forEach(function(inp){
        if(inp.value === ''){
            alert("error")
        }
    })
})







