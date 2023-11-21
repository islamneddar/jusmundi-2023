import {convertTens} from "./tens-converter.js";
import {convertThousand} from "./thousand-converter.js";
import {convertHundreds} from "./hundred-converter.js";


export const convertFrenchNumber = (number) => {
    if(number < 100) {
        return convertTens(number);
    }

    if(number < 1000) {
        return convertHundreds(number);
    }

    if(number < 1000000) {
        return convertThousand(number);
    }

    return "Number too big";
}