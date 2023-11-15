const myNav = document.querySelector('.box');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const answer = document.querySelector('#p1');
const head = document.querySelector('h4');




myNav.addEventListener('click', () =>{
    myNav.style.borderRadius = "240px";
    myNav.style.backgroundColor = "yellow";


});

btn1.addEventListener('click', () => {
answer.style.visibility = "visible";
answer.style.background = "red";
document.getElementById('p1').innerHTML = "La mauvaise reponse est Lagos";
head.style.color = "black";
});


btn2.addEventListener('click', () => {
    answer.style.visibility = "visible";
    answer.style.background = "green";   
    document.getElementById('p1').innerHTML = "La bonne reponse est Abuja"
    head.style.color = "black";
});