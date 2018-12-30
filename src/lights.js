if (module.hot) {
    module.hot.accept();
    module.hot.dispose(_data => {
        clearInterval(blinkInterval);
    });

    module.hot.accept(['./tree.js'], function() {
        clearInterval(blinkInterval);
        turnOn();
    });
}

import fir from './tree.js';

const BLINK_RATE = 200;
const needles = () => fir.getNeedles();
let blinkInterval;

function turnOn() {
    blinkInterval = setInterval(() => blink(fir.rowsCount), BLINK_RATE);
}

turnOn();

const getNeedlesCount = rowsCount =>
    new Array(rowsCount)
        .fill(0)
        .reduce((sum, _, n) => sum + 2*n + 1, 0);

const getRandomPosition = rows => {
    const needlesCount = getNeedlesCount(rows);
    return Math.floor(Math.random() * needlesCount);
};
const getRandomColor = () => '#' + Math.random().toString(16).substr(-6);

let blinkingBulbs = [];
function blink(rows) {
    blinkingBulbs.forEach(bulb => {
        bulb.innerHTML = '1';
        bulb.style.color = 'green';
    });
    blinkingBulbs = [];

    const bulbsCount = rows * 3;
    new Array(bulbsCount).fill().forEach(_ => {
        const bulbIndex = getRandomPosition(rows);
        const bulb = needles()[bulbIndex];
        if (!bulb) {
            return;
        }

        blinkingBulbs.push(bulb);
        bulb.innerHTML = '0';
        bulb.style.color = getRandomColor();
    });
}
