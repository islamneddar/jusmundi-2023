import {convertTens} from "./tens-converter.js";
import {getZeroToNineWord} from "./constant.js";

export const convertHundreds = (number,prefixThousand = false) => {
    let result = '';

    const hundredsUnit = Math.floor(number / 100);
    if (hundredsUnit > 0) {
        result += (hundredsUnit === 1 ? "" : `${getZeroToNineWord(hundredsUnit)}-`) + "cent";
    }

    const tens = number % 100;
    if (tens > 0) {
        if(hundredsUnit > 0){
            result += '-';
        }
        return result + `${convertTens(tens)}`
    }else {
        // case 100, 200, 300, 400 ...
        if(hundredsUnit > 1 && !prefixThousand){
            result += "s";
        }
        return result
    }

}