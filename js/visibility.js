function isVisible(element) {
    var rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function addClass() {
    var elementos = document.querySelectorAll('.showTag');
    
    elementos.forEach(function(elemento) {
        if (isVisible(elemento)) {
            elemento.classList.add('visivel');
        } else {
            // elemento.classList.remove('visivel');
        }
    });
}

// Adicione o event listener corretamente (sem os parênteses)
window.addEventListener('scroll', addClass);

// Chame addClass() para verificar se os elementos já estão visíveis na página inicialmente
addClass();
