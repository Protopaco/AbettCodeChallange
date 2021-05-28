const retrieveData = require("./retrieveData");
const spawn = require("./spawn");
const grow = require("./grow")
const die = require("./die")
const clean = require("./clean");
const report = require("./report");
const findLiveable = require("./findLiveable");

let startTime = Date.now();
let cleanCount = 0;
let iterationCount = 0;
let slide = retrieveData();
const liveableArray = findLiveable(slide);

do {
    iterationCount++;
    spawn(slide, liveableArray);
    grow(slide, liveableArray);
    die(slide, liveableArray);
    cleanCount = clean(slide, liveableArray);
} while (cleanCount > 0);

report(slide, iterationCount, startTime, liveableArray)
