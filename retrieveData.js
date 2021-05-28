const fs = require("fs");

module.exports = () => {
    const data = fs.readFileSync("culture-test.txt", "utf8");
    return data.split("\n").map((row) => row.split(""));
};
