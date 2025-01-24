function mostrarFormulario() {
    document.getElementById("formulario-denuncia-1").style.display = "block";
}

function ocultarFormulario() {
    document.getElementById("formulario-denuncia-1").style.display = "none";
}

const opcoes = document.querySelectorAll('input[name="opcao"]');

opcoes.forEach((opcao) => {
    opcao.addEventListener('change', function() {
        if (this.value === "ident-sim" && this.checked) {
            mostrarFormulario();
        } else if (this.value === "ident-nao" && this.checked) {
            ocultarFormulario();
        }
    });
});


function coletarOpcaoERedirecionar() {
    const opcaoSelecionada  = document.getElementById("opcao1").value;
    const opcaoSelecionada2 = document.getElementById("opcao2").value;
    const opcaoSelecionada3 = document.getElementById("opcao3").value;
    const opcaoDigitada1    = document.getElementById("area-setor").value;
    const opcaoSelecionada4 = document.getElementById("opcao4").value;
    const opcaoSelecionada5 = document.getElementById("opcao5").value;
    const opcaoSelecionada6 = document.getElementById("opcao6").value;
    const opcaoSelecionada7 = document.getElementById("opcao7").value;
    const opcaoDigitada2    = document.getElementById("descricao").value;
    const opcaoDigitada3    = document.getElementById("testemunha").value;
    const opcaoDigitada4    = document.getElementById("descricao2").value;
    const opcaoDigitada5    = document.getElementById("descricao3").value;

    var urlDestino = "protocolo-gerado.html?opcao1=" + encodeURIComponent(opcaoSelecionada) 
    + "&opcao2=" + encodeURIComponent(opcaoSelecionada2)
    + "&opcao3=" + encodeURIComponent(opcaoSelecionada3)
    + "&opcao4=" + encodeURIComponent(opcaoDigitada1)
    + "&opcao5=" + encodeURIComponent(opcaoSelecionada4)
    + "&opcao6=" + encodeURIComponent(opcaoSelecionada5)
    + "&opcao7=" + encodeURIComponent(opcaoSelecionada6)
    + "&opcao8=" + encodeURIComponent(opcaoSelecionada7)
    + "&opcao9=" + encodeURIComponent(opcaoDigitada2)
    + "&opcao10=" + encodeURIComponent(opcaoDigitada3)
    + "&opcao11=" + encodeURIComponent(opcaoDigitada4)
    + "&opcao12=" + encodeURIComponent(opcaoDigitada5);

    window.location.href = urlDestino;

    document.getElementById("opcao1").value = ""; 
    document.getElementById("opcao2").value = ""; 
    document.getElementById("opcao3").value = "" ;
    document.getElementById("area-setor").value = "";
    document.getElementById("opcao4").value = "";
    document.getElementById("opcao5").value = "" ;
    document.getElementById("opcao6").value = "" ;
    document.getElementById("opcao7").value = "" ;
    document.getElementById("descricao").value = "" ;
    document.getElementById("testemunha").value = "" ;
    document.getElementById("descricao2").value = "" ;
    document.getElementById("descricao3").value = "" ;
}

function exibirOpcao() {
    var parametros = new URLSearchParams(window.location.search);

    var opcao1 = parametros.get("opcao1");
    var opcao2 = parametros.get("opcao2");
    var opcao3 = parametros.get("opcao3");
    var opcao4 = parametros.get("opcao4");
    var opcao5 = parametros.get("opcao5");
    var opcao6 = parametros.get("opcao6");
    var opcao7 = parametros.get("opcao7");
    var opcao8 = parametros.get("opcao8");
    var opcao9 = parametros.get("opcao9");
    var opcao10 = parametros.get("opcao10");
    var opcao11 = parametros.get("opcao11");
    var opcao12 = parametros.get("opcao12");

    const campo1 = document.getElementById("opcao_exibicao1")
    if(campo1){
        campo1.textContent = opcao1;
    }

    const campo2 = document.getElementById("opcao_exibicao2")
    if(campo2){
        campo2.textContent = opcao2;
    }

    const campo3 = document.getElementById("opcao_exibicao3");
    if(campo3){
        campo3.textContent = opcao3;
    }

    const campo4 = document.getElementById("opcao_exibicao4");
    if(campo4){
        campo4.textContent = opcao4;
    }

    const campo5 = document.getElementById("opcao_exibicao5");
    if(campo5){
        campo5.textContent = opcao5;
    }

    const campo6 = document.getElementById("opcao_exibicao6");
    if(campo6){
        campo6.textContent = opcao6;
    }

    const campo7 = document.getElementById("opcao_exibicao7");
    if(campo7){
        campo7.textContent = opcao7;
    }

    const campo8 = document.getElementById("opcao_exibicao8");
    if(campo8){
        campo8.textContent = opcao8;
    }

    const campo9 = document.getElementById("opcao_exibicao9");
    if(campo9){
        campo9.textContent = opcao9;
    }

    const campo10 = document.getElementById("opcao_exibicao10");
    if(campo10){
        campo10.textContent = opcao10;
    }

    const campo11 = document.getElementById("opcao_exibicao11");
    if(campo11){
        campo11.textContent = opcao11;
    }

    const campo12 = document.getElementById("opcao_exibicao12");
    if(campo12){
        campo12.textContent = opcao12;
    }
}

window.onload = exibirOpcao;



function geraProtocolo() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const hora = dataAtual.getHours().toString().padStart(2, '0');
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    const segundos = dataAtual.getSeconds().toString().padStart(2, '0');

    const numeroAleatorio = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  

    const numeroConvertido = `${numeroAleatorio}${dia}${mes}${hora}${minutos}${segundos}`;
    window.location.href = "tabela-protocolo.html?protocolo=" + numeroConvertido;
}
