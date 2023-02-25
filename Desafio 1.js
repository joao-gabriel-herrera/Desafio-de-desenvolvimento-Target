/* Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA? */

/* Resposta: 91, pois a cada laço de repetição o valor de soma sera 
maior que o de k, exemplificand vamos definir que estamos no terceiro, 
laço soma vale 2  k vale 2, k passara a valer 2 + 1 = 3 porem soma ja é 
2 recebendo o k que é 3 soma se tornará 5, e assim por diante.*/
