//to remove completed task

const removetask = (taskno) =>{
    document.getElementById(taskno).remove()
    document.querySelector('.task'+taskno).remove()
    localStorage.removeItem('completed'+taskno)

    localStorage.setItem('completedtaskno', parseInt(localStorage.getItem('completedtaskno')) - 1)
    let completedcount = document.querySelector('.actualdisplaysection').childElementCount;
    localStorage.setItem('completedtask',parseInt(localStorage.getItem('completedtask')) - 1)

    window.location.reload()
}