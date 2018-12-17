function drawTree() {
    const container = document.getElementById('tree');
    
    // export rows for adding the star later
    const rows = 20;
    let output = '';

    for (let i = 1; i < rows; i += 1) {
        for (let j = i; j < rows; j += 1) {
            output += '&nbsp;&nbsp;';
        }
        for (let k = 0; k <= i*2; k += 1) {
            output += '<span class="needle">^</span>';
        }
        output += '<br />';
    }

    container.innerHTML = output;
}

drawTree();
