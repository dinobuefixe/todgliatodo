let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if (tasks.length > 0) {

    let html = `<table>`;

    for (let i = 0; i < tasks.length; i++) {
        let t = tasks[i];

        html += `
            <tr>
                <th><button id="finishTask_${i}"><img src="https://static.vecteezy.com/system/resources/previews/017/178/572/non_2x/check-mark-symbol-icon-on-transparent-background-free-png.png" class="icon"></button></th>
                <th>${t.title}</th>
                <th>${t.text}</th>
                <th>${t.dateOfCreation}</th>
                <th>
                    <button id="deleteTask_${i}"><img src="https://cdn3d.iconscout.com/3d/premium/thumb/caixote-do-lixo-11804080-9693530.png" class="icon"></button>
                    <button id="editTask_${i}"><img src="https://cdn.creazilla.com/icons/3233803/edit-icon-md.png" class="icon"></button>
                </th>
            </tr>
        `;

    }

    html += `</table>`;

    document.getElementById("listings").innerHTML = html;
}

let finishedTasks = JSON.parse(localStorage.getItem("tarefasTerminadas")) || [];

if (finishedTasks.length > 0) {

    let html = `
        <table>
            <tr>
                <th colspan="5">TERMINADAS</th>
            </tr>
    `;

    for (let i = 0; i < finishedTasks.length; i++) {
        let t = finishedTasks[i];

        html += `
            <tr>
                <td>${t.title}</td>
                <td>${t.text}</td>
                <td>${t.dateOfCreation}</td>
            </tr>
        `;
    }

    html += `</table>`;

    document.getElementById("finishedListings").innerHTML = html;
}

