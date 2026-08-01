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
const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        btn.innerHTML = "☀️ Light Mode";
    }else{
        btn.innerHTML = "🌙 Dark Mode";
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});