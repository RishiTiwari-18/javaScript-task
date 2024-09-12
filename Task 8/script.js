const data = [
    {name: "Rishi", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Loki", src: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {name: "Emma", src: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {name: "mini", src: "https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
    {name: "Zelu", src: "https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]
let people = document.querySelector(".people")
let input = document.querySelector("input")
let person = "" ;

data.forEach((elem) => {
    person += `                <div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h3>${elem.name}</h3>
                </div>`
})


people.innerHTML = person


input.


