var signinEmail = document.getElementById("sign-in-email");
var signinPassword = document.getElementById("sign-in-password");
var loginBtn = document.getElementById("login");

var usersList = [];




if(localStorage.getItem("users")!==null){
  usersList = JSON.parse(localStorage.getItem("users"));
}
if (localStorage.getItem("users")===null){
  usersList = []
}


function missingDataMasg(){
  document.getElementById("missing-data").classList.replace("d-none","d-block");
}
function removeMissingDataMasg() {
  document.getElementById("missing-data").classList.replace("d-block","d-none");
}
function incorrectInfoMsg(){
  document.getElementById("incorrect-info").classList.replace("d-none","d-block");
}
function removeIncorrectInfoMsg(){
  document.getElementById("incorrect-info").classList.replace("d-block","d-none");
}

function isUserListEmpty(){

  if (usersList.length ===0){
    return true;
  }else {
    return false;
  }
}

// function isValidUser(){
//   if (isUserListEmpty()===false){
//     for (var i= 0;i<usersList.length;i++){
//       if(signinEmail.value=== usersList[i].userEmail && signinPassword.value===usersList[i].userPassword){
//         return true

//       }else {
//         return false
//       }
//     }
//   }
// }




function getUser() {
  if (usersList.length!==0){
    for (let i=0;i<usersList.length;i++) {
      if (usersList[i].userEmail===signinEmail.value && usersList[i].userPassword===signinPassword.value){
        localStorage.setItem("user",usersList[i].userName) 
        
      }
      }
    }
  }



loginBtn.addEventListener("click",()=>{
  removeMissingDataMasg();
  removeIncorrectInfoMsg();
if (isUserListEmpty()){
  if(signinEmail.value === ''||signinPassword.value === ''){
    missingDataMasg();
  }else if (signinEmail.value !== ''||signinPassword.value !== '') {
    incorrectInfoMsg()
  }
  
}else{
  if(usersList.length!==0){
    for (let i =0;i<usersList.length;i++){
      if (usersList[i].userEmail===signinEmail.value &&usersList[i].userPassword===signinPassword.value){
        getUser();
    window.open("home.html","_self")
      } else if  (signinEmail.value === ''||signinPassword.value === ''){
        missingDataMasg();
      }else if (usersList[i].userEmail!==signinEmail.value || usersList[i].userPassword!==signinPassword.value){
        incorrectInfoMsg()}
      } 
      
    }

}

}


);


// document.getElementById("Check").addEventListener("click",function(){
//   if(usersList.length!==0){
//     for (let i =0;i<usersList.length;i++){
//       if (usersList[i].userEmail===signinEmail.value &&usersList[i].userPassword===signinPassword.value){
//         getUser();
//     window.open("home.html","_self")
//       } else if  (signinEmail.value === ''||signinPassword.value === ''){
//         missingDataMasg();
//       }else if (usersList[i].userEmail!==signinEmail.value || usersList[i].userPassword!==signinPassword.value){
//         incorrectInfoMsg()}
//       } 
      
//     }
//     }
    

// )

