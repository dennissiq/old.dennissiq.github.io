
// Triângulo

// Classificando pelos lados

var ldA, ldB, ldC, varClassificaLado, varAnguloA, varAnguloB, varAnguloC;
var varResultado = "Este é um triângulo " + varClassificaLado + " e seus ângulos são: " + varAnguloA + " no ponto A, " + varAnguloB + " no ponto B e " + varAnguloC + " no ponto C.";

function fClassificaLado() {
	//Os valores das variáveis dependem dos seus respectivos campos.
	ldA = parseFloat(document.triangulo.tLadoA.value);
	ldB = parseFloat(document.triangulo.tLadoB.value);
	ldC = parseFloat(document.triangulo.tLadoC.value);

	//Se houver algum campo vazio, mostrará que é preciso digitar todos os lados do triângulo.
	//Se o triângulo for considerado válido, ele poderá ser classificado como 'equilátero, isósceles ou escaleno'.
	//Se todos os lados do triângulo forem iguais, ele é um triângulo equilátero.
	//Se apenas dois lados do triângulo forem iguais, ele é um triângulo isósceles.
	//Se todos os lados do triângulo forem diferentes, ele é um triângulo escaleno.

	if (triangulo.tLadoA.value.length < 1 || triangulo.tLadoB.value.length < 1 || triangulo.tLadoC.value.length < 1){
		varClassificaLado = "Digite todos os lados do triângulo!";
	}
	else if (ldA < ldB + ldC && ldB < ldA + ldC && ldC < ldB + ldA) {
		//Classificação dos lados
		if (ldA == ldB && ldB == ldC) {
			varClassificaLado = "Este é um triângulo equilátero.";
		}
		else if (ldA == ldB && ldB != ldC || ldB == ldC && ldC != ldA || ldA == ldC && ldC != ldB) {
			varClassificaLado = "Este é um triângulo isósceles.";
		}
		else if (ldA != ldB && ldB != ldC && ldA != ldC) {
			varClassificaLado = "Este é um triângulo escaleno.";
		}
	}
	else {
		varClassificaLado = "Digite um triângulo válido!";
	}

	/////////////////////////////////

	if (triangulo.tLadoA.value.length < 1 || triangulo.tLadoB.value.length < 1 || triangulo.tLadoC.value.length < 1){
		varResultado = " ";
	}
	else if (ldA < ldB + ldC && ldB < ldA + ldC && ldC < ldB + ldA) {
		//Classificação dos ângulos
		//A

		if (ldA == ldB && ldB == ldC) {
			varAnguloA = "acutângulo";
			varAnguloB = "acutângulo";
			varAnguloC = "acutângulo";
		}

		else if (Math.pow(ldA, 2) == Math.pow(ldB, 2) + Math.pow(ldC, 2)) {
			varAnguloA = "retângulo";
			varAnguloB = "acutângulo";
			varAnguloC = "acutângulo";
		}
		else if (Math.pow(ldA, 2) >> Math.pow(ldB, 2) + Math.pow(ldC, 2)) {
			varAnguloA = "obtusângulo";
			varAnguloB = "acutângulo";
			varAnguloC = "acutângulo";
		}
		//B
		else if (Math.pow(ldB, 2) == Math.pow(ldA, 2) + Math.pow(ldC, 2)) {
			varAnguloA = "acutângulo";
			varAnguloB = "retângulo";
			varAnguloC = "acutângulo";
		}

		else if (Math.pow(ldB, 2) >> Math.pow(ldA, 2) + Math.pow(ldC, 2)) {
			varAnguloA = "acutângulo";
			varAnguloB = "obtusângulo";
			varAnguloC = "acutângulo";
		}
		//C
		else if (Math.pow(ldC, 2) == Math.pow(ldA, 2) + Math.pow(ldB, 2)) {
			varAnguloA = "acutângulo";
			varAnguloB = "acutângulo";
			varAnguloC = "retângulo";
		}

		else if (Math.pow(ldC, 2) >> Math.pow(ldA, 2) + Math.pow(ldB, 2)) {
			varAnguloA = "acutângulo";
			varAnguloB = "acutângulo";
			varAnguloC = "obtusângulo";
		}
		//
		else {
			varAnguloA = "acutângulo";
			varAnguloB = "acutângulo";
			varAnguloC = "acutângulo";
		}
		varResultado = " Sobre seus ângulos, podemos dizer que ele é " + varAnguloA + " no ponto A, " + varAnguloB + " no ponto B e " + varAnguloC + " no ponto C.";
	}
	else {
		varResultado = " ";
	}

	//Campo que será mostrado o resultado:
	triangulo.resultado.value = varClassificaLado + varResultado;
}
