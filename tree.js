const fir = {
    rows: 20,
    container: document.getElementById('tree'),
    draw: function() {
        let output = '';

        for (let i = 1; i < this.rows; i += 1) {
            for (let j = i; j < this.rows; j += 1) {
                output += '&nbsp;&nbsp;';
            }
            for (let k = 0; k <= i * 2; k += 1) {
                output += '<span class="needle">^</span>';
            }
            output += '<br />';
        }

        this.container.innerHTML = output;
    }
};

fir.draw();

export default fir;