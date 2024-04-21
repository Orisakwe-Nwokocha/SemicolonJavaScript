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
9. Speed dials
10. Reminders
11. Clock
12. Profiles
13. SIM services
14. Exit app
`);
    handleUserChoice();
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

function settingsSubMenu(input) {
    let options = ["Automatic redial", "Speed dialling", "Call waiting options", "Own number sending",
        "Phone line in use", "Automatic answer"];
    printSubMenu(options);
    handleSubMenuInput(input, options);
}

function clockSubMenu(input) {
    let options = ["Alarm clock", "Clock settings", "Date settings", "Stopwatch",
        "Countdown timer", "Auto update of date and time"];
    printSubMenu(options);
    handleSubMenuInput(input, options);
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

function handleUserChoice() {
    let userChoice = input();

    const menuActions = {
        1: () => phonebookMenu(),
        2: () => messagesMenu(),
        3: () => chatMenu(),
        4: () => callRegisterMenu(),
        5: () => tonesMenu(),
        6: () => settingsSubMenu(),
        7: () => console.log("\nCall divert\n"),
        8: () => console.log("\nGames\n"),
        9: () => console.log("\nCalculator\n"),
        10: () => console.log("\nReminders\n"),
        11: () => clockSubMenu(),
        12: () => console.log("\nProfiles\n"),
        13: () => console.log("\nSIM services\n"),
        14: () => process.exit(0),
        default: () => printMainMenu()
    };

    const action = menuActions[userChoice] || menuActions.default;
    action();
}


printWelcomeMessage();
