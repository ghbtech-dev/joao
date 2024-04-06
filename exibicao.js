// exibicao.js
window.onload = function() {
    let tbody = document.getElementById('tbodyAcompanhantes');

    // Simulação de dados para exibição na tabela (substitua com os dados reais)
    let dados = [
        { acompanhante: 'George', diaSemana: 'Segunda-feira', diaMes: 5, mes: 'Abril', turno: 'Manhã' },
        { acompanhante: 'Alysson', diaSemana: 'Terça-feira', diaMes: 6, mes: 'Abril', turno: 'Tarde' }
        // Adicione mais dados conforme necessário
    ];

    // Adiciona os dados à tabela
    function renderizarTabela() {
        tbody.innerHTML = ''; // Limpa a tabela antes de adicionar os novos dados
        dados.forEach((dado, index) => {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${dado.acompanhante}</td>
                            <td>${dado.diaSemana}</td>
                            <td>${dado.diaMes}</td>
                            <td>${dado.mes}</td>
                            <td>${dado.turno}</td>
                            <td>
                                <button onclick="editar(${index})">Editar</button>
                                <button onclick="deletar(${index})">Deletar</button>
                            </td>`;
            tbody.appendChild(tr);
        });
    }

    // Função para deletar um registro
    window.deletar = function(index) {
        dados.splice(index, 1); // Remove o registro do array
        renderizarTabela(); // Atualiza a tabela
    }

    // Função para editar um registro (simulação, substitua com sua lógica real)
    window.editar = function(index) {
        let novoAcompanhante = prompt('Digite o novo nome do acompanhante:');
        if (novoAcompanhante) {
            dados[index].acompanhante = novoAcompanhante; // Atualiza o nome do acompanhante
            renderizarTabela(); // Atualiza a tabela
        }
    }

    renderizarTabela(); // Exibe a tabela ao carregar a página
};
