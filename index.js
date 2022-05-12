var display = document.createElement("h1");
display.setAttribute("class", "timer") ;
document.body.append(display);

function t1() {
    display.style.color = 'green' ;
    display.innerHTML = '10' ;
    setTimeout(t2, 1000);
}
function t2() {
    display.style.color = 'blue' ;
    display.innerHTML = '9' ;
    setTimeout(t3, 1000);
}
function t3() {
    display.style.color = 'orange' ;
    display.innerHTML = '8' ;
    setTimeout(t4, 1000);
}
function t4() {
    display.style.color = 'gray' ;
    display.innerHTML = '7' ;
    setTimeout(t5, 1000);
}
function t5() {
    display.style.color = 'maroon' ;
    display.innerHTML = '6' ;
    setTimeout(t6, 1000);
}
function t6() {
    display.style.color = 'pink' ;
    display.innerHTML = '5' ;
    setTimeout(t7, 1000);
}
function t7() {
    display.style.color = 'brown' ;
    display.innerHTML = '4' ;
    setTimeout(t8, 1000);
}
function t8() {
    display.style.color = 'red' ;
    display.innerHTML = '3' ;
    setTimeout(t9, 1000);
}
function t9() {
    display.style.color = 'violet' ;
    display.innerHTML = '2' ;
    setTimeout(t10, 1000);
}
function t10() {
    display.style.color = 'green' ;
    display.innerHTML = '1' ;
    setTimeout(independenceDay, 1000);
}

const independenceDay = () => { 
    display.style.color = 'skyblue' ;
    display.innerHTML = 'Happy Independence Day!'
};

t1();