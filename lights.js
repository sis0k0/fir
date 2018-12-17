import fir from "./tree.js";

const getNeedlesCount = rows => new Array(rows).fill(0).reduce((sum, _, n) => sum + 2*n + 1, 0);
const getRandomPosition = rows => {
    const needlesCount = getNeedlesCount(rows);
    return Math.floor(Math.random() * needlesCount);
};
const getRandomColor = () => '#' + Math.random().toString(16).substr(-6);
const needles = fir.container.getElementsByClassName('needle');

let blinkingBulbs = [];
function blink(rows) {
    blinkingBulbs.forEach(bulb => {
        bulb.innerHTML = '^';
        bulb.style.color = 'green';
    });
    blinkingBulbs = [];

    const bulbsCount = rows * 3;
    new Array(bulbsCount).fill().forEach(_ => {
        const bulbIndex = getRandomPosition(rows);
        const bulb = needles[bulbIndex];
        if (!bulb) {
            return;
        }

        blinkingBulbs.push(bulb);
        bulb.innerHTML = '*';
        bulb.style.color = getRandomColor();
    });
}

setInterval(() => blink(20), 1000);
