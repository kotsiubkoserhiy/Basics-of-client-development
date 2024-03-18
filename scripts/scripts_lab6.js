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



