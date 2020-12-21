let str = +prompt('Введите число')
let text = +prompt('Введите степень')


let result = 1

for (let i = 0; i < text; i++) {
    result = result * str;
}

console.log(result);