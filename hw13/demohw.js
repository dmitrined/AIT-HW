//Task 1:Создайте массив. Пусть в этом массиве будут числа и строки. Ваша задача написать код, который создаст новый массив в который поместит все строки из исходного массива.

let arr = [15, 81, 9, "hello", "world", 42, 7, "JavaScript"];
let newArr = [];

for (let i=0; i<arr.length; i++) {
  if (typeof arr[i] === "string") {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

//Task 2: Немного усложним задачу. Создайте массив, но в этот раз в массиве будут числа и строки и массивы с числами и строками. Ваша задача написать код, который создаст новый массив в который поместит все строки из исходного массива и строки из всех массивов входящих в исходный.
let complexArray = [15, 81, 9, "hello", ["world", 42], 7, ["JavaScript", "is", "fun"]];
let newComplexArr = []; 
for (let i = 0; i < complexArray.length; i++) {
  if (typeof complexArray[i] === "string") {
    newComplexArr.push(complexArray[i]);
  } else if (Array.isArray(complexArray[i])) {    
    for (let j = 0; j < complexArray[i].length; j++) {
      if (typeof complexArray[i][j] === "string") {
        newComplexArr.push(complexArray[i][j]);
      }
    }
  }
}
console.log(newComplexArr); 




//Task 3: Пользователь вводит целое число (воспользуйтесь prompt). Если введено что то другое, программа должна выдавать ссобщение об ошибке. Ваша задача написать код который создает массив из разрядов этого числа.
let userInput = prompt("Введите целое число:");
let digitArray = [];
if (!isNaN(userInput) && Number.isInteger(parseFloat(userInput))) {
  let digitsArray = Array.from(userInput, Number);
  console.log(digitsArray);
} else {
  console.log("Ошибка: введено не целое число.");
}