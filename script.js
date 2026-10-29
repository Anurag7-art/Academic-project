// ==========================================
// GET LEAVE DATA
// ==========================================

let leaves =
    JSON.parse(localStorage.getItem("leaves")) || [];


// ==========================================
// FORM
// ==========================================

let leaveForm =
    document.getElementById("leaveForm");


leaveForm.addEventListener("submit", function (event) {

    event.preventDefault();


    let employee =
        document.getElementById("employeeName").value;

    let leaveType =
        document.getElementById("leaveType").value;

    let startDate =
        document.getElementById("startDate").value;

    let endDate =
        document.getElementById("endDate").value;

    let reason =
        document.getElementById("reason").value;


    // Check date

    if (endDate < startDate) {

        alert("End date cannot be before start date.");

        return;

    }


    // Create request

    let newLeave = {

        id: Date.now(),

        employee: employee,

        leaveType: leaveType,

        startDate: startDate,

        endDate: endDate,

        reason: reason,

        status: "Pending"

    };


    // Add request

    leaves.push(newLeave);


    // Save

    localStorage.setItem(
        "leaves",
        JSON.stringify(leaves)
    );


    // Reset

    leaveForm.reset();


    // Refresh

    displayLeaves();

    updateStats();


    alert(
        "Leave request submitted successfully!"
    );

});


// ==========================================
// DISPLAY LEAVES
// ==========================================

function displayLeaves() {

    let tableBody =
        document.getElementById("leaveTableBody");


    tableBody.innerHTML = "";


    if (leaves.length === 0) {

        tableBody.innerHTML = `

            <tr>

                <td
                    colspan="6"
                    style="text-align:center;"
                >
                    No leave requests found.
                </td>

            </tr>

        `;

        return;

    }


    leaves.forEach(function (leave) {

        let row =
            document.createElement("tr");


        let statusClass =
            getStatusClass(leave.status);


        row.innerHTML = `

            <td>
                ${leave.employee}
            </td>

            <td>
                ${leave.leaveType}
            </td>

            <td>
                ${leave.startDate}
            </td>

            <td>
                ${leave.endDate}
            </td>

            <td>
                ${leave.reason}
            </td>

            <td>

                <span class="status ${statusClass}">
                    ${leave.status}
                </span>

            </td>

        `;


        tableBody.appendChild(row);

    });

}


// ==========================================
// STATUS CLASS
// ==========================================

function getStatusClass(status) {

    if (status === "Approved") {

        return "status-approved";

    }


    if (status === "Rejected") {

        return "status-rejected";

    }


    return "status-pending";

}


// ==========================================
// STATISTICS
// ==========================================

function updateStats() {

    let total = leaves.length;


    let pending =
        leaves.filter(
            leave => leave.status === "Pending"
        ).length;


    let approved =
        leaves.filter(
            leave => leave.status === "Approved"
        ).length;


    let rejected =
        leaves.filter(
            leave => leave.status === "Rejected"
        ).length;


    document.getElementById("totalRequests")
        .innerText = total;


    document.getElementById("pendingRequests")
        .innerText = pending;


    document.getElementById("approvedRequests")
        .innerText = approved;


    document.getElementById("rejectedRequests")
        .innerText = rejected;

}


// ==========================================
// INITIAL LOAD
// ==========================================

displayLeaves();

updateStats();