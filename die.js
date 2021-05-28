const searchFrame = require("./searchFrame")

module.exports = (slide) => {
    for (let row = 0; row < slide.length; row++) {
        for (let column = 0; column < slide.length; column++) {
            if (slide[row][column] === "#" && searchFrame(slide, row, column) > 3) {
                slide[row][column] = "x"
            }
        }
    }
}
