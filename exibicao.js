// Simulação de dados para exibição na tabela
let dados = resgistro
    //[
    //{ acompanhante: 'George', diaSemana: 'Segunda-feira', diaMes: 5, mes: 'Abril', turno: 'Manhã' },
    //{ acompanhante: 'Alysson', diaSemana: 'Terça-feira', diaMes: 6, mes: 'Abril', turno: 'Tarde' },
    // Adicione mais dados conforme necessário
//];

window.onload = function() {
    let tbody = document.getElementById('tbodyAcompanhantes');

    // Adiciona os dados à tabela
    dados.forEach(dado => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${dado.acompanhante}</td>
                        <td>${dado.diaSemana}</td>
                        <td>${dado.diaMes}</td>
                        <td>${dado.mes}</td>
                        <td>${dado.turno}</td>`;
        tbody.appendChild(tr);
    });
};
