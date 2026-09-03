
let loadingMain = document.getElementById("loading_main")
let welcomeMain = document.getElementById("welcome_div")
let fillFormMain = document.getElementById("form_main")


let nameInput = document.getElementById("form_full_name")
let balInput = document.getElementById("form_bal_amount")
let passInput = document.getElementById("form_pin")
let conPassInput = document.getElementById("form_pin_con")
let fillFormSubBtn = document.getElementById("form_submit_btn")

let accInput = document.getElementById("form_acc_number")

let borderMain = document.getElementById("real_main")
let mainSection = document.getElementById("main_section")
let subSection = document.getElementById("sub_section")
let welcomeTextHead = document.getElementById("welcome_text")
let menuOptionsDiv = document.getElementById("menu_options")
let accSummaryView = document.getElementById("acc_sum_view")

let balPinInput
let PIN = passInput.value

let depoPinInput
let depoMoneyInput
let depoMoney

let balAmount = Number(balInput.value)

let withPinInput
let withCustomInput
let withAmount

let loadProcessWindow

let pinChangePin
let changePinInputEl
let changeConPInInputEl
let changedPIN

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
            }, 500);
        }, 4000);
    }, 2000);
}



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

    PIN = passInput.value
    showAccSummary()
})

function showAccSummary() {
    // fillFormMain.id = "move_left_anim"
    // accSummaryView.id = "move_right_anim"
    // accSummaryView.style.display = "flex"
    // fillFormMain.id = "move_left_anim"
    // setTimeout(() => {
    //     fillFormMain.style.display = "none"
    // }, 2500);
    accSummaryView.innerHTML = `
        <div>✓</div>
        <h2>Account Created <br> <span> Successfully </span></h2>
        <p id="psub">Your ANK Bank account is ready</p>

        <section class="acc_sum_view_subsection" id="acc_sum_view_subsection1">
            <h5>ACCOUNT HOLDER</h5>
            <p>${nameInput.value}</p>
        </section>
        <section class="acc_sum_view_subsection" id="acc_sum_view_subsection2">
            <h5>ACCOUNT NUMBER</h5>
            <p>${accInput.value}</p>
        </section>
        <h3>Please rember your account no.</h3>
    `

    accSummaryView.style.display = "flex"
    accSummaryView.id = "move_right_anim"

    fillFormMain.id = "move_left_anim"
    setTimeout(() => {
        fillFormMain.style.display = "none"
    }, 2500);
    setTimeout(() => {
        accSummaryView.style.display = "none"
        borderMain.style.display = "flex"
        showMenu()
    }, 4500);
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
            <button onclick="optWith()">Withdraw</button> 
            <button onclick="optPin()">Change PIN</button>
            <button onclick="optQuit()">Quit</button>
    `
}

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
            if (Xinput === balPinInput) {
                balWindow()
            }
            else if (Xinput === depoPinInput) {
                depoWindow()
            }
            else if (Xinput === withPinInput) {
                withWindow()
            }
            else if (Xinput === pinChangePin) {
                changePinWindow()
            }
        }
        else {
            alert("Incorrect Password")
            Xinput.value = ""
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
            <h2>₹ ${balAmount}</h2>

            <button onclick="showMenu()">Back</button>
        </div>
    `
}

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

    depoMoneyInput.addEventListener("input", function () {
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
        depoWindowSuccess()
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

function depoWindowSuccess() {
    loadingWindow()
    setTimeout(() => {
        balAmount += Number(depoMoney)
        subSection.style.display = "none"
        mainSection.innerHTML = `
            <div class="depo_success" id="depo_success">
                <h3>Deposit Successfully</h3>
                <h2>₹ ${depoMoney}</h2>

                <h3>Current Balance</h3>
                <h2>₹ ${balAmount}</h2>

                <button onclick="showMenu()">Back</button>
            </div>
        `
    }, 2000);
}

function optWith() {
    subSection.style.display = "block"
    mainSection.innerHTML = `
        <div class="pin_text" id="pin_text">
            <h3>Enter Your PIN</h3>
            <input type="password" id="with_pin_input" maxlength="4" readonly>
        </div>
    `

    withPinInput = document.getElementById("with_pin_input")
    subSection.innerHTML = `
        <div class="dial_pad" id="dial_pad">
            <button onclick="pinInputFun(withPinInput, '1')">1</button>
            <button onclick="pinInputFun(withPinInput, '2')">2</button>
            <button onclick="pinInputFun(withPinInput, '3')">3</button>
                
            <button onclick="pinInputFun(withPinInput, '4')">4</button>
            <button onclick="pinInputFun(withPinInput, '5')">5</button>
            <button onclick="pinInputFun(withPinInput, '6')">6</button>
                
            <button onclick="pinInputFun(withPinInput, '7')">7</button>
            <button onclick="pinInputFun(withPinInput, '8')">8</button>
            <button onclick="pinInputFun(withPinInput, '9')">9</button>
                
            <button onclick="pinInputFun(withPinInput, 'clear')">Clear</button>
            <button onclick="pinInputFun(withPinInput, '0')">0</button>
            <button onclick="pinInputFun(withPinInput, 'check')">Check</button>
        </div>
    `
}

function withWindow() {
    subSection.style.display = "none"
    mainSection.innerHTML = `
        <div class="with_view" id="with_view">
            <h3>Withdraw Money</h3>

            <div class="with_money_btns" id="with_money_btns">
                <button onclick="withdrawAmount(100)">₹ 100</button>
                <button onclick="withdrawAmount(200)">₹ 200</button>
                    
               <button onclick="withdrawAmount(500)">₹ 500</button>
               <button onclick="withdrawAmount(1000)">₹ 1000</button>
                    
                <button onclick="withdrawAmount(2000)">₹ 2000</button>
                <button id="with_money_btn_other">Other</button>
            </div>

            <div class="with_money_custom_input" id="with_money_custom_input">
                <input type="text" readonly id="with_money_custom_input_el">
                <p id="with_error_text_custom"></p>
            </div>
        </div>
    `

    let withOtherBtn = document.getElementById("with_money_btn_other")
    let withCustomDiv = document.getElementById("with_money_custom_input")

    withCustomInput = document.getElementById("with_money_custom_input_el")
    let withCustomErrorText = document.getElementById("with_error_text_custom")

    withOtherBtn.addEventListener("click", function () {
        withCustomDiv.style.display = "block"
        withCustomInput.addEventListener("input", function () {
            let amount = Number(withCustomInput.value)

            if (amount % 100 !== 0) {
                withCustomErrorText.textContent = "Amount must be a multiple of ₹100"
            }
            else {
                withCustomErrorText.textContent = ""
            }
        })
        customAmountWindow()
    })
}

function customAmountWindow() {
    subSection.style.display = "block"
    subSection.innerHTML = `
        <div class="dial_pad" id="dial_pad">
            <button onclick="withInputFun(withCustomInput, '1')">1</button>
            <button onclick="withInputFun(withCustomInput, '2')">2</button>
            <button onclick="withInputFun(withCustomInput, '3')">3</button>
                
            <button onclick="withInputFun(withCustomInput, '4')">4</button>
            <button onclick="withInputFun(withCustomInput, '5')">5</button>
            <button onclick="withInputFun(withCustomInput, '6')">6</button>
                
            <button onclick="withInputFun(withCustomInput, '7')">7</button>
            <button onclick="withInputFun(withCustomInput, '8')">8</button>
            <button onclick="withInputFun(withCustomInput, '9')">9</button>
                
            <button onclick="withInputFun(withCustomInput, 'clear')">Clear</button>
            <button onclick="withInputFun(withCustomInput, '0')">0</button>
            <button onclick="withInputFun(withCustomInput, 'enter')">Enter</button>
        </div>
    `
}

function withInputFun(input, num) {
    function amountAdd(num) {
        input.value += num
        input.dispatchEvent(new Event("input"))
    }

    function clearAmount() {
        input.value = ""
        input.dispatchEvent(new Event("input"))
    }

    function enterAmount() {
        withAmount = input.value
        alert(`Here ${withAmount}`)
        withdrawAmount(withAmount)
    }

    if (num === "clear") {
        clearAmount()
    }
    else if (num === "enter") {
        enterAmount()
    }
    else {
        amountAdd(num)
    }
}

function withdrawAmount(amount) {
    amount = Number(amount)
    loadingWindow()
    loadProcessWindow = document.getElementById("load_process")
    loadProcessWindow.style.display = "flex"

    setTimeout(() => {
        if (amount <= balAmount) {
            balAmount -= amount
            mainSection.innerHTML = `
                <div class="with_view_success" id="with_view_success">
                    <h3>Cash Withdrawn Successfully</h3>
                    <h2>Amount : ₹ ${amount}</h2>

                    <h3 id="h3_2nd">Balance</h3>
                    <h2>₹ ${balAmount}</h2>

                    <button onclick="showMenu()">Back</button>
                </div>
            `
        }
        else {
            mainSection.innerHTML = `
                <div class="with_view_fail" id="with_view_fail">
                    <h3>Cash Withdraw Failied</h3>
                    <h2>Inficient Balance</h2>

                    <h3>Balance</h3>
                    <h2>₹ ${balAmount}</h2>

                    <button onclick="showMenu()">Back</button>
                </div> 
            `
        }
    }, 2000);
}

function optPin() {
    subSection.style.display = "block"

    mainSection.innerHTML = `
        <div class="pin_text" id="pin_text">
            <h3>Enter Your PIN</h3>
            <input type="password" id="pin_pin_input" maxlength="4" readonly>
        </div>
    `

    pinChangePin = document.getElementById("pin_pin_input")

    subSection.innerHTML = `
        <div class="dial_pad" id="dial_pad">
            <button onclick="pinInputFun(pinChangePin, '1')">1</button>
            <button onclick="pinInputFun(pinChangePin, '2')">2</button>
            <button onclick="pinInputFun(pinChangePin, '3')">3</button>
                
            <button onclick="pinInputFun(pinChangePin, '4')">4</button>
            <button onclick="pinInputFun(pinChangePin, '5')">5</button>
            <button onclick="pinInputFun(pinChangePin, '6')">6</button>
                
            <button onclick="pinInputFun(pinChangePin, '7')">7</button>
            <button onclick="pinInputFun(pinChangePin, '8')">8</button>
            <button onclick="pinInputFun(pinChangePin, '9')">9</button>
                
            <button onclick="pinInputFun(pinChangePin, 'clear')">Clear</button>
            <button onclick="pinInputFun(pinChangePin, '0')">0</button>
            <button onclick="pinInputFun(pinChangePin, 'check')">Check</button>
        </div>
    `
}

function changePinWindow() {
    mainSection.innerHTML = `
        <div class="change_pin_view" id="change_pin_view">
            <h3>Enter new security PIN</h3>
            <input type="password" id="change_pin_input" maxlength="4">

            <h3>Conform</h3>
            <input type="text" id="change_con_pin_input">

            <button onclick="updatePIN()">Update PIN</button>
        </div>
    `

    changePinInputEl = document.getElementById("change_pin_input")
    changeConPInInputEl = document.getElementById("change_con_pin_input")

    subSection.style.display = "block"
    subSection.innerHTML = `
        <div class="dial_pad" id="dial_pad">
            <button onclick="changePinInputFun('1')">1</button>
            <button onclick="changePinInputFun('2')">2</button>
            <button onclick="changePinInputFun('3')">3</button>
                
            <button onclick="changePinInputFun('4')">4</button>
            <button onclick="changePinInputFun('5')">5</button>
            <button onclick="changePinInputFun('6')">6</button>
                
            <button onclick="changePinInputFun('7')">7</button>
            <button onclick="changePinInputFun('8')">8</button>
            <button onclick="changePinInputFun('9')">9</button>
                
            <button onclick="changePinInputFun('clear')">Clear</button>
            <button onclick="changePinInputFun('0')">0</button>
            <button onclick="changePinInputFun('enter')">Enter</button>
        </div>
    `
}

function changePinInputFun(num) {
    if (num !== "clear" && num !== "enter") {
        if (changePinInputEl.value.length < 4) {
            changePinInputEl.value += num
        }
        else if (changeConPInInputEl.value.length < 4) {
            changeConPInInputEl.value += num
        }
        return
    }

    if (num === "clear") {
        if (changeConPInInputEl.value.length > 0) {
            changeConPInInputEl.value = ""
        }
        else {
            changePinInputEl.value = ""
        }
        return
    }

    if (num === "enter") {
        if (changePinInputEl.value.length !== 4) {
            alert("Enter the confirm PIN!")
            return
        }

        if (changePinInputEl.value !== changeConPInInputEl.value) {
            alert("PIN are not matching!")
            changeConPInInputEl.value = ""
            return
        }

        changedPIN = changePinInputEl.value
        PIN = changedPIN
        alert("PIN changed successfully!")
        subSection.style.display = "none"
        changePinSuccess()
    }
}

function updatePIN() {
    if (changePinInputEl.value.length !== 4) {
        alert("Enter a 4 digit new PIN!")
        return
    }

    if (changeConPInInputEl.value.length !== 4) {
        alert("Enter the confirm PIN!")
        return
    }

    if (changePinInputEl !== changePinInputEl) {
        alert("PIN are not matching")
        changeConPInInputEl.value = ""
        return
    }

    changedPIN = changePinInputEl.value
    PIN = changedPIN
    alert("PIN changed successfully!")
    subSection.style.display = "none"
    changePinSuccess()
}

function changePinSuccess() {
    loadingWindow()
    
    setTimeout(() => {
        subSection.style.display = "none"
        mainSection.innerHTML = `
            <div class="change_pin_view_success" id="change_pin_view_success">
                <h3>Successfully Updated</h3>
    
                <button onclick="showMenu()">Back</button>
            </div>
        `
    }, 2000);
}

function optQuit() {
    subSection.style.display = "none"
    mainSection.innerHTML = `
        <div class="quit_load" id="quit_load">
            Quiting....
        </div>
    `

    setTimeout(() => {
        mainSection.innerHTML = `
            <div class="quit_view" id="quit_view">
                <h3>Thank You for using</h3>
                <h2>ANK Bank</h2>
            </div>
        `
    }, 2500);
}

function loadingWindow() {
    subSection.style.display = "none"
    mainSection.innerHTML = `
        <div class="load_process" id="load_process">
            Processing....
        </div>
    `
}