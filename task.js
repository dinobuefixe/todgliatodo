function createTask(){
    const newForms = document.createElement("form");

    const title = document.createElement("input");
    title.type="text";
    title.name="task";
    title.id="title";
    title.placeholder="Insira o titulo da tarefa";

    const taskText = document.createElement("input");
    taskText.type="text";
    taskText.name="task";
    taskText.id="text";
    taskText.placeholder="Insira a sua tarefa";

    const button = document.createElement("button");
    button.textContent = "Submit";
    button.id="addTask";

    newForms.appendChild(title);
    newForms.appendChild(taskText)
    newForms.appendChild(button);

    document.getElementById("taskForm").appendChild(newForms);
    const addTaskButton = document.getElementById("createTask");
    addTaskButton.remove();

    button.addEventListener("click", addTask);
}


function addTask(){

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getYear();
    let dateFinal= day + "/" + month + "/" +year;

    const text = document.getElementById('text').value;
    const title = document.getElementById('title').value;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    try {
        tasks.push({
            title: title,
            text: text,
            dateOfCreation: dateFinal
        });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("SIGMA");
    } catch (error) {
        console.error("Erro ao adicionar tarefa:", error);
    }

    console.log("Sucesso");
}


