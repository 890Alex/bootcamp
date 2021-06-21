function countdown(num){
    let id = setInterval(function(){
        if(num <= 0){
            clearInterval(id);
            console.log("DONE!")
        }
        else{
            console.log(num--);
        }
    }, 1000)
}

function randomGame(){
    let count = 0;
    let num;
    let id = setInterval(function(){
        ++count;
        num = Math.random();
        if(num > 0.75){
            clearInterval(id);
            console.log(`selected ${count} times`);
        }
    }, 1000)
}