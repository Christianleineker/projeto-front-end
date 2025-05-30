"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const readlineSync = __importStar(require("readline-sync"));
// Menu
function menu() {
    console.log("Escolha uma opção:");
    console.log("1 - Soma de dois números");
    console.log("2 - Verificar par ou impar");
    console.log("3 - Calcular média de três notas");
    console.log("4 - Converter Celsius para Fahrenheit");
    console.log("5 - Exibir números pares de 1 a 20");
    console.log("6 - Ler 5 números e armazenar em array");
    console.log("7 - Encontrar maior número em um array");
    console.log("8 - Contar vogais em uma string");
    console.log("9 - Calculadora simples");
    console.log("10 - Ordenar array em ordem crescente");
    console.log("11 - Classe Pessoa");
    console.log("12 - Classe Aluno");
    console.log("13 - Classe Carro");
    console.log("14 - Tabuada");
    console.log("15 - Calculadora de IMC");
    console.log("16 - Validar senha");
    console.log("17 - Jogo de adivinhação");
    console.log("18 - Contar palavras em uma string");
    console.log("0 - Sair");
    const opcao = readlineSync.questionInt("Digite o número da opção desejada: ");
    switch (opcao) {
        case 1:
            somarDoisNumeros();
            break;
        case 2:
            verificarParOuImpar();
            break;
        case 3:
            calcularMedia();
            break;
        case 4:
            converterCelsiusParaFahrenheit();
            break;
        case 5:
            numerosPares();
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            const texto = readlineSync.question("Digite um texto: ");
            exibirVogaisNoConsole(texto);
            break;
        case 9:
            const num1 = readlineSync.questionFloat("Digite o primeiro número: ");
            const num2 = readlineSync.questionFloat("Digite o segundo número: ");
            const operador = readlineSync.question("Digite o operador (+, -, *, /): ");
            const resultado = calcular(num1, num2, operador);
            console.log(`Resultado: ${resultado}`);
            break;
        case 10:
            ordenarArrayCrescente();
            break;
        case 11:
            perguntarClassPessoa();
            break;
        case 12:
            mostrarClassAluno();
            break;
        case 13:
            mostrarClassCarro();
            break;
        case 14:
            break;
        case 15:
            mostrarIMC();
            break;
        case 16:
            mostrarValidarSenha();
            break;
        case 17:
            break;
        case 18:
            mostrarContarPalavras();
            break;
        case 0:
            console.log("Saindo...");
            process.exit(0);
        default:
            console.log("Opção inválida.");
    }
}
// 1 - Soma de dois números - Gabriel
function somarDoisNumeros() {
    const a = readlineSync.questionInt("Digite o primeiro número: ");
    const b = readlineSync.questionInt("Digite o segundo número: ");
    console.log(`Resultado: ${a + b}`);
}
// 2 - Verificar par ou impar - Gabriel
function verificarParOuImpar() {
    const numero = readlineSync.questionInt("Digite um número: ");
    if (numero % 2 === 0) {
        console.log(`${numero} é par.`);
    }
    else {
        console.log(`${numero} é ímpar.`);
    }
}
// 3 - Calcular média de três notas - Gabriel
function calcularMedia() {
    const a = readlineSync.questionInt("Digite a primeira nota: ");
    const b = readlineSync.questionInt("Digite a segunda nota: ");
    const c = readlineSync.questionInt("Digite a terceira nota: ");
    const resultado = (a + b + c) / 3;
    console.log(`A média das nota é: ${resultado}`);
}
// 4 - Converter Celsius para Fahrenheit - Francisco Jose
function converterCelsiusParaFahrenheit() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Digite a temperatura em Celsius: ", (input) => {
        const celsius = parseFloat(input);
        const fahrenheit = (celsius * 9 / 5) + 32;
        console.log(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
        rl.close();
    });
}
// 5 - Exibir números pares de 1 a 20 - Francisco Jose
function numerosPares() {
    console.log("Números pares de 1 a 20:");
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
// 6 - Ler 5 números e armazenar em array - Kaua
// 7 - Encontrar maior número em um array - Kaua
// 8 - Contar vogais em uma string - João
function contarVogais(texto) {
    const vogais = texto.match(/[aeiouáéíóúâêîôûãõàèìòùäëïöü]/gi);
    return vogais ? vogais.length : 0;
}
function exibirVogaisNoConsole(texto) {
    const quantidade = contarVogais(texto);
    console.log(`Seu texto tem ${quantidade} vogais!`);
    const textoComDestaque = texto.replace(/([aeiouáéíóúâêîôûãõàèìòùäëïöü])/gi, '\x1b[31m$1\x1b[0m');
    console.log("Texto com vogais destacadas:");
    console.log(textoComDestaque);
}
function calcular(num1, num2, op) {
    if (isNaN(num1) || isNaN(num2))
        return 'Erro: entrada inválida';
    if (op === '/' && num2 === 0)
        return 'Erro: divisão por zero';
    const resultado = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num1 / num2,
    }[op];
    if (Number.isInteger(resultado)) {
        return resultado.toString();
    }
    else {
        return resultado.toFixed(4).replace(/\.?0+$/, '');
    }
}
// 10 - Ordenar array em ordem crescente - Gustavo
function ordenarArrayCrescente() {
    const readline = require('readline');
    const inputReader = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    inputReader.question("Digite números separados por espaço: ", (input) => {
        const numeros = input
            .trim()
            .split(/\s+/)
            .map((n) => Number(n))
            .filter((n) => !isNaN(n));
        const ordenados = numeros.sort((a, b) => a - b);
        console.log("Números em ordem crescente:", ordenados.join(" "));
        inputReader.close();
    });
}
// 11 - Classe Pessoa - Christian
function perguntarClassPessoa() {
    class Pessoa {
        constructor(nome, sexo, idade, altura, cor, cpf, endereco, cep, cidade, estado) {
            this.nome = nome;
            this.sexo = sexo;
            this.idade = idade;
            this.altura = altura;
            this.cor = cor;
            this.cpf = cpf;
            this.endereco = endereco;
            this.cep = cep;
            this.cidade = cidade;
            this.estado = estado;
        }
    }
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const perguntas = [
        'Nome: ',
        'Sexo: ',
        'Idade: ',
        'Altura (em metros): ',
        'Cor: ',
        'CPF: ',
        'Endereço: ',
        'CEP: ',
        'Cidade: ',
        'Estado: '
    ];
    const respostas = [];
    function perguntar(index) {
        if (index === perguntas.length) {
            const pessoa = new Pessoa(respostas[0], respostas[1], parseInt(respostas[2]), parseFloat(respostas[3]), respostas[4], respostas[5], respostas[6], respostas[7], respostas[8], respostas[9]);
            console.log('\nPessoa criada:');
            console.log(pessoa);
            rl.close();
            return;
        }
        rl.question(perguntas[index], (resposta) => {
            respostas.push(resposta);
            perguntar(index + 1);
        });
    }
    perguntar(0);
}
// 12 - Classe Aluno - Chritian
function mostrarClassAluno() {
    class Aluno {
        constructor(nome, idade, matricula, curso, turma, serie, RA, notaFinal, aprovado) {
            this.nome = nome;
            this.idade = idade;
            this.matricula = matricula;
            this.curso = curso;
            this.turma = turma;
            this.serie = serie;
            this.RA = RA;
            this.notaFinal = notaFinal;
            this.aprovado = aprovado;
        }
    }
    const nome = readlineSync.question("Nome do aluno: ");
    const idade = readlineSync.questionInt("Idade: ");
    const matricula = readlineSync.question("Matrícula: ");
    const curso = readlineSync.question("Curso: ");
    const turma = readlineSync.question("Turma: ");
    const serie = readlineSync.questionInt("Série: ");
    const RA = readlineSync.question("RA: ");
    const notaFinal = readlineSync.questionFloat("Nota final: ");
    const aprovado = readlineSync.keyInYNStrict("Aprovado? (s/n): ");
    const aluno = new Aluno(nome, idade, matricula, curso, turma, serie, RA, notaFinal, aprovado);
    console.log("\n=== Dados do Aluno ===");
    console.log(aluno);
}
// 13 - Classe Carro - Christian
function mostrarClassCarro() {
    class Carro {
        constructor(nome, modelo, marca, fabricante, ano, quilometragem, cor, placa, chassi, tipoCombustivel, transmissao, numPortas, potencia, valor, tracao, capacidadeTanque, suspensao, freios) {
            this.nome = nome;
            this.modelo = modelo;
            this.marca = marca;
            this.fabricante = fabricante;
            this.ano = ano;
            this.quilometragem = quilometragem;
            this.cor = cor;
            this.placa = placa;
            this.chassi = chassi;
            this.tipoCombustivel = tipoCombustivel;
            this.transmissao = transmissao;
            this.numPortas = numPortas;
            this.potencia = potencia;
            this.valor = valor;
            this.tracao = tracao;
            this.capacidadeTanque = capacidadeTanque;
            this.suspensao = suspensao;
            this.freios = freios;
        }
    }
    const nome = readlineSync.question("Nome do carro: ");
    const modelo = readlineSync.question("Modelo: ");
    const marca = readlineSync.question("Marca: ");
    const fabricante = readlineSync.question("Fabricante: ");
    const ano = readlineSync.questionInt("Ano: ");
    const quilometragem = readlineSync.questionInt("Quilometragem: ");
    const cor = readlineSync.question("Cor: ");
    const placa = readlineSync.question("Placa: ");
    const chassi = readlineSync.question("Chassi: ");
    const tipoCombustivel = readlineSync.question("Tipo de combustível: ");
    const transmissao = readlineSync.question("Transmissão: ");
    const numPortas = readlineSync.questionInt("Número de portas: ");
    const potencia = readlineSync.question("Potência: ");
    const valor = readlineSync.question("Valor: ");
    const tracao = readlineSync.question("Tração: ");
    const capacidadeTanque = readlineSync.questionInt("Capacidade do tanque (em litros): ");
    const suspensao = readlineSync.question("Suspensão: ");
    const freios = readlineSync.question("Freios: ");
    const carro = new Carro(nome, modelo, marca, fabricante, ano, quilometragem, cor, placa, chassi, tipoCombustivel, transmissao, numPortas, potencia, valor, tracao, capacidadeTanque, suspensao, freios);
    console.log("\n=== Dados do Carro ===");
    console.log(carro);
}
// 14 - Tabuada - Francisco L.
// 15 - Calculadora de IMC - Guilherme
function mostrarIMC() {
    function calcularIMC(peso, altura) {
        const imc = peso / (altura * altura);
        let classificacao;
        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        }
        else if (imc < 25) {
            classificacao = "Peso normal";
        }
        else if (imc < 30) {
            classificacao = "Sobrepeso";
        }
        else if (imc < 35) {
            classificacao = "Obesidade grau 1";
        }
        else if (imc < 40) {
            classificacao = "Obesidade grau 2";
        }
        else {
            classificacao = "Obesidade grau 3";
        }
        return `IMC: ${imc.toFixed(2)} - ${classificacao}`;
    }
    const peso = readlineSync.questionFloat("Digite seu peso (kg): ");
    const altura = readlineSync.questionFloat("Digite sua altura (m): ");
    if (peso <= 0 || altura <= 0) {
        console.log("Insira valores válidos para peso e altura.");
        return;
    }
    const resultado = calcularIMC(peso, altura);
    console.log(resultado);
}
// 16 - Validar senha - Guilherme
function mostrarValidarSenha() {
    function validarSenha(senha) {
        const tamanhoMinimo = senha.length >= 8;
        const temMaiuscula = /[A-Z]/.test(senha);
        const temMinuscula = /[a-z]/.test(senha);
        const temNumero = /[0-9]/.test(senha);
        return tamanhoMinimo && temMaiuscula && temMinuscula && temNumero;
    }
    const senha = readlineSync.question("Digite sua senha: ");
    if (senha.trim() === "") {
        console.log("Nenhuma senha foi digitada.");
        return;
    }
    if (validarSenha(senha)) {
        console.log("Senha válida!");
    }
    else {
        console.log("Senha inválida! A senha deve conter:\n" +
            "- Pelo menos 8 caracteres\n" +
            "- Uma letra maiúscula\n" +
            "- Uma letra minúscula\n" +
            "- Um número");
    }
}
// 17 - Jogo de adivinhação - Francisco L.
// 18 - Contar palavras em uma string - Gustavo
function mostrarContarPalavras() {
    function contarPalavras(frase) {
        if (!frase.trim())
            return 0;
        return frase.trim().split(/\s+/).length;
    }
    const frase = readlineSync.question("Escreva uma frase: ");
    const numeroPalavras = contarPalavras(frase);
    console.log(`A frase contém ${numeroPalavras} palavra(s).`);
}
menu();
//# sourceMappingURL=index.js.map