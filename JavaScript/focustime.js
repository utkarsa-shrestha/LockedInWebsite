let totaltimeinseconds = localStorage.getItem('Timefocused')


if(totaltimeinseconds < 3600){
    document.querySelector('.time').textContent = Math.round(parseInt(totaltimeinseconds)/60) + 'min';
}
else{
    document.querySelector('.time').textContent = Math.round(parseInt(totaltimeinseconds)/3600) + 'hr';
}