const nokia = {
  aplciaciones: [],
  aplciacionesQueOcupanMuchaMemoria: function () {
    return this.aplciaciones.filter((unaAplicacion) =>
      unaAplicacion.esPesada()
    );
  },
};
class Aplicacion {
  memoriaBase;

  constructor(cantidadDeMemoria) {
    this.memoriaBase = cantidadDeMemoria;
  }

  esPesada() {
    return this.cuantaMemoriaOcupa() > 10;
  }
  cuantaMemoriaOcupa() {
    return this.memoriaBase + this.memoriaExtra();
  }
  consumoDeBateria() {
    return 2;
  }
  memoriaExtra() {
    return 0;
  }
}

class AplicacionMensajeria extends Aplicacion {
  cantidadDeConversaciones = 0;
  constructor() {
    super(40);
  }
  memoriaExtra() {
    // 5 Mb por cada conversación en progreso
    return 5 * this.cantidadDeConversaciones;
  }
  agregarConversacion() {
    this.cantidadDeConversaciones = this.cantidadDeConversaciones + 1;
  }
  // Gasta 1% de batería por cada conversación en progreso.
  consumoDeBateria() {
    return this.cantidadDeConversaciones;
  }
}

class AplicacionDeMusica extends Aplicacion {
  listaDeCanciones = [];
  constructor() {
    super(2);
  }

  // el peso en Mb de cada canción en la lista de reproducción aunque está optimizado para ocupar 50Mb máximo
  memoriaExtra() {
    return Math.min(
      50,
      this.listaDeCanciones.reduce((cancion) => cancion.peso, 0)
    );
  }
  // Gasta 1% de batería por cada minuto de duración de los temas de la lista de canciones
  consumoDeBateria() {
    return this.listaDeCanciones.reduce((cancion) => cancion.duracion, 0);
  }
}

class Cancion {
  peso;
  duracion;
  constructor(unPeso, unaDuracion) {
    this.peso = unPeso;
    this.duracion = unaDuracion;
  }
}
