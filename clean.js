
module.exports = (slide) => {
    count = 0;
    for (let row = 0; row < slide.length; row++) {
        for (let column = 0; column < slide.length; column++) {
            if (slide[row][column] === "x") {
                slide[row][column] = "L"
                count++;
            }
        }
    }
    return count;
}

