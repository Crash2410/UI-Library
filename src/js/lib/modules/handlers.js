import $ from '../core';

// Назначение обработчика событий
$.prototype.on = function (eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
};
// Удаление обработчика события
$.prototype.off = function (eventName, callback) {
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }
    return this;
};
// Событие клика
$.prototype.click = function (handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
    }
    return this;
};