class HabilidadeSigiloService {
  deslizEnSilencio
  esconderse

  constructor (deslizEnSilencio, esconderse){
    this.deslizEnSilencio = deslizEnSilencio 
    this.esconderse = esconderse 

  }
  getDeslizEnSilencio() {
    return this.deslizEnSilencio;
  }
  getEsconderse() {
    return this.esconderse;
  }
}

module.exports = HabilidadeSigiloService;