const input = () => {
    const prompt = require('prompt-sync')();
    console.log("Select an option: ");
    return prompt();
};

function printWelcomeMessage() {
    console.log("Welcome!!!");
    printMainMenu();
}

function printMainMenu() {
    console.log(`
    Home
1. Phone book
2. Messages
3. Chat
4. Call Register
5. Tones
6. Settings
7. Call Divert
8. Games
9. Calculator
10. Reminders
11. Clock
12. Profiles
13. SIM services
14. Exit app
`);
    handleUserChoice();
}

function handleUserChoice() {
    let userChoice = input();

    const menuActions = {
        1: () => phonebookMenu(),
        2: () => messagesMenu(),
        3: () => chatMenu(),
        4: () => callRegisterMenu(),
        5: () => tonesMenu(),
        6: () => settingsMenu(),
        7: () => callDivertMenu(),
        8: () => gamesMenu(),
        9: () => calculatorMenu(),
        10: () => remindersMenu(),
        11: () => clockMenu(),
        12: () => profilesMenu(),
        13: () => simServicesMenu(),
        14: () => exitApp(),
        default: () => printMainMenu()
    };

    const action = menuActions[userChoice] || menuActions.default;
    action();
}

function phonebookMenu() {
    let options = ["Search", "Service Nos", "Add name", "Erase", "Edit", "Assign tone",
        "Send b’card", "Options", "Speed dials", "Voice tags"];
    printSubMenu(options);
    let userChoice = input();
    if (userChoice === "8") phonebookSubMenu();
    handleSubMenuInput(userChoice, options);
}

function phonebookSubMenu() {
    let options = ["Type of view", "Memory"];
    printSubMenu(options);
    handleSubMenuInput(input(), options);
}

function messagesMenu() {
    let options = ["Write messages", "Inbox", "Outbox", "Picture messages", "Templates", "Smileys",
        "Message settings", "Info service", "Voice mailbox number", "Service command editor"];
    printSubMenu(options);
    let userChoice = input();
    if (userChoice === "7") messagesSubMenu();
    handleSubMenuInput(userChoice, options);
}

function messagesSubMenu() {
    printSubMenu(["Set 1", "Common"]);
    let userChoice = input();
    if (userChoice === "1" || userChoice === "2") {
        let options = userChoice === "1"
            ? ["Message centre number", "Messages sent as", "Message validity"]
            : ["Delivery reports", "Reply via same centre", "Character support"];
        printSubMenu(options);
        handleSubMenuInput(input(), options);
    }
    handleSubMenuInput(userChoice, ["Set 1", "Common"]);
}

function chatMenu() {
    handleSubMenuInput("1", ["Chat"]);
}

function callRegisterMenu() {
    let options = ["Missed calls", "Received calls", "Dialled numbers", "Erase recent call lists",
        "Show call duration", "Show call costs", "Call cost settings", "Prepaid credit"];
    printSubMenu(options);
    let userChoice = input();
    let isWithinRange = userChoice > 4 || userChoice < 8;
    if (isWithinRange) callRegisterSubMenu(userChoice);
    handleSubMenuInput(userChoice, options);
}

function callRegisterSubMenu(userChoice) {
    let options;
    switch (userChoice) {
        case "5":
            options = ["Last call duration", "All calls' duration", "Received calls' duration",
                "Dialled calls' duration", "Clear timers"];
            break;
        case "6":
            options = ["Last call cost", "All calls' cost", "Clear counters"];
            break;
        case "7":
            options = ["Call cost limit", "Show costs in"];
            break;
    }
    printSubMenu(options);
    handleSubMenuInput(input(), options);
}

function tonesMenu() {
    let options = ["Ringing tone", "Ringing volume", "Incoming call alert", "Composer", "Message alert tone",
        "Keypad tones", "Warning and game tones", "Vibrating alert", "Screen saver"];
    printSubMenu(options);
    handleSubMenuInput(input(), options);
}

function settingsMenu() {
    let options = ["Call settings", "Phone settings", "Security settings", "Restore factory settings"];
    printSubMenu(options);
    let userChoice = input();
    if (userChoice === "4") handleSubMenuInput(userChoice, options);
    settingsSubMenu(userChoice);
}

function settingsSubMenu(userChoice) {
    let options;
    switch (userChoice) {
        case "1":
            options = ["Automatic redial", "Speed dialling", "Call waiting options", "Own number sending",
                "Phone line in use", "Automatic answer"];
            break;
        case "2":
            options = ["Language", "Cell info display", "Welcome note", "Network selection",
                "Lights", "Confirm SIM service actions"];
            break;
        case "3":
            options = ["PIN code request", "Call barring service", "Fixed dialling", "Closed user group",
                "Phone security", "Change access codes"];
            break;
        default:
            console.log("Invalid option!");
            printMainMenu();
    }
    printSubMenu(options);
    handleSubMenuInput(input(), options);
}

function callDivertMenu() {
    handleSubMenuInput("1", ["Call divert"]);
}

function gamesMenu() {
    handleSubMenuInput("1", ["Games"]);
}

function calculatorMenu() {
    handleSubMenuInput("1", ["Calculator"]);
}

function remindersMenu() {
    handleSubMenuInput("1", ["Reminders"]);
}

function clockMenu() {
    let options = ["Alarm clock", "Clock settings", "Date settings", "Stopwatch",
        "Countdown timer", "Auto update of date and time"];
    printSubMenu(options);
    handleSubMenuInput(input(), options);
}

function profilesMenu() {
    handleSubMenuInput("1", ["Profiles"]);
}

function simServicesMenu() {
    handleSubMenuInput("1", ["SIM services"]);
}


function exitApp() {
    console.log("Thanks for using this app!")
    process.exit(0);
}

function printSubMenu(options) {
    for (let i = 0; i < options.length; i++) console.log(`${i + 1}. ${options[i]}`);
    console.log();
}

function handleSubMenuInput(userChoice, options) {
    if (userChoice >= 1 && userChoice <= options.length) {
        console.log(`\n${options[userChoice - 1]}\n`);
    } else {
        console.log("Invalid option!");
    }
    printMainMenu();
}


printWelcomeMessage();