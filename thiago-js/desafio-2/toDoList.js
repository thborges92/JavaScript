const $_ = function(vid){
    return document.getElementById(vid);
}

document.addEventListener('DOMContentLoaded',function(){
    console.log('DOM carregado.');

    $_("btninserir").addEventListener('click', cadastrarTarefa);
    $_("btnlimpar").addEventListener('click', limparTabela);

    $_("tbToDoList").addEventListener('click', function(e){     
        if(e.target && e.target.nodeName == 'TD' && e.target.className == 'exclusao-produto'){
            let x = document.querySelector("tr[id='" + e.target.id + "']");
            x.style.display = 'none';
            x.parentNode.removeChild(x);

        }
    });
});

function cadastrarTarefa(){
    let tabela = $_("tbToDoList");

    let linha, celula;

    linha = document.createElement("tr");
    linha.id = tabela.tBodies[0].rows.length;

    celula = document.createElement("td");
    celula.textContent = $_("txttarefa").value;
    linha.appendChild(celula);

    celula = document.createElement("td");
    celula.id = tabela.tBodies[0].rows.length;
    celula.className = 'exclusao-produto';
    
    let vlink = document.createElement("a");
    vlink.href = '#';
    vlink.textContent = 'X';
    
    celula.appendChild(vlink);
    linha.appendChild(celula);
    tabela.tBodies[0].appendChild(linha);

    $_("txttarefa").value = '';

}

function limparTabela(){

var tableHeaderRowCount = 0;
var table = document.getElementById('tbToDoList');
var rowCount = table.rows.length;

    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }

}