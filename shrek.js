/* 
Una legión de héroes de la cual sobresale Shrek está dispuesto a encarar diferentes tipos de misiones:
Liberar una princesa. Esta misión depende de la cantidad de trolls que se encuentran custodiando el refugio. La cantidad de trolls puede cambiar con el tiempo. Por ejemplo Fiona, custodiada por 4 trolls, un encargo que le hizo Lord Farquaad
También buscar un objeto mágico. Esta misión depende de la distancia que tiene que caminar para llegar al destino. Por ejemplo buscar la piedra filosofal, que está a 40 kilómetros de distancia, encomendada por el señor Gandalf.
Nos gustaría poder agregar más misiones a shrek a futuro.
Sabemos que una misión es difícil si la persona que encargó la misión comienza con G (en Javascript existe para los strings el mensaje charAt(posición) ) y una condición particular que siempre se cumple salvo para:
en el caso de liberar una princesa, si está custodiada por 4 ó 5 trolls
en el caso de buscar un objeto mágico, si está a más de 100 kilómetros de distancia
Queremos determinar
qué misiones difíciles le encargaron a Shrek
quiénes son los que solicitaron las misiones
el total de puntos de recompensa que obtendría Shrek si cumple las misiones, esto es el doble de la cantidad de trolls que custodian a una princesa, y 10 puntos si el objeto mágico está a 50 kilómetros de distancia o 5 en caso contrario.

*/

const misiones = [
    { nombre: "Liberar una princesa", solicitante: "Lord Farquaad", trolls: 4 },
    { nombre: "Buscar un objeto mágico", solicitante: "Señor Gandalf", distancia: 40 }
];

function esMisionDificil(mision) {
    if (mision.nombre.startsWith('L') && (mision.trolls === 4 || mision.trolls === 5)) {
        return true;
    } else if (mision.nombre.startsWith('B') && mision.distancia > 100) {
        return true;
    }
    return false;
}

function procesarMisiones(misiones) {
    let misionesDificiles = [];
    let solicitantes = [];
    let totalPuntosRecompensa = 0;

    for (let i = 0; i < misiones.length; i++) {
        let mision = misiones[i];
        if (esMisionDificil(mision)) {
            misionesDificiles.push(mision.nombre);
            solicitantes.push(mision.solicitante);
            if (mision.nombre.startsWith('L')) {
                totalPuntosRecompensa += mision.trolls * 2;
            } else {
                totalPuntosRecompensa += (mision.distancia === 50) ? 10 : 5;
            }
        }
    }

    return { misionesDificiles, solicitantes, totalPuntosRecompensa };
}

const resultados = procesarMisiones(misiones);
console.log("Misiones difíciles:", resultados.misionesDificiles);
console.log("Solicitantes:", resultados.solicitantes);
console.log("Total de puntos de recompensa:", resultados.totalPuntosRecompensa);

