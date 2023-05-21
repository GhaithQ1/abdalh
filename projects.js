const create =  document.getElementById("crete");
const filters = document.querySelector(".filter");
const foryou = document.querySelector(".create-items");
const cancel = document.getElementById("cancel");



create.addEventListener("click", ()=>{
    filters.classList.add("crete-project");
    foryou.classList.add("block");
    
});
cancel.addEventListener("click",()=>{
    filters.classList.remove("crete-project");
    foryou.classList.remove("block");
})