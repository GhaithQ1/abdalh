const log = document.getElementById("logins")
const namee = localStorage.getItem("name");
const pas = localStorage.getItem("pasoord");
if(namee != "" && namee != null){
   log.innerHTML =`<h3> ${namee} </h3>`
   log.innerHTML += `<img src ="${"./img/avatar.png"}">`
   log.innerHTML += `<i class="fa fa-caret-down" aria-hidden="true"></i>`;
   log.innerHTML += `<buttun class="logout">LogOut</buttun>`;
   log.classList.add('name');
   const logout =document.querySelector(".logout");
   logout.addEventListener("click" ,()=>{
   localStorage.clear();
   window.location = "./index.html"
});
}

const project = document.getElementById("pro");
project.addEventListener("click" , (eo)=>{
   if(localStorage.length != 0){
      window.location = "./projects.html";
   }else{
      window.location = "./login.html";
   }
});





