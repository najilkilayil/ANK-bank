
let loadingMain = document.getElementById("loading_main")
let welcomeMain = document.getElementById("welcome_div")
let fillFormMain = document.getElementById("form_main")


let nameInput = document.getElementById("form_full_name")
let balInput = document.getElementById("form_bal_amount")
let passInput = document.getElementById("form_pin")
let conPassInput = document.getElementById("form_pin_con")
let fillFormSubBtn = document.getElementById("form_submit_btn")

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
            welcomeMain.id = "move_left_anim"
            fillFormMain.id = "move_right_anim"
            fillFormMain.style.display = "flex"
            setTimeout(() => {
                welcomeMain.style.display = "none"
            }, 2000);
        }, 4000);
    }, 2000);
}

let accInput = document.getElementById("form_acc_number")

function AccountNum() {
    let digit1 = Math.floor(1000 + Math.random() * 20)
    let digit2 = Math.floor(1000 + Math.random() * 9000)
    
    return `ANK-${digit1}-${digit2}`
}

accInput.value = AccountNum()
nameInput.value = "Robert John"
passInput.value = "1111"
conPassInput.value = "1111"



fillFormSubBtn.addEventListener("click", function(event) {
    event.preventDefault()

    if (nameInput.value === "" || balInput.value === "" || passInput.value.length !== 4) {
        alert("Fill all blanks!")
        return
    }

    if (passInput.value !== conPassInput.value) {
        alert("PIN is not match!")
        return
    }

    showAccSummary()
})
let borderMain = document.getElementById("real_main")
let mainSection = document.getElementById("main_section")
let subSection = document.getElementById("sub_section")
let welcomeTextHead = document.getElementById("welcome_text")
let menuOptionsDiv = document.getElementById("menu_options")
let accSummaryView = document.getElementById("acc_sum_view")
function showAccSummary() {
    fillFormMain.style.display = "none"
    accSummaryView.style.display = "flex"
    accSummaryView.innerHTML = `
        <h2>Account Created Successfully</h2>
        <p>Account Name : ${nameInput.value}</p>
        <p>Account No. : ${accInput.value}</p>
        <p>PIN : ${passInput.value}</p>
        <h3>Please rember your account no.</h3>
    `

    setTimeout(() => {
        accSummaryView.style.display = "none"
        borderMain.style.display = "flex"
        showMenu()
    }, 3000);
}

function showMenu() {
    subSection.style.display = "none"
    mainSection.innerHTML = `
        <div class="welcome_text" id="welcome_text">
            <h1>Welcome, ${nameInput.value}</h1>
            <h3>${accInput.value}</h3>
        </div>
        <div class="menu_options" id="menu_options">
            <button>Balance</button>
            <button>Deposite</button>
            <button>Withdraw</button> 
            <button>Change PIN</button>
            <button>Quit</button>
    `
}