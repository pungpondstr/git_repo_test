//1
const word_1 = "Hello my name is Joke"
console.log(word_1.length)

//2
const n = word_1.search('Joke');
console.log(n)

//3
const word_3 = "Well open up your mind and see like me"
const r = word_3.split(' ')
r.forEach(e => e === 'open' ? console.log(e) : '')
