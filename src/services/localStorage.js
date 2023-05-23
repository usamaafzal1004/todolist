// const TASKS_KEY = 'tasks';
// const PERSONAL_TASKS_KEY = 'personalTasks';

// export const getTasksFromLocalStorage = () => {
//   const tasksString = localStorage.getItem(TASKS_KEY);
//   const personalTasksString = localStorage.getItem(PERSONAL_TASKS_KEY);
//   let tasks = [];
//   let personalTasks = [];

//   try {
//     if (tasksString) {
//       tasks = JSON.parse(tasksString);
//     }

//     if (personalTasksString) {
//       personalTasks = JSON.parse(personalTasksString);
//     }

//     return { tasks, personalTasks };
//   } catch (error) {
//     console.error('Error parsing tasks from localStorage:', error);
//     return { tasks: [], personalTasks: [] };
//   }
// };

// export const saveTasksToLocalStorage = ({ tasks, personalTasks }) => {
//   try {
//     const tasksString = JSON.stringify(tasks);
//     localStorage.setItem(TASKS_KEY, tasksString);

//     const personalTasksString = JSON.stringify(personalTasks);
//     localStorage.setItem(PERSONAL_TASKS_KEY, personalTasksString);

//     return true; // Indicate success
//   } catch (error) {
//     console.error('Error saving tasks to localStorage:', error);
//     return false; // Indicate failure
//   }
// };
