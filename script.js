document.getElementById("pasteButton").addEventListener("click", function () {
    navigator.clipboard.readText().then(text => {
        document.getElementById("emailInput").value = text;
    }).catch(err => {
        showToast("⚠️ Không thể dán! Hãy cấp quyền truy cập clipboard.");
    });
});

function filterEmails() {
    let input = document.getElementById("emailInput").value.trim();
    let lines = input.split(/\n/); // Chia theo từng dòng
    let tableBody = document.querySelector("#emailTable tbody");
    tableBody.innerHTML = "";

    let index = 1;
    lines.forEach(line => {
        let parts = line.split(/\s+/);
        if (parts.length >= 2) {
            let email = parts[0];
            let password = parts.slice(1).join(" ");

            let row = `<tr>
                <td>${index}</td>
                <td><button onclick="copyEmail('${email}', '${password}', ${index})">📋</button></td>
                <td>${email}</td>
                <td>${password}</td>
            </tr>`;
            tableBody.innerHTML += row;
            index++;
        }
    });

    if (index === 1) {
        showToast("⚠️ Không tìm thấy email hợp lệ!");
    }
}

function copyEmail(email, password, index) {
    let textToCopy = `${email} ${password}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`📋 Đã sao chép mail ${index}`);
    });
}

function showToast(message) {
    let toastContainer = document.getElementById("toast-container");
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}
