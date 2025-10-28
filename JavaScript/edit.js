

//function to edit task
const edittask =  (taskno)=>{
    //create edit panel
    let edittasksection = document.createElement('div')
    edittasksection.setAttribute('class', 'edittasksection') // append to main

    let h1 = document.createElement('h1')
    h1.textContent = 'Enter the edited task:' //append to edittasksection

    let taskedit = document.createElement('input') //append to edittasksection
    taskedit.setAttribute('id', 'taskedit')
    taskedit.setAttribute('type', 'text')
    taskedit.setAttribute('name', 'taskedit')

    let confirm = document.createElement('div') //append to edittasksection
    confirm.setAttribute('class', 'confirm')

    let okay = document.createElement('button') //append to confirm
    okay.setAttribute('class', 'okay')
    okay.setAttribute('onclick', 'taskedit()')
    okay.textContent = 'Okay'

    let cancel = document.createElement('button') //append to confirm
    cancel.setAttribute('class', 'cancel')
    cancel.setAttribute('onclick', 'closeedit()')
    cancel.textContent = 'Cancel'

    //append section
    document.querySelector('.main').append(edittasksection)
    edittasksection.append(h1)
    edittasksection.append(taskedit)
    edittasksection.append(confirm)
    confirm.append(okay)
    confirm.append(cancel)
     overlay.classList.remove('closing');
    overlay.classList.add('active'); //adding the dimming effect
    localStorage.setItem('Task to edit', taskno)
}

//funcion to close the edit section:
const closeedit = () =>{
    document.querySelector('.edittasksection').remove()
    overlay.classList.add('closing');
    setTimeout(() => {
        overlay.classList.remove('active', 'closing'); //removing the dimming effect
    }, 300);
    
}

//function to change the task 
const taskedit  = () =>{
    let taskno = localStorage.getItem('Task to edit')

    let editedvalue = document.querySelector('#taskedit').value
    localStorage.setItem('editedvalue'+ taskno, editedvalue)

    document.getElementById(taskno).childNodes[1].textContent = localStorage.getItem('editedvalue' + taskno);
    document.querySelector('.edittasksection').remove()
    overlay.classList.add('closing');
    setTimeout(() => {
        overlay.classList.remove('active', 'closing'); //removing the dimming effect
    }, 300);
}