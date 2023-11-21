import {convertHundreds} from "./hundred-converter.js";

export const convertThousand = (number) => {
    let result = '';

    const thousandsUnit = Math.floor(number / 1000);
    let isSingularThousand = false

    const thousandUnitExists = thousandsUnit > 0;
    if (thousandUnitExists) {
        const hundredsOfThousandUnit = thousandsUnit % 1000;
        if (hundredsOfThousandUnit > 0) {
            isSingularThousand = hundredsOfThousandUnit === 1
            result += (isSingularThousand ? "" : `${convertHundreds(hundredsOfThousandUnit, true)}-`)+"mille";
        }
    }

    const hundreds = number % 1000;
    if (hundreds > 0) {
        result += thousandUnitExists ? '-' : '';
        result += `${convertHundreds(hundreds)} `;
    }else{
        // case 2000, 1000, 3000 ....
        if(thousandUnitExists){
            result += isSingularThousand ? "" : "s"
        }
    }
    return result;
}