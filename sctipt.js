document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const headMenu = document.querySelector(".head_menu");

    menuToggle.addEventListener("click", () => {
        headMenu.classList.toggle("active");
    });
});
