const searchFrame = require("./searchFrame")

module.exports = (slide, liveableArray) => {
    for (let { row, column } of liveableArray) {
        if (!searchFrame(slide, row, column)
            && slide[row][column] != "."
            && slide[row][column] != "#") {
            slide[row][column] = "o"
        }
    }
}

