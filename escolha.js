document.getElementById('formEscolha').addEventListener('submit', function(e) {
    e.preventDefault();

    let acompanhante = document.getElementById('selectAcompanhante').value;
    let diaMes = document.getElementById('inputDiaMes').value;
    let turno = document.getElementById('selectTurno').value;
    let dataHora = new Date().toLocaleString();
    let registro = `${dataHora}: Acompanhante ${acompanhante}, Dia ${diaMes}, Turno ${turno}`;

    // Lógica para salvar o registro em um arquivo de log (pode ser feito no servidor ou no local storage do navegador)
    console.log(registro);
    alert('Escolha salva com sucesso!');
});
