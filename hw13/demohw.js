//Task 1:Создайте массив. Пусть в этом массиве будут числа и строки. Ваша задача написать код, который создаст новый массив в который поместит все строки из исходного массива.

let arr = [15, 81, 9, "hello", "world", 42, 7, "JavaScript"];
let newArr = [];

for (let element of arr) {
  if (typeof element === "string") {
    newArr.push(element);
  }
}
console.log(newArr);