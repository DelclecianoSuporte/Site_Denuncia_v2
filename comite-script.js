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
            //console.log(data);

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
    const divAnexoDenuncia = document.querySelector('.div-anexo-denuncia');

    select.addEventListener('change', async function () {
        const selectedOption = select.options[select.selectedIndex];
        const numeroProtocolo = selectedOption.value;

        campoAdicionaMensagem.value = '';
        divAnexoDenuncia.innerHTML = '<p style="font-weight: bold;">Anexos</p>';

        if (numeroProtocolo) {
            try {
                const response = await fetch(`https://localhost:7114/api/denuncias/${numeroProtocolo}`);
                
                if (!response.ok) {
                    throw new Error('Erro ao buscar denúncias');
                }

                const denuncias = await response.json();

                if (denuncias.success && Array.isArray(denuncias.data)) {
                    const mensagens = denuncias.data.map(denuncia => denuncia.mensagem).join('\n\n');
                    campoAdicionaMensagem.value = mensagens;

                    denuncias.data.forEach(denuncia => {
                        if (denuncia.imagens && denuncia.imagens.length > 0) {
                            denuncia.imagens.forEach(imagem => {

                                const container = document.createElement('div');
                                container.style.marginBottom = '20px';

                                const imgElement = document.createElement('img');
                                imgElement.src = `data:${imagem.tipo};base64,${imagem.conteudo}`;
                                imgElement.alt = imagem.nomeArquivo;
                                imgElement.style.width = '200px';
                                imgElement.style.display = 'block';
                                imgElement.style.marginBottom = '10px';

                                const downloadButton = document.createElement('button');
                                downloadButton.textContent = 'Download';
                                downloadButton.style.display = 'block';
                                downloadButton.style.marginTop = '5px';
                                downloadButton.classList.add('btn', 'btn-outline-info');

                                downloadButton.addEventListener('click', () => {
                                    const link = document.createElement('a');
                                    link.href = imgElement.src;
                                    link.download = imagem.nomeArquivo || 'imagem-denuncia';
                                    link.click();
                                });

                                container.appendChild(imgElement);
                                container.appendChild(downloadButton);

                                divAnexoDenuncia.appendChild(container);
                            });
                        }
                    });
                }

                divMensagem.style.display = 'block';
                divRespostaComite.style.display = 'block';
                divEnviarResposta.style.display = 'block';
                divAnexoDenuncia.style.display = 'block';
            } 
            catch (error) {
                console.error('Erro:', error);
                alert('Erro ao carregar os dados da denúncia.');
            }
        } 
        else {
            divMensagem.style.display = 'none';
            divRespostaComite.style.display = 'none';
            divEnviarResposta.style.display = 'none';
            divAnexoDenuncia.style.display = 'none';
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


