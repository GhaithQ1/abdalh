const log = document.getElementById("logins")
const namee = localStorage.getItem("name");
const pas = localStorage.getItem("pasoord");
const url = "./img/avatar.png";
if(namee != "" && namee != null){
   log.innerHTML =`<h3> ${namee} </h3>`
   log.innerHTML += `<img src ="${url}">`
   log.innerHTML += `<i class="fa fa-caret-down" aria-hidden="true"></i>`
   log.classList.add('name');
}

const project = document.getElementById("pro");
project.addEventListener("click" , ()=>{
   if(localStorage.length != 0){
      window.location = "./projects.html";
   }else{
      window.location = "./login.html";
   }
});





