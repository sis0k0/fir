import fir from './tree.js';

function getStarText(rowsCount) {
    const blanks = Array(rowsCount * 2 + 1).join('&nbsp;');
    const star = '<span class="star">*</span>';

    debugger;
    return `${blanks}${star}<br />`;
}

const star = getStarText(fir.rowsCount);
fir.container.innerHTML = star + fir.container.innerHTML;