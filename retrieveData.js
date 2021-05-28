const fs = require("fs");

module.exports = () => {
    const data = fs.readFileSync("cell-cultures.txt", "utf8");
    return data.split("\n").map((row) => row.split(""));
};
