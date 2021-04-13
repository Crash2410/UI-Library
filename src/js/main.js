import './lib/lib';

$('button').on('click', function(){
    $(this).toggleClass('active');
});

$('.active').removeAttribute('data-modal', 'true').toggleAttribute('data-modal', 'true');


console.log('Hello!');