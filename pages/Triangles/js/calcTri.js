function fTri(){
  var varLado1 = parseInt(document.getElementById("cLado1").value);
  var varLado2 = parseInt(document.getElementById("cLado2").value);
  var varLado3 = parseInt(document.getElementById("cLado3").value);
  // document.getElementById("resultado").innerHTML = 
  var varRes;
  fTipoTri(varRes);

}

function fTipoTri(fTri){
  if (varLado1 != varLado2 && varLado1 != varLado3 && varLado2 =! varLado3) {
      varTipoTri = "Triângulo escaleno";

  } else if(varLado1 == varLado2 && varLado2 == varLado3){
      varTipoTri = "Triângulo equilátero";
  }
    else {
      varTipoTri = "Triângulo isóceles";
    }
    formTri.fTipoTri.value = varTipoTri;

}
