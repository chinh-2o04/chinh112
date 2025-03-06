document.getElementById("filterBtn").addEventListener("click", function() {
    let inputText = document.getElementById("emailInput").value.trim();
    if (!inputText) {
        alert("Vui lòng nhập danh sách email!");
        return;
    }

    let lines = inputText.split(/\n/);
    let emailList = [];

    lines.forEach(line => {
        let parts = line.trim().split(/\s+/);
        if (parts.length === 2) {
            emailList.push({ email: parts[0], password: parts[1] });
        }
    });

    let tableBody = document.querySelector("#emailTable tbody");
    tableBody.innerHTML = "";

    emailList.forEach((item, index) => {
        let row = tableBody.insertRow();
        
        // Nút sao chép
        let copyCell = row.insertCell(0);
        let copyBtn = document.createElement("button");
        copyBtn.innerText = "📋";
        copyBtn.onclick = function() {
            navigator.clipboard.writeText(`${item.email} ${item.password}`);
            alert(`Đã sao chép: ${item.email}`);
        };
        copyCell.appendChild(copyBtn);
        
        row.insertCell(1).innerText = index + 1;
        row.insertCell(2).innerText = item.email;
        row.insertCell(3).innerText = item.password;
    });
});
