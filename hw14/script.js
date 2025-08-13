/*
Задание 1.
Создайте фуеуцию comparator(a,b), которая принимает 2 строки и возвращает 1 - если первое строка длиннее, -1 если вторая строка длиннее, 0 если равны.
Используйте синтаксис function declaration, вызовите эту фкнкцию и напечатайте резултьаь. Напишите эту эе функцию используя Function Expression и Arrow Function
*/
//function declaration
function comparator(a, b) {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
}
console.log(comparator("jack", "li"));
//Function Expression
const comparatorFunc = function(a, b) {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
}
console.log(comparatorFunc("apple", "banana"));
//Arrow Function
const comparatorArrow = (a, b) => {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
}
console.log(comparatorArrow("home", "work"));
/*
Задание 2.
Создайте функцию, которая используя prompt позволяет пользователю ввести строки и формирует массив из этих строк. Если пользователь в форме нажал отказаться это означает конец ввода. Пустые строки не должны попадать в итоговый массив. В качестве результата фугкция долюна вернуть сформированный массив строк.
*/
function getStringsArray() {
    const stringsArray = [];
    let userInput;

    while (true) {
        userInput = prompt("Введите строку (или нажмите Отмена для завершения):");
        if (userInput === null) {
            break;
        } else if (userInput.trim() !== "") {
            stringsArray.push(userInput.trim());
        }
    }
    return stringsArray;
}
console.log(getStringsArray());

/*
Задание 3.
Напишите функцию, которая принимает массив и функцию-компаратор, и возвращает самое большое значение в массиве. Вызовите эту функцию, передав ей массив строк, полученный во второйзадаче и функцию, написанную в первой задаче.
*/
function findLargestString(arr, comparatorFunc) {
    if (arr.length === 0) return null;

    let largestString = arr[0];

    for (let el of arr) {
        if (comparatorFunc(el, largestString) === 1) {
            largestString = el;
        }
    }
    return largestString;
}
const stringsArray = getStringsArray();

const largestString = findLargestString(stringsArray, comparator);
console.log(largestString);


