function filterEmails() {
    let input = document.getElementById("emailInput").value.trim();
    let lines = input.split(/\n| /);
    let tableBody = document.querySelector("#emailTable tbody");
    tableBody.innerHTML = "";

    let index = 1;
    lines.forEach(line => {
        let parts = line.split(" ");
        if (parts.length === 2) {
            let row = `<tr>
                <td>${index}</td>
                <td><button onclick="copyEmail('${parts[0]}', '${parts[1]}', ${index})">📋</button></td>
                <td>${parts[0]}</td>
                <td>${parts[1]}</td>
            </tr>`;
            tableBody.innerHTML += row;
            index++;
        }
    });
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
