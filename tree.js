const fir = {
    rowsCount: 20,
    container: document.getElementById('tree'),
    draw: function() {
        let output = '';

        for (let i = 1; i < this.rowsCount; i += 1) {
            for (let j = i; j < this.rowsCount; j += 1) {
                output += '&nbsp;&nbsp;';
            }
            for (let k = 0; k <= i * 2; k += 1) {
                output += '<span class="needle">1</span>';
            }
            output += '<br />';
        }

        this.container.innerHTML = output;
    }
};

fir.draw();

export default fir;