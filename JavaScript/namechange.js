const namesection = document.querySelector('.name');
const overlay = document.querySelector('.overview')

namesection.addEventListener('click', ()=>{
    overlay.classList.remove('closing');
    overlay.classList.add('active'); //adding the dimming effect
    let namechangesection = document.querySelector('.namechange');
    namechangesection.style.display = 'flex'; //displaying the namechange section
})

const remove =() =>{
    let namechangesection = document.querySelector('.namechange');
    namechangesection.style.display = 'none'; //removing the panel
    overlay.classList.add('closing');
    setTimeout(() => {
        overlay.classList.remove('active', 'closing'); //removing the dimming effect
    }, 300);
}

const changename = () =>{
    let name = document.querySelector('.namechangeinput').value;
    let namedisplaysection = document.querySelector('.name');

    namedisplaysection.textContent = name;
    
    let namechangesection = document.querySelector('.namechange');
    namechangesection.style.display = 'none'; //removing the panel
    overlay.classList.add('closing');
    setTimeout(() => {
        overlay.classList.remove('active', 'closing'); //removing the dimming effect
    }, 300);
} 