var realNumber = "5612";


  const guess = function(number1) {
  let resultado = "";
  console.log(resultado)
  
  let real = realNumber.split("");
  let actual = number1.split("");
 /* actual.forEach(element => {
    //todo: si element esta en real entonces agregue una 0 o una x a resultado })*/
  for (var i = 0; i < real.length; i++){
    for (var j = 0; j < actual.length; j++){
      if(real[i] === actual[j]){
        
        if(i === j){
          resultado = resultado + 'x';
        }else{
          resultado =  resultado + 'o';
        }
      }
    }
  }
  return resultado;
}

/*const setNumber = function (number1) {
  realNumber = number1;
}*/

module.exports= guess;

//module.exports.setNumber = setNumber;

