{
    const tasks = [];

    const removeTaskButton = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const toggleDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }



    const addNewTask = (newTaskContent) => {

        tasks.push({
            content: newTaskContent,
           
        });
        render();
    };

    const bindEvents = () => {
        const checkButtons = document.querySelectorAll(".js-checkButton");

        checkButtons.forEach((checkButtons, index) => {
            checkButtons.addEventListener("click", () => {
                toggleDone(index);
            });
        });

        const removeButtons = document.querySelectorAll(".js-removeButton");

        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTaskButton(index);
            });
        });
    }




    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <button class="gridContainer__checkButton js-checkButton">
            &#10004;
            </button>
                <span ${task.done ? "style=\"text-decoration: line-through\"" : ""} class="addedTaskText js-addedTaskTest">
                ${task.content}
                </span>
                <button class="gridContainer__removeButton js-removeButton">
                &#10006;
                </button>
            `;
        };
        document.querySelector(".js-taskList").innerHTML = htmlString;
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
