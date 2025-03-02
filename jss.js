document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "Так и знал ❤️❤️❤️";
    document.getElementById('response').style.color = "#2ecc71";
});

document.getElementById('no').addEventListener('click', function() {
    moveButton(); // При клике на кнопку "Нет" она начнёт двигаться
});

function moveButton() {
    const noButton = document.getElementById('no');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Генерируем случайные координаты для кнопки внутри экрана
    const maxX = screenWidth - buttonWidth;
    const maxY = screenHeight - buttonHeight;

    // Добавляем немного "выхода" за пределы окна
    const offset = 10; // Это будет определять, насколько кнопка может выйти за рамки
    const randomX = Math.random() * (maxX + offset);
    const randomY = Math.random() * (maxY + offset);

    noButton.style.transition = 'none'; // Без анимации при перемещении

    // Делаем кнопку невидимой на момент перемещения
    noButton.style.opacity = 0;

    // Немного задерживаем, чтобы кнопку было видно
    setTimeout(() => {
        // Перемещаем кнопку
        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
        noButton.style.opacity = 1; // Восстанавливаем видимость
    }, 50);
}

