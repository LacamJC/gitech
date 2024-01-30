function copyTel(){
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

    // Alertar o usuário que o número foi copiado
    alert("Número copiado: " + tempInput.value);

  }

  function copyEmail(){
    const tel = document.getElementById('email')

    const tempInput = document.createElement('input')
    tempInput.value = tel.innerText

    document.body.appendChild(tempInput)

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* Para dispositivos móveis */

      // Copiar o texto para a área de transferência
    document.execCommand("copy");

    // Remover o elemento temporário
    document.body.removeChild(tempInput);

    // Alertar o usuário que o número foi copiado
    alert("Email copiado: " + tempInput.value);
  }