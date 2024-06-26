const menu = document.querySelector('.tombol');
const nav = document.querySelector('#nav')

menu.addEventListener('click',function(e){
    menu.classList.toggle('active')
    nav.classList.toggle('active')

    
})

document.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target !== nav && e.target !== menu){
        menu.classList.remove('active')
        nav.classList.remove('active')
        
    }
    console.log(e.target)
})

window.addEventListener("mouseover",function(e){
    console.log(e)
})