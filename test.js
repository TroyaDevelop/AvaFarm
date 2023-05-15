// Получаем ссылку на элемент <canvas>
var canvas = document.getElementById('cns');
var ctx = canvas.getContext('2d');

// Переменные для отслеживания состояния кнопки
var isButtonPressed = false;

// Рисуем кнопку на холсте
function drawButton() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Рисуем рамку кнопки
  ctx.beginPath();
  ctx.rect(10, 10, 180, 80);
  ctx.stroke();

  // Заливаем кнопку цветом при нажатии
  if (isButtonPressed) {
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(10, 10, 180, 80);
  }

  // Рисуем текст кнопки
  ctx.font = '20px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('Нажми меня!', 40, 55);
}

// Обработчик события нажатия кнопки мыши
function handleMouseDown(event) {
  var mouseX = event.clientX - canvas.offsetLeft;
  var mouseY = event.clientY - canvas.offsetTop;

  // Проверяем, была ли кнопка нажата
  if (
    mouseX >= 10 &&
    mouseX <= 190 &&
    mouseY >= 10 &&
    mouseY <= 90
  ) {
    isButtonPressed = true;
    drawButton();
  }
}

// Обработчик события отпускания кнопки мыши
function handleMouseUp() {
  if (isButtonPressed) {
    isButtonPressed = false;
    drawButton();

    // Выполняем нужные действия при клике на кнопку
    alert('Кнопка нажата!');
  }
}

// Добавляем обработчики событий к элементу <canvas>
canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mouseup', handleMouseUp);

// Рисуем кнопку в первый раз
drawButton();