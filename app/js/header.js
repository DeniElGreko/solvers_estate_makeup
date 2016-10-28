var header = {
    load: function () {
        var btnCourse = document.querySelector('.js-h_show-hide-course');
        var firstItem = document.querySelectorAll('.header__menu__course-list-item')[0];
        btnCourse.innerHTML = firstItem.innerText;
    },
    click: function () {
        this.showHideMenu('.js-h_show-hide-menu', '.js-h_hide-menu', 'show-active');
        this.showHideMenu('.js-h_show-hide-course', '.js-h_hide-course', 'show-active');
        this.courseChange();
    },
    courseChange: function () {
        if(!elem.target.classList.contains('js-course-item')) {
            return false;
        } else {
            var btn = document.querySelector('.js-h_show-hide-course');
            btn.innerHTML = elem.target.innerText;
        }
    },
    showHideMenu: function (btn, list, classActive) {
        var btnShow = document.querySelector(btn);
        var listShow = document.querySelector(list);
        if (elem.target == btnShow) {
            listShow.classList.toggle(classActive);
        } else  {
            listShow.classList.remove(classActive);
        }
    },
    scroll: function () {
        var header = document.querySelector('.js-header');
        if (window.pageYOffset > 100 && window.innerWidth >= 1220) {
            header.classList.add('on-scroll');
        } else {
            header.classList.remove('on-scroll');
        }
    }
};

