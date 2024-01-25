var logoutBtn = document.getElementById("logoutBtn");
var heading = document.getElementsByTagName("h1")[0];

heading.innerHTML = `
Welcome ${localStorage.getItem("user")}



`
logoutBtn.addEventListener("click",function(){
    localStorage.removeItem("user");
    window.open("index.html","_self")
})


