import {convertFrenchNumber} from "./src/french-number-converter.js";


(() => {
    const numbers = process.argv.slice(2).map(number => parseInt(number));
    numbers.forEach(number => {
        console.log(number + " => " + convertFrenchNumber(number));
    });
})()