var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < 100; i++) //"100" es el número de veces que hace la operacion pero los primeros 2 resultados son irrelevantes, no supe como solucionarlo
{
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);
