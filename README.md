# **Task Scheduler Web Application**

## **Description**
The Task Scheduler is a simple web application that helps users manage tasks efficiently. Users can:
- Add tasks with deadlines.
- View a prioritized list of tasks sorted by deadline.
- Remove tasks from the list once completed.

The backend is built using Flask (Python), and the frontend uses HTML, CSS, and JavaScript for a responsive and user-friendly interface.

---

## **Features**
- Add tasks with a name and deadline.
- Display tasks in order of priority (earliest deadline first).
- Remove tasks directly from the schedule.

---

## **Technologies Used**
- **Backend:** Flask (Python)
- **Frontend:** HTML, CSS, JavaScript
- **Styling:** Responsive design with Flexbox
- **Data Handling:** Python `heapq` module for task prioritization

---

## **Setup Instructions**

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/your-username/task-scheduler.git
cd task-scheduler
```

### **Step 2: Set Up the Python Environment**
1. Make sure you have Python installed (version 3.8 or higher recommended).
2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
3. Activate the virtual environment:
   - **Windows:**
     ```bash
     venv\Scripts\activate
     ```
   - **Mac/Linux:**
     ```bash
     source venv/bin/activate
     ```

### **Step 3: Install Dependencies**
Install the required Python packages using `pip`:
```bash
pip install -r requirements.txt
```

### **Step 4: Run the Application**
Start the Flask development server:
```bash
python app.py
```
The application will run locally on `http://127.0.0.1:5000`.

---

## **Project Structure**
```
task-scheduler/
│
├── app.py               # Flask backend
├── templates/
│   └── index.html       # Frontend HTML
├── static/
│   ├── styles.css       # CSS for styling
│   └── script.js        # JavaScript for interactivity
├── requirements.txt     # Python dependencies
└── README.md            # Project description (this file)
```

---

## **Usage Instructions**
1. Open the application in your browser at `http://127.0.0.1:5000`.
2. Add a task by entering the **Task Name** and **Deadline**.
3. View the list of tasks in order of their deadlines.
4. Remove a task by clicking the **Remove** button next to it.

---

## **Screenshots**
### **Home Page**

![Screenshot (84)](https://github.com/user-attachments/assets/3aa83efc-766e-4561-b4cb-52f22b39a464)

### **Task List**

![Screenshot (85)](https://github.com/user-attachments/assets/d084d0c7-36e5-4733-afac-793fe9cbb868)


---

## **Future Enhancements**
- Add user authentication for personalized task lists.
- Save tasks persistently using a database (e.g., SQLite).
- Add deadline validation for better error handling.
- Provide an option to edit tasks.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **Contact**
For questions or support, please reach out to dhruvchudasma10@gmail.com.

