const namesection = document.querySelector('.pfp');
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
    localStorage.setItem('Name', name)
    
    let namedisplaysection = document.querySelector('.name');

    namedisplaysection.textContent = localStorage.getItem('Name');
    
    let namechangesection = document.querySelector('.namechange');
    namechangesection.style.display = 'none'; //removing the panel
    overlay.classList.add('closing');
    setTimeout(() => {
        overlay.classList.remove('active', 'closing'); //removing the dimming effect
    }, 300);
} 

let namedisplaysection = document.querySelector('.name');

namedisplaysection.textContent = localStorage.getItem('Name');