if (JSON.parse(localStorage.getItem("tasks")).length > 0) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    let table = document.createElement("table")

    for(let i = 0; i < tasks.length; i++){
        let data = tasks[i];
        let showData = document.createElement("tr");
        let finishTask = document.createElement("th")
        let finishButton = document.createElement("button");
        finishButton.textContent="finish";
        finishButton.id=`finishTask_${i}`;
        let title = document.createElement("th")
        title.textContent=data.title;
        let text = document.createElement("th")
        text.textContent=data.text;
        let date = document.createElement("th")
        date.textContent=data.dateOfCreation;
        let buttons = document.createElement("th")
        let deleteButton = document.createElement("button");
        deleteButton.textContent="delete";
        deleteButton.id=`deleteTask_${i}`;
        let editButton = document.createElement("button");
        editButton.textContent="edit";
        editButton.id=`editTask_${i}`;

        table.appendChild(showData);
        finishTask.appendChild(finishButton);
        showData.appendChild(finishTask);
        showData.appendChild(title);
        showData.appendChild(text);
        showData.appendChild(date);
        buttons.appendChild(deleteButton);
        buttons.appendChild(editButton);
        showData.appendChild(buttons);

        document.getElementById("listings").appendChild(table)
    }

}
