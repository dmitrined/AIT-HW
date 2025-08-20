/*
Создайте функцию, которая позволит пользователю вводить строки (используйте prompt), и добавляет эти строки на HTML страницу Вариант чуть сложнее: добавляет в виде списка <ol>
*/

const container = document.getElementById("container");
enterString();
enterList();

function enterString() {
    const userInput = prompt("Введите строку для заголовка страницы:");
    if (userInput === null || userInput.trim() === "") {
        return enterString();
    }
    const h1 = document.createElement("h1");
    h1.textContent = userInput;
    container.appendChild(h1);
    return userInput;
}

function enterList() {
    const ol = document.createElement("ol");
    while (true) {
        const userInput = prompt("Введите строку для спиcка и нажмите OK (или нажмите Отмена для завершения):");
        if (userInput === null) {
            break;
        }
        if (userInput.trim() === "") {
            continue;
        }
        const li = document.createElement("li");
        li.textContent = userInput;
        ol.appendChild(li);
    }
        container.appendChild(ol);
}




