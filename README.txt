Todolist App
This is a simple Todolist app built using React. It allows you to add, edit, and delete tasks, as well as mark tasks as completed.

Features
Add a new task with a title
Edit an existing task's title
Delete a task
Mark a task as completed
Filter tasks based on search query and completion status


Installation
Clone the repository:
Navigate to the project directory:
Install the dependencies:
Start the development server:
Open the app in your browser:

Usage
Home Page: Displays the list of tasks. You can add new tasks, search for tasks, and toggle the visibility of completed tasks.
Add Task Page: Allows you to add a new task by providing a title.
Edit Task Page: Enables you to edit the title of an existing task.

Components
TaskForm.js: Renders a form to add a new task.
TaskItem.js: Represents an individual task item with options to edit, delete, and mark as complete.
TaskList.js: Displays the list of tasks using the TaskItem component.

Pages
HomePage.js: Displays the main page with the task list, search functionality, and options to toggle completed tasks.
AddTaskPage.js: Renders the page to add a new task.
EditTaskPage.js: Provides the page to edit the title of an existing task.

Data Flow
The HomePage component fetches tasks from a local storage or an API endpoint when the app loads.
User actions trigger functions in the HomePage component to add, edit, or delete tasks.
The HomePage component updates the state of tasks and rerenders the UI.
The TaskList component receives the updated tasks and renders the list of tasks using the TaskItem component.
User interactions with TaskItem component trigger functions in the HomePage component to edit, delete, or mark tasks as complete.
The state of tasks is updated, and the UI is rerendered accordingly.
Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.