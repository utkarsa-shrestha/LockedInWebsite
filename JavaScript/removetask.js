//function to remove task
const removetask = (taskno) => {
    let conf = confirm("Do you want to delete the task?")
    if (conf == true){
        document.getElementById(taskno).remove()
        document.getElementById('task'+taskno).remove()
        document.querySelector('.task'+taskno).remove()
        localStorage.removeItem('taskn'+taskno)
        localStorage.removeItem('editedvalue'+taskno)
        // localStorage.setItem('totaltask', parseInt(localStorage.getItem('totaltask')) - 1)

          let amount = document.querySelector('.actualdisplaysection').childElementCount ;


        localStorage.setItem('taskleft', amount - 1)
   
    }
}
