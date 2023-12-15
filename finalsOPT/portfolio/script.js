document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        })
    })
})

const container = document.getElementById("main");

container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        container.scrollLeft += 100;
        e.preventDefault();
    } else {
        container.scrollLeft -= 100;
        e.preventDefault();
    }
});
