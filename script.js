function filterEmails() {
    let input = document.getElementById("emailInput").value.trim();
    let rows = input.split('\n').map(row => row.trim().split(/\s+/));
    let table = document.getElementById("emailTable");

    // Reset bảng và thêm tiêu đề mới
    table.innerHTML = "<tr><th>STT</th><th>Sao chép</th><th>Email</th><th>Mật khẩu</th></tr>";

    rows.forEach((data, index) => {
        if (data.length >= 2) {
            let row = table.insertRow();
            let sttCell = row.insertCell(0);
            let copyCell = row.insertCell(1);
            let emailCell = row.insertCell(2);
            let passCell = row.insertCell(3);

            let email = data[0];
            let password = data[1];

            // Gán số thứ tự
            sttCell.textContent = index + 1;
            emailCell.textContent = email;
            passCell.textContent = password;

            let btn = document.createElement("button");
            btn.textContent = "📋";
            btn.className = "copy-btn";
            btn.setAttribute("data-email", email);
            btn.setAttribute("data-password", password);
            btn.setAttribute("data-index", index + 1);
            btn.addEventListener("click", copyEmail);

            copyCell.appendChild(btn);
        }
    });
}

function copyEmail(event) {
    let email = event.target.getAttribute("data-email");
    let password = event.target.getAttribute("data-password");
    let index = event.target.getAttribute("data-index");

    let textToCopy = `${email} ${password}`; // ✅ Sao chép cả email & mật khẩu

    navigator.clipboard.writeText(textToCopy).then(() => {
        showNotification(`📩 Đã sao chép mail ${index}: ${email}`);
    }).catch(() => {
        showNotification("❌ Lỗi sao chép!");
    });
}

function showNotification(message) {
    let notify = document.createElement("div");
    notify.className = "notify";
    notify.textContent = message;
    document.body.appendChild(notify);
    
    setTimeout(() => {
        notify.style.opacity = "0";
        setTimeout(() => notify.remove(), 500);
    }, 1500);
}
