let numeroSecreto = 0; //generarNumeroSecreto();
//Esta variable es global, la otra de la funcion es solo de la funcion
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//El patseint declara que sea numero
  if (numeroDeUsuario === numeroSecreto) {
      asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      //El usuario no acerto
      if (numeroDeUsuario > numeroSecreto) {
          asignarTextoElemento('p', 'El numero secreto es menor');
      } else {
        asignarTextoElemento('p', 'El numero secreto es mayor');
      }
      intentos++;
      limpiarCaja();
  }
  //console.log(numeroDeUsuario === numeroSecreto);//Esto es un booleando, es un comparador de ver o fal. El == compara peras y manzanas y el === solo peras o manzanas
return;
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta incluido en la lista
     console.log(numeroGenerado);
     console.log(listaNumeroSorteados);
     //Ya sorteamos todos los numeros.?
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Numero Secreto.!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    ///Limpiar caja
    limpiarCaja();
    //Indicar msj de intervalo de numeros
    //Generar el num aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();