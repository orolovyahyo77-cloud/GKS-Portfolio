document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("click",()=>{
        card.style.transform="scale(1.05)";

        setTimeout(()=>{
            card.style.transform="";
        },200);
    });
});
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});