import json from './__kanban-view.json' with {type: 'json'}

let data = localStorage.getItem("kanban-projects")
if(data == null) {
    localStorage.setItem("kanban-projects", JSON.stringify(json))
    data = localStorage.getItem("kanban-projects")

}
data = JSON.parse(data)
//Loop throught tasks
const createTask = (status, task) => {
    switch (status) {
        case "active":
            const projetosAtivos = document.getElementsByClassName("ativos-list")[0]
            const activeTask = document.createElement("div")
            activeTask.id = "ativo-"+ task.name
            activeTask.className = "task"
            activeTask.innerText = task.name + "\n" + task.endDate

            projetosAtivos.appendChild(activeTask)
            return;
        case "finished":
            const projetosFinalizados = document.getElementsByClassName("finalizados-list")[0]
            const finishedTask = document.createElement("div")
            finishedTask.id = "finalizados-" + task.name
            finishedTask.className = "task"
            finishedTask.innerText = task.name + "\n" + task.endDate
            projetosFinalizados.appendChild(finishedTask)
            return;
        case "pending":
            const projetosPendentes = document.getElementsByClassName("pendentes-list")[0]
            const pendingTask = document.createElement("div")
            pendingTask.id = "pendentes-" + task.name
            pendingTask.id = pendingTask.id.replace(" ", "-")
            pendingTask.className = "task"
            pendingTask.innerText = task.name + "\n" + task.endDate

           
            projetosPendentes.appendChild(pendingTask)

            break;
        default:
            return undefined;
    }
  
}

const render = ()=>{
    data.tasks.map((task)=> {
        createTask(task.status, task)
    })
}


render()
