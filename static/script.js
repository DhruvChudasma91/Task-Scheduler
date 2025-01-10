document.addEventListener('DOMContentLoaded', function () {
    // Get the task form and task list elements
    const form = document.getElementById('task-form');
    const taskList = document.getElementById('task-schedule');

    // Function to fetch tasks and display them
    function fetchTasks() {
        fetch('/get_schedule')
            .then(response => response.json())
            .then(data => {
                const tasks = data.schedule;
                taskList.innerHTML = ''; // Clear existing tasks

                tasks.forEach(task => {
                    const li = document.createElement('li');
                    li.textContent = `Task: ${task[1]} | Deadline: ${task[0]}`;
                    taskList.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching tasks:', error));
    }

    // Fetch tasks on page load
    fetchTasks();

    // Add event listener to handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the task name and deadline from the input fields
        const taskName = document.getElementById('task-name').value;
        const taskDeadline = document.getElementById('task-deadline').value;

        // Send a POST request to add the task
        fetch('/add_task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: taskName,
                deadline: taskDeadline,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message); // Show success message
                fetchTasks(); // Refresh task list
                form.reset(); // Clear form inputs
            } else if (data.error) {
                alert(data.error); // Show error message
            }
        })
        .catch(error => {
            alert('Error adding task:', error);
        });
    });
});
