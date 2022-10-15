const navbarEL = document.querySelector('.navbar')
const bottomcontainerEL = document.querySelector('.bottom-container')

window.addEventListener('scroll', () => {
    if(window.scrollY > bottomcontainerEL.offsetTop - navbarEL.offsetHeight - 50){
        navbarEL.classList.add("active")
    }else{
        navbarEL.classList.remove("active")
    }
})