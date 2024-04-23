let chave = '6d5b190d07bf77b89893d1c34f035cec'

function colocarNaTela(dados){
    console.log(dados)
    
    document.querySelector ('.cidade').innerHTML = 'Tempo em ' + dados.name
    document.querySelector ('.graus').innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector ('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon +".png"
    document.querySelector ('.umidade').innerHTML = dados.main.humidity + '%'
}


    
    async function buscarCidade(cidade) {
        
        console.log(cidade)
        
        let dados = await fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' +
            cidade +
            '&appid=6d5b190d07bf77b89893d1c34f035cec&units=metric',
        ).then((resposta) => resposta.json())
    //await = espere
    //fetch -> ferramenta js para acessar servidor
    //then -> então
    //json -> js object notation  (o formanto que o js entende)

    colocarNaTela(dados)
}

function cliqueiNoBotao() {
    let cidade = document.querySelector('.input-cidade').value


    buscarCidade(cidade)
}

/*clicar no botão
    -> Chamar a função cliqueiNoBotao()

*/