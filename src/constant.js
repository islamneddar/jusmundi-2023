const zeroToNine = {
    1: 'un',
    2: 'deux',
    3: 'trois',
    4: 'quatre',
    5: 'cinq',
    6: 'six',
    7: 'sept',
    8: 'huit',
    9: 'neuf',
}
const zeroToSixteen = {
    ...zeroToNine,
    10: 'dix',
    11: 'onze',
    12: 'douze',
    13: 'treize',
    14: 'quatorze',
    15: 'quinze',
    16: 'seize',
}
const tens = {
    1: 'dix',
    2: 'vingt',
    3: 'trente',
    4: 'quarante',
    5: 'cinquante',
    6: 'soixante',
    7: 'soixante-dix',
    8: 'quatre-vingt',
    9: 'quatre-vingt-dix'
}

export const getZeroToNineWord = (number) => {
    return zeroToNine[number]
}
export const getZeroToSixteenWord = (number) => {
    return zeroToSixteen[number];
}

export const getTensWord = (number) => {
    return tens[number];
}

