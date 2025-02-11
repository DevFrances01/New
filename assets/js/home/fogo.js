
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".dashboard_sidebar");
    const content = document.querySelector(".dashboard_content");
    const menuToggle = document.getElementById("menuToggle");

    // Verifica se o botão existe no HTML antes de adicionar o evento
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            sidebar.classList.toggle("active");
            content.classList.toggle("active");
        });

        // Efeito hover para o botão
        menuToggle.addEventListener("mouseover", function () {
            menuToggle.style.background = "#555";
        });

        menuToggle.addEventListener("mouseout", function () {
            menuToggle.style.background = "#333";
        });
    }
});
