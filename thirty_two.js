//размер локал сторадж 5иб, в отличие от куки не улитают на сервер
/*
const myNumber = 1
localStorage.removeItem('number')//удаление ключа
console.log(localStorage.getItem('number'))
localStorage.setItem('number',myNumber)// для записи в localStorage используем метод setItem первое значени это его ключ(имя), аторой аргумент это значение
console.log(localStorage.getItem('number'))
localStorage.clear()// полная очистка
console.log(localStorage.getItem('number'))
*/
const object = {
    name: 'Ivan',
    age:22
}

//console.log(localStorage.setItem('person',JSON.stringify(object)))// если обьект поместить в  json stringify то на выходе будет строка и апликейшн будет выведен не обжект\обжект, о полная информация

const raw = localStorage.getItem('person')// в переменной raw нет доступа до прошлых ключей, и передается тип данных string
const per = JSON.parse(raw)// происходит обратное строчкованию преобразование, после которого можем менять элемент в обьекте
 
per.name = 'Sergey'
//console.log(raw)// и выводим мы уже не просто raw а per так как мы вней меянли Ивана на Сергея, если выводить raw то там будет старя инфа с Иваном
window.addEventListener('storage', event => {//слушатель окна, и он работае если в браузере открыть еще одно окно, в нем буду результаты запросов первого окна
    console.log(event)
    
})
