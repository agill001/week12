const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton);

function clickHandler(){
    alert(" u clicked me");
    // clickMeButton.removeEventListener("click", clickHandler)
}  clickMeButton.addEventListener("click", clickHandler,{once:true})
   



function backgroundchanger(){
    // document.body.style.backgroundColor = "pink";
    document.body.classList.add("pink-bg")
}
clickMeButton.addEventListener("click",backgroundchanger)

function changetext(){
    if(clickMeButton.textContent===" click me!")
    {
        clickMeButton.textContent="clicked";
    }
    else if(clickMeButton.textContent==="clicked")
    {
        clickMeButton.textContent=" click me!";
    }
    

}
clickMeButton.addEventListener("click",changetext);

function updateImage(e){
    console.log(e);
    const image= document.querySelector("#shoppingcart")
    image.src ='images/263142.png';
    image.width=100;
    image.height=100;
    image.alt ="shopping cart icon"

}
clickMeButton.addEventListener("click",updateImage);

const buttonContainer = document.querySelector(".button-container");

function makegreen(e){
    if (e.target.tagName==="BUTTON")
    e.target.style.backgroundColor="green";
    

}
buttonContainer.addEventListener("mouseover",makegreen);

function changetextcolor(e){
//    if( e.target.textContent==="red"){
//     e.target.style.backgroundColor="red"
//    }
//     if( e.target.textContent==="blue"){
//     e.target.style.backgroundColor="blue"
//    }
//    if( e.target.textContent==="white"){
//     e.target.style.backgroundColor="white"
//    }
//    if( e.target.textContent==="yellow"){
//     e.target.style.backgroundColor="yellow"
//    }

   e.target.style.backgroundColor=e.target.textContent



}
buttonContainer.addEventListener("mouseover",changetextcolor);