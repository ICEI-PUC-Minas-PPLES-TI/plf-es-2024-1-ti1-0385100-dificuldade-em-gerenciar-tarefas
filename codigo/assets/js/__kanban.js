document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('add-project-form');
    const projectNameInput = document.getElementById('project-name');
    const projectStatusSelect = document.getElementById('project-status');
    const projectEndDateInput = document.getElementById('project-end-date');
    const projects = JSON.parse(localStorage.getItem('kanban-projects')) || [];

    

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = projectNameInput.value;
        const status = projectStatusSelect.value;
        const endDate = projectEndDateInput.value;

        if (!name.trim()) {
            return;
        }

        projects.push({ name, status, endDate, friends: [] });
        localStorage.setItem('kanban-projects', JSON.stringify(projects));

        projectNameInput.value = '';
        projectStatusSelect.value = 'pending';
        projectEndDateInput.value = '';

        
    });

    
});