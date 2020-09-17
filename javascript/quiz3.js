const result = 61
result < 50 ? console.log('F') : 
result >= 50 && result < 60 ? console.log('D') : 
result >= 60 && result < 70 ? console.log('C') : 
result >= 70 && result < 80 ? console.log('B') :
result >= 80 && result <= 100 ? console.log('A') : console.log('Error')
console.log(result)