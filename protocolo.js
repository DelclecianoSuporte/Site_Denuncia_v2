async function carregarProtocolos() {
    const tabelaProtocolos = document.querySelector('.tabela-protocolo tbody');
    tabelaProtocolos.innerHTML = ''; // Limpar a tabela antes de adicionar novos dados

    try {
        const response = await fetch('https://localhost:7114/api/denuncias/protocolos');
        if (!response.ok) {
            throw new Error('Erro ao carregar protocolos');
        }

        const protocolos = await response.json(); // Parse da resposta JSON
        console.log(protocolos)

        // Verifique se a resposta tem a chave "data" e se é um array
        if (protocolos.data && Array.isArray(protocolos.data)) {
            protocolos.data.forEach(protocolo => {
                // Criando uma nova linha para cada protocolo
                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td>${protocolo.numero_Protocolo}</td>
                    <td>${new Date(protocolo.data_Protocolo).toLocaleString()}</td>
                    <td>${protocolo.status}</td>
                `;

                tabelaProtocolos.appendChild(linha);
            });
        } 
        else {
            alert('A API está desligada ou não há registros. Ligue a API para buscar os registros.');
            console.error('A resposta da API não contém um array de protocolos.');
        }
    } 
    catch (error) {
        alert('A API está desligada ou não há registros. Ligue a API para buscar os registros.');
        console.error('Erro ao carregar protocolos:', error);
    }
}

document.addEventListener('DOMContentLoaded', carregarProtocolos);