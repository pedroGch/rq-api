class UbicacionesService {
  brazoIzq
  brazoDer
  pecho
  abdomen
  cabeza
  piernaIzq
  piernaDer

  constructor (brazoIzq, brazoDer, pecho, abdomen, piernaIzq, piernaDer, cabeza){
    this.brazoIzq  = brazoIzq 
    this.brazoDer  = brazoDer 
    this.pecho     = pecho
    this.abdomen   = abdomen
    this.piernaIzq = piernaIzq 
    this.piernaDer = piernaDer 
    this.cabeza    = cabeza
  }

  getBrazoIzq() {
    return this.brazoIzq;
  }



  getBrazoDer() {
    return this.brazoDer;
  }



  getPecho() {
    return this.pecho;
  }



  getAbdomen() {
    return this.abdomen;
  }



  getCabeza() {
    return this.cabeza;
  }



  getPiernaIzq() {
    return this.piernaIzq;
  }



  getPiernaDer() {
    return this.piernaDer;
  }

  retornarPuntosDeGolpe(){
    return {
      "cabeza_pa" : 0,
      "cabeza_pg" : this.getCabeza(),
      "brazo_derecho_pa" : 0,
      "brazo_derecho_pg" : this.getBrazoDer(),
      "brazo_izquierdo_pa" : 0,
      "brazo_izquierdo_pg" : this.getBrazoIzq(),
      "pierna_derecha_pa" : 0,
      "pierna_derecha_pg" : this.getPiernaDer(),
      "pierna_izquierda_pa" : 0,
      "pierna_izquierda_pg" : this.getPiernaIzq(),
      "pecho_pa" : 0,
      "pecho_pg" : this.getPecho(),
      "abdomen_pa" : 0,
      "abdomen_pg" :this.getAbdomen()
    }
  }

  introducirPuntos(brD, brI, pecho, abdomen, cabeza, piD, piI){
    this.brazoDer = brD
    this.brazoIzq = brI
    this.pecho = pecho
    this.abdomen = abdomen
    this.cabeza = cabeza
    this.piernaDer = piD
    this.piernaIzq = piI
  }

  asignarPuntos(valor){
    if (valor > 20) {
      valor = 20
    }

    switch (valor) {
      case 3:
        this.introducirPuntos(1, 1, 2, 1, 1, 1, 1)
        break;
      case  4:
        this.introducirPuntos(1, 1, 2, 2, 2, 2, 2)
        break;
      case 5:
        this.introducirPuntos(2, 2, 2, 2, 2, 2, 2)
        break;
      case 6:
        this.introducirPuntos(2, 2, 3, 2, 2, 2, 2)
        break;
      case 7:
        this.introducirPuntos(2, 2, 3, 3, 3, 3, 3)
        break;  
      case 8:
        this.introducirPuntos(2, 2, 4, 3, 3, 3, 3)
        break;
      case 9:
        this.introducirPuntos(3, 3, 4, 3, 3, 3, 3)
        break;
      case 10:
        this.introducirPuntos(3, 3, 4, 4, 4, 4, 4)
        break;
      case 11: case 12: 
        this.introducirPuntos(3, 3, 5, 4, 4, 4, 4)
        break;
      case 13: case 14: case 15:
        this.introducirPuntos(4, 4, 6, 5, 5, 5, 5)
        break;
      case 16: case 17: 
        this.introducirPuntos(4, 4, 7, 6, 6, 6, 6)
        break;  
      case 18:
        this.introducirPuntos(5, 5, 8, 6, 6, 6, 6)
        break;
      case 19: case 20:
        this.introducirPuntos(5, 5, 8, 7, 7, 7, 7)
        break;
      default:
        break;
    }
  }

}

module.exports = UbicacionesService;