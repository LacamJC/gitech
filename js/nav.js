var nav = document.getElementById('nav')

window.addEventListener('scroll', function() {
    if(window.scrollY > 10)
    {
        nav.classList.add('_nav-fixed')
    }else {
        nav.classList.remove('_nav-fixed')
    }
})