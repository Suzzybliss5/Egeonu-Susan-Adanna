function fizzbuzz
{
  let arr = [];
  for (let i = n; i > 0; i--) {
    i%3 === 0 && i%5 === 0 ? arr.unshift('FizzBuzz') :
    i%3 === 0 ? arr.unshift('Fizz') :
    i%5 === 0 ? arr.unshift('Buzz') : arr.unshift(i);
  }
  return arr;
}
