var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < 100; i++)
{
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);