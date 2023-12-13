window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        document.querySelector(".div").style.backgroundColor = "rgba(0,0,0,0.8)"
    }
    else{
        document.querySelector(".div").style.backgroundColor = "rgba(0,0,0,0)"
    }
});