const body = document.getElementById("body");

document.getElementById("osdefault").addEventListener("click", 
    function (event) {
        body.classList.add("osdefault")
        body.classList.remove("dark")
    }, 
    false);

document.getElementById("dark").addEventListener("click", 
    function (event) {
        body.classList.add("dark")
        body.classList.remove("osdefault")
    }, 
    false);

document.getElementById("light").addEventListener("click", 
    function (event) {
        body.classList.remove("osdefault", "dark")
    }, 
    false);