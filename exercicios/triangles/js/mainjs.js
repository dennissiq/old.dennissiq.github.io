var l1,l2,l3, resultado;

function triangulo(){
  l1=parseInt(document.formTri.lado1.value);
  l2=parseInt(document.formTri.lado2.value);
  l3=parseInt(document.formTri.lado3.value);

  if (l1<l2+l3 && l2<l1+l3 && l3<l1+l2)
  {
    if (l1==l2 && l2==l3)
    {
      resultado='TRIÂNGULO EQUILÁTERO';

    }
    else {
      if (l1==l2 || l1==l3 || l3==l2)
      {
        resultado='TRIÂNGULO ISÓSCELES';
      }
      else
      {
        resultado='TRIÂNGULO ESCALENO';
      }
        }

  } else
    {
    resultado='NÃO É UM TRIÂNGULO';
    }

       document.formTri.resultado.value = resultado;
}
