let numeroMaxPosibles = 100
let numeroSecreto = Math.floor (Math.random()*numeroMaxPosibles)+1;
let numeroUsuario = 0
let intentos = 1;
let palabraVeces = 'vez';
let maxIntentos = 6;
console.log(numeroSecreto);


while (numeroUsuario!=numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un n�mero entre 1 y ${numeroMaxPosibles} por favor:`));

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        //fue verdadera//
        alert(`Acertaste el numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1?'vez': 'veces'}`);
    }else {
        if (numeroUsuario > numeroSecreto){
            alert ('el numero secreto es menor')
        }else {
            alert('el numero secreto es mayor')
        }

        //intentos =  intentos + 1; 
        intentos++;
        
        if(intentos > maxIntentos){
            alert(`llegaste al numero maximo de ${maxIntentos} intentos`);
            break;
        }
        //no acertastes//
        //alert("Lo siento no completaste el juego")
    }
}
 