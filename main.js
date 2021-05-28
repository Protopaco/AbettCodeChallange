const retrieveData = require("./retrieveData");
const searchFrame = require("./searchFrame")

let slide = retrieveData();

for (let row = 0; row < slide.length; row++) {
    for (let column = 0; column < slide.length; column++) {
        if (!searchFrame(slide, row, column) && slide[row][column] != "." && slide[row][column] != "#") {
            slide[row][column] = "o"
        }
    }
}
console.log(slide.map(row => row.join("")).join("\n"))