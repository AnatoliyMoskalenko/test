'use strict';

// let timerId = setTimeout(func, 1000);
// clearTimeout(timerId);
// let timerId = setInterval(func, 1000);
// // clearTimeout(timerId);
// //
// // function func(){
// //     console.log('Hello!');
// // }
// let timerId = setTimeout(function log() {
//     console.log('Hi');
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');


function myAnimation(){
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame(){
        if (pos == 300){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);



let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.matches('button.first')) {
        console.log('Hi');
    }
});