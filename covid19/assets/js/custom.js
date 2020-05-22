window.addEventListener("scroll", function() {
    const navbarHeight = Number($(".navbar").css("height").replace("px", ""))
    
    if (window.scrollY < window.innerHeight - navbarHeight) {
        $("#fab-up").removeClass("d-flex").addClass("d-none")
        $("nav").removeClass("bg-dark shadow")
    } else {
        $("#fab-up").removeClass("d-none bg-primary").addClass("d-flex bg-primary")
        $("nav").addClass("bg-dark shadow")
    }
})