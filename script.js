document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', function() {
        mobileMenu.style.display = (mobileMenu.style.display === 'block' ? 'none' : 'block');
    });
});


function mostrarFormulario() {
    document.getElementById("formulario-denuncia-1").style.display = "block";
    document.getElementById("div-result-ident").style.display = "block"
}

function ocultarFormulario() {
    document.getElementById("formulario-denuncia-1").style.display = "none";
    document.getElementById("div-result-ident").style.display = "none"
}

var nomeDigitado = '';
var cpfDigitado = '';
var emailDigitado = '';
var telefoneDigitado = '';

function usuarioIdentificado() {
    document.getElementById('nome').addEventListener('input', function() {
        nomeDigitado = this.value;
        document.getElementById('nome-resultado').textContent = nomeDigitado;
    });

    document.getElementById('cpf').addEventListener('input', function() {
        cpfDigitado = this.value;
        document.getElementById('cpf-resultado').textContent = cpfDigitado;
    });

    document.getElementById('email').addEventListener('input', function() {
        emailDigitado = this.value;
        document.getElementById('email-resultado').textContent = emailDigitado;
    });

    document.getElementById('telefone').addEventListener('input', function() {
        telefoneDigitado = this.value;
        document.getElementById('telefone-resultado').textContent = telefoneDigitado;
    });
}

function limparCamposUsuarioIdentificado() {
    document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';

    document.getElementById('nome-resultado').textContent = '';
    document.getElementById('cpf-resultado').textContent = '';
    document.getElementById('email-resultado').textContent = '';
    document.getElementById('telefone-resultado').textContent = '';
    
    //Por via das duvidas limpei as variaveis globais tambem
    nomeDigitado = '';
    cpfDigitado = '';
    emailDigitado = '';
    telefoneDigitado = '';
}

const opcoes = document.querySelectorAll('input[name="opcao"]');
const nomeCompleto = document.getElementById('nome-completo');

opcoes.forEach((opcao) => {
    opcao.addEventListener('change', function() {
        if (this.value === "ident-sim" && this.checked) {
            mostrarFormulario();
            usuarioIdentificado();
        } else if (this.value === "ident-nao" && this.checked) {
            ocultarFormulario();
            limparCamposUsuarioIdentificado();
        }
    });
});


// document.addEventListener('change', function() {
//     const opcaoSelecionada = document.getElementById("opcao1").value;
//     const opcaoSelecionada2 = document.getElementById("opcao2").value;
//     const opcaoSelecionada3 = document.getElementById("opcao3").value;
//     const opcaoDigitada1    = document.getElementById("area-setor").value;
//     const opcaoSelecionada4 = document.getElementById("opcao4").value;
//     const opcaoSelecionada5 = document.getElementById("opcao5").value;
//     const opcaoSelecionada6 = document.getElementById("opcao6").value;
//     const opcaoSelecionada7 = document.getElementById("opcao7").value;
//     const opcaoDigitada2    = document.getElementById("descricao").value;
//     const opcaoDigitada3    = document.getElementById("testemunha").value;
//     const opcaoDigitada4    = document.getElementById("descricao2").value;
//     const opcaoDigitada5    = document.getElementById("descricao3").value;

//     const campo1 = document.getElementById("opcao_exibicao1");
//     if(campo1){
//         campo1.textContent = opcaoSelecionada;
//     }

//     const campo2 = document.getElementById("opcao_exibicao2")
//     if(campo2){
//         campo2.textContent = opcaoSelecionada2;
//     }

//     const campo3 = document.getElementById("opcao_exibicao3");
//     if(campo3){
//         campo3.textContent = opcaoSelecionada3;
//     }

//     const campo4 = document.getElementById("opcao_exibicao4");
//     if(campo4){
//         campo4.textContent = opcaoDigitada1;
//     }

//     const campo5 = document.getElementById("opcao_exibicao5");
//     if(campo5){
//         campo5.textContent = opcaoSelecionada4;
//     }

//     const campo6 = document.getElementById("opcao_exibicao6");
//     if(campo6){
//         campo6.textContent = opcaoSelecionada5;
//     }

//     const campo7 = document.getElementById("opcao_exibicao7");
//     if(campo7){
//         campo7.textContent = opcaoSelecionada6;
//     }

//     const campo8 = document.getElementById("opcao_exibicao8");
//     if(campo8){
//         campo8.textContent = opcaoSelecionada7;
//     }

//     const campo9 = document.getElementById("opcao_exibicao9");
//     if(campo9){
//         campo9.textContent = opcaoDigitada2;
//     }

//     const campo10 = document.getElementById("opcao_exibicao10");
//     if(campo10){
//         campo10.textContent = opcaoDigitada3;
//     }

//     const campo11 = document.getElementById("opcao_exibicao11");
//     if(campo11){
//         campo11.textContent = opcaoDigitada4;
//     }

//     const campo12 = document.getElementById("opcao_exibicao12");
//     if(campo12){
//         campo12.textContent = opcaoDigitada5;
//     }

//     criaEmailComDadosInseridosPeloUsuario();
// });

document.addEventListener('change', function () {

    const campos = [
        { entradaUsuario: "opcao1", exibicao: "opcao_exibicao1" },
        { entradaUsuario: "opcao2", exibicao: "opcao_exibicao2" },
        { entradaUsuario: "opcao3", exibicao: "opcao_exibicao3" },
        { entradaUsuario: "area-setor", exibicao: "opcao_exibicao4" },
        { entradaUsuario: "opcao4", exibicao: "opcao_exibicao5" },
        { entradaUsuario: "opcao5", exibicao: "opcao_exibicao6" },
        { entradaUsuario: "opcao6", exibicao: "opcao_exibicao7" },
        { entradaUsuario: "opcao7", exibicao: "opcao_exibicao8" },
        { entradaUsuario: "descricao", exibicao: "opcao_exibicao9" },
        { entradaUsuario: "testemunha", exibicao: "opcao_exibicao10" },
        { entradaUsuario: "descricao2", exibicao: "opcao_exibicao11" },
        { entradaUsuario: "descricao3", exibicao: "opcao_exibicao12" }
    ];

    campos.forEach(campo => {
        const entradaUsuario = document.getElementById(campo.entradaUsuario);
        const exibicao = document.getElementById(campo.exibicao);

        if (entradaUsuario && exibicao) {
            exibicao.textContent = entradaUsuario.value;
        }
    });

    criaEmailComDadosInseridosPeloUsuario();
});


function criaEmailComDadosInseridosPeloUsuario(){
    var content = '';

    var identificacaoRadio = document.querySelector('input[name="opcao"]:checked');
    if (identificacaoRadio && identificacaoRadio.value === "ident-sim") {
        content += `Usuário identificado, Nome: ${nomeDigitado}, CPF: ${cpfDigitado}, Email: ${emailDigitado}, Telefone: ${telefoneDigitado}\n\n`;
    } 
    else {
        content += 'Usuário anônimo\n\n';
    }

    content += 'Qual a sua relação com a Plasdil?\n' + document.getElementById('opcao_exibicao1').textContent + '\n\n';
    content += 'Qual o tipo de denúncia melhor se enquadra ao fato que você está registrando?\n' + document.getElementById('opcao_exibicao2').textContent + '\n\n';
    content += 'Indique o local onde ocorreu o fato que você está denunciando:\n' + document.getElementById('opcao_exibicao3').textContent + '\n\n';
    content += 'Indique a área/setor onde ocorreu o fato que você está denunciando:\n' + document.getElementById('opcao_exibicao4').textContent + '\n\n';
    content += 'Como tomou conhecimento deste fato/transgressão?\n' + document.getElementById('opcao_exibicao5').textContent + '\n\n';
    content += 'Você sabe se algum Diretor, Conselheiro, Gestor, Gerente ou Coordenador, está CIENTE do problema relatado?\n' + document.getElementById('opcao_exibicao6').textContent + '\n\n';
    content += 'Você sabe se algum Diretor, Conselheiro, Gerente ou Coordenador está ENVOLVIDO diretamente no fato relatado?\n' + document.getElementById('opcao_exibicao7').textContent + '\n\n';
    content += 'Você sabe se algum(ns) Diretor(es), Conselheiro (s), Gerente(s) ou Coordenador(es) tentou(ram) ESCONDER o problema relatado?\n' + document.getElementById('opcao_exibicao8').textContent + '\n\n';
    content += 'O que você quer denunciar?\n' + document.getElementById('opcao_exibicao9').textContent + '\n\n';
    content += 'Existem testemunhas? Em caso positivo, indique-as.\n' + document.getElementById('opcao_exibicao10').textContent + '\n\n';
    content += `Você sabe se existem evidências sobre o fato? Em caso positivo, indique-as. (Quais e em que lugar(es) podem ser encontradas evidências sobre o fato denunciado? Existem documentos que comprovam esse fato? Em caso positivo, onde podem ser encontrados? Especifique da forma mais detalhada possível. Lembre-se: qualquer informação pode ser útil, por mais irrelevante que ela pareça para você.)\n` + document.getElementById('opcao_exibicao11').textContent + '\n\n';
    content += 'Caso seja possível, indique o valor financeiro envolvido no fato relatado:\n' + document.getElementById('opcao_exibicao12').textContent + '\n\n';

    document.getElementById('message').value = content;
}

// function coletarRespostas() {
//     const respostaTextArea  = document.getElementById("message").value;
//     var urlDestino = "finaliza-denuncia.html?conteudo=" + encodeURIComponent(respostaTextArea) 
//     window.location.href = urlDestino;
// }


function coletarRespostas(event) {
    event.preventDefault();

    const radioButtons = document.getElementsByName("opcao");
    const selects = [
        document.getElementById("opcao1"),
        document.getElementById("opcao2"),
        document.getElementById("opcao3"),
        document.getElementById("opcao4"),
        document.getElementById("opcao5"),
        document.getElementById("opcao6"),
        document.getElementById("opcao7")
    ];
    const inputs = [
        { element: document.getElementById("area-setor"), mensagemErro: "Você precisa informar a área/setor." },
        { element: document.getElementById("testemunha"), mensagemErro: "Você precisa informar se existe testemunha." },
        { element: document.getElementById("descricao2"), mensagemErro: "Você precisa informar as evidençias dessa denuncia." },
        { element: document.getElementById("descricao3"), mensagemErro: "Você precisa informar se houve algum valor financeiro envolvido." }
    ];
    const textArea = { element: document.getElementById("descricao"), mensagemErro: "Você precisa descrever a denúncia." };
    const termo = document.getElementById("termo");

    let radioSelected = false;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            radioSelected = true;
            break;
        }
    }

    if (!radioSelected) {
        document.querySelector('.radio-identificacao').classList.add('is-invalid');
        alert("Você precisa selecionar uma opção de identificação.");
        return;
    } 
    else {
        document.querySelector('.radio-identificacao').classList.remove('is-invalid');
    }

    function validarElemento(elemento, mensagemErro) {
        if (elemento.value === "") {
            elemento.classList.add('is-invalid');
            alert(mensagemErro);
            return false;
        } 
        else {
            elemento.classList.remove('is-invalid');
            return true;
        }
    }

    const mensagensErroSelect = [
        "Você precisa selecionar sua relação com a Plasdil.",
        "Você precisa selecionar o tipo denuncia.",
        "Você precisa selecionar onde ocorreu o fato.",
        "Você precisa selecionar o fato/transgressão.",
        "Você precisa selecionar se existe alguém ciente da situação.",
        "Você precisa selecionar uma opção informando se existe alguém de cargo de liderança envolvido.",
        "Você precisa selecionar uma opção informando se alguém tentou esconder o problema relatado."
    ];

    for (let i = 0; i < selects.length; i++) {
        if (!validarElemento(selects[i], mensagensErroSelect[i])) {
            return;
        }
    }

    for (const input of inputs) {
        if (!validarElemento(input.element, input.mensagemErro)) {
            return;
        }
    }

    if (!validarElemento(textArea.element, textArea.mensagemErro)) {
        return;
    }

    if (!termo.checked) {
        alert("Você precisa concordar com o termo.");
        return;
    }

    removeIsValidDosCampos();
    const respostaTextArea = document.getElementById("message").value;
    const urlDestino = "finaliza-denuncia.html?conteudo=" + encodeURIComponent(respostaTextArea);
    window.location.href = urlDestino;
}


// Removendo o is-valid --------------------------------------------------------------------------
//Removendo os alertas caso o usuario selecione opções nos radios, select e inputs
function removeIsValidDosCampos() {
    document.querySelectorAll('input[name="opcao"]').forEach((radio) => {
        radio.addEventListener('change', () => {
            document.querySelector('.radio-identificacao').classList.remove('is-invalid');
        });
    });

    // Adicionando evento ao select
    function adicionaEventoDeRemove(selectElement) {
        selectElement.addEventListener("change", () => {
            if (selectElement.value !== "") {
                selectElement.classList.remove("is-invalid");
            }
        });
    }

    const selects = [
        document.getElementById("opcao1"),
        document.getElementById("opcao2"),
        document.getElementById("opcao3"),
        document.getElementById("opcao4"),
        document.getElementById("opcao5"),
        document.getElementById("opcao6"),
        document.getElementById("opcao7")
    ];

    selects.forEach(select => adicionaEventoDeRemove(select));

    function adicionaEventoDeRemoveInput(inputs) {
        inputs.addEventListener("input" , () => {
            if(inputs.value !== "") {
                inputs.classList.remove("is-invalid");
            }
        });
    }

    const inputsIds = [
        document.getElementById("area-setor"),
        document.getElementById("testemunha"),
        document.getElementById("descricao2"),
        document.getElementById("descricao3"),
    ];

    inputsIds.forEach((inputs) => adicionaEventoDeRemoveInput(inputs));

    const textAreaDenuncia = document.getElementById("descricao");
    textAreaDenuncia.addEventListener("textarea", () => {
        if (textAreaDenuncia.value !== "") {
            textAreaDenuncia.classList.remove("is-invalid");
        }
    });
}

// ------------------------------------------------------------------------------------------------------

function exibirOpcao() {
    var parametros = new URLSearchParams(window.location.search);
    var pegaResposta = parametros.get("conteudo");

    const campo = document.getElementById("respostaUsuario");
    if(campo){
        campo.textContent = pegaResposta;
        //console.log(campo.value);
    }
}

window.onload = exibirOpcao;

function geraIdGuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

function geraProtocoloEMostraNaPagina() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const hora = dataAtual.getHours().toString().padStart(2, '0');
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    const segundos = dataAtual.getSeconds().toString().padStart(2, '0');
  
    const numeroAleatorio = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const numeroConvertido = `${numeroAleatorio}${dia}${mes}${hora}${minutos}${segundos}`;

    window.location.href = "protocolo-gerado.html?protocolo=" + numeroConvertido;
}


function obterNumeroDeProtocoloDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const protocolo = urlParams.get("protocolo");
    return protocolo;
}

const mostraNumeroDeProtocolo = obterNumeroDeProtocoloDaURL();
if (mostraNumeroDeProtocolo) {
    document.getElementById("protocoloGerado").textContent = mostraNumeroDeProtocolo;
}

const botaoFinalizaDenuncia = document.getElementById("finalizar-denuncia");

document.addEventListener("DOMContentLoaded", function() {
    if(botaoFinalizaDenuncia){
        botaoFinalizaDenuncia.addEventListener("click", function() {

            alert("Sucesso, Enviando a denuncia");
    
            const Id = geraIdGuid();
            const Mensagem = document.getElementById('respostaUsuario').value;
    
            const dados = {
                Id,
                Mensagem
            };
    
            const urlDaAPI = "https://localhost:7114/api/denuncias";
            console.log(urlDaAPI);
    
            const configuracao = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            };
    
            fetch(urlDaAPI, configuracao)
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw new Error('Erro na solicitação à API');
                }
                return response.json();
            })
            .then(data => {
                if (data && data.data) {
                    const numeroProtocolo = data.data.numero_Protocolo;
                    if (numeroProtocolo) {
                        console.log('Número de Protocolo:', numeroProtocolo);
            
                        window.location.href = `protocolo-gerado.html?retornaNumeroDoBanco=${numeroProtocolo}`;
                    } else {
                        console.error('Número de Protocolo não encontrado na resposta da API');
                    }
                } else {
                    console.error('Estrutura inválida na resposta da API');
                }
                console.log('Sucesso', data);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
       });
    }
});

document.addEventListener("DOMContentLoaded", async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const retornaNumeroDoBanco = urlParams.get('retornaNumeroDoBanco');

    if (retornaNumeroDoBanco) {
        const urlDaAPI = `https://localhost:7114/api/denuncias/${retornaNumeroDoBanco}`;
        try {
            const response = await fetch(urlDaAPI);
            if (response.ok) {
                const data = await response.json();
                console.log(data);

                const mostrarNumeroDoProtocolo = data.data[0].numero_Protocolo;
                console.log(mostrarNumeroDoProtocolo);

                const carregaNumeroDeProtocolo = document.getElementById('protocoloGerado');

                if (carregaNumeroDeProtocolo) {
                    carregaNumeroDeProtocolo.textContent = `Este é o seu número de protocolo:  ${mostrarNumeroDoProtocolo}`;
                    copiaNumero();
                }
            } else {
                console.error('Erro na solicitação à API');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    }
});


function copiaNumero(){
    document.getElementById('iconeCopy').addEventListener('click', function() {
        const textoProtocolo = document.getElementById('protocoloGerado').innerText;

        const retiraNumero = textoProtocolo.substring(34);
        console.log(retiraNumero);
        
        const inputTemporario = document.createElement('textarea');
        inputTemporario.value = retiraNumero;

        document.body.appendChild(inputTemporario);

        inputTemporario.select();
        inputTemporario.setSelectionRange(0, 99999);

        document.execCommand('copy');

        document.body.removeChild(inputTemporario);

        alert('Número de protocolo copiado: ' + retiraNumero);
    });
}