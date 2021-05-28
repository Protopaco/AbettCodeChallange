
module.exports = (slide) => {
    let liveableArray = [];
    for (let row = 0; row < slide.length; row++) {
        for (let column = 0; column < slide.length; column++) {
            if (slide[row][column] === "L") liveableArray.push({ row, column })
        }
    }
    return liveableArray;
}

