function changeMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    let mode = localStorage.getItem("theme");
    if(mode === "light-mode"){
        localStorage.setItem("theme","dark-mode")
    }else{
        localStorage.setItem("theme","light-mode")
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