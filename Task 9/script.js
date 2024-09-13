let textArea = document.querySelector("textarea")
let characterCount = document.querySelector(".characterCount")

textArea.addEventListener("input", function(){
    characterCount.textContent = textArea.value.length
})