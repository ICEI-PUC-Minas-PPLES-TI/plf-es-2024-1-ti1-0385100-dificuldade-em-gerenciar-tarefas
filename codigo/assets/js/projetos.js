let data = JSON.parse(localStorage.getItem('data'));
let projects = data.users[0].projetos



function saveProjectsToLocalStorage() {
    
    localStorage.setItem('data', JSON.stringify(data));

}

function createProjectListItem(project, index) {
    const listItem = document.createElement('li');

    const projectText = document.createElement('h2');
    projectText.textContent = project.titulo;
    listItem.appendChild(projectText);

    const deleteButton = createDeleteButton(index);
    listItem.appendChild(deleteButton);
    listItem.appendChild(createEditButton(project, index, projectText, listItem, deleteButton));

    return listItem;
}

function createDeleteButton(index) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Deletar';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
        projects.splice(index, 1);
        saveProjectsToLocalStorage();
        renderProjects();
    });
    return deleteButton;
}

function createEditButton(project, index, projectText, listItem, deleteButton) {
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.className = 'edit-button';
    editButton.addEventListener('click', function() {
        listItem.replaceChild(createEditInput(project), projectText);
        listItem.removeChild(editButton);
        deleteButton.style.display = 'none'; // Esconde o botão de deletar
        listItem.appendChild(createSaveButton(index, deleteButton));
    });
    return editButton;
}

function createEditInput(project) {
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = project.name;
    editInput.className = 'edit-input';
    return editInput;
}

function createSaveButton(index, deleteButton) {
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Salvar';
    saveButton.className = 'save-button';
    saveButton.addEventListener('click', function() {
        const editInput = document.querySelector('.edit-input');
        if (editInput.value.trim() !== '') {
            projects[index].name = editInput.value;
            saveProjectsToLocalStorage();
            renderProjects();
        } else {
            alert('O nome do projeto não pode estar em branco.');
        }
        deleteButton.style.display = 'block'; // Mostra o botão de deletar novamente
    });
    return saveButton;
}

function renderProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    projects.forEach((project, index) => {
        projectList.appendChild(createProjectListItem(project, index));
    });
}

document.getElementById('new-project-button').addEventListener('click', function() {
    const projectName = document.getElementById('new-project-input').value;
    if (projectName) {
        const newProject = {
            titulo: projectName,
            tarefas: []
        };

        data.users[0].projetos.push(newProject);
        document.getElementById('new-project-input').value = '';
        saveProjectsToLocalStorage();
        renderProjects();
    }
});

renderProjects();
