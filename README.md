Ответы на вопросы теста:

1) варианты объявления переменных:
var x;
let x; (используем сейчас,var x более устаревший вариант)

const CONST; (это объявление константы)

в вариантах выше переменным ничего не присвоено, присваивание будет таким:

let x;
x = 2 , либо сразу

let x = 2;

2) alert(`hello ${1}`) - вывыдет "hello 1"
alert(`hello ${'name'}`) - вывыдет "hello name"
alert(`hello ${name}`) - вывыдет "hello Ilia"

3) z будет равен 7

4) способы подключения JS:
а) в коде страницы в теге script на странице html, например (в хэде или в бади, лучше в перед закрывающим тегом бади):
        <script>alert('Hi')</script>

b) подключение через внешний файл
        <script src="путь к файлу скрипта.js"></script>

с) внутри тега вместе с событием, по наступлению которого он происходит, например:
        <button onClick="alert('Hi')"></button> 

можно также а браезере в консоли тестиьт скрипты, но они не сохранятся

5) разницы между typeof str typeof (str) - нет, typeof рабоает со скобаками и без, результата будет одинаковый

6) результат будет равен 28

7) пишу ответы через ;

10;
-1;
1;
2;
6;
9px;
$45;
2;
NaN;
infinity;
-9 5;
-14;
1;
NaN;
-2

8) чтобы исправить ошибки, нужно преобразование строк в числа, нужно явно указать, что перед нами числа, чтобы далее с ними производить математичские операции
        alert(+a + +b);
        alert(Number(a) + (Number(b))

9) ответ - 4
10) ответ - 5