# ANK Bank - A virtual ATM

ANK Bank ATM is a virtual ATM Machine *Simulation* using HTML, CSS nad JavaScript. It have the options to check the balance, can deposit and withdraw and as well as can change PIN.

## 

In this project user can create account at first to enter the simulation user needs to enter the full name, and other details.

Currently it feels like templete design no much CSS used.


## Functionalities

There are several functions used in this project. Mainly,

| Function | Use |
|----------|:----:|
|```accountNum()```| Create a random 8-digit account number |
|```showAccSummary()```| Shows the summary of your account ( 3 second) |
|```showMenu()```| Showss the main homepage |
|```pinInputFun(Xinput, num)``` | Trigger for PIN verification |
|```balWindow()``` | Shows the balance amount of your account |
|```depoWindow()``` | Shows the deposit feature |
|```moneyInputFun(moneyInput, num)``` | Allow to enter numbers |
|```withWindow()``` | Shows the withdraw amount option |
|```customAmountWindow()``` | Allow you to enter custom amount |
|```loadingWindow()``` | A processing loader ( 2 second )

These are the main functions created and used in JS for this project!

## File Sturcture
```
|
|- index.html
|- style.css
|- script.js
|- frames \
    |- frame1.html
    |- frame2.html
    |- frame3.html
    |- frame4.html
    |- frame5.html
    |- frame6.html
    |- frame7.html
    |- frame8.html
    |- frame9.html
    |- frame10.html
    |- frame11.html
    |- frame12.html
    |- frame13.html
    |- frame14.html
    |- frame15.html
    |- frame16.html
    |- frame17.html
    |- frame18.html
```

## Frames 

This project is completely from a rough plan with 18 frames.

So created and coded of the basics and order of the frame then conneccted every frame into a file sturcture. You can check the codes used for each frame!

| Frame |       |
|-------|-------|
| frame 1 & frame 2 | Main loading windows (welcome windows) |
| frame 3 | Account registeration |
| frame 4 | Summary of the account (3 second) |
| frame 5 | Main menu with options such as Balance, Depositm Withdraw, Change PIN and Quit (Homepage) |
| frame 6 | Entering 4 digit PIN for verification and allow to next action |
| frame 7 | Shows the current balance |
| frame 8 | Input window for deposit the money |
| frame 9 | Successfull window after deposited |
| frame 10 | Withdraw money window |
| frame 11 | Processing loading screen (2 second) |
| frame 12 | Successfull window after withdraw (amount < balance) |
| frame 13 | Failied window after withdraw (amount > balnce) |
| frame 14 | Input boxes to create New PIN |
| frame 15 | Processing loading screen  (2 second). Sam as frame 11 [Removed Frame] |
| frame 16 | Successfull window after created new PIN |
| frame 17 | Quiting loading screen (2.5 second) |
| frame 18 | Thanking window and this is the last frame |  

## Ai Usage

- Asked help to understand the clear logic and to solve some bugs.
- For getting Random account number between the two ranges!
- moneyInputFun(moneyInput, num) :- used here for understanding the logic.
- accessing the focus at two inputs in changePIN windows.

----
