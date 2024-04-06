// exibicao.js
window.onload = function() {
    let tbody = document.getElementById('tbodyAcompanhantes');

    // Função para adicionar um novo registro à tabela
    function adicionarRegistro(acompanhante, diaSemana, diaMes, mes, turno) {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${acompanhante}</td>
                        <td>${diaSemana}</td>
                        <td>${diaMes}</td>
                        <td>${mes}</td>
                        <td>${turno}</td>
                        <td>
                            <button onclick="editar(this)">Editar</button>
                            <button onclick="deletar(this)">Deletar</button>
                        </td>`;
        tbody.appendChild(tr);
    }

    // Simulação de dados para exibição na tabela (substitua com os dados reais)
    let dados = [
        { acompanhante: 'George', diaSemana: 'Segunda-feira', diaMes: 5, mes: 'Abril', turno: 'Manhã' },
        { acompanhante: 'Alysson', diaSemana: 'Terça-feira', diaMes: 6, mes: 'Abril', turno: 'Tarde' }
        // Adicione mais dados conforme necessário
    ];

    // Exibir dados na tabela ao carregar a página
    dados.forEach(dado => {
        adicionarRegistro(dado.acompanhante, dado.diaSemana, dado.diaMes, dado.mes, dado.turno);
    });

    // Função para deletar um registro da tabela
    window.deletar = function(elemento) {
        let tr = elemento.parentElement.parentElement;
        tbody.removeChild(tr);
    }

    // Função para editar um registro da tabela
    window.editar = function(elemento) {
        let tr = elemento.parentElement.parentElement;
        let dadosTr = tr.querySelectorAll('td');
        let novoAcompanhante = prompt('Digite o novo nome do acompanhante:', dadosTr[0].textContent);
        if (novoAcompanhante) {
            dadosTr[0].textContent = novoAcompanhante;
        }
    }
};
