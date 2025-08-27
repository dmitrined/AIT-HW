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
    const li = document.createElement('li');
    li.textContent = `Name: ${firstName} ${lastName}, Email: ${email}`;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.classList.add('delete-btn'); 
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(deleteBtn);
    userList.appendChild(li);
    form.reset();
});