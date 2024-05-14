function planSchedule(classes) {
    return classes.filter((c) =>  c.match(/(12|[1-5])/) && c.match(/PM/));
}


module.exports = {planSchedule};