document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Функция для добавления задачи
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    // Функция для добавления задачи в список
    function addTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Кнопка удаления задачи
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Удалить";
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    // Добавление задачи по нажатию Enter
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTaskBtn.click();
        }
    });
});