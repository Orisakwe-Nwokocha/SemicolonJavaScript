
function urlSlug(title) {
    return title
        .split(' ')
        .filter(str => str.match(/\w/))
        .join("-")
        .toLowerCase();
}

console.log(urlSlug(" Winter Is  Coming"));