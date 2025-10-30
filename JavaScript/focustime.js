
if(localStorage.getItem('Timefocused')){
    let totaltimeinseconds = parseInt(localStorage.getItem('Timefocused'))
    if(totaltimeinseconds < 3600){
    document.querySelector('.time').textContent = Math.round(totaltimeinseconds/60) + 'min';
    }
    else{
        document.querySelector('.time').textContent = Math.round(totaltimeinseconds/3600) + 'hr';
    }
}
else if(!localStorage.getItem('Timefocused')){
    document.querySelector('.time').textContent = '0min'
}

if(localStorage.getItem('taskleft')){
    let taskleft = localStorage.getItem('taskleft')
    document.querySelector('.taskno').textContent = localStorage.getItem('taskleft');
}

if(localStorage.getItem('completedtask')){
    document.querySelector('.completedtask').textContent = localStorage.getItem('completedtask')
}
