

//////////////////////////////
//////////////SCROL///////////
//////////////////////////////





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



//////////////////////////////
//////////////DATA////////////
//////////////////////////////

let deyisen = 3;
function samir(){

fetch('http://localhost:3000/card')
.then(res=>res.json())
.then(data=>{
    data.slice(deyisen - 3,deyisen).forEach(card => {
        console.log(data);
        document.querySelector('.five').innerHTML+=`
        <div class="basic">
                <i class="bi bi-heart" onclick="addFav(${card.id})"></i>
                <div><img src="${card.image}" alt=""></div>
                <h2>${card.link} <i id=info class="bi bi-info-circle"></i></h2>
                <p>${card.text}</p>
                    <div class="section16"><button onclick="deleteBtn(${card.id})"><i class="bi bi-trash-fill"></i> Delete</button><button><i class="bi bi-arrow-repeat"></i> Update</button></div>
            </div>
        `
    });
})}
samir()
document.querySelector(".load").addEventListener("click",()=> {
    deyisen+=3;
    samir()
})


//////////////////////////////
//////////////MODAL///////////
//////////////////////////////


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



//////////////////////////////
//////////////DELETE//////////
//////////////////////////////



function deleteBtn(id){
    axios.delete(`http://localhost:3000/card/${id}`)
    window.location.reload();
}


//////////////////////////////
//////////////FAVORITE////////
//////////////////////////////


function addFav(id){
    axios.get('http://localhost:3000/card/'+id)
    .then(res=>{
        console.log(res.data);
        axios.post('http://localhost:3000/favorites',res.data)
    })
}
