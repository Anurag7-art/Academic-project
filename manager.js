// ==========================================
// MANAGER LOGIN
// ==========================================

let loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            let username =
                document.getElementById("username").value;

            let password =
                document.getElementById("password").value;


            if (
                username === "manager" &&
                password === "manager1234"
            ) {

                localStorage.setItem(
                    "managerLoggedIn",
                    "true"
                );


                window.location.href =
                    "manager-dashboard.html";

            } else {

                document.getElementById(
                    "loginError"
                ).innerText =
                    "Invalid username or password.";

            }

        }
    );

}


// ==========================================
// MANAGER DASHBOARD
// ==========================================

let managerTable =
    document.getElementById("managerTableBody");


if (managerTable) {

    // Check login

    let loggedIn =
        localStorage.getItem("managerLoggedIn");


    if (loggedIn !== "true") {

        window.location.href =
            "manager-login.html";

    }


    displayManagerRequests();

    updateManagerStats();

}


// ==========================================
// GET REQUESTS
// ==========================================

function getLeaves() {

    return JSON.parse(
        localStorage.getItem("leaves")
    ) || [];

}


// ==========================================
// DISPLAY REQUESTS
// ==========================================

function displayManagerRequests() {

    let leaves = getLeaves();


    managerTable.innerHTML = "";


    if (leaves.length === 0) {

        managerTable.innerHTML = `

            <tr>

                <td
                    colspan="7"
                    style="text-align:center;"
                >
                    No leave requests available.
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

            <td>

                ${
                    leave.status === "Pending"

                    ?

                    `
                    <button
                        class="action-btn approve-btn"
                        onclick="updateStatus(${leave.id}, 'Approved')"
                    >
                        Approve
                    </button>

                    <button
                        class="action-btn reject-btn"
                        onclick="updateStatus(${leave.id}, 'Rejected')"
                    >
                        Reject
                    </button>
                    `

                    :

                    `<span>Completed</span>`
                }

            </td>

        `;


        managerTable.appendChild(row);

    });

}


// ==========================================
// UPDATE STATUS
// ==========================================

function updateStatus(id, status) {

    let leaves = getLeaves();


    let leave =
        leaves.find(function (item) {

            return item.id === id;

        });


    if (!leave) {

        return;

    }


    leave.status = status;


    localStorage.setItem(
        "leaves",
        JSON.stringify(leaves)
    );


    displayManagerRequests();

    updateManagerStats();

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

function updateManagerStats() {

    let leaves = getLeaves();


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


    document.getElementById("managerTotal")
        .innerText = total;


    document.getElementById("managerPending")
        .innerText = pending;


    document.getElementById("managerApproved")
        .innerText = approved;


    document.getElementById("managerRejected")
        .innerText = rejected;

}


// ==========================================
// LOGOUT
// ==========================================

let logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "managerLoggedIn"
            );


            window.location.href =
                "manager-login.html";

        }
    );

}