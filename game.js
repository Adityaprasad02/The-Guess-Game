const no = Math.floor(Math.random()*100);
console.log(no);
let num = 10;
const select = document.querySelector("form");
select.addEventListener('submit',function(e){
    e.preventDefault()
    const value = parseInt(document.querySelector("#guess").value)
    const result = document.querySelector(".result");
    console.log(value);
    if(isNaN(value) || value === ''){
     result.innerHTML=`Please Enter Valid number !!`  
    }
    if(value>100 || value<=0){
        result.innerHTML=`Please Enter number in given range !!` 
        result.style.color = "teal"; 
        }
      
      if(value === no){
        result.style.color = "deeppink";
        result.innerHTML = "CONGRATULATIONS !!! YOU GOT IT "
      }
    num--;
    document.getElementById("sq").innerHTML = `${num}`;
   if(value>=1 && value<=100){
    if(num<=5){
    let r = (value - no);
    if(value>no){
        result.innerHTML = `HINT : You are ${r} steps ahead`;
        result.style.color = "red";
    }
    if(value<no){
        result.innerHTML = `HINT : You are ${-1*r} steps behind`;
        result.style.color = "red";
    }
   }
}
if(num<=0){
    document.querySelector(".rem").innerHTML="Attempts Exhausted";
}

})
select.addEventListener('reset',function(t){
    document.getElementById("sq").innerHTML = "10";
    num = 10;
    result.remove();
})
