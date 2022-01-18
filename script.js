let bg = document.getElementById('bg');
let fg = document.getElementById('fg');
let mg = document.getElementById('mg');
let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    // bg.style.top = value * 0.5 + 'px';
    // mg.style.top = -value * 0.15 + 'px';
    // fg.style.top = value * -1.1 + 'px';

    bg.style.top = value * 1 + 'px';
    mg.style.top = value * 0.55 + 'px';
    fg.style.top = value * -0.11 + 'px';
});
