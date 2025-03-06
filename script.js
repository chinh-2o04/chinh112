function filterEmails() {
    let input = document.getElementById("emailInput").value.trim();
    let rows = input.split('\n').map(row => row.trim().split(/\s+/));
    let table = document.getElementById("emailTable");
    table.innerHTML = "<tr><th>Sao chép</th><th>Email</th><th>Mật khẩu</th></tr>";

    rows.forEach((data, index) => {
        if (data.length >= 2) {
            let row = table.insertRow();
            let copyCell = row.insertCell(0);
            let emailCell = row.insertCell(1);
            let passCell = row.insertCell(2);

            emailCell.textContent = data[0];
            passCell.textContent = data[1];

            let btn = document.createElement("button");
            btn.textContent = "📋";
            btn.className = "copy-btn";
            btn.onclick = function() {
                copyEmail(data[0], index + 1);
            };

            copyCell.appendChild(btn);
        }
    });
}

function copyEmail(email, index) {
    navigator.clipboard.writeText(email).then(() => {
        showNotification(`📩 Đã sao chép mail ${index}`);
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

