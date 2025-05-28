//implémenter le javascript de ma page 

const inputNom = document.getElementById("nomInput");
const prenomInput = document.getElementById("prenomInput");
const exampleIntputEmail = document.getElementById("exampleInputEmail");
const exampleIntputPassword = document.getElementById("exampleInputPassword");
const confirmPassword = document.getElementById("exampleInputPassword1");
const validateInscription = document.getElementById("validateInscription");
validateInscription.disabled=true;

inputNom.addEventListener("keyup" ,validateForm);
prenomInput.addEventListener("keyup" , validateForm); 
exampleIntputEmail.addEventListener("keyup", validateForm); 
exampleIntputPassword.addEventListener("keyup", validateForm); 
confirmPassword.addEventListener("keyup", validateForm);

function validateForm(){
const nomOK = validateRequired(inputNom);
const prenomOK = validateRequired(prenomInput); 
const mailOK = validateMail(exampleIntputEmail);
const passwordOK = validatePassword(exampleIntputPassword);
const passwordConfirmOK = validateConfirmationPassword(confirmPassword,exampleIntputPassword)
if(nomOK && prenomOK && mailOK && passwordOK && passwordConfirmOK){
    validateInscription.disabled=false;
}else {
    validateInscription.disabled=true;
}
}

function validatePassword(input){
const passwordRegaex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
const passwordUser=input.value
if(passwordUser.match(passwordRegaex)){
    input.classList.add("is-valid"); 
    input.classList.remove("is-invalid");
    return true;
}else {
    input.classList.remove("is-valid"); 
    input.classList.add("is-invalid");
    return false;
}
}

function validateConfirmationPassword(confirmPassword,exampleInputPassword){
    if(confirmPassword.value==exampleInputPassword.value){
        confirmPassword.classList.add("is-valid");
        confirmPassword.classList.remove("is-invalid");
        return true; 
    }else {
        confirmPassword.classList.add("is-invalid"); 
        confirmPassword.classList.remove("is-valid");
        return false;
    }
}


function validateMail(input){
const emailRegaex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mailUser=input.value
if(mailUser.match(emailRegaex)){
    input.classList.add("is-valid"); 
    input.classList.remove("is-invalid");
    return true;
}else {
    input.classList.remove("is-valid"); 
    input.classList.add("is-invalid");
    return false;
}
}


function validateRequired(input){
    if(input.value !=""){
     input.classList.add('is-valid'); 
     input.classList.remove('is-invalid');
     return true;
    }else {
        input.classList.remove("is-valid"); 
        input.classList.add("is-invalid");
        return false;
    }
}