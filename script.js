const body = document.getElementById("body");

document.getElementById("osdefault").addEventListener("click", 
    function (event) {
        body.classList.remove("dark", "light")
    }, 
    false);

document.getElementById("dark").addEventListener("click", 
    function (event) {
        body.classList.add("dark")
    }, 
    false);

document.getElementById("light").addEventListener("click", 
    function (event) {
        body.classList.remove("dark")
    }, 
    false);