
let loadingMain = document.getElementById("loading_main")

welcomeLoad()

function welcomeLoad() {
    setTimeout(() => {
        loadingMain.id = "move_left_anim"
        setTimeout(() => {
            loadingMain.style.opacity = "0"
            loadingMain.style.display = "none"
        }, 2500);
    }, 2000);
}