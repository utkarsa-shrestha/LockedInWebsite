//function to remove task
const removetask = (taskno) => {
    let conf = confirm("Do you want to delete the task?")
    if (conf == true){
        document.querySelector('.task'+taskno).remove()
        localStorage.removeItem('taskn'+taskno)
        localStorage.removeItem('editedvalue'+taskno)

          let amount = document.querySelector('.actualdisplaysection').childElementCount ;


        localStorage.setItem('taskleft', amount - 1)
   
    }
}
