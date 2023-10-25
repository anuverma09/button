const btnE1=document.querySelector(".btn");
btnE1.addEventListener("mouseover",(e)=>{const x=(e.pageX-btnE1.offsetLeft);
    const y=(e.pageY-btnE1.offsetLeft);
    btnE1.style.setProperty("--xPos",x+"px")
    btnE1.style.setProperty("--yPos",y+"px")

})
