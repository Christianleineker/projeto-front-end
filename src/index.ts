import * as readline from 'readline';
import * as readlineSync from 'readline-sync';

// Menu

function menu(): void {
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
      lerNumerosArray();
      break;

    case 7:
      encontrarMaiorNumero();
      break;

    case 8:
      const texto = readlineSync.question("Digite um texto: ")
      exibirVogaisNoConsole(texto);
      break;

    case 9:
      const num1 = readlineSync.questionFloat("Digite o primeiro número: ");
      const num2 = readlineSync.questionFloat("Digite o segundo número: ");
      const operador = readlineSync.question("Digite o operador (+, -, *, /): ") as Operador;

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
      mostrarTabuada()
      break;

    case 15:
      mostrarIMC();
      break;

    case 16:
      mostrarValidarSenha();
      break;

    case 17:
      mostrarJogoDeAdivinhacao();
      break;

    case 18:
      mostrarContarPalavras();
      break;

    case 0:
      console.log("Saindo...")
      process.exit(0);

    default:
      console.log("Opção inválida.");
  }
}


// 1 - Soma de dois números

function somarDoisNumeros(): void {
  const a = readlineSync.questionInt("Digite o primeiro número: ");
  const b = readlineSync.questionInt("Digite o segundo número: ");
  console.log(`Resultado: ${a + b}`);
}

// 2 - Verificar par ou impar

function verificarParOuImpar(): void {
  const numero = readlineSync.questionInt("Digite um número: ");

  if (numero % 2 === 0) {
    console.log(`${numero} é par.`);
  } else {
    console.log(`${numero} é ímpar.`);
  }
}

// 3 - Calcular média de três notas

function calcularMedia(): void {
  const a = readlineSync.questionInt("Digite a primeira nota: ");
  const b = readlineSync.questionInt("Digite a segunda nota: ");
  const c = readlineSync.questionInt("Digite a terceira nota: ");

  const resultado = (a + b + c) / 3;

  console.log(`A média das nota é: ${resultado}`);
}


// 4 - Converter Celsius para Fahrenheit


function converterCelsiusParaFahrenheit(): void {
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

// 5 - Exibir números pares de 1 a 20

function numerosPares() {
  console.log("Números pares de 1 a 20:");
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}


// 6 - Ler 5 números e armazenar em array

function lerNumerosArray() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const numeros: number[] = [];
  let contador = 0;

  function pedirNumero() {
    if (contador < 5) {
      rl.question(`Digite o número ${contador + 1}: `, (entrada) => {
        const numero = Number(entrada);
        if (!isNaN(numero)) {
          numeros.push(numero);
          contador++;
          pedirNumero();
        } else {
          console.log("Por favor, digite um número válido.");
          pedirNumero();
        }
      });
    } else {
      rl.close();
      console.log("Números digitados:", numeros);
    }
  }

  pedirNumero();
}


// 7 - Encontrar maior número em um array

function encontrarMaiorNumero() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const numeros: number[] = [];
  let contador = 0;

  function pedirNumero() {
    if (contador < 5) {
      rl.question(`Digite o número ${contador + 1}: `, (entrada) => {
        const numero = Number(entrada);
        if (!isNaN(numero)) {
          numeros.push(numero);
          contador++;
          pedirNumero();
        } else {
          console.log("Por favor, digite um número válido.");
          pedirNumero();
        }
      });
    } else {
      rl.close();
      const maior = Math.max(...numeros);
      console.log("Números digitados:", numeros);
      console.log("Maior número:", maior);
    }
  }

  pedirNumero();
}


// 8 - Contar vogais em uma string


function contarVogais(texto: string): number {
  const vogais = texto.match(/[aeiouáéíóúâêîôûãõàèìòùäëïöü]/gi);
  return vogais ? vogais.length : 0;
}

function exibirVogaisNoConsole(texto: string): void {
  const quantidade = contarVogais(texto);
  console.log(`Seu texto tem ${quantidade} vogais!`);

  const textoComDestaque = texto.replace(
    /([aeiouáéíóúâêîôûãõàèìòùäëïöü])/gi,
    '\x1b[31m$1\x1b[0m'
  );

  console.log("Texto com vogais destacadas:");
  console.log(textoComDestaque);
}


// 9 - Calculadora simples

type Operador = '+' | '-' | '*' | '/';

function calcular(num1: number, num2: number, op: Operador): string {
  if (isNaN(num1) || isNaN(num2)) return 'Erro: entrada inválida';
  if (op === '/' && num2 === 0) return 'Erro: divisão por zero';

  const resultado = {
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2,
    '/': num1 / num2,
  }[op];

  if (Number.isInteger(resultado)) {
    return resultado.toString();
  } else {
    return resultado.toFixed(4).replace(/\.?0+$/, '');
  }
}


// 10 - Ordenar array em ordem crescente

function ordenarArrayCrescente(): void {
  const readline = require('readline');

  const inputReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  inputReader.question("Digite números separados por espaço: ", (input: string): void => {
    const numeros: number[] = input
      .trim()
      .split(/\s+/)
      .map((n: string): number => Number(n))
      .filter((n: number): boolean => !isNaN(n));

    const ordenados: number[] = numeros.sort((a: number, b: number): number => a - b);

    console.log("Números em ordem crescente:", ordenados.join(" "));
    inputReader.close();
  });
}

// 11 - Classe Pessoa

function perguntarClassPessoa(): void {
  class Pessoa {
    constructor(
      public nome: string,
      public sexo: string,
      public idade: number,
      public altura: number,
      public cor: string,
      public cpf: string,
      public endereco: string,
      public cep: string,
      public cidade: string,
      public estado: string
    ) { }
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

  const respostas: string[] = [];

  function perguntar(index: number) {
    if (index === perguntas.length) {
      const pessoa = new Pessoa(
        respostas[0],
        respostas[1],
        parseInt(respostas[2]),
        parseFloat(respostas[3]),
        respostas[4],
        respostas[5],
        respostas[6],
        respostas[7],
        respostas[8],
        respostas[9]
      );

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


// 12 - Classe Aluno


function mostrarClassAluno() {

  class Aluno {
    nome: string;
    idade: number;
    matricula: string;
    curso: string;
    turma: string;
    serie: number;
    RA: string;
    notaFinal: number;
    aprovado: boolean;

    constructor(
      nome: string,
      idade: number,
      matricula: string,
      curso: string,
      turma: string,
      serie: number,
      RA: string,
      notaFinal: number,
      aprovado: boolean
    ) {
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


// 13 - Classe Carro

function mostrarClassCarro() {

  class Carro {
    nome: string;
    modelo: string;
    marca: string;
    fabricante: string;
    ano: number;
    quilometragem: number;
    cor: string;
    placa: string;
    chassi: string;
    tipoCombustivel: string;
    transmissao: string;
    numPortas: number;
    potencia: string;
    valor: string;
    tracao: string;
    capacidadeTanque: number;
    suspensao: string;
    freios: string;

    constructor(
      nome: string,
      modelo: string,
      marca: string,
      fabricante: string,
      ano: number,
      quilometragem: number,
      cor: string,
      placa: string,
      chassi: string,
      tipoCombustivel: string,
      transmissao: string,
      numPortas: number,
      potencia: string,
      valor: string,
      tracao: string,
      capacidadeTanque: number,
      suspensao: string,
      freios: string
    ) {
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



  const carro = new Carro(
    nome,
    modelo,
    marca,
    fabricante,
    ano,
    quilometragem,
    cor,
    placa,
    chassi,
    tipoCombustivel,
    transmissao,
    numPortas,
    potencia,
    valor,
    tracao,
    capacidadeTanque,
    suspensao,
    freios
  );

  console.log("\n=== Dados do Carro ===");
  console.log(carro);
}


// 14 - Tabuada

function mostrarTabuada() {
    const numero = readlineSync.questionInt("Digite um número para ver a tabuada: ");
    console.log(`\n🧮 Tabuada do ${numero}: `);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// 15 - Calculadora de IMC

function mostrarIMC() {
  function calcularIMC(peso: number, altura: number): string {
    const imc = peso / (altura * altura);
    let classificacao: string;

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
    } else if (imc < 35) {
      classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
      classificacao = "Obesidade grau 2";
    } else {
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

// 16 - Validar senha


function mostrarValidarSenha() {
  function validarSenha(senha: string): boolean {
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
  } else {
    console.log(
      "Senha inválida! A senha deve conter:\n" +
      "- Pelo menos 8 caracteres\n" +
      "- Uma letra maiúscula\n" +
      "- Uma letra minúscula\n" +
      "- Um número"
    );
  }
}



// 17 - Jogo de adivinhação

function mostrarJogoDeAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log("🔢 Tente adivinhar o número entre 1 e 100.");

    let tentativa: number;
    let tentativas = 0;

    do {
        tentativa = readlineSync.questionInt("Seu palpite: ");
        tentativas++;

        if (tentativa < numeroSecreto) {
            console.log("🔻 Muito baixo!");
        } else if (tentativa > numeroSecreto) {
            console.log("🔺 Muito alto!");
        } else {
            console.log(`🎉 Parabéns! Você acertou em ${tentativas} tentativa(s)!`);
        }
    } while (tentativa !== numeroSecreto);
}

// 18 - Contar palavras em uma string

function mostrarContarPalavras() {
  function contarPalavras(frase: string): number {
    if (!frase.trim()) return 0;
    return frase.trim().split(/\s+/).length;
  }

  const frase = readlineSync.question("Escreva uma frase: ");
  const numeroPalavras = contarPalavras(frase);
  console.log(`A frase contém ${numeroPalavras} palavra(s).`);
}


menu();
