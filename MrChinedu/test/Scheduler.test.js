const {planSchedule} = require("../src/Scheduler");


test("plan schedule", () => {
    let classes =  ["9:00 AM", "1:00 PM", "11:00 AM", "3:00 PM", "5:00 PM"];
    let expected = ["1:00 PM", "3:00 PM", "5:00 PM"];
    expect(planSchedule(classes)).toEqual(expected);
});

test("plan schedule 2", () => {
    let classes =  ["9:00 AM", "6:00 PM", "11:00 AM", "3:00 PM", "5:00 PM", "12:00 PM"];
    let expected = ["3:00 PM", "5:00 PM", "12:00 PM"];
    expect(planSchedule(classes)).toEqual(expected);
});