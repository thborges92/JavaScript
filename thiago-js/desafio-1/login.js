document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM fully parsed.');

});

function mostrarSenha(){
    var senha = document.getElementById("senha");
    if(senha.type == password){
        senha.type = "text";    
    } else {
        senha.type = "password";
    }
}