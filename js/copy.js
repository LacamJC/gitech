const containerTel = document.getElementById('containerTel');

containerTel.addEventListener('click', ()=>{
  let copyAlert = document.getElementById('copyAlertTel');
  containerTel.classList.add('click');
  copyAlert.classList.add('opacityShow');
  copyAlert.classList.add('opacityHidden');
  setTimeout(()=>{
    containerTel.classList.remove('click');
    copyAlert.classList.remove('opacityShow');
    copyAlert.classList.add('opacityHidden');
  }, 1100)
  const tel = document.getElementById('numeroTel')

    const tempInput = document.createElement('input')
    tempInput.value = tel.innerText

    document.body.appendChild(tempInput)

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Para dispositivos móveis */

      // Copiar o texto para a área de transferência
    document.execCommand("copy");

    // Remover o elemento temporário
    document.body.removeChild(tempInput);


});

const containerEmail = document.getElementById('containerEmail');

containerEmail.addEventListener('click', ()=>{
  let copyAlert = document.getElementById('copyAlertEmail');
  containerEmail.classList.add('click')

  copyAlert.classList.add('opacityShow');
  copyAlert.classList.add('opacityHidden');

  setTimeout(()=>{
    containerEmail.classList.remove('click');
    copyAlert.classList.remove('opacityShow');
    copyAlert.classList.add('opacityHidden');
  }, 1100)
  const tel = document.getElementById('emailText')

  const tempInput = document.createElement('input')
  tempInput.value = tel.innerText

  document.body.appendChild(tempInput)

  tempInput.select();
  tempInput.setSelectionRange(0, 99999); /* Para dispositivos móveis */

    // Copiar o texto para a área de transferência
  document.execCommand("copy");

  // Remover o elemento temporário
  document.body.removeChild(tempInput);


})
