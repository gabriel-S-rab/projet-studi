const mailInput = document.getElementById("exampleInputEmail1");
const passwordInput = document.getElementById("exampleInputPassword1")
const btnValidate = document.getElementById("btnValidate");

btnValidate.addEventListener("click", checkCredentials); 

function checkCredentials(){
    //ici , il faudra appeler l'API pour vérifier les credentials en BDD
  if(mailInput.value=="test@mail.com" && passwordInput.value== "123"){
    alert("vous étes connecté"); 
    // il faudra récupérer le vrai token 
    const token = "761938";
    setToken(token);
    //placer le token en cookie
    window.location.replace("/");
  }else {
    mailInput.classList.add('is-invalid'); 
    passwordInput.classList.add("is-invalid");
  }

}