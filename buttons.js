if (JSON.parse(localStorage.getItem("tasks")).length > 0) {

    document.addEventListener("click", (e) => {
        if (e.target && e.target.id.startsWith("deleteTask_")) {

            let index = e.target.id.split("_")[1];

            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

            tasks.splice(index, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            console.log("Tarefa apagada:", index);

            window.location.reload(true);
        }
    });


}