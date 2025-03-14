function formatInput() {
    let input = document.getElementById("xuInput");
    input.value = input.value.replace(/[^0-9]/g, "");
}

function convertXu(rate) {
    let xu = parseInt(document.getElementById("xuInput").value);
    if (isNaN(xu) || xu <= 0) {
        showToast("⚠️ Vui lòng nhập số xu hợp lệ!");
        return;
    }

    let amount = (xu / 1000) * rate;
    document.getElementById("result").innerHTML = `💰 Số tiền nhận được: <b>${amount.toLocaleString()} VNĐ</b>`;
}

function customConvert() {
    let rate = prompt("Nhập số tiền quy đổi cho 1000 xu:", "60");
    if (rate !== null && !isNaN(rate) && rate > 0) {
        convertXu(parseFloat(rate));
    } else {
        alert("⚠️ Vui lòng nhập số hợp lệ!");
    }
}
