function toggleDropdown() {
    const dropdown = document.getElementById("contactDropdown");
    const btn = document.querySelector(".dropdown-btn");
    const isOpen = dropdown.classList.toggle("show");
    btn.setAttribute("aria-expanded", isOpen);
}

window.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
        const dropdown = document.getElementById("contactDropdown");
        dropdown.classList.remove("show");
        document.querySelector(".dropdown-btn").setAttribute("aria-expanded", "false");
    }
});

document.getElementById("year").textContent = new Date().getFullYear();