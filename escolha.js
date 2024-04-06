document.getElementById('formEscolha').addEventListener('submit', function(e) {
    e.preventDefault();

    let acompanhante = document.getElementById('selectAcompanhante').value;
    let diaMes = document.getElementById('inputDiaMes').value;
    let turno = document.getElementById('selectTurno').value;

    let data = new Date();
    let registro = `${data.toLocaleString()}: Acompanhante ${acompanhante} escolhido para o dia ${diaMes} com turno ${turno}`;

    // Adicionar lógica para salvar o registro em um arquivo de log (exemplo: enviar para servidor, salvar em local storage, etc.)
    console.log(registro);
    alert('Escolha salva com sucesso!');
});
