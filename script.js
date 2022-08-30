let text = document.querySelectorAll(".text");

text.forEach((text) => {
    text.addEventListener('click', () =>{
        text.classList.toggle("active");
    })
})