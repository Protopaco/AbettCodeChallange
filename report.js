
module.exports = (slide, iterationCount, startTime) => {
    let locationCount = 0;
    let cultureCount = 0;

    for (let row = 0; row < slide.length; row++) {
        for (let column = 0; column < slide.length; column++) {
            locationCount++;
            if (slide[row][column] === "#") cultureCount++;
        }
    }

    const ratio = Math.floor((cultureCount / locationCount) * 100)
    const endTime = Date.now();

    const report = `
                    +_+_+_+_+_+_+_+_+_+_+_+_+_+_+ \n
                            CULTURE REPORT \n
                    +_+_+_+_+_+_+_+_+_+_+_+_+_+_+ \n
                        Iterations: ${iterationCount} \n
                        Total Spaces: ${locationCount} \n
                        Culture Spaces: ${cultureCount} \n
                        Culture Ratio: ${ratio}% \n
                        Elapsed Time: ${endTime - startTime} milisec \n
                    +_+_+_+_+_+_+_+_+_+_+_+_+_+_+ \n
    `

    console.log(report)


}
