const UbicacionesService = require('./ubicaciones.service');
class PersonajeService {
  nombre;
  cultura;
  fue;
  con;
  des;
  per;
  asp;
  tam;
  int;
  localizaciones;

  constructor(nombre, cultura ,fue, con, des, per, asp, tam, int){
    this.nombre = nombre;
    this.cultura = cultura;
    this.fue = fue;
    this.con = con;
    this.des = des;
    this.per = per;
    this.asp = asp;
    this.tam = tam;
    this.int = int;
    this.localizaciones = new UbicacionesService(1,1,1,1,1,1,1);
  }

  getNombre (){
    return this.nombre ;
  }

  getFue (){
    return this.fue ;
  }

  getCon (){
    return this.con ;
  }

  getDes (){
    return this.des ;
  }

  getAsp (){
    return this.asp ;
  }

  getTam (){
    return this.tam ;
  }

  getInt (){
    return this.int ;
  }

  getPer (){
    return this.per ;
  }

  pMagicos(){
    return this.per;
  }

  pFatiga(){
    return this.fue + this.con;
  }     

  pGolpe(){
    return Math.ceil((this.tam + this.con) / 2);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
  getCultura(){
    return this.cultura;
  }
  
  getModDanio() {
    const suma =  this.fue + this.tam;
  
    if (suma >= 2 || suma <= 12){
      return (this.getRandomInt(1, 6))*-1;
    }
    if (suma >= 13 || suma <= 16){
      return (this.getRandomInt(1, 4))*-1;
    }
    if (suma >= 17 || suma <= 24){
      return 0;
    }
    if (suma >= 25 || suma <= 32){
      return (this.getRandomInt(1, 4));
    }
    if (suma >= 33 || suma <= 40){
      return (this.getRandomInt(1, 6));
    }
    if (suma >= 41 || suma <= 56){
      return (this.getRandomInt(2, 12));
    }
  }

  asignarPuntosGolpe() {
    if (this.pGolpe() > 3){
      this.localizaciones.asignarPuntos(this.pGolpe())
    } 
  }
  modAtaque(){
    return this.modManipulacion();
  }
  modDetenAtaque(){
    return this.modAgi();
  }
  modAgi(){
    return this.hallarPrimaria(this.getDes()) 
    + this.hallarSecundaria(this.getFue()) 
    + this.hallarNegativa(this.getTam())
  }
  
  modComunicacion(){
    return this.hallarPrimaria(this.int) 
    + this.hallarSecundaria(this.per) 
    + this.hallarSecundaria(this.asp) ;
  }
  
  modConocimiento(){
    return this.hallarPrimaria(this.int);
  }
  
  modHabMagicas(){
    return this.hallarPrimaria(this.int)
    + this.hallarPrimaria(this.per)
    + this.hallarSecundaria(this.des);
  }
  
  modManipulacion(){
    return this.hallarPrimaria(this.int)
    + this.hallarPrimaria(this.des)
    + this.hallarSecundaria(this.fue);
  }
  
  modPercepcion(){
    return this.hallarPrimaria(this.int)
    + this.hallarSecundaria(this.per)
    + this.hallarSecundaria(this.con);
  }
  
  modSigilo(){
    return this.hallarPrimaria(this.des)
    + this.hallarNegativa(this.tam)
    + this.hallarNegativa(this.per);
  }

  mrCc(){
    return this.mrDes() + this.mrTam();
  }

  mrConjuro (nivel_hechizo){
    return this.mrDes() + nivel_hechizo;
  }

  mrDes(){
    if(this.des >= 1 && this.des <= 9){
        return 4
    }    
    if (this.des >= 10 && this.des <= 15){
        return 3
    }
    if (this.des >= 16 && this.des <= 19){
        return 2
    } 
  }
  
  mrTam(){
    if (this.tam >= 1 && this.tam <= 9){
        return 3;
    }
    if (this.tam >= 10 && this.tam <= 15){
        return 2;
    }
    if (this.tam >= 16 && this.tam <= 19){
        return 1;
    }
    return 0;
  }

  hallarPrimaria (caracteristica) {
    let modificador = 0;

    if (caracteristica >= 10) {
        modificador += caracteristica - 10;
    } else {
        modificador -= 10 - caracteristica;
    }

    return modificador;
  }

  hallarSecundaria(caracteristica) {
    let modificador = 0;

    if (caracteristica > 10 && caracteristica <= 30) {
        modificador += Math.ceil((caracteristica - 10) / 2);
    } else if (caracteristica > 2 && caracteristica < 10) {
        modificador -= Math.ceil((10 - caracteristica) / 2);
    }
    return modificador;
  }

  hallarNegativa(caracteristica) {
    let modificador = 0;

    if (caracteristica > 10) {
        modificador -= (caracteristica - 10);
    } else if (caracteristica < 10) {
        modificador += (10 - caracteristica);
    }
    return modificador;
  }

  getAllStats(){
    this.asignarPuntosGolpe();
    return {
      "nombre" : this.getNombre(),
      "fue" : this.getFue(),
      "con" : this.getCon(),
      "tam" : this.getTam(),
      "int" : this.getInt(),
      "per" : this.getPer(),
      "asp" : this.getAsp(),
      "des" : this.getDes(),
      "puntosMagicos" : this.pMagicos(),
      "puntosFatiga" : this.pFatiga(),
      "puntosGolpe" : this.pGolpe(),
      "cultura" : this.getCultura(),
      "modDanio" : this.getModDanio(),
      "modAgi" : this.modAgi(),
      "modComunicacion" : this.modComunicacion(),
      "modManipulacion" : this.modManipulacion(),
      "modPerception" : this.modPercepcion(),
      "modSigilo" : this.modSigilo(),
      "modHabMagicas" : this.modHabMagicas(),
      "mrCC" : this.mrCc(),
      "mrConjuro" : this.mrConjuro(),
      "mrDes" : this.mrDes(),
      "mrTam" : this.mrTam(),
      "localizaciones" : {
        "cabeza"    : this.localizaciones.getCabeza(),
        "pecho"     : this.localizaciones.getPecho(),
        "abdomen"   : this.localizaciones.getAbdomen(),
        "brazoIzq"  : this.localizaciones.getBrazoIzq(),
        "brazoDer"  : this.localizaciones.getBrazoDer(),
        "piernaIzq" : this.localizaciones.getPiernaIzq(),
        "piernaDer" : this.localizaciones.getPiernaDer(),
      }
    };
  }

}

module.exports = PersonajeService;