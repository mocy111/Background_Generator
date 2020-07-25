let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let rgb = document.querySelector('h4');
let body = document.getElementById('gradient');

function gradient(){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value +")";

    rgb.textContent = body.style.background + ";" ;
}
color1.addEventListener('input', gradient);
color2.addEventListener('input', gradient);
