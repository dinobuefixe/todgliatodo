if (JSON.parse(localStorage.getItem("tasks")).length > 0) {

    document.addEventListener("click", (evento) => {

        if (evento.target && evento.target.id.startsWith("deleteTask_")) {

            Swal.fire({
                title: "Queres mesmo apagar esta tarefa?",
                text: "Não poderás voltar atrás!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "APAGA!"
                }).then((result) => {
                if (result.isConfirmed){
                    let indiceDaTarefa = evento.target.id.split("_")[1];

                    let listaDeTarefas = JSON.parse(localStorage.getItem("tasks")) || [];

                    listaDeTarefas.splice(indiceDaTarefa, 1);

                    localStorage.setItem("tasks", JSON.stringify(listaDeTarefas));

                    Swal.fire({
                        title: "Apagado!",
                        text: "Tarefa apagada com sucesso.",
                        icon: "success"
                    }).then(() => {
                        window.location.reload();
                    });
                } 

            });


        }

        if (evento.target && evento.target.id.startsWith("finishTask_")) {

            let indiceDaTarefa = evento.target.id.split("_")[1];

            let listaDeTarefas = JSON.parse(localStorage.getItem("tasks")) || [];

            let tarefaTerminada = listaDeTarefas.splice(indiceDaTarefa, 1)[0];

            let tarefasTerminadas = JSON.parse(localStorage.getItem("tarefasTerminadas")) || [];

            tarefasTerminadas.push(tarefaTerminada);

            console.log(tarefasTerminadas)
            localStorage.setItem("tasks", JSON.stringify(listaDeTarefas));
            localStorage.setItem("tarefasTerminadas", JSON.stringify(tarefasTerminadas));

            console.log("Tarefa Completa:", indiceDaTarefa);

            Swal.fire({
            title: "Bom trabalho :)!",
            text: "Terminaste a tarefa!",
            icon: "success"
            }).then(() => {
                window.location.reload();
            });

        }

        if (evento.target && evento.target.id.startsWith("editTask_")) {

            let indice = evento.target.id.split("_")[1];
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

            let linha = evento.target.closest("tr");

            let tarefa = tasks[indice];

            linha.innerHTML = `
                <th><button id="saveTask_${indice}">save</button></th>
                <th><input id="editTitle_${indice}" value="${tarefa.title}"></th>
                <th><input id="editText_${indice}" value="${tarefa.text}"></th>
                <th>
                    <button id="cancelEdit_${indice}">cancel</button>
                </th>
            `;
        }

        if (evento.target && evento.target.id.startsWith("saveTask_")) {

            let indice = evento.target.id.split("_")[1];
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

            let data = JSON.parse(localStorage.getItem("tasks.dateOfCreation")) || [];
            let novoTitulo = document.getElementById(`editTitle_${indice}`).value;
            let novoTexto = document.getElementById(`editText_${indice}`).value;

            tasks[indice] = {
                title: novoTitulo,
                text: novoTexto,
                dateOfCreation: tasks[indice].dateOfCreation
            };

            localStorage.setItem("tasks", JSON.stringify(tasks));

            window.location.reload();
        }

        if (evento.target && evento.target.id.startsWith("cancelEdit_")) {
            window.location.reload();
        }

    });

}