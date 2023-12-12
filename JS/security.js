window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        document.querySelector(".div").style.backgroundColor = "rgba(0,0,0,0.8)"
    }
    else{
        document.querySelector(".div").style.backgroundColor = "rgba(0,0,0,0)"
    }
});
// document.getElementById("#info").addEventListener("click", function() {
//     let infoURL = "";
//     window.open(infoURL, "_blank");
// });


/////////////DATA/////////
let deyisen = 3;
function samir(){

fetch('http://localhost:3000/card')
.then(res=>res.json())
.then(data=>{
    data.slice(deyisen - 3,deyisen).forEach(card => {
        console.log(data);
        document.querySelector('.five').innerHTML+=`
        <div class="basic">
                <i class="bi bi-heart"></i>
                <div><img src="${card.image}" alt=""></div>
                <h2>${card.link} <i id=info class="bi bi-info-circle"></i></h2>
                <p>${card.text}</p>
                    <div class="section16"><h1><i class="bi bi-trash-fill"></i> Delete</h1><h1><i class="bi bi-arrow-repeat"></i> Update</h1></div>
            </div>
        `
    });
})}
samir()
document.querySelector(".load").addEventListener("click",()=> {
    deyisen+=3;
    samir()
})

////////modal//////
const menu  = document.querySelector(".bi-list-columns")
const ul = document.querySelector("nav ul")

menu.addEventListener("click",()=>{
    if(ul.style.display === "none")[
        ul.style.display = "flex"
    ]
    else{
        ul.style.display = "none"

    }
})

