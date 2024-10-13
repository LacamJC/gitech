
const containerEmail = document.getElementById('containerEmail');

containerEmail.addEventListener('click', ()=>{
    // Seleciona o elemento a ser copiado
    var textoCopiar ="d";

    // Cria um textarea temporário
    var textarea = document.createElement('textarea');
    textarea.value = textoCopiar.textContent;
    document.body.appendChild(textarea);
    textarea.select();

    // Copia o texto para a área de transferência
    document.execCommand('copy');

    // Remove o textarea temporário
    document.body.removeChild(textarea);   



})
