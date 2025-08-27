const btn = document.getElementById('btn');
const form = document.querySelector('.form');
const userList = document.querySelector('.user-list');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const email = form.email.value;

    if (!firstName || !lastName || !email) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    // Создаем новый элемент списка (<li>)
    const li = document.createElement('li');
    li.textContent = `Name: ${firstName} ${lastName}, Email: ${email}`;
    // Создаем кнопку "Удалить"
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.classList.add('delete-btn'); 
    // Добавляем обработчик клика на кнопку "Удалить"
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    // Добавляем кнопку к элементу списка
    li.appendChild(deleteBtn);
    // Добавляем элемент списка в ul
    userList.appendChild(li);
    // Сбрасываем значения полей формы
    form.reset();
});