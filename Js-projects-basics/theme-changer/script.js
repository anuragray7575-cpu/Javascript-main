const body = document.body;
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", () =>   {
    if (toggle.checked){
        body.classList.remove("light");
        body.classList.add("dark");
    } else{
        body.classList.remove("dark");
        body.classList.add("light");
    }

}) ;