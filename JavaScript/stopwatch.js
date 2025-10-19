//variable declearation section
let minute;
let second;


let totaltimeinsecond = 0;

let totalminuteinside = 0; 
let totalsecondinside = 0;

let totalminuteoutside = 0;
let totalsecondoutside = 0

const startbut = document.querySelector('#start');
const endbut = document.querySelector('#end')

let timeinterval;

//function decleartion section
const startfunction = () =>{ //function to start the stopwatch
    minute = document.querySelector('#minute').textContent
    second = document.querySelector('#second').textContent
    
    minute = parseInt(minute)
    second = parseInt(second)

    document.querySelector('#start').style.display = 'none';
    document.querySelector('#pause').style.display = 'block';

    timeinterval = setInterval(()=>{

        second = second + 1;

        if(second < 10){
            document.querySelector("#second").textContent = '0' + second;
        }
        else{
            document.querySelector("#second").textContent = second;
        }

        if(second >= 60){
            minute = minute + 1;
            second = 0;

            if(minute < 10){
                document.querySelector('#minute').textContent = '0' +  minute; //so that it displays as 01 not only 1
            }
            else{
                document.querySelector('#minute').textContent = minute;
            }
        }
        minute = parseInt(minute)
        second = parseInt(second)

        totalminuteinside =  minute; //total minute calculation
        totalsecondinside =  second; //total second calculation
        
        }, 10)

       

        
}
const pausefunction = () =>{ //function to pause the stopwatch
    clearInterval(timeinterval)

    console.log("Paused")

    document.querySelector('#start').style.display = 'block';
    document.querySelector('#pause').style.display = 'none';
}



const endfunction = () =>{
    
    

    console.log('Ended');

    clearInterval(timeinterval)

    minute = '00'
    second =  '00'

    totalminuteoutside += totalminuteinside;
    totalsecondoutside += totalsecondinside;

    document.querySelector('#minute').textContent = minute
    document.querySelector('#second').textContent = second;

    document.querySelector('#start').style.display = 'block';
    document.querySelector('#pause').style.display = 'none';

    minute = parseInt(minute)
    second = parseInt(second)

   
    totaltimeinsecond = (totalminuteoutside * 60) + totalsecondoutside;

    localStorage.setItem('Timefocused', totaltimeinsecond)
}



