/* 01. Criar uma função que exibe "Olá, mundo!" no console. */

function olaMundo() {
  console.log('Olá, mundo!!!')
}

olaMundo()

/* 02. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console. */

function nome(nome) {
  console.log('Ola, ' + nome)
}

nome('Anselmo')

/* 03. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número. */

function dobrarNumeroDoInput() {
  // Solicite ao usuário que insira um número
  let numeroInformado = prompt(
    'Digite um número parar saber qual é o seu dobro: '
  )

  // Converte o input para um número
  numeroInformado = parseFloat(numeroInformado);
  return numeroInformado * 2;
}

// Chama a função e armazena o resultado

let resultado =  dobrarNumeroDoInput();


console.log('O dobro de ' + numeroInformado + ' é: ' + resultado)
