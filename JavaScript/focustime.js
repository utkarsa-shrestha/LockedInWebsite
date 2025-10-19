let totaltimeinseconds = localStorage.getItem('Timefocused')

document.querySelector('.time').textContent = Math.round(parseInt(totaltimeinseconds)/3600) + 'hr';