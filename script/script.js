{
    let tasks = [];

    const removeTaskButton = (index) => {

        tasks.splice(index, 1);
        render();
    }

    const toggleDone = (index) => {

        tasks[index].done = !tasks[index].done
        render();
    }

    const addNewTask = (newTaskContent) => {

        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const bindEvents = () => {
        const doneButtons = document.querySelectorAll(".js-checkButton");

        doneButtons.forEach((doneButtons, index) => {
            doneButtons.addEventListener("click", () => {
                toggleDone(index);
            });
        });

        const removeButtons = document.querySelectorAll(".js-removeButton");

        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTaskButton(index);
            });
        });
    };

    const renderButtons = (htmlString) => {
        let innerButtons = "";

        if (htmlString) {
            innerButtons += `
            <button class="section__span--button">Hide done tasks</button>
            <button class="section__span--button">Mark all as done</button>
            `;
        };
        document.querySelector(".js-span").innerHTML = innerButtons;
    }

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <button class="taskContainer__checkButton js-checkButton">
            ${task.done ? "&#10004": ""}
            </button>
                <span class="addedTaskText js-addedTaskText ${task.done ? "taskContainer__checkButton--lineThrough" : ""}">
                ${task.content}
                </span>
                <button class="taskContainer__removeButton js-removeButton">
                &#10006;
                </button>
            `;
        };
        document.querySelector(".js-taskList").innerHTML = htmlString;
        renderButtons(htmlString);
    };


    const render = () => {
        renderTasks();
        bindEvents();
    };

    const onFormSubmit = (event) => {

        event.preventDefault();

        const newTaskContent = document.querySelector(".js-input").value.trim();

        document.querySelector(".js-input").focus();
        document.querySelector(".js-input").value = "";

        if (newTaskContent === "") {
            return;
        };
        addNewTask(newTaskContent);
    };

    const init = () => {

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

    };
    init();
};