{
    let tasks = [];

    let allTasksHidden = false;

    const removeTaskButton = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            ...tasks.slice(index + 1),
        ];
        render();
    }

    const toggleDone = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            {
                ...tasks[index],
                done: !tasks[index].done,
            },
            ...tasks.slice(index + 1),
        ];
        render();
    }

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            {
                content: newTaskContent,
            },
        ];
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

    const toggleHideDoneTasksButton = () => {
        allTasksHidden = !allTasksHidden;
    }

    const setAllDone = () => {
        tasks = tasks.map((task) => ({
            ...task,
            done: true,
        }));
        render();
    };

    const bindButtonEvents = () => {
        const allDoneButton = document.querySelector(".js-allDoneButton");

        if (allDoneButton) {
            allDoneButton.addEventListener("click", setAllDone);
        };

        const hideAllDone = document.querySelector(".js-hideAllDoneButton");

        if(hideAllDone) {
            hideAllDone.addEventListener("click", toggleHideDoneTasksButton);
        };
    };

    const renderButtons = () => {
        let innerButtons = "";

        if (tasks.length) {
            innerButtons += `
            <button class="section__span--button js-hideAllDoneButton">${allTasksHidden ? "Show" : "Hide"} done tasks</button>
            <button class="section__span--button js-allDoneButton" ${tasks.every(({ done }) => done) ? " disabled" : ""}>
            Mark all as done</button>
            `;
        };
        document.querySelector(".js-span").innerHTML = innerButtons;
    }

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <button class="taskContainer__checkButton js-checkButton">
            ${task.done ? "&#10004" : ""}
            </button>
                <span class="addedTaskText js-addedTaskText ${task.done ? "taskContainer__checkButton--lineThrough" : ""}">
                ${task.content}
                </span>
                <button class="taskContainer__removeButton js-removeButton">
                &#10006;
                </button>
                </span>
            `;
        };
        document.querySelector(".js-taskList").innerHTML = htmlString;
    };


    const render = () => {

        renderButtons();
        renderTasks();
        bindEvents();
        bindButtonEvents();
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