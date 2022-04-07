const $_ = (vid) => document.getElementById(vid);

const form = $_('itemForm'); // referência ao elemento HTML <form>
const itemInput = $_('itemInput'); // campo texto para inclusão do item
const clearButton = $_('clear-list'); // botão para limpar os itens da lista
const itemList = document.querySelector('.item-list'); // <div> que mostrará a lista de itens
const feedback = document.querySelector('.feedback'); // <div> que mostra mensagens de feedback para o usuário

let todoItems = [];

// Toda vez que o usuário clicar no botão 'Incluir na lista' e o formulário for enviado, não submeto os dados
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    // Conteúdo do campo texto
    let itemName = itemInput.value;
    
    // Se o campo texto estiver vazio
    if (itemName.length === 0){
        // mostro uma mensagem de alerta para o usuário
        feedback.innerHTML = 'Insira um valor válido';
        // aplicando um estilo
        feedback.classList.add('showItem', 'alert-danger');
        
        // escondendo a mensagem após 3 segundos
        window.setTimeout(function(){
            feedback.classList.remove('showItem');
        }, 3000);

    } else {

        todoItems.push(itemName);
        
        getList(todoItems);
    }
    
    itemInput.value = '';
});

// Crio um 'listener' para o botão 'Limpar Itens'.
// Toda vez que o botão for clicado:
clearButton.addEventListener('click', function(){
    // 'zero' o array, removendo todos os elementos
    todoItems = [];
    // atualizo a lista na tela
    getList(todoItems);
});

// Monta a lista de itens na tela
function getList(todoItems){
    // total de elementos no array
    let tot = todoItems.length;

    // 'apago' da tela os itens da lista
    itemList.innerHTML = '';
    
    for(let i = 0; i < tot; i++){
        // Crio uma 'entrada' na lista de itens, colocando dois ícones de ação: marcar como feita e remover da lista
        itemList.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${todoItems[i]}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>` );

        handleItem(todoItems[i]);
    }
    
}

// Função que realiza Event delegation
// Objetivo: colocar as funcionalidades de "marcar como feito" (botão verde) e "remover item" (botão vermelho), que ficam ao lado de cada item da lista.
function handleItem(itemName){
    // lista com todos os itens presentes
    const items = itemList.querySelectorAll('.item');
    // total de itens
    let tot = items.length;

    // loop para adicionar a ação para cada item
    for(let i = 0;i < tot; i++){

        if(items[i].querySelector('.item-name').textContent === itemName){
            // Botão "marcar como feito"
            items[i].querySelector('.complete-item').addEventListener('click', function(){
                items[i].querySelector('.item-name').classList.toggle('completed');
                this.classList.toggle('visibility');
            });

            // Botão "remover item"
            items[i].querySelector('.delete-item').addEventListener('click', function(){
                itemList.removeChild(items[i]);
                removeItem(items[i]);
            })
        }

    }

}

// Remove um elemento do array
function removeItem(item){
    const removeIndex = (todoItems.indexOf(item));
    todoItems.splice(removeIndex, 1);
}