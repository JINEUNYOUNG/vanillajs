const clock=document.querySelector("h2#clock");;

function getClock() {
    const date = new Date();
    clock.innerText=date.getHours()+":"+("00"+date.getMinutes()).slice(-2);
}
    
    getClock()
    setInterval(getClock,1000);