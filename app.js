var name = prompt('Введите ваше имя')
var surname = prompt('Введите вашу фамилию')
var age = Number(prompt('Введите ваш возраст'))
if (age <=18) {
    alert('Привет, ' + name)
} else if (age <= 60) {
    alert('Здравствуйте, ' + surname + ' ' + name)
} else if (age <= 80) {
    alert('Добро пожаловать, ' + surname + ' ' + name)
} else {
    alert('Произошла ошибка')
}
