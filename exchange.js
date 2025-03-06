function convertXu(rate) {
    let input = document.getElementById("xuInput").value;
    let values = input.match(/\d+/g);
    let total = values ? values.reduce((sum, val) => sum + parseInt(val), 0) : 0;
    document.getElementById("result").textContent = `Số tiền nhận được: ${(total / 1000 * rate).toLocaleString()} VND`;
}

function customConvert() {
    let rate = parseInt(document.getElementById("customRate").value) || 0;
    convertXu(rate);
}
