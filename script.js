
let loadingMain = document.getElementById("loading_main")
let welcomeMain = document.getElementById("welcome_div")

welcomeLoad()

function welcomeLoad() {
    setTimeout(() => {
        loadingMain.id = "move_left_anim"
        welcomeMain.style.display = "block"
        welcomeMain.id = "move_right_anim"
        setTimeout(() => {
            loadingMain.style.opacity = "0"
            loadingMain.style.display = "none"
        }, 2500);
        setTimeout(() => {
            welcomeMain.style.display = "none"
        }, 4000);
    }, 2000);
}