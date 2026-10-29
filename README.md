# Employee Leave Management System

## 📌 Project Overview

The Employee Leave Management System is a frontend web application designed to simplify the process of submitting, tracking, and managing employee leave requests.

The application allows users to submit leave applications, view their status, filter requests, and manage leave records through an interactive dashboard. It uses browser localStorage to store data locally, allowing records to persist after refreshing the page.

## 🚀 Features

- **Dashboard:** View total, pending, approved, and rejected leave requests.
- **Apply for Leave:** Submit leave requests by entering employee details, leave type, dates, and reason.
- **Leave Status Management:** Approve or reject pending requests.
- **Search and Filters:** Search leave requests and filter them by status or leave type.
- **Delete Requests:** Remove leave records when needed.
- **Persistent Storage:** Store leave request data in browser localStorage.
- **Responsive Design:** User-friendly interface designed for different screen sizes.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser localStorage

## 📂 Project Structure

```text
Employee-Leave-Management-System/
│
├── index.html
├── style.css
├── script.js
└── manager-login.html
|___ manager-dashboard.html
|____manager.css
|____manager.js
|___ readme.md
```

*Note: The structure above represents the main application files. Update it if your project contains additional files, such as manager login or dashboard pages.*

## ▶️ How to Run the Project

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in your browser, or use the Live Server extension in VS Code.
4. Start submitting and managing leave requests.

No backend server or database setup is required.

## 🔐 Manager Login

**Demo credentials from the earlier version:**

- **Username:** `manager`
- **Password:** `manager1234`

**Note:** These credentials are hardcoded demo credentials, not secure authentication. Use them only if the corresponding manager login functionality exists in your current project. The current application notes describe the manager portal as a planned enhancement, so verify the implementation before relying on these credentials.

## 💾 Data Storage

The application uses browser localStorage to save leave request information.

- Data persists when the page is refreshed in the same browser.
- Data is stored locally rather than in a centralized database.
- Data is not automatically synchronized between different devices or browsers.

## ⚠️ Limitations

- The application does not currently use a backend server or database.
- Browser localStorage is used instead of centralized data storage.
- The application is a frontend project intended for learning and demonstration.
- Demo login credentials, if implemented, do not provide production-level security.

## 🔮 Future Enhancements

- Implement secure authentication and authorization.
- Develop separate employee and manager dashboards.
- Integrate a backend API and database.
- Add employee and manager role-based access.
- Introduce leave balance tracking and notifications.

## 👨‍💻 Author

**Anurag Shindhe**

Frontend Developer | HTML | CSS | JavaScript

GitHub: https://github.com/Anurag7-art

## 📄 License

This project is intended for educational and portfolio purposes.
