import './lib/lib';
import $ from './lib/lib';

$('button').on('click', function () {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function () {
    console.log($(this).index());
});

$('.active').removeAttribute('data-modal', 'true').toggleAttribute('data-modal', 'true');

// console.log($('div').eq(2).finde('.more'));
console.log($('.mores').eq(0).siblings());