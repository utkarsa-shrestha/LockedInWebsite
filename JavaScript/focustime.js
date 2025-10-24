
if(localStorage.getItem('Timefoucsed')){
    let totaltimeinseconds = localStorage.getItem('Timefocused')
    if(totaltimeinseconds < 3600){
    document.querySelector('.time').textContent = Math.round(parseInt(totaltimeinseconds)/60) + 'min';
    }
    else{
        document.querySelector('.time').textContent = Math.round(parseInt(totaltimeinseconds)/3600) + 'hr';
    }
}
else if(!localStorage.getItem('Timefocused')){
    document.querySelector('.time').textContent = '0min'
}

if(localStorage.getItem('totaltask')){
    let totaltask = localStorage.getItem('totaltask')
    document.querySelector('.task').textContent = totaltask;
}
