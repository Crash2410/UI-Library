import $ from '../core';

// Добавление атрибута
$.prototype.addAttribute = function (attributName, value) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].nodeType) {
            continue;
        }
        this[i].setAttribute(attributName, value);
    }
    return this;
};
// Удаление атрибута
$.prototype.removeAttribute = function (attributName, value) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].nodeType) {
            continue;
        }
        this[i].removeAttribute(attributName, value);
    }
    return this;
};
// Toggle
$.prototype.toggleAttribute = function (attributName, value) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].nodeType) {
            continue;
        }
        if (this[i].hasAttribute(attributName)) {
            this[i].removeAttribute(attributName, value);
        } else {
            this[i].setAttribute(attributName, value);
        }

    }
    return this;
};