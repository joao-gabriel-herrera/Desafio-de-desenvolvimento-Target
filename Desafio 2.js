//Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
function fibonacci(numero) {
  let a = 0;
  let b = 1;
  let resultado = [];
  let pertence = false;

  if (numero === 0) {
    resultado.push(0);
    pertence = true;
  } else if (numero === 1) {
    resultado.push(0, 1);
    pertence = true;
  } else {
    resultado.push(0, 1);
    for (let i = 2; i <= numero; i++) {
      let c = a + b;
      resultado.push(c);
      a = b;
      b = c;
      if (c === numero) {
        pertence = true;
      }
    }
  }

  if (pertence) {
    console.log(`${numero} pertence à sequência de Fibonacci: ${resultado}`);
  } else {
    console.log(
      `${numero} não pertence à sequência de Fibonacci: ${resultado}`
    );
  }
}
// Teste aqui o código
fibonacci(insira_o_valor_aqui);
