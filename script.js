function filterEmails() {
    const inputText = document.getElementById("emailInput").value;
    const lines = inputText.split("\n");
    
    let emailArray = [];

    lines.forEach(line => {
        let parts = line.trim().split(" ");
        if (parts.length >= 2) {
            emailArray.push(parts[0]); // Lấy phần email trước dấu cách
        }
    });

    renderEmails(emailArray);
}

function renderEmails(emailArray) {
    const emailTable = document.getElementById("emailTable");
    emailTable.innerHTML = ""; // Xóa bảng cũ

    emailArray.slice(0, 20).forEach((email, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${email}</td>
            <td><button class="copy-btn" onclick="copyEmail('${email}')">📋</button></td>
        `;
        emailTable.appendChild(row);
    });
}

function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
        alert("Đã sao chép: " + email);
    });
}
