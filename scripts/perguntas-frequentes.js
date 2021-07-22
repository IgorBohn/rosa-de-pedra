
var btn = document.querySelector('.perguntas-frequentes__btn');

var resposta = document.querySelector('.perguntas-frequentes__resposta');

btn.addEventListener('click', function() {

    if(resposta.style.display === 'block') {
        resposta.style.display = 'none';
    }
    else {
        resposta.style.display = 'block';
    }

});

