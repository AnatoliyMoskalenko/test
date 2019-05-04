window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    function tabs(tabContentSelector, tabHeaderSelector, tabBtnsSelector){
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

});