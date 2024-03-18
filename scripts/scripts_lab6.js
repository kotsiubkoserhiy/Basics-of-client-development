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

