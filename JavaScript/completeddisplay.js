for(i=1; i<= parseInt(localStorage.getItem('completedtaskno')); i++){
    let savedcomptask = document.createElement('div')
    savedcomptask.setAttribute('class', 'task' + i)
    document.querySelector('.actualdisplaysection').append(savedcomptask)
    savedcomptask.innerHTML = localStorage.getItem(('completed'+ i))

    if(localStorage.getItem('editedvalue'+i)){ //so that the edited value stays even after reload
        document.getElementById(i).childNodes[1].textContent = localStorage.getItem('editedvalue'+i)
    }
}