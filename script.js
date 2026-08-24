
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



fillFormSubBtn.addEventListener("click", function (event) {
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
            <button onclick="optBal()">Balance</button>
            <button onclick="optDepo()">Deposite</button>
            <button>Withdraw</button> 
            <button>Change PIN</button>
            <button>Quit</button>
    `
}

let balPinInput
function optBal() {
    subSection.style.display = "block"
    mainSection.innerHTML = `
        <div class="pin_text" id="pin_text">
            <h3>Enter Your PIN</h3>
            <input type="password" id="bal_pin_input" maxlength="4" readonly>
        </div>
    `

    balPinInput = document.getElementById("bal_pin_input")
    subSection.innerHTML = `
        <div class="dial_pad" id="dial_pad">
            <button onclick="pinInputFun(balPinInput, '1')">1</button>
            <button onclick="pinInputFun(balPinInput, '2')">2</button>
            <button onclick="pinInputFun(balPinInput, '3')">3</button>
                
            <button onclick="pinInputFun(balPinInput, '4')">4</button>
            <button onclick="pinInputFun(balPinInput, '5')">5</button>
            <button onclick="pinInputFun(balPinInput, '6')">6</button>
                
            <button onclick="pinInputFun(balPinInput, '7')">7</button>
            <button onclick="pinInputFun(balPinInput, '8')">8</button>
            <button onclick="pinInputFun(balPinInput, '9')">9</button>
                
            <button onclick="pinInputFun(balPinInput, 'clear')">Clear</button>
            <button onclick="pinInputFun(balPinInput, '0')">0</button>
            <button onclick="pinInputFun(balPinInput, 'check')">Check</button>
        </div>
    `
}

let PIN = passInput.value
function pinInputFun(Xinput, num) {
    function pinNum(num) {
        if (Xinput.value.length < 4) {
            Xinput.value += num
        }
    }

    function clearPin() {
        Xinput.value = ""
    }

    function checkPin() {
        if (Xinput.value === PIN) {
            alert("Correct Password")
            if (Xinput === balPinInput) {
                balWindow()
            }
            else if (Xinput === depoPinInput) {
                depoWindow()
            }
        }
        else {
            alert("Incorrect Password")
            return
        }
    }

    if (num === "clear") {
        clearPin()
    }
    else if (num === "check") {
        checkPin()
    }
    else {
        pinNum(num)
    }
}

function balWindow() {
    subSection.style.display = "none"
    mainSection.innerHTML = `
        <div class="bal_view" id="bal_view">
            <h3>Available Balance</h3>
            <h2>₹ ${balInput.value}</h2>

            <button onclick="showMenu()">Back</button>
        </div>
    `
}

let depoPinInput
function optDepo() {
    subSection.style.display = "block"
    mainSection.innerHTML = `
        <div class="pin_text" id="pin_text">
            <h3>Enter Your PIN</h3>
            <input type="password" maxlength="4" readonly id="depo_pin_input">
        </div>
    `

    depoPinInput = document.getElementById("depo_pin_input")
    subSection.innerHTML = `
        <div class="dial_pad" id="dial_pad">
            <button onclick="pinInputFun(depoPinInput, '1')">1</button>
            <button onclick="pinInputFun(depoPinInput, '2')">2</button>
            <button onclick="pinInputFun(depoPinInput, '3')">3</button>
                
            <button onclick="pinInputFun(depoPinInput, '4')">4</button>
            <button onclick="pinInputFun(depoPinInput, '5')">5</button>
            <button onclick="pinInputFun(depoPinInput, '6')">6</button>
                
            <button onclick="pinInputFun(depoPinInput, '7')">7</button>
            <button onclick="pinInputFun(depoPinInput, '8')">8</button>
            <button onclick="pinInputFun(depoPinInput, '9')">9</button>
                
            <button onclick="pinInputFun(depoPinInput, 'clear')">Clear</button>
            <button onclick="pinInputFun(depoPinInput, '0')">0</button>
            <button onclick="pinInputFun(depoPinInput, 'check')">Check</button>
        </div>
    `
}

let depoMoneyInput
function depoWindow() {
    mainSection.innerHTML = `
        <div class="depo_view">
            <h3>Deposit Money</h3>
            <input type="text" readonly id="depo_money_input_el">
            <p id="money_input_error_text">Multiple of 100</p>
        </div>
    ` 

    depoMoneyInput = document.getElementById("depo_money_input_el")

    let moneyInputErrorText = document.getElementById("money_input_error_text")

    depoMoneyInput.addEventListener("input", function() {
        let amount = Number(depoMoneyInput.value)

        if (amount % 100 !== 0) {
            moneyInputErrorText.textContent = "Amount must be a multiple of ₹100"
        }
        else {
            moneyInputErrorText.textContent = ""
        }
    })
    subSection.innerHTML = `
        <div class="dial_pad" id="dial_pad">
            <button onclick="moneyInputFun(depoMoneyInput, '1')">1</button>
            <button onclick="moneyInputFun(depoMoneyInput, '2')">2</button>
            <button onclick="moneyInputFun(depoMoneyInput, '3')">3</button>
                
            <button onclick="moneyInputFun(depoMoneyInput, '4')">4</button>
            <button onclick="moneyInputFun(depoMoneyInput, '5')">5</button>
            <button onclick="moneyInputFun(depoMoneyInput, '6')">6</button>
                
            <button onclick="moneyInputFun(depoMoneyInput, '7')">7</button>
            <button onclick="moneyInputFun(depoMoneyInput, '8')">8</button>
            <button onclick="moneyInputFun(depoMoneyInput, '9')">9</button>
                
            <button onclick="moneyInputFun(depoMoneyInput, 'clear')">Back</button>
            <button onclick="moneyInputFun(depoMoneyInput, '0')">0</button>
            <button onclick="moneyInputFun(depoMoneyInput, 'enter')">Enter</button>
        </div>
    `
}

let depoMoney
function moneyInputFun(moneyInput, num) {
    function moneyAdd(num) {
        moneyInput.value += num
        moneyInput.dispatchEvent(new Event("input"))
    }

    function clearMoney() {
        moneyInput.value = ""
        moneyInput.dispatchEvent(new Event("input"))
    }
    
    function enterMoney() {
        depoMoney = moneyInput.value
        alert(`Your deposited money ${depoMoney}`)
    }

    if (num === "clear") {
        clearMoney()
    }
    else if (num === "enter") {
        enterMoney()
    }
    else {
        moneyAdd(num)
    }
}