

module.exports = (slide, row, column) => {
    let count = 0;
    for (let r = row - 1; r <= row + 1; r++) {
        if (slide[r]) {
            for (let c = column - 1; c <= column + 1; c++) {
                if (slide[r][c] && slide[r][c] === "#" && (r != row || c != column)) {
                    count++;
                }
            }
        }
    }
    return count;
}