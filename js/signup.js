// Varibles 
var userName = document.getElementById("user-name");
var signupEmail = document.getElementById("signup-email");
var signupPassword = document.getElementById("signup-password");
var signupBtn = document.getElementById("signup-btn");
var usersList = [];
//  Messages Functions  
function successMessage() {
    document.getElementById("signup-success").classList.replace("d-none","d-block");
}
function removeSuccessMessage(){
    document.getElementById("signup-success").classList.replace("d-block","d-none");
}
function emailExistMsg() {
    document.getElementById("email-exist").classList.replace("d-none","d-block");
}
function removeemailExistMsg() {
    document.getElementById("email-exist").classList.replace("d-block","d-none");
}
function requiredInputsMsg() {
    document.getElementById("required-input").classList.replace("d-none","d-block");
}
function removeRequiredInputsMsg() {
    document.getElementById("required-input").classList.replace("d-block", "d-none");
}



if (localStorage.getItem("users") !== null) {
    usersList = JSON.parse(localStorage.getItem("users"))

} 
if (localStorage.getItem("users")===null) {
    usersList = [];

}


function addUser() {
    let users = {
        userName: userName.value,
        userEmail: signupEmail.value,
        userPassword: signupPassword.value
    }
    usersList.push(users);
    localStorage.setItem("users",JSON.stringify(usersList));
}


function missingInput() {
    if(userName.value==='' ||signupEmail.value==='' ||signupPassword.value==='' ){
        return true
    } else {
        return false
    }
}
function isUserslistEmpty(){
    if (usersList.length === 0){
        return true
    }else {
        return false
    }
}
function isEmailExist() {
    for(let i = 0; i<usersList.length; i++){
        if(usersList[i].userEmail ===signupEmail.value){
            return true
        }else {
            return false
        }
    }
}

signupBtn.addEventListener("click",function(){
    removeRequiredInputsMsg();
    removeSuccessMessage();
    removeemailExistMsg();
    

    
    if (missingInput()){
        requiredInputsMsg();
    }else if (isUserslistEmpty()) {
        addUser();
        successMessage();
        
    }else if (isEmailExist()){
        emailExistMsg();
    }else {
        addUser();
        successMessage()
    }
})







// signupBtn.addEventListener("click", function () {
//   function addUser() {
//     var userInfo = {
//       name: userName.value,
//       email: signupEmail.value,
//       password: signupPassword.value,
//     };
//     usersList.push(userInfo);
//     localStorage.setItem("users", JSON.stringify(usersList));
//     clearForm();
//   }
//   function clearForm() {
//     userName.value = "";
//     signupEmail.value = "";
//     signupPassword.value = "";
//   }
// });
// function signupSuccessMsg() {
//   document
//     .getElementById("signup-success")
//     .classList.replace("d-none", "d-block");
// }

// function isLocalIsEmpty() {
//   if (localStorage.getItem("users") === null) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isEmailExist() {
//   var userCheckList = JSON.parse(localStorage.getItem("users"));

//   for (var i = 0; i < userCheckList.length; i++) {
//     if (userCheckList[i].name === signupEmail) {
//       return true;
//     } else {
//       false;
//     }
//   }
// }
