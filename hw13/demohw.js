//Task 1:Создайте массив. Пусть в этом массиве будут числа и строки. Ваша задача написать код, который создаст новый массив в который поместит все строки из исходного массива.

let arr = [15, 81, 9, "hello", "world", 42, 7, "JavaScript"];
let newArr = [];

for (let element of arr) {
  if (typeof element === "string") {
    newArr.push(element);
  }
}
console.log(newArr);

//Task 2: Немного усложним задачу. Создайте массив, но в этот раз в массиве будут числа и строки и массивы с числами и строками. Ваша задача написать код, который создаст новый массив в который поместит все строки из исходного массива и строки из всех массивов входящих в исходный.
let complexArray = [15, 81, 9, "hello", ["world", 42], 7, ["JavaScript", "is", "fun"]];
let newComplexArray = [];
for (let element of complexArray) {
  if (typeof element === "string") {
    newComplexArray.push(element);
  } else if (Array.isArray(element)) {
    for (let subElement of element) {
      if (typeof subElement === "string") {
        newComplexArray.push(subElement);
      }
    }
  }
}
console.log(newComplexArray); 



//Task 3: Пользователь вводит целое число (воспользуйтесь prompt). Если введено что то другое, программа должна выдавать ссобщение об ошибке. Ваша задача написать код который создает массив из разрядов этого числа.
let userInput = prompt("Введите целое число:");
let digitArray = [];
if (!isNaN(userInput) && Number.isInteger(parseFloat(userInput))) {
  let digitsArray = Array.from(userInput, Number);
  console.log(digitsArray);
} else {
  console.log("Ошибка: введено не целое число.");
}