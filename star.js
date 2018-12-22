import fir from './tree.js';

function getStarText(rowsCount) {
    const blanks = Array(rowsCount * 2 + 1).join('&nbsp;');
    console.log(blanks);
    const star = '<span class="star">*</span>';

    return `${blanks}${star}<br />`;
}

const star = getStarText(fir.rowsCount);
fir.container.innerHTML = star + fir.container.innerHTML;
