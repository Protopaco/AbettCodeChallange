
module.exports = (slide, liveableArray) => {
    count = 0;
    for (const { row, column } of liveableArray) {
        if (slide[row][column] === "x") {
            slide[row][column] = "L"
            count++;
        }
    }
    return count;
}

