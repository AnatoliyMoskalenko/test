window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let infoTabContent = document.querySelectorAll('.info-tabcontent'),
        infoHeader = document.querySelector('.info-header'),
        btns = document.querySelectorAll('.info-header-tab');

    function hideTabContent(a) {
        for (let i = a; i < infoTabContent.length; i++) {
            infoTabContent[i].classList.remove('show');
            infoTabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (infoTabContent[b].classList.contains('hide')) {
            infoTabContent[b].classList.remove('hide');
            infoTabContent[b].classList.add('show');
        }
    }

    function hideAllTabs(c) {
        if (infoTabContent[c].classList.contains('show')) {
            hideTabContent(0);
        }
    }

    infoHeader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < btns.length; i++) {
                if (target === btns[i] && !infoTabContent[i].classList.contains('show')) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                } else {
                    hideAllTabs(i);
                }
            }
        }
    });

});