
console.log("JavaScript carregado!");

// PARTE 2 - Variáveis e tipos

const nomeAluno = "Bruno";
let idade = 16;
const matriculado = true;

console.log(nomeAluno);
console.log(idade);
console.log(matriculado);

console.log(typeof nomeAluno);
console.log(typeof idade);
console.log(typeof matriculado);


// PARTE 3 - Operadores

let numero1 = 10;
let numero2 = 5;

console.log("Soma:", numero1 + numero2);
console.log("Subtração:", numero1 - numero2);
console.log("Multiplicação:", numero1 * numero2);
console.log("Divisão:", numero1 / numero2);
console.log("Resto:", numero1 % numero2);

// O primeiro número é maior que o segundo? Sim.
// Eles são estritamente iguais? Não.

console.log(numero1 > numero2);
console.log(numero1 === numero2);


// PARTE 4 - Entrada e conversão

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

console.log("Soma:", n1 + n2);

console.log(typeof n1);
console.log(typeof n2);


// PARTE 5 - Condicionais

// 5.1 - Maioridade

let idadePessoa = Number(prompt("Digite sua idade:"));

if (idadePessoa >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}


// 5.2 - Classificação de nota

let nota = Number(prompt("Digite sua nota de 0 a 100:"));

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}


// 5.3 - Número par ou ímpar

let numero = Number(prompt("Digite um número inteiro:"));

if (numero % 2 === 0) {
    console.log("Número par");
} else {
    console.log("Número ímpar");
}


// PARTE 6 - Depuração

// Problemas encontrados:
// 1. A idade precisa ser convertida para Number.
// 2. O sinal = deve ser substituído por ===.
// 3. Idade deve ser escrito com letra minúscula.
// 4. Faltava ponto e vírgula.

const idadeCorreta = Number(prompt("Idade:"));

if (idadeCorreta === 18) {
    console.log("Tem exatamente 18 anos");
} else {
    console.log("Idade diferente de 18");
}

console.log(idadeCorreta);


// DESAFIO FINAL - Situação do aluno

const nome = prompt("Digite o nome do aluno:");
const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));

const media = (nota1 + nota2) / 2;

let situacao;

if (media >= 70) {
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}

console.log(`Aluno: ${nome} | Média: ${media} | Situação: ${situacao}`);
