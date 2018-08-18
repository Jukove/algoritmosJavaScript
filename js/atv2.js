function maiorIdade() {
  var ano =document.getElementById("ano");
  console.log(ano.value);
  var idade = 2018 -ano.value;
  console.log(idade);
  var anoSistema = new Date();
  var anoSystema = anoSistema.getYear();
  console.log(anoSystema);
  idade = anoSistema - ano.value;
  console.log("Você possui:"+idade);
}
