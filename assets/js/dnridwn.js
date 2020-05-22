const socmed = document.querySelectorAll(".list-inline-item")

socmed.forEach((icon) => {
    icon.addEventListener("mouseover", function() {
        this.classList.replace("bg-transparent", "bg-white")
        this.querySelector("a").classList.replace("text-white", "text-black")
    })

    icon.addEventListener("mouseleave", function() {
        this.classList.replace("bg-white", "bg-transparent")
        this.querySelector("a").classList.replace("text-black", "text-white")
    })
})