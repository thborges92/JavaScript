const $_ = (vid) => document.getElementById(vid);

const init = function(){
    // Toda vez que o elemento HTML com Id "show_me" for clicado, a função 'mostraSenha' será executada.
    $_("show_me").addEventListener('click', mostraSenha);

    // Toda vez que o elemento HTML com Id "btncommit" for clicado
    $_("btncommit").addEventListener('click', function(evt){
        // estas instruções serão executadas
        evt.preventDefault();
        temCampoVazio();
    });
};

document.addEventListener('DOMContentLoaded', init);

// Função que troca o tipo do campo, para causar o efeito de mostrar/esconder a senha digitada.
function mostraSenha(){
    if($_("show_me").checked){
        $_("txtpassword").type = "text";
    } else {
        $_("txtpassword").type = "password";
    }
}

// Função que valida os campos do formulário e mostra uma mensagem caso os campos estejam vazios
function temCampoVazio(){
    if($_("txtlogin").value == '') $_("txtlogin-rule").textContent = 'Campo obrigatório.';
    else $_("txtlogin-rule").textContent = '';

    if($_("txtpassword").value == '') $_("txtpassword-rule").textContent = 'Campo obrigatório.';
    else $_("txtpassword-rule").textContent = '';
}