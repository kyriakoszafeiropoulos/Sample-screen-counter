var secretNumber = 0;


setInterval(function() {
    if(secretNumber <= 4800000000) {
        document.querySelector(".counter").innerHTML = secretNumber;
        secretNumber+=20000000;
    }
   
}, 10);



