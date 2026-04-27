function changeMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
    } else {
        localStorage.setItem("theme", "light-mode");
    }
}

let theme = localStorage.getItem("theme");
if (theme === "dark-mode") {
    document.body.classList.add("dark-mode");
}

function clearStorage(){
    localStorage.clear();
    window.location.reload();
}