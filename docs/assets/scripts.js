
document.addEventListener("DOMContentLoaded", () => {
        const header = document.querySelector("header");
        window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
        });

        const languageButtons = document.querySelectorAll(".language_button");
        languageButtons.forEach((button) => {
        console.log("Adding event listener to " + button.innerHTML + " button")
        button.addEventListener("click", () => {
            var language = button.innerHTML;
            console.log("Setting langauge to " + language)
            // Remove the "active" class from all buttons
            languageButtons.forEach((button) => {
            button.classList.remove("active");
            });

            // Add the "active" class to the clicked button
            button.classList.add("active");
            document.getElementById("terms_box").src = language + "/home.html"
        });
    });
});


