{
    const tasks = [];

    


    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <button class="gridContainer__checkButton js-checkButton">
            &#10004;
            </button>
                <span ${task.done ? "style=\"text-decoration: line-through\"" : ""}class="addedTaskText js-addedTaskTest">
                ${task.content}
                </span>
                <button class="gridContainer__removeButton js-removeButton">
                &#10006;
                </button>
            `;
        };
        document.querySelector(".js-taskList").innerHTML = htmlString;
    };





    const onFormSubmit = (event) => {
        const newTaskContent = document.querySelector(".js-input").value.trim();
        event.preventDefault();
        document.querySelector(".js-input").focus(); 
        
        
        if (newTaskContent === "") {
            return;
        };
        addNewTask(newTaskContent);
        
         
    }; 
   
    const addNewTask = (newTaskContent) => {
        
        tasks.push({
            content: newTaskContent,
        });
        render();
    };



    const init = () => {
        
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
        
    };
    init();
};
