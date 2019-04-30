'use strict';

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// console.log(box);
// console.log(btn);
// console.log(circle);
// console.log(heart);
// console.log(heart[2]);
// console.log(oneHeart);

box.style.backgroundColor = 'blue';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

for (let i = 0; i < btn.length; i++){
    btn[i].style.backgroundColor = 'green';
}

heart.forEach(function(item, i, hearts){
    item.style.backgroundColor = 'cyan';
});

let div = document.createElement('div'),
    text = document.createTextNode('Просто текст');

div.classList.add('black');

// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h1>Hello Tolyan!</h1>';
div.textContent = 'Hello Tolyan!';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);

console.log(div);



