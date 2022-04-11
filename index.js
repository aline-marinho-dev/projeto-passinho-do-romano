var palavra = document.querySelector('#palavra').value;
var passo = document.querySelector('#passo');
var opcoes = document.querySelector('#opcoes');
var codificar = document.querySelector('#codificar');
var decodificar = document.querySelector('#decodificar');
var resposta = document.querySelector('#resposta');

enviar.addEventListener('click', function (event) {
            var palavra = document.querySelector('#palavra').value;
            var resposta = document.querySelector('#resposta');
            event.preventDefault();

            if (opcoes.selectedIndex == 2 && decodificar.checked == true) {
                resposta.innerHTML = atob(palavra);
            } else if (opcoes.selectedIndex == 2 && codificar.checked == true) {
                resposta.innerHTML = btoa(palavra);
    }
})


opcoes.addEventListener('change', function(event) {
    event.preventDefault();
    if(opcoes.selectedIndex == 1){
    passo.innerHTML = ` <label for="incremento">Digite o incremento para a Cifra de Cesar:</label>
    <input type="number" id="incremento" >`
    }
    })
    

    
    
    
    