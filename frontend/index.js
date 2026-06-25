
function toggleMenu() {
    const menu = document.getElementById("menu");
    const icon = document.getElementById("icon");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        icon.textContent = "✕";
    } else {
        icon.textContent = "☰";
    }
}