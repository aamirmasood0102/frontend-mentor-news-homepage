const nav = document.getElementById("nav");
const openMenuButton = document.getElementById("openMenuButton");
const closeMenuButton = document.getElementById("closeMenuButton");
closeMenuButton.addEventListener("click",()=>{
    nav.classList.add("hidden");
    closeMenuButton.classList.add("hidden");
    openMenuButton.classList.remove("hidden");
});
openMenuButton.addEventListener("click",()=>{
    nav.classList.remove("hidden");
    openMenuButton.classList.add("hidden");
    closeMenuButton.classList.remove("hidden");
});