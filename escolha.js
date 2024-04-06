// escolha.js
let dados = []; // Array para armazenar as escolhas

function salvarEscolha() {
    let acompanhante = document.getElementById('selectAcompanhante').value;
    let diaMes = document.getElementById('inputDiaMes').value;
    let turno = document.getElementById('selectTurno').value;
    let dataHora = new Date().toLocaleString();
    let registro = { dataHora, acompanhante, diaMes, turno };
    dados.push(registro);
    alert('Escolha salva com sucesso!');
    limparCampos();
}

function limparCampos() {
    document.getElementById('selectAcompanhante').value = '';
    document.getElementById('inputDiaMes').value = '';
    document.getElementById('selectTurno').value = '';
}

function exibirEscolhas() {
    let tbody = document.getElementById('tbodyAcompanhantes');
    tbody.innerHTML = ''; // Limpa a tabela antes de adicionar os novos dados

    dados.forEach((dado, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${dado.dataHora}</td>
                        <td>${dado.acompanhante}</td>
                        <td>${dado.diaMes}</td>
                        <td>${dado.turno}</td>
                        <td>
                            <button onclick="editarEscolha(${index})">Editar</button>
                            <button onclick="deletarEscolha(${index})">Deletar</button>
                        </td>`;
        tbody.appendChild(tr);
    });
}

function editarEscolha(index) {
    let novoAcompanhante = prompt('Digite o novo nome do acompanhante:', dados[index].acompanhante);
    if (novoAcompanhante) {
        dados[index].acompanhante = novoAcompanhante;
        exibirEscolhas();
    }
}

function deletarEscolha(index) {
    dados.splice(index, 1);
    exibirEscolhas();
}

// Exibe as escolhas ao carregar a página
window.onload = function() {
    exibirEscolhas();
};
