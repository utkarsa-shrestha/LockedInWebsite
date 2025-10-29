let completedtaskno;
if(!localStorage.getItem('completedtaskno')){
    completedtaskno = 1;
}
else{
    completedtaskno = localStorage.getItem('completedtaskno')
}

const completecheck = (taskno) =>{
    setTimeout(()=>{
        let completedtask = localStorage.getItem('taskn'+taskno)
        localStorage.setItem('completed'+taskno, completedtask)
        //to remove the task from remove

        document.querySelector('.task'+taskno).remove()
        localStorage.removeItem('taskn'+taskno)
        localStorage.setItem('completedtaskno', completedtaskno)

        ++completedtaskno;

        let amount = document.querySelector('.actualdisplaysection').childElementCount ;

        localStorage.setItem('taskleft', amount - 1)
   
        
    }, 100)
}