window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    function tabs(tabContentSelector, tabHeaderSelector, tabBtnsSelector) {
        let tabContent = document.querySelectorAll(tabContentSelector),
            tabHeader = document.querySelector(tabHeaderSelector),
            tabBtns = document.querySelectorAll(tabBtnsSelector);

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        function hideAllTabs(c) {
            if (tabContent[c].classList.contains('show')) {
                hideTabContent(0);
            }
        }

        tabHeader.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tabBtns.length; i++) {
                    if (target === tabBtns[i] && !tabContent[i].classList.contains('show')) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    } else {
                        hideAllTabs(i);
                    }
                }
            }
        });
    };

    tabs('.info-tabcontent', '.info-header', '.info-header-tab');

    //Timer


    function timer(dateString){

        let deadline = dateString;

        function getTimeRemaining(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / (1000 * 60 * 60)));

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function setClock(id, endtime) {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);


                function zeroBefore(time){
                    if (time <= 9){
                        time = '0' + time;
                    } else {
                        time = time;
                    }
                    return (time);
                }

                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = zeroBefore(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
        }

        setClock('timer', deadline);
    }

    timer('2019-05-08');
});