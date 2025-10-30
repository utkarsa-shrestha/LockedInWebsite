let completedtaskno;


const completecheck = (taskno) =>{
    setTimeout(()=>{
        let completedtask = localStorage.getItem('taskn'+taskno)
        localStorage.setItem('completed'+taskno, completedtask)
        //to remove the task from remove

        document.querySelector('.task'+taskno).remove()
        localStorage.removeItem('taskn'+taskno)

        let completedcount = document.querySelector('.actualdisplaysection').childElementCount;
        if(completedcount != 0){
            localStorage.setItem('completedtask', completedcount)

         // window.location.reload()
        }

        let amount = document.querySelector('.actualdisplaysection').childElementCount ;

        localStorage.setItem('taskleft', amount - 1)
   
        
    }, 100)
}