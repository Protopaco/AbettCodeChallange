

module.exports = (slide, liveableArray) => {
    for (let { row, column } of liveableArray) {
        if (slide[row][column] === "o") slide[row][column] = "#";
    }
}
