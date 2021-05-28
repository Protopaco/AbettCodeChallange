const retrieveData = require("./retrieveData");
const spawn = require("./spawn");
const grow = require("./grow")


let slide = retrieveData();

spawn(slide)
grow(slide)

console.log(slide.map(row => row.join("")).join("\n"))