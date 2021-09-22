//Este es el código del cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden; " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrada + "cm2");
console.groupEnd()
//Este es el código del rectangulo
console.group("Rectangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const BaseTriangulo = 4;
console.log(
    "Los lados del triángulo miden; " 
+ ladoTriangulo1 + "cm, " 
+ ladoTriangulo2 + "cm, " 
+ BaseTriangulo + "cm"
);

const altruraTriangulo = 5.5;
console.log("La altura del triángulo es: " + altruraTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + BaseTriangulo;
console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (BaseTriangulo * altruraTriangulo) / 2;
console.log("El area del triángulo es: " + areaTriangulo + "cm2");
console.groupEnd()

//Este es el código del círculo
console.group("Círculo");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI );

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del círculo es: " + perimetroCirculo + "cm");


//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del círculo es: " + areaCirculo + "cm2");
console.groupEnd();