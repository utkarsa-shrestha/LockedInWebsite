const completecheck = (taskno) =>{
    setTimeout(()=>{
         let completedtask = document.createElement('div')
         completedtask.setAttribute('id', 'completed'+taskno)

         document.querySelector('.completedtaskdisplaysection').append(completedtask)

         alert('hello')
    }, 100)
}