let chave = '6d5b190d07bf77b89893d1c34f035cec';

function colocarNaTela(dados) {
    console.log(dados);
    
    if (dados.name) {
        document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name;
        document.querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + '°C';
        document.querySelector('.icone').src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
        document.querySelector('.umidade').innerHTML = dados.main.humidity + '%';
    } else {
        alert('Não foi possível obter os dados de localização. Tente novamente mais tarde.');
    }
}

async function buscarCidade(cidade) {
    console.log(cidade);
    
    let dados = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        cidade +
        '&appid=' + '6d5b190d07bf77b89893d1c34f035cec' + '&units=metric'
    ).then((resposta) => resposta.json());

    colocarNaTela(dados);
}

async function buscarLocalizacao() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async function(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            let dados = await fetch(
                'https://api.openweathermap.org/data/2.5/weather?lat=' +
                latitude + '&lon=' + longitude +
                '&appid=' + '6d5b190d07bf77b89893d1c34f035cec' + '&units=metric'
            ).then((resposta) => resposta.json());

            colocarNaTela(dados);
        });
    } else {
        alert('Geolocalização não é suportada pelo seu navegador.');
    }
}

function cliqueiNoBotao() {
    let cidade = document.querySelector('.input-cidade').value;

    buscarCidade(cidade);
}

/*clicar no botão
    -> Chamar a função cliqueiNoBotao()

*/
