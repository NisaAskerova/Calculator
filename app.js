var resualt=document.querySelector(".resualt")
function calc(symbol){
    resualt.innerHTML+=symbol
}
function calc2(){
    resualt.innerHTML=eval(resualt.innerHTML)
}
function clearAll(){
    resualt.innerHTML=""
}