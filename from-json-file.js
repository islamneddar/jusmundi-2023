import fs from "fs"
import {convertFrenchNumber} from "./src/french-number-converter.js";

const convert = () => {
    fs.readFile('./numbers.json', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        const numbers = JSON.parse(data);
        numbers.forEach(number => {
            console.log(number + " => " + convertFrenchNumber(number));
        });
    });
}

convert();