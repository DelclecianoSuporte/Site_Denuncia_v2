// Menu Hamburguer responsivo
// document.addEventListener("DOMContentLoaded", function() {
//     const hamburger = document.getElementById('hamburger');
//     const mobileMenu = document.getElementById('mobile-menu');

//     hamburger.addEventListener('click', function() {
//         mobileMenu.style.display = (mobileMenu.style.display === 'block' ? 'none' : 'block');
//     });
// });

const anoAtual = new Date().getFullYear();
document.getElementById("ano-atual").textContent = anoAtual;

document.addEventListener("DOMContentLoaded", async function() {
    const botaoConsultar = document.querySelector(".consulta-protocolo");

    if (botaoConsultar) {
        botaoConsultar.addEventListener("click", async function() {
            const campoDeProtocolo = document.getElementById("protocolo-digitado").value;
            const urlDaAPI = `https://localhost:7114/api/denuncias/${campoDeProtocolo}`;

            try {
                const response = await fetch(urlDaAPI);

                if (response.ok) {
                    const data = await response.json();

                    if (data && data.data && data.data.length > 0) {
                        alert("NUMERO DE PROTOCOLO ENCONTRADO");

                        const statusDoProtocolo = encodeURIComponent(data.data[0].status);
                        const respostaDenuncia = encodeURIComponent(data.data[0].resposta);
                        const dataHoraResposta = encodeURIComponent(data.data[0].dataHora_Resposta);

                        const queryParams = `?numeroProtocoloBanco=${data.data[0].numero_Protocolo}&statusDoProtocolo=${statusDoProtocolo}&respostaDenuncia=${respostaDenuncia}&dataHoraResposta=${dataHoraResposta}`;

                        window.location.href = 'consulta-protocolo.html' + queryParams;
                    } else {
                        alert('Protocolo não encontrado.');
                    }
                } else {
                    alert('Erro na solicitação à API.');
                }
            } catch (error) {
                console.error('Erro:', error);
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const numeroProtocolo = urlParams.get('numeroProtocoloBanco');
    const statusDoProtocolo = urlParams.get('statusDoProtocolo');
    const respostaDenuncia = urlParams.get('respostaDenuncia');
    const dataHoraResposta = urlParams.get('dataHoraResposta');

    if (statusDoProtocolo === 'Aberto') {
        document.getElementById("protocolo-status").innerText = `Status do relato: ${statusDoProtocolo}`;
        const containerResposta = document.querySelector(".status-aberto");
        containerResposta.style.display = "block";
    } 
    else if (statusDoProtocolo === 'Finalizado') {
        document.getElementById("protocolo-status").innerText = `Status do relato: ${statusDoProtocolo}`;
        
        const containerResposta = document.querySelector(".status-fechado");
        containerResposta.style.display = "block";
        
        const pegaDataHoraDaResposta = document.getElementById("data-hora-resposta");
        pegaDataHoraDaResposta.innerText =`Data e Horario que foi finalizado a denuncia: ${formatarData(dataHoraResposta)}`;
        
        const respostaStatusFechado = document.getElementById("resposta-status-fechado");
        respostaStatusFechado.innerText = respostaDenuncia || 'Sem resposta disponível';
    }
});

function formatarData(dataHora) {
    const data = new Date(dataHora);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}