function convertMoney(rate) {
    let inputText = document.getElementById("xuInput").value.trim();
    if (!inputText) {
        alert("Vui lòng nhập danh sách số xu!");
        return;
    }

    let xuArray = inputText.split(/\s+/).map(Number).filter(n => !isNaN(n) && n > 0);
    if (xuArray.length === 0) {
        alert("Dữ liệu không hợp lệ! Hãy nhập các số hợp lệ.");
        return;
    }

    let totalXu = xuArray.reduce((sum, num) => sum + num, 0);
    let totalMoney = (totalXu / 1000) * rate;

    document.getElementById("totalXu").innerText = totalXu.toLocaleString();
    document.getElementById("convertedMoney").innerText = totalMoney.toFixed(3);
}
