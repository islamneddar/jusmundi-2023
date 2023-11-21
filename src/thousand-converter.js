import {convertHundreds} from "./hundred-converter.js";

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

    const hundreds = number % 1000;
    if (hundreds > 0) {
        if(thousandUnitExists){
            result += "-"
        }
        result += `${convertHundreds(hundreds)} `;
    }else{
        // case 2000, 1000, 3000 ....
        if(thousandsUnit > 1){
            result += "s"
        }
    }
    return result;
}