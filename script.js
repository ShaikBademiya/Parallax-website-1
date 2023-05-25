let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let val = window.scrollY;

    text.style.marginTop = val * 2.5 + "px";
    text.style.fontSize = (4 - val * 0.009) + "em";
    leaf.style.top = val * -1.5 + "px";
    leaf.style.left = val * 1.5 + "px";
    hill5.style.left = val * 2 + "px";
    hill4.style.left = val * -2 + "px";
    hill1.style.top = val * 1 + "px";
});