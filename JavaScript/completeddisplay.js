for(i=1; i<= parseInt(localStorage.getItem('totaltask')); i++){
    let savedcomptask = document.createElement('div')
    savedcomptask.setAttribute('class', 'task' + i)
    document.querySelector('.actualdisplaysection').append(savedcomptask)
    savedcomptask.innerHTML = localStorage.getItem(('completed'+ i))

    // //for the completed and edited value
    // savedcomptask.childNodes[0].childNodes[0].childNodes[1].textContent = localStorage.getItem('editedvalue'+i)

    if(localStorage.getItem('editedvalue'+i)){ //so that the edited value stays even after reload
        document.getElementById(i).childNodes[1].textContent = localStorage.getItem('editedvalue'+i)
    }
    //make sure the removed tasks dont stay
    if(document.querySelector('.task'+i).innerHTML == ''){
        document.querySelector('.task'+i).remove();
    }
    let completedcount = document.querySelector('.actualdisplaysection').childElementCount;
    if(completedcount != 0){
        localStorage.setItem('completedtask', completedcount)
    }
}


