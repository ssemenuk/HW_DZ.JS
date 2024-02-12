//1
var number1 = parseInt(prompt("Введіть перше число"));
var number2 = parseInt(prompt("Введіть друге число"));
var total = 0;
var counter = number1 ;

while (counter <= number2) {
    total += counter;
    counter++;
}

alert('Сума чисел у діапазоні ' + total);





// 2
var number3 = parseInt(prompt("Введіть перше число"));
var number4 = parseInt(prompt("Введіть друге число"));

do {
    if (number3  > number4) {
        number3  -= number4;
    } else {
        number4 -= number3;
    }
} while (number3  !== number4);

alert("Найбільший спільний дільник" + number3);





// 3
var number5 = parseInt(prompt("Введіть число"));

for (var i = 1; i <= number5; i++) {


    if (number5 % i === 0) {

        alert('Дільник числа ' + number5 + ': ' + i);
    }
}






//4
var number6 = parseInt(prompt("Введіть число"));
var number7 = 0;

while (number6 !== 0) {
    number7++;
    number6 = parseInt(number6 / 10);
}

alert("Кількість цифр у числі" + number7);





// 5
var Positiv = 0;
var Negativ = 0;
var nul = 0;
var par = 0;
var noteven = 0;
var index = 0;

do {
    var input = parseInt(prompt("Введіть число"));

    if (input > 0) {
        Positiv++;
    } else if (input < 0) {
        Negativ++;
    } else {
        nul++;
    }

    if (input % 2 === 0) {
        par++;
    } else {
        noteven++;
    }

    index++;
} while (i < 10);

alert('Додатні ' + Positiv + ', Відємні ' + Negativ + ', Нуль ' + nul + ', Парні ' + par + ', Не парні ' + noteven);


// 6
var calculator = true;

while (calculator) {
    var number8 = parseInt(prompt("Введіть перше число"));
    var number9 = parseInt(prompt("Введіть друге число"));
    var znak = prompt("виберіть якийсь з цих знаків +,-,*,/:");
    var output;

    switch (znak) {
        case "+":
            output = number8 + number9;
            break;
        case "-":
            output = number8 - number9;
            break;
        case "*":
            output = number8 * number9;
            break;
        case "/":
            output = number8 / number9;
            break;
        default:
            alert("ви вибрали знак не з списку!!!");
            continue;
    }

    alert('Результат ' + output);

    calculator = confirm("Повторити");
}

//7

let number10 = prompt("Введіть число");
let tomove = parseInt(prompt("На скільки цифр ви хочете посунути число?"));
let tomoveNumber = '';

for (let i = 0; i < number10.length; i++) {
  let nam1 = parseInt(number10[i]);
  let nam2 = nam1 + tomove;
  tomoveNumber += nam2 % 10; 
}

alert("Результат: " + shiftedNumber);


//8
var Day = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];

do {
    var day = prompt('День тижня ' + Day[0] + '. Бажаєте побачити назву наступного дня тижня?');
    if (day >= 0 && day < 5) {
        alert('Наступний день тижня ' + Day[parseInt(day) + 1]);
    } else if (day == 5) {
        alert('Наступний день тижня ' + Day[0]);
    } else {
        alert('ви вели не корекно  ведіть будьласка число від нуля до шести');
    }
} while (confirm('Хочете продовжити?'));
//9
for (var i = 2; i <= 9; i++) {

    for (var j = 1; j <= 10; j++) {

        var Output = i * j;
        alert(i + " * " + j + " = " + Output);
    }
}