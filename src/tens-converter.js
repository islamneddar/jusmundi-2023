import {getTensWord, getZeroToSixteenWord} from "./constant.js";

const ZERO = "zero"
export const convertTens = (number) => {

    if (number === 0) return ZERO
    if (number < 17) {
        return getZeroToSixteenWord(number);
    }

    let result = '';
    const tensSpecialCase = [
        {start: 70, end: 79, modulo: 20, numberUnitOfTens: 6},
        {start: 80, end: 89, modulo: 10, numberUnitOfTens: 8},
        {start: 90, end: 99, modulo: 20, numberUnitOfTens: 8},
    ]

    for(let i = 0; i < tensSpecialCase.length; i++){
        const {start, end, modulo, numberUnitOfTens} = tensSpecialCase[i]
        const resultSpecialCase = handleTensSpecialCase(number, start, end, modulo, numberUnitOfTens)
        if(resultSpecialCase) return resultSpecialCase
    }

    const tensUnit = Math.floor(number / 10);
    const tensUnitExists = tensUnit > 0;
    if (tensUnitExists) {
        result += `${getTensWord(tensUnit)}`;
    }
    const units = number % 10;
    if (units > 0) {
        if(tensUnitExists){
            result += units === 1 ? '-et-' : '-';
        }
        result += getZeroToSixteenWord(units);
    }

    return result;
}

const handleTensSpecialCase = (number, start, end, modulo, numberUnitOfTens) => {
    if(start <= number && number <= end){
        const numberModulo = number % modulo
        const numberOfTen = getTensWord(numberUnitOfTens)
        if(numberModulo === 0) return numberOfTen
        return numberOfTen + "-" + convertTens(numberModulo);
    }
}