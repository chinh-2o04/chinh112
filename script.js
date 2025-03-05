function filterEmails() {
    const inputText = document.getElementById("emailInput").value.trim();
    if (!inputText) {
        alert("Vui lòng nhập danh sách email!");
        return;
    }

    const lines = inputText.split("\n");
    let emailArray = [];

    lines.forEach(line => {
        let parts = line.trim().split(/\s+/); // Tách email và mật khẩu
        if (parts.length >= 2) {
            emailArray.push({ email: parts[0], password: parts.slice(1).join(" ") }); // Lấy email & mật khẩu
        }
    });

    if (emailArray.length === 0) {
        alert("Không tìm thấy email hợp lệ!");
    }

    renderEmails(emailArray);
}

function renderEmails(emailArray) {
    const emailTable = document.getElementById("emailTable");
    emailTable.innerHTML = ""; // Xóa bảng cũ

    emailArray.slice(0, 20).forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td><button class="copy-btn" onclick="copyEmail('${item.email}', '${item.password}')">📋</button></td>
        `;
        emailTable.appendChild(row);
    });
}

function copyEmail(email, password) {
    const textToCopy = `${email} ${password}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Đã sao chép: " + textToCopy);
    });
}
