import {convertHundreds} from "./hundred-converter.js";
import {convertNextPart} from "./common.js";

export const convertThousand = (number) => {
    let result = '';

    const thousandsUnit = Math.floor(number / 1000);

    const thousandUnitExists = thousandsUnit > 0;
    if (thousandUnitExists) {
        const hundredsOfThousandUnit = thousandsUnit % 1000;
        if (hundredsOfThousandUnit > 0) {
            result += ( hundredsOfThousandUnit === 1 ? "" : `${convertHundreds(hundredsOfThousandUnit, true)}-`)+"mille";
        }
    }

    return result + convertNextPart(number, 1000, thousandUnitExists, thousandsUnit > 1, convertHundreds);
}