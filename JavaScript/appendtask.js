const input = document.querySelector('#entertask');
const submit = document.querySelector('.submit');
let taskno;
if(!localStorage.getItem('totaltask') ){
    taskno = 0; 
}
else{
    taskno = localStorage.getItem('totaltask')
}


//function to append the task


submit.addEventListener('click', ()=>{
    //incremented of taskno
    ++taskno
    //defining all of the elements

    document.querySelector('#taskdisplay').style.display = 'block';

    let taskn = document.createElement('div')
    taskn.setAttribute('id', 'task' + taskno)

    let task = document.createElement('div') //append to actual display section
    task.setAttribute('class', 'task')
    task.setAttribute('id',taskno)

    let complete = document.createElement('input') //append to task
    complete.setAttribute('class', 'complete')
    complete.setAttribute('type', 'radio')
    complete.setAttribute('value', taskno)
    complete.setAttribute('onclick', 'completecheck(value)' )

    let taskinfo = document.createElement('div') //append to task
    taskinfo.setAttribute('class', 'taskinfo')

    let edit = document.createElement('div') //append to task
    taskinfo.setAttribute('class', 'taskinfo')
    edit.setAttribute('class', 'edit')

    let edittask = document.createElement('button') //append to edit
    edittask.setAttribute('class', 'edittask')
    edittask.setAttribute('value', taskno)
    edittask.setAttribute('onclick', 'edittask(value)')

    let editicon = document.createElement('img') //append to edittask
    editicon.setAttribute('class', 'editicon')
    editicon.setAttribute('src', 'Images/edit.png')

    let removetask = document.createElement('button')//append to edit
    removetask.setAttribute('class', 'removetask')
    removetask.setAttribute('value', taskno)
    removetask.setAttribute('onclick', 'removetask(value)')

    let removeicon = document.createElement('img')//append to remove task
    removeicon.setAttribute('class', 'removeicon')
    removeicon.setAttribute('src', 'Images/remove.png')

     let taskvalue = input.value //value to enter as a new task
     taskinfo.textContent = taskvalue;

    //append section

     document.querySelector('.actualdisplaysection').append(taskn)
     taskn.append(task)
     task.append(complete)
     task.append(taskinfo)
     task.append(edit)
     edit.append(edittask)
     edittask.append(editicon)
     edit.append(removetask)
     removetask.append(removeicon)
    localStorage.setItem('taskn'+taskno, taskn.outerHTML)
    localStorage.setItem('totaltask', taskno)

    

    let amount = document.querySelector('.actualdisplaysection').childElementCount ;

    localStorage.setItem('taskleft', amount - 1)
    
    window.location.reload()
   
})

//so that the tasks still stay even after a reload or afer closing and reopen
for(i=1; i<= parseInt(localStorage.getItem('totaltask')); i++){
    let savedtask = document.createElement('div')
    savedtask.setAttribute('class', 'task' + i)
    document.querySelector('.actualdisplaysection').append(savedtask)
    savedtask.innerHTML = localStorage.getItem(('taskn'+ i))

    if(localStorage.getItem('editedvalue'+i)){ //so that the edited value stays even after reload
        document.getElementById(i).childNodes[1].textContent = localStorage.getItem('editedvalue'+i)
    }
}

//to check the amount of elements inside actualdisplaysection

