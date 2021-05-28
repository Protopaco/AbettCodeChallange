const retrieveData = require("./retrieveData");
const spawn = require("./spawn");
const grow = require("./grow")
const die = require("./die")
const clean = require("./clean");
const report = require("./report");

let startTime = Date.now();
let cleanCount = 0;
let iterationCount = 0;
let slide = retrieveData();

do {
    iterationCount++;
    spawn(slide);
    grow(slide);
    die(slide);
    cleanCount = clean(slide);
} while (cleanCount > 0);

report(slide, iterationCount, startTime)
