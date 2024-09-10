let button = document.querySelector("button")
let input = document.querySelector("input")
let list = document.querySelector(".list")
let remove = document.querySelector(".remove")

button.addEventListener("click", function(){
    if(input.value.trim() === ''){}
    else{
        list.innerHTML += `
                <li>${input.value} <span class="remove">remove</span></li>
        
`
        input.value = ''
    }
})


list.addEventListener("click", function(event) {
    console.log(event);
    
    if (event.target.classList.contains("remove")) {
        event.target.parentElement.remove();
    }
});


// here the evernt.target  targets the element which is being clicked
// the classList.contains check weather it has the class named 'remove'
// the parentElement.remove() removes the parent element of the class here the span has the class and its parent is li