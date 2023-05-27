
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");


sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
  
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });


const but = document.getElementById("butt");
but.addEventListener("click",(e)=>{
  e.preventDefault();
  const namee = document.getElementById("name").value;
  const pas = document.getElementById("pas").value;
  if(namee != '' && pas != ''){
    localStorage.setItem("name",namee);
    localStorage.setItem("pasoord",pas);
  }
  if(localStorage.length != 0){
    console.log("true")
    window.location = "./projects.html"
  }else{
    console.log("false")
  }
});






