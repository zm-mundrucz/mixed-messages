/* Object with vehicles and places.
======================================*/

const randomTransportWork = {
    trucks: ['Scania', 'Daf', 'Man', 'Volvo', 'Mercedes', 'Renault', 'Iveco'],

    trailers: ['T301', 'T777', 'T623', 'T367', 'T993', 'T190', 'T728', 'T589'],

    loading: ['Manchester', 'Liverpool', 'Blackpool', 'Leeds', 'Wigan'],

    unloading: ['London', 'Bristol', 'Cardiff', 'Edinburgh', 'Glasgow']
}

/* Create a random number.
=========================== */

const randomNumber = number => {
    return Math.floor(Math.random() * number );
}

/* Returns a random vehicle and place.
======================================= */

const pickRandom = organize => {
    const info = randomTransportWork[organize];
    const sum = randomNumber(info.length)
    return info[sum];
}

/* This is the duty sheet for transport work.
============================================= */

const dutySheet = () => `Please, take the "${pickRandom('trucks')}" truck and the "${pickRandom('trailers')}" trailer.
Load from ${pickRandom('loading')} and deliver to ${pickRandom('unloading')}.
Thank you!`;

console.log(dutySheet());