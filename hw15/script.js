/*
1
a) Создайте несколько объектов-продуктов. В каждом объекте должно быть поле name (название), description(описание), price(цена), info (функция, которая формирует строку вида: товар: notebook lenovo thinkpad; цена: 1283 описание: cpu intel core7, ram:16gb ...

b) создайте конструктор для создания объектов-товаров. Создайте несколько товаров

с) Создайте массив из товаров. Напишите функцию, которая выводит в консоль информацию о всех товарах в виде:

Tовар 1
name: notebook lenovo thinkpad
price: 1283
description: .....
info: ....
Copy
т.е. поле: значение При этом: поля, которые являются функциями, нужно выводить результат работы функции (не текст функции)

*/
// a
const product1 = {
    name: "Notebook Lenovo ThinkPad",
    description: "CPU Intel Core i7, RAM 16GB, SSD 512GB",
    price: 1283,
    info: function () {
        return `Товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    },
};

const product2 = {
    name: "Smartphone Samsung Galaxy S21",
    description: '6.2" AMOLED, 128GB Storage, 8GB RAM',
    price: 799,
    info: function () {
        return `Товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    },
};

const product3 = {
    name: "Tablet Apple iPad Pro",
    description: '12.9" Liquid Retina, A12Z Bionic, 256GB Storage',
    price: 1099,
    info: function () {
        return `Товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    },
};

// b
function Product(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.info = function () {
        return `Товар: ${this.name}; цена: ${this.price}; описание: ${this.description}`;
    };
}
const products = [
    new Product(
        "Notebook Lenovo ThinkPad",
        "CPU Intel Core i7, RAM 16GB, SSD 512GB",
        1283
    ),
    new Product(
        "Smartphone Samsung Galaxy S21",
        '6.2" AMOLED, 128GB Storage, 8GB RAM',
        799
    ),
    new Product(
        "Tablet Apple iPad Pro",
        '12.9" Liquid Retina, A12Z Bionic, 256GB Storage',
        1099
    ),
];

// c
function displayProducts(products) {
    if (!Array.isArray(products) || products.length === 0) {
        console.log("Нет доступных товаров.");
        return;
    }
    for (let produkt of products) {
        console.log(`Товар ${products.indexOf(produkt) + 1}`);
        console.log(` name: ${produkt.name}`);
        console.log(` price: ${produkt.price}`);
        console.log(` description: ${produkt.description}`);
        console.log(` info: ${produkt.info()}`);
    }
}
displayProducts(products);

/*
2
a) Создай функцию-конструктор объектов Account(iban,owner, balance), которая возвращает объект с:

номер счета (iban)
именем владельца (owner)
балансом (balance)
методами:
deposit(amount) — пополнение счёта
withdraw(amount) — снятие денег (если хватает баланса)
getBalance() — вывод текущего баланса
Создайте несколько объектов счетов. Создайте массив из счетов. Выведите информацию о всех счетах в консоль

b) напишите функцию, transfer, которая получает два счета, и выполняет перевод между счетами вызывая методы deposit и withdraw соответственно.

с) (чуть сложнее, по желанию) В качестве результата функции transaer, в случае успешной операции, должен cформироваться объект:

account1 (счет списания),
account2 (счет зачисления),
amount (сумма)
transactionInfo() (функция, которая выводит информацию о транзакции)
Если транзакция прошла неуспешно, объект должен содержать еще и поле error c информацией об ошибке. Естественно, transactionInfo() должна в этом случае выводить информацию о неуспешной транзакции. В случае, если транзакция успешна, поля error не должно быть.
*/

// a
function Account(iban, owner, balance) {
    this.iban = iban;
    this.owner = owner;
    this.balance = balance;

    this.deposit = function (amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Некорректная сумма пополнения.");
            return false;
        }
        this.balance += amount;
        console.log(
            `Пополнение счета: ${this.iban} на ${amount}. Текущий баланс: ${this.balance}`
        );
        return true;
    };

    this.withdraw = function (amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Некорректная сумма снятия.");
            return false;
        }
        if (this.balance < amount) {
            console.log("Недостаточно средств для снятия.");
            return false;
        }
        this.balance -= amount;
        console.log(
            `Снятие со счета: ${this.iban} на ${amount}. Текущий баланс: ${this.balance}`
        );
        return true;
    };

    this.getBalance = function () {
        return this.balance;
    };
}

const account1 = new Account("DE12345678901234567890", "Jack Brown", 1000);
const account2 = new Account("DE09876543210987654321", "John Doe", 500);

const accounts = [account1, account2];

function displayAccounts(accounts) {
    if (!Array.isArray(accounts) || accounts.length === 0) {
        console.log("Нет доступных счетов.");
        return;
    }
    for (let account of accounts) {
        console.log(`Счет ${accounts.indexOf(account) + 1}`);
        console.log(`    IBAN: ${account.iban}`);
        console.log(`    Владелец: ${account.owner}`);
        console.log(`    Баланс: ${account.getBalance()}`);
    }
}
displayAccounts(accounts);

// b

function transfer(accountFrom, accountTo, amount) {
    if (accountFrom.withdraw(amount)) {
        if (accountTo.deposit(amount)) {
            console.log(`Перевод ${amount} со счета ${accountFrom.iban} на счет ${accountTo.iban} успешно выполнен.`);
            return true;
        }
    } else {
        console.log(`Ошибка при переводе: операция не выполнена.`);
    return false;
    }
}

console.log("--- Выполнение перевода ---");
transfer(account1, account2, 200); 
