 // Verifica se o token está armazenado no localStorage
 const token = localStorage.getItem("token");
 if (!token) {
     alert("Você precisa estar logado para acessar esta página.");
     window.location.href = "login.html";
 }

function preencherSelectComProtocolos() {
    fetch('https://localhost:7114/api/denuncias/protocolos/abertos')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data && data.data && Array.isArray(data.data)) {
                const select = document.getElementById('protocolos-aberto');
                select.innerHTML = '';
                select.appendChild(new Option('', ''));

                data.data.forEach((protocolo) => {
                    const option = new Option(protocolo.numero_Protocolo, protocolo.numero_Protocolo);
                    option.dataset.mensagem = protocolo.mensagem;
                    select.appendChild(option);
                });
            } else {
                console.error('Estrutura de dados inválida ou vazia.');
            }
        })
        .catch(error => {
            console.error('Erro ao obter numeros de protocolos: ' + error);
        });
}

preencherSelectComProtocolos();

const select = document.getElementById('protocolos-aberto');
const textarea = document.getElementById('resposta-comite');

function resposta_Denuncia() {
    const campoAdicionaMensagem = document.getElementById('mensagem-denuncia');
    const divMensagem = document.querySelector('.div-mensagem-denuncia');
    const divRespostaComite = document.querySelector('.div-resposta-comite');
    const divEnviarResposta = document.querySelector('.div-enviar-resposta');

    select.addEventListener('change', function () {
        const selectedOption = select.options[select.selectedIndex];
        const mensagemRetornada = selectedOption.dataset.mensagem;

        if (selectedOption.value) {
            divMensagem.style.display = 'block';
            campoAdicionaMensagem.value = mensagemRetornada;
            divRespostaComite.style.display = 'block';
            divEnviarResposta.style.display = 'block';
        } else {
            campoAdicionaMensagem.value = ''; 
            divMensagem.style.display = 'none';
            divRespostaComite.style.display = 'none';
            divEnviarResposta.style.display = 'none';
        }

        if (selectedOption.value !== textarea.dataset.selectedOption) {
            textarea.value = '';
            textarea.dataset.selectedOption = selectedOption.value;
        }

        if (selectedOption.value) {
            textarea.style.display = 'block';
        } else {
            textarea.style.display = 'none';
        }
    });

    select.dispatchEvent(new Event('change'));
}

resposta_Denuncia();

const botaoEnviar = document.getElementById('enviar-resposta');

botaoEnviar.addEventListener('click', function() {

    const numeroProtocoloSelecionado = select.value;
    const resposta = textarea.value;

    if (!numeroProtocoloSelecionado) {
        alert('Selecione um numero de protocolo antes de enviar a resposta.');
        return;
    }

    if (!resposta.trim()) {
        alert('Digite uma resposta antes de enviar.');
        return;
    }

    const urlDaAPI = `https://localhost:7114/api/denuncias/${numeroProtocoloSelecionado}`;
    console.log(urlDaAPI);

    fetch(urlDaAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            resposta: resposta,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Sucesso, resposta salva no banco');
        textarea.value = '';
        textarea.style.display = 'none';
        select.value = '';
        const campoAdicionaMensagem = document.getElementById('mensagem-denuncia');
        campoAdicionaMensagem.value = '';
        campoAdicionaMensagem.style.display = 'none';
        window.location.reload(true);
    })
    .catch(error => {
        console.error('Erro ao enviar resposta:', error);
    });
});


