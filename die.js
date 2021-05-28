const searchFrame = require("./searchFrame")

module.exports = (slide, liveableArray) => {
    for (let { row, column } of liveableArray) {
        if (slide[row][column] === "#" && searchFrame(slide, row, column) > 3) {
            slide[row][column] = "x"
        }
    }
}

