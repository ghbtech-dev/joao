// escolha.js
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

// exibicao-tabela.html
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tabela de Acompanhantes</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Tabela de Acompanhantes</h1>
    <div class="table-container">
        <table id="tabelaAcompanhantes">
            <thead>
                <tr>
                    <th>Nome do Acompanhante</th>
                    <th>Dia da Semana</th>
                    <th>Dia do Mês</th>
                    <th>Mês</th>
                    <th>Turno</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody id="tbodyAcompanhantes">
                <!-- Os dados serão inseridos dinamicamente aqui -->
            </tbody>
        </table>
    </div>
    <script src="exibicao.js"></script>
</body>
</html>
