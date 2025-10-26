let completedtaskno;
if(!localStorage.getItem('completedtaskno')){
    completedtaskno = 1;
}
else{
    completedtaskno = localStorage.getItem('completedtaskno')
}

const completecheck = (taskno) =>{
    setTimeout(()=>{
        localStorage.setItem('completed'+taskno, localStorage.getItem('taskn'+taskno))
        //to remove the task from remove
        document.getElementById(taskno).remove()
        localStorage.removeItem('taskn'+taskno)
        localStorage.removeItem('editedvalue'+taskno)
        localStorage.setItem('totaltask', parseInt(localStorage.getItem('totaltask')) - 1)
        
        localStorage.setItem('completedtaskno', completedtaskno)
        
        ++completedtaskno;
        
    }, 100)
}