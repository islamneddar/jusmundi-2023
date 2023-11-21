import {convertHundreds} from "./hundred-converter.js";

export const convertNextPart = (number, modulo, parentUnitExist, shouldBePlural, convertNextPartCb) => {
    let result = '';
    const numberModulo = number % modulo;
    if (numberModulo > 0) {
        if(parentUnitExist){
            result += "-"
        }
        result += `${convertNextPartCb(numberModulo)}`;
    }else{
        if(shouldBePlural){
            result += "s"
        }
    }
    return result;
}