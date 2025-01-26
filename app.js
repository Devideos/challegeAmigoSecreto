// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function addAmigo() {
    const input = document.getElementById('amigo'); // Obtém o campo de entrada
    const nome = input.value.trim(); // Captura e remove espaços extras

    //Verifica se o campo não está vazio
    if (nome == '') {
        alert('ERRO. Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array e atualiza a exibição
    amigos.push(nome);
    atualizarListaAmigos();

    // Limpa o campo de entrada
    input.value = '';
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    // Percorre o array e cria elementos <li> para cada amigo
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Verifica se há amigos disponíveis para sortear
    if (amigos.length == 0) {
        alert('A lista está vazia. Adicione amigos antes de realizar o sorteio.');
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome correspondente ao índice
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome sorteado
    resultado.innerHTML = `<li>🎉 O amigo sorteado é: ${amigoSorteado}</li>`;
}


