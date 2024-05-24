//Formas de pegarmos a data atual.

var data = new Date();   /*Usamos a variavel 'Var' para guardarmos a data em que a variavel foi criada.
dentro dessa variavel ira conter Ano, Mes, Dia, Hora, Minutos, Segundos, Mile-segundos. e dai podemos pegar 
os valores que queremos.*/

data.getDate() //Atraves desse codigo pegamos o Dia.
data.getDay() //Atraves desse codigo pegamos o Mes.
data.getFullYear()  //Atraves desse codigo pegamos o Ano.
data.getHours()  //Atraves desse codigo pegamos as Horas
data.getMinutes()  //Atraves desse codigo pegamos os Minutos.
data.getSeconds()  //Atraves desse codigo pegamos os Segundos.
data.getMilliseconds()  //Atraves desse codigo pegamos os MileSegundos.

//E temos um codigo que usamos para saber o timeSet da variavel e com isso podemos fazer contas que determinam quanto falta para chegar a determinada data.

var data2 = new Date();

var soma = data.getTime() - data2.getTime()  //O resultado dessa conta e quantos milesegundo tem de diferençã de uma data para outra.

soma/1000 //Dividimos esses MileSegundos por 1000 porque em 1 Segundo temos 1000 MileSegundos.
soma/60   //Dividimos Esses Segundos por 60 porque em 1 Minuto temos 60 Segundos.
soma/60   //Dividimos Esses Minutos por 60 porque em 1 Hora temos 60 Segundos.

//E assim podemos determinar quanto tem de diferença uma data para outra.
//Podemos determinar uma data expecifica atraves do New Date().

var data3 = new Date("Mes em ingles Dia do Mes, Ano Hora:Minutos:Segundos"); //Obs: Quando formos colocar o mes dentro dos parenteses podemos colocar so as 3 Primeiras letras da palavra.

//Essa deta expecifica pode ser no Passado ou no futuro tanto faz.

//Temos uma function no Js para fazer com que um determinado codigo seja execultado a cada determinado tempo. Por exemplo:

setInterval(function() {
    console.log('ola mundo')
}, 1000)

/*Essa function funciona da seguinte forma, usamos a palavra reservada setInterval()
e dentro dos parenteses colocamos duas coisa, Uma function para ativar o codigo e 
o tempo que essa função ira demorar para execultar o codigo, Lembrando que esse tempo 
tem que estar em MileSegundos por isso colocamos 1000, para que esse codigo seja execultado
a cada 1 Segundo. E temos duas formas de Parar esse codigo, Recarregando a pagina ou colocando essa
Função dentro de uma variavel e depois chamando a função "clearInterval(NomeDaVariavel)", Por Exemplo*/

var meuIntervalo = setInterval(function() {
    console.log('ola mundo')
}, 1000)

clearInterval(meuIntervalo) //Dessa maneira paramos a função intervalo.