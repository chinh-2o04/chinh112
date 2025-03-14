function exchange(rate) {
    let xu = document.getElementById("xuAmount").value;
    if (xu === "" || isNaN(xu) || xu <= 0) {
        alert("Vui lòng nhập số xu hợp lệ!");
        return;
    }
    let money = (xu / 1000) * rate;
    document.getElementById("result").innerText = `Bạn nhận được: ${money.toFixed(2)}$`;
}

function customExchange() {
    let xu = document.getElementById("xuAmount").value;
    let customRate = document.getElementById("customRate").value;
    if (xu === "" || isNaN(xu) || xu <= 0 || customRate === "" || isNaN(customRate) || customRate <= 0) {
        alert("Vui lòng nhập số xu và tỷ lệ hợp lệ!");
        return;
    }
    let money = (xu / 1000) * customRate;
    document.getElementById("result").innerText = `Bạn nhận được: ${money.toFixed(2)}$`;
}
