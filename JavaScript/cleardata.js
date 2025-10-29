
const clearbtn = document.querySelector('.cleardata')

clearbtn.addEventListener('click', ()=>{
    let confirmation = confirm("Are you sure you want to clear the data?")

    if(confirmation == true){
        localStorage.clear();
        window.location.reload()
    }
})