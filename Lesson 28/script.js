let name = "Ivan",
    age = 30,
    mail = 'ex@mail.ru';

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес ${mail}`);

function makeArrey() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArrey();

arr[1]();
arr[3]();
arr[7]();

// Стрелочные функции

let fun = () => {
    console.log(this);
};

fun();

let obj = {
    number: 5,
    sayNumber: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let show = () => {
        console.log(this);
    };
    show();
});


function calcOrDouble(number, basis = 2) {
//function calcOrDouble(number, basis) { ES5
    //basis = basis || 2; ES5
    console.log(number*basis);
};
calcOrDouble(3, 5);
calcOrDouble(6);


// Классы

class Rectangle {
    constructor(height, width = 20){
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
const square2 = new Rectangle(10);

console.log(square.calcArea());
console.log(square2.calcArea());


// Разворот spread

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}

let numbers = [2, 5, 7];

log(...numbers);