function distributeBooks() {
    let members = ["Emily", "Jack", "Sophia", "Daniel"];
    let result = [];
    for (const member of members) result.push({member: member, book: `${member} book`});

    return result;
}


module.exports = {distributeBooks};