import $ from '../core';

// Техническая функция для работы с анимацией
$.prototype.animateOverTime = function (durection, callback, finaly) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / durection, 1);

        callback(complection);

        if (timeElapsed < durection) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof finaly === 'function') {
                finaly();
            }
        }
    }
    return _animateOverTime;
};
// Анимация FadeIn
$.prototype.fadeIn = function (durection, display, finaly) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const anim = this.animateOverTime(durection, _fadeIn, finaly);
        requestAnimationFrame(anim);
    }

    return this;
};
// Анимация FadeOut
$.prototype.fadeOut = function (durection, finaly) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const anim = this.animateOverTime(durection, _fadeOut, finaly);
        requestAnimationFrame(anim);
    }

    return this;
};
// Анимация FadeToggle
$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            this[i].style.display = display || 'block';

            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            };
    
            const ani = this.animateOverTime(dur, _fadeIn, fin);
            requestAnimationFrame(ani);
        } else {
            const _fadeOut = (complection) => {
                this[i].style.opacity = 1 - complection;
                if (complection === 1) {
                    this[i].style.display = 'none';
                }
            };
    
            const ani = this.animateOverTime(dur, _fadeOut, fin);
            requestAnimationFrame(ani);
        }
    }

    return this;
};