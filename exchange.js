function convertXu(rate) {
    let input = document.getElementById("xuInput").value;
    let values = input.match(/\d+/g);
    let totalXu = values ? values.reduce((sum, val) => sum + parseInt(val), 0) : 0;
    let totalMoney = Math.floor((totalXu / 1000) * rate);
    
    document.getElementById("result").textContent = `💰 Số tiền nhận được: ${totalMoney.toLocaleString()} VND`;
}

function customConvert() {
    let rate = parseInt(document.getElementById("customRate").value) || 0;
    convertXu(rate);
}

