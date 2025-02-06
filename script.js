document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const moonIcon = "ri-moon-line";
    const sunIcon = "ri-sun-line";

    // Check saved theme in localStorage
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.innerHTML = `<i class="${sunIcon}"></i>`;
    } else {
        themeToggle.innerHTML = `<i class="${moonIcon}"></i>`;
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = `<i class="${sunIcon}"></i>`;
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = `<i class="${moonIcon}"></i>`;
        }
    });
});
