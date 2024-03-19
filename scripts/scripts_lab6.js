function showDialog() {
    var answer;
    alert('Ласкаво просимо до діалогу!');
    answer = prompt('Як вас звати', '');
    if (answer) alert('Приємно познайомитися, ' + answer + '!');
    else alert('Ви не ввели своє імʼя');

    do {
    answer = confirm('Бажаєте продовжити діалог?');
    if (answer) alert("Чудово! Продовжимо.");
    else alert("Дякуємо за участь у діалозі. До побачення!");
}
while (answer)
}

function owner_of_site(first_name,second_name, position = 'студент другого курсу КПІ') {
    alert(first_name + ' ' + second_name + ' - ' + position);
}

function compareStrings(str1, str2) {
    if (str1 > str2) {
        alert('Перший рядок більший: ' + str1);
    } else if (str2 > str1) {
        alert('Другий рядок більший: ' + str2);
    } else {
        alert('Рядки рівні за вмістом.');
    }
}

function changeBackground() {
    document.body.style.background = '#ADD8E6'; //light blue
    setTimeout(function () {
        document.body.style.background = '#F8F8FF';
    }, 30000 );
}

// window.location.href = 'https://www.apple.com';

//lab7
function our_partners() {
    alert('Технопростір');
    alert('Епіцентр');
    alert('Орбіта');
}

function owner_site() {
    alert('Сергій Коцюбко');
}

function owner_contacts() {
    alert('099563210');
}

 function ownerEventHandler(event) {
    alert(`Спрацював обробник на елементі: ${event.currentTarget.id}`);
 }

 
document.addEventListener('DOMContentLoaded', function () {
    let list = document.querySelector('.class-ul');

    list.addEventListener('click', function (event) {
        let li = event.target.closest('li');
        if (!li) return;
        if (!list.contains(li)) return;
        hightligth(li);
    });

    function hightligth(element) {
        // Реалізація підсвічування елемента списку
        element.style.backgroundColor = 'lightblue';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    class Menu {
        constructor(element) {
            this._element = element;
            element.onclick = this.onClick.bind(this); 
        }

        home() {
            window.location.href = "index.html";
        }

        warranty_service() {
            window.location.href = "warranty_service.html";
        }

        delivery_payment() {
            window.location.href = "delivery_payment.html";
        }

        contacts() {
            window.location.href = "contacts.html";
        }

        onClick(event) {
            const action = event.target.dataset.action;
            if (action) {
                this[action]();
            }
        } 
    }

    new Menu(document.getElementById('menu'));
});

// lab8
document.addEventListener('DOMContentLoaded', () => {
    // Отримання посилання на елементи DOM
    const gameArea = document.getElementById('gameArea');
    const message = document.getElementById('message');
    const draggable = document.querySelector('.draggable');
    let isDragging = false;
    let offsetX, offsetY;

  let treasure = {
      // Випадкове розташування скарбу при завантаженні гри
      x: Math.floor(Math.random() * gameArea.clientWidth),
      y: Math.floor(Math.random() * gameArea.clientHeight)
    };
    // Обробник події миші при натисканні на перетяжний об'єкт
    draggable.addEventListener('mousedown', (event) => {
      isDragging = true;
      // Обчислення відстані між курсором миші та верхнім лівим кутом об'єкта
      offsetX = event.clientX - draggable.getBoundingClientRect().left;
      offsetY = event.clientY - draggable.getBoundingClientRect().top;
      draggable.style.backgroundColor = '#6789FA'; // Change color when grabbed
      
      // Перевірка наявності скарбу під час перетягування об'єкта
      checkForTreasure(event.clientX - gameArea.getBoundingClientRect().left, event.clientY - gameArea.getBoundingClientRect().top);
    });
    
    // Обробник події миші при відпусканні кнопки миші
    document.addEventListener('mouseup', () => {
      isDragging = false;
      draggable.style.backgroundColor = '#76A9FA'; // Restore initial color
    });

    // Обробник події руху миші в межах ігрової області
    gameArea.addEventListener('mousemove', (event) => {
      if (isDragging) {
        const gameAreaRect = gameArea.getBoundingClientRect();
        const x = event.clientX - offsetX - gameAreaRect.left;
        const y = event.clientY - offsetY - gameAreaRect.top;

        // Обмеження руху об'єкта в межах ігрової області
        const newLeft = Math.min(gameArea.clientWidth - draggable.offsetWidth, Math.max(0, x));
        const newTop = Math.min(gameArea.clientHeight - draggable.offsetHeight, Math.max(0, y));

        draggable.style.left = `${newLeft}px`;
        draggable.style.top = `${newTop}px`;

        checkForTreasure(newLeft, newTop);
      }
    });

    // Функція для перевірки відстані до скарбу
    function checkForTreasure(x, y) {
      const distance = Math.sqrt(Math.pow(x - treasure.x, 2) + Math.pow(y - treasure.y, 2));
      if (distance < 20) {
        message.innerHTML = "Вітаємо! Ви знайшли скарб!";
        gameArea.style.backgroundColor = 'gold';
        setTimeout(resetGame, 6000); 
      } else if (distance < 50) {
          message.innerHTML = "Дуже, дужееее гаряче!";
      } else if (distance < 100) {
        message.innerHTML = "Дуже гаряче!";
      } else if (distance < 180) {
        message.innerHTML = "Гаряче";
      } else if (distance < 260) {
        message.innerHTML = "Тепло";
      } else {
        message.innerHTML = "Холодно";
      }
    }
    
    // Функція для перезавантаження гри
    function resetGame() {
      draggable.style.left = '50%';
      draggable.style.top = '50%';
      treasure = {
        x: Math.floor(Math.random() * gameArea.clientWidth),
        y: Math.floor(Math.random() * gameArea.clientHeight)
      };
      message.innerHTML = "Перетягніть кружок, щоб розпочати знову";
      gameArea.style.backgroundColor = '#f0f0f0';
    }
  });
