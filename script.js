// {   const checkIcon = document.querySelector(".js-check");

//     const tasks = [
//         {
//             content: "ggfd",
//             done: true,
//         },
//         {
//             content: "text",
//             done: false,
//         },
//         {
//             content: "trash",
//             done: false,
//         },
//     ];
//     const render = () => {
//         let htmlString = "";

//         for (const task of tasks) {
//             htmlString += `
//             <span>
//             ${task.content} ${chec}
//             </span>
//             `;
//         };
//         document.querySelector(".js-taskList").innerHTML = htmlString;

//     };
    
    
    
    
    const onFormSubmit = (event) => {
       
        event.preventDefault();

        

    }

    const init = () => {
        const addTaskButton = document.querySelector(".js-button");
        addTaskButton.addEventListener("submit", onFormSubmit);
        render();
    }
    init();
};

