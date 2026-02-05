function toggleDropdown() {
    document.getElementById("contactDropdown").classList.toggle("show");
}

// Close dropdown if user clicks anywhere else on the screen
window.onclick = function(event) {
    if (!event.target.closest('.dropdown')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}