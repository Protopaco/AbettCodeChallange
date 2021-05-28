const retrieveData = require("./retrieveData");
const spawn = require("./spawn");
const grow = require("./grow")
const die = require("./die")
const clean = require("./clean")

let slide = retrieveData();

spawn(slide);
grow(slide);
die(slide);
const cleanCount = clean(slide);

console.log(slide.map(row => row.join("")).join("\n"))
console.log(cleanCount)