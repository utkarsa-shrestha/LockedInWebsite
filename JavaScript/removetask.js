//function to remove task
const removetask = (taskno) => {
    let conf = confirm("Do you want to delete the task?")
    if (conf == true){
        document.getElementById(taskno).remove()
        localStorage.removeItem('taskn'+taskno)
        localStorage.removeItem('editedvalue'+taskno)
        localStorage.setItem('totaltask', parseInt(localStorage.getItem('totaltask')) - 1)
    }
}