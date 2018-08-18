function touch(){
  var userName = prompt("Ola! Qual o seu nome");
  if(userName){
    document.getElementById('rocking').src="img/irocksad.png";
    alert ("Prazer "+userName);
  }
}
