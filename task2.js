function add() 
{
    let a = prompt('Ввведите первое число', 'Первое число');
    let b = prompt('Ввведите второе число', 'Второе число');
    if (Number(a) && Number(b)) {
        alert(+a + +b);
    } else {
        alert('Не посчитаю, введи числа')
    }
}

function subtract()
{
    let a = prompt('Ввведите первое число', 'Первое число');
    let b = prompt('Ввведите второе число', 'Второе число');
    if (Number(a) && Number(b)) {
        alert(a - b);
    } else {
        alert('Не посчитаю, введи числа')
    }
}

function multiple()
{
    let a = prompt('Ввведите первое число', 'Первое число');
    let b = prompt('Ввведите второе число', 'Второе число');
    if (Number(a) && Number(b)) {
        alert(a * b);
    } else {
        alert('Не посчитаю, введи числа')
    }
}

function division()
{
    let a = prompt('Ввведите первое число', 'Первое число');
    let b = prompt('Ввведите второе число', 'Второе число');
    if (Number(a) && Number(b)) {
        alert(a / b);
    } else {
        alert('Не посчитаю, введи числа')
    }
}