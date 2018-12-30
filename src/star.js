import fir from './tree.js';

const SYMBOL = '*';

function getStarText(rowsCount) {
    const blanks = Array(rowsCount * 2 + 1).join('&nbsp;');
    const star = `<span class="star">${SYMBOL}</span>`;

    return `${blanks}${star}<br />`;
}

function draw() {
    const star = getStarText(fir.rowsCount);
    fir.container.innerHTML = star + fir.container.innerHTML;
}

draw();
