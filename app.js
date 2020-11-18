const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado')
const cep = document.querySelector('.cep');
const estado = document.querySelector('.estado');
const cidade = document.querySelector('.cidade');
const bairro = document.querySelector('.bairro');
const endereco = document.querySelector('.endereco');
form.addEventListener('submit', consultaCEP);


function consultaCEP(e) {
    let inputCEP = document.querySelector('.input').value;
    const url = `https://viacep.com.br/ws/${inputCEP}/json/`;

    if (inputCEP.length < 8) {
        window.alert('Por gentileza, digite um CEP válido')
    }  else  {
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                window.alert('Por gentileza, digite um CEP válido')
            } else {
                hideCEP();
                setTimeout(function() {
                    cep.innerHTML = data.cep;
                    estado.innerHTML = data.uf;
                    cidade.innerHTML = data.localidade;
                    bairro.innerHTML = data.bairro;
                    endereco.innerHTML = data.logradouro;
                    form.reset();
                    showCEP();
                }, 800);
            }
            console.log(data)
        });
    }
    e.preventDefault();
}

function showCEP() {
    resultado.style.opacity = '1';
    resultado.style.transform = 'translateY(0px)';
}
function hideCEP() {
    resultado.style.opacity = '0'
    resultado.style.transform = 'translateY(100px)';
}

