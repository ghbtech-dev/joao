// escolha.js
function salvarEscolha() {
    let acompanhante = document.getElementById('selectAcompanhante').value;
    let diaMes = document.getElementById('inputDiaMes').value;
    let turno = document.getElementById('selectTurno').value;
    let dataHora = new Date().toLocaleString();
    let registro = { dataHora, acompanhante, diaMes, turno };

    // Envia os dados para o GitHub usando Axios
    axios.post('https://api.github.com/repos/ghbtech-dev/joao/contents/dados-acompanhantes.json', {
        message: 'Adicionando nova escolha de acompanhante',
        content: btoa(JSON.stringify(registro)),
        branch: 'main'
    })
    .then(response => {
        console.log('Escolha salva com sucesso:', response.data);
        alert('Escolha salva com sucesso!');
        limparCampos();
    })
    .catch(error => {
        console.error('Erro ao salvar escolha:', error);
        alert('Erro ao salvar escolha. Verifique o console para mais detalhes.');
    });
}

function limparCampos() {
    document.getElementById('selectAcompanhante').value = '';
    document.getElementById('inputDiaMes').value = '';
    document.getElementById('selectTurno').value = '';
}
