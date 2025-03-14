document.getElementById("pasteButton").addEventListener("click", async function() {
    try {
        const text = await navigator.clipboard.readText();
        document.getElementById("emailInput").value = text;
    } catch (err) {
        alert("Không thể dán, vui lòng cấp quyền clipboard!");
    }
});

function filterEmails() {
    let input = document.getElementById("emailInput").value;
    let rows = input.split(/\n|\r|\r\n/).map(row => row.trim()).filter(row => row);
    let table = document.getElementById("emailTable");
    table.innerHTML = `<tr><th>STT</th><th>Sao chép</th><th>Email</th><th>Mật khẩu</th></tr>`;

    rows.forEach((row, index) => {
        let parts = row.split(/\s+|\|/);
        if (parts.length >= 2) {
            let email = parts[0];
            let password = parts.slice(1).join(" ");
            let newRow = table.insertRow();
            newRow.innerHTML = `<td>${index + 1}</td>
                                <td><button class='copy-btn' onclick='copyToClipboard("${email} ${password}")'>📋</button></td>
                                <td>${email}</td>
                                <td>${password}</td>`;
        }
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Đã sao chép: " + text);
    });
}
