import {convertTens} from "./tens-converter.js";
import {getZeroToNineWord} from "./constant.js";
import {convertNextPart} from "./common.js";

export const convertHundreds = (number,prefixThousand = false) => {
    let result = '';

    const hundredsUnit = Math.floor(number / 100);
    if (hundredsUnit > 0) {
        result += (hundredsUnit === 1 ? "" : `${getZeroToNineWord(hundredsUnit)}-`) + "cent";
    }

    const shouldBePlural = hundredsUnit > 1 && !prefixThousand;
    return result + convertNextPart(number, 100, hundredsUnit > 0, shouldBePlural, convertTens);
}