let number = document.querySelector(".counting");
let a = 0;
function changeHtml(){

    a++;
    number.innerHTML = a;
    console.log(number);
}
function start(){
    clear = setInterval(changeHtml,1000);
}
function pause() {
 clearInterval(clear)
}
function stop(){
    a = 0;
 clearInterval(clear)
    number.innerHTML = a;
}