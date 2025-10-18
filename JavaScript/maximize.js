const maximizebutton = document.querySelector('.maximize')
const minimizebutton = document.querySelector('.minimize')

maximizebutton.addEventListener('click', ()=>{
    console.log('Inside of maximize function')

    //to hide other elements
    document.querySelector('.nav1').style.display = 'none';
    document.querySelector('.nav2').style.display = 'none';
    maximizebutton.style.display = 'none';
    minimizebutton.style.display = 'block'

    let mainsection = document.querySelector('.focussection')
    mainsection.classList.toggle('atfullscreen')

    console.clear()
})

minimizebutton.addEventListener('click', ()=>{
    console.log('Inside of minimize function')

    //to display other elements
    document.querySelector('.nav1').style.display = 'flex';
    document.querySelector('.nav2').style.display = 'block';
    maximizebutton.style.display = 'block';
    minimizebutton.style.display = 'none'

    let mainsection = document.querySelector('.focussection')
    mainsection.classList.toggle('atfullscreen')
})