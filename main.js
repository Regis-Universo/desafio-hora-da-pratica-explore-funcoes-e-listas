/* 01. Criar uma função que exibe "Olá, mundo!" no console. */

function olaMundo() {
  console.log('Olá, mundo!!!');
}

olaMundo();


/* 02. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console. */

function nome(nome) {
  console.log('Ola, ' + nome);
}

nome('Anselmo');


/* 03. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número. */

// Solicite ao usuário que insira um número
let numeroInformado = parseFloat(prompt(
    'Digite um número parar saber qual é o seu dobro: '));


function dobrarNumero() {
    // Converte o input string para um número
  return parseFloat(numeroInformado * 2);
}

let resultado = dobrarNumero();

// console.log('O dobro de ' + numeroInformado + ' é: ' + resultado);

alert(`O dobro de ${numeroInformado} é: ${resultado}`);


/* 04. Criar uma função que recebe três
números como parâmetros e retorna a
média deles*/

alert('A seguir, digite 3 números para sabermos a média:');

let numero1 = parseFloat(prompt(
'Digite o primeiro número: '));

let numero2 = parseFloat(prompt(
'Digite o segundo número: '));

let numero3 = parseFloat(prompt(
'Digite o terciro número: '));

function retornarMedia() {
    return parseFloat((numero1 + numero2 + numero3) / 3);
}

let media = retornarMedia();

alert(`A média de ${numero1} + ${numero2} + ${numero3} é igual a: ${media}`);


/* 05.  Criar uma função que recebe dois números como parâmetros e retorna o maior deles. */

alert('A seguir, digite 2 números para sabermos qual deles é o MAIOR:');

let numero4 = parseFloat(prompt(
'Digite o primeiro número: '));

let numero5 = parseFloat(prompt(
'Digite o segundo número: '));

function retornarNumeroMaior() {
    if (numero4 > numero5) {
        return numero4;
    } else {
        return numero5;
}

}
 
let numeroMaior = retornarNumeroMaior(); 

alert(`Entre o número ${numero4} e o ${numero5}, o numero MAIOR é o ${numeroMaior}.`);

/* 06. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo */


alert('A seguir, digite um número para saber qual o seu quadrado:');

let numeroBase = parseFloat(prompt(
    'Digite um número para ser multiplicado por ele mesmo: '));

function numeroAoQuadrado() {
    return parseFloat(numeroBase * numeroBase);
}

let quadrado = numeroAoQuadrado();

alert(`${numeroBase} elevado ao quadrado é iagual a ${quadrado}.`)
