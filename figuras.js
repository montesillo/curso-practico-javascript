//Este es el código del cuadrado
console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden; " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrada(lado) {
   return lado * lado;

}
//console.log("El area del cuadrado es: " + areaCuadrada + "cm2");
console.groupEnd()
//Este es el código del rectangulo
console.group("Rectangulo")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const BaseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden; " 
// + ladoTriangulo1 + "cm, " 
// + ladoTriangulo2 + "cm, " 
// + BaseTriangulo + "cm"
// );

// const altruraTriangulo = 5.5;
// console.log("La altura del triángulo es: " + altruraTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
   return lado1 + lado2 + base;

} 
//console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
   return (base * altura) / 2;

} 
// console.log("El area del triángulo es: " + areaTriangulo + "cm2");
 console.groupEnd()

//Este es el código del círculo
console.group("Círculo");

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
} 
//console.log("El diametro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
//console.log("PI es: " + PI );

//Circunferencia
function perimetroCirculo(radio){
    const diametro =  diametroCirculo(radio);
    return diametro * PI;
} 
//console.log("El perimetro del círculo es: " + perimetroCirculo + "cm");


//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
} 
//console.log("El area del círculo es: " + areaCirculo + "cm2");
console.groupEnd();

function calcularPerimetroCuadrado(){
    const lado = document.getElementById("InputCuadrado").value;
    const perimetro = perimetroCuadrado(lado);

    alert(perimetro)
}

function calcularAreaCuadrado(){
    const lado = document.getElementById("InputCuadrado").value;
    const area = areaCuadrada(lado);

    alert(area)
}