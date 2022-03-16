function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/*Sukurti klasę Kibiras1. 
Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu().
 Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą. */

 class Kibiras1{

    static visiAkmenys = 0;

    static akmenuSkaiciusVisuoseKibiruose(){
        console.log(`bendras visuose kibiruose pririnktų akmenų kiekis yra ${this.visiAkmenys}`)
    }

    static bendrasAkmenuSkaicius(akmenuSkaicius){

    }

    constructor(){
        this.akmenuKiekis = 0;
    }   
    pridetiAkmeni(){
        this.akmenuKiekis++;
        this.constructor.visiAkmenys += 1;
    }
    pridetiDaugAkmenu(kiekis){
        this.akmenuKiekis += kiekis
        this.constructor.visiAkmenys += kiekis;
    }
    kiekPririnktaAkmenu(){
        console.log('Akmenu pririnkta i kibira',this.akmenuKiekis)
    }
}
const Kibiras = new Kibiras1();
const Kibiras2 = new Kibiras1();

Kibiras.pridetiAkmeni();
Kibiras.pridetiAkmeni();
Kibiras.pridetiAkmeni();
Kibiras.pridetiDaugAkmenu(rand(5,15));
Kibiras.kiekPririnktaAkmenu();
Kibiras2.pridetiAkmeni();
Kibiras2.pridetiAkmeni();
Kibiras2.pridetiAkmeni();
Kibiras2.pridetiDaugAkmenu(rand(5,15));
Kibiras2.kiekPririnktaAkmenu();

Kibiras1.akmenuSkaiciusVisuoseKibiruose();

/* Sukurti klasę Pinigine. 
Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai.
 Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. 
 Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. 
 Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą.
  Sukurti klasės objektą ir pademonstruoti veikimą.
  Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje. */


  class Pinigine{
      constructor(){
          this.popieriniaiPinigai = 0;
          this.metaliniaiPinigai = 0;
          this.metalas = 0;
          this.baksai = 0;
      }
      ideti(kiekis){
          if(kiekis < 2){
              this.metaliniaiPinigai += kiekis;
              this.metalas++
          }
          else{
              this.popieriniaiPinigai += kiekis;
              this.baksai++
          }
      }
      monetos(){
          console.log(`monetu skaicius ${this.metalas}`)
      }
      banknotai(){
        console.log(`banknotu skaicius ${this.baksai}`)
    }
      skaiciuoti(){
          console.log(`Visi pinigai ${this.popieriniaiPinigai} + ${this.metaliniaiPinigai}`)
      }
  }

  const pinigine2 = new Pinigine();
  
pinigine2.ideti(1);
pinigine2.ideti(2);
pinigine2.ideti(13);
pinigine2.ideti(0.50);
pinigine2.skaiciuoti()
pinigine2.monetos();
pinigine2.banknotai();

/* Sukurti klasę Troleibusas. 
Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0.
 Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). 
 O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių.
Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali. */
/* (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose.
 Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), 
 kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius).
 Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
 */

 class Troleibusas{

    static  visiKeleiviai = 0;
    
    static keleiviuSkaiciusVisuoseTroleibusuose(){
        console.log(`Bendras keleiviu skaicius troleibusuose yra ${this.visiKeleiviai}`);
    }

    static bendrasKeleiviuSkaicius(keleiviuSkaicius){
    this.visiKeleiviai += keleiviuSkaicius;
    }

    constructor(){
        this.keleiviuSkaicius = 0;
    }
    ilipa(keleiviuSkaicius){
       this.keleiviuSkaicius += keleiviuSkaicius;
       this.constructor.visiKeleiviai += keleiviuSkaicius;
    }
    islipa(keleiviuSkaicius){
        if(this.keleiviuSkaicius - keleiviuSkaicius >= 0){
            this.keleiviuSkaicius -= keleiviuSkaicius;
            this.constructor.visiKeleiviai -=  keleiviuSkaicius;
        }else{
            this.keleiviuSkaicius = 0;
            this.constructor.visiKeleiviai -= this.keleiviuSkaicius;
        }
    }
    vaziuoja(){
        console.log(`Troleibusu vaziuoja ${this.keleiviuSkaicius} zmoniu`)
    
    }
}

const t1 = new Troleibusas();
const t2 = new Troleibusas();
const t3 = new Troleibusas();

t1.ilipa(5);
t1.islipa(3);
t1.vaziuoja();

t2.ilipa(5);
t2.islipa(3);
t2.vaziuoja();

t3.ilipa(5);
t3.islipa(3);
t3.vaziuoja();

Troleibusas.bendrasKeleiviuSkaicius(7)
Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose()

/* Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu.
Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis.
Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį.
Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. 
Sukurti tris stiklinės objektus su tūriais: 200, 150, 100.
 Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.
 */
class Stikline {

    constructor(t){
        this.turis = t;
        this.kiekis = 0;
    }
    ipilti(kiekis){
        if(this.turis <= kiekis){
            this.kiekis = kiekis;
        }else{
            this.kiekis = this.turis;
        }
    }
    ispilti(){
        const k = this.kiekis;
        this.kiekis = 0;
        return (k)
        
    }
    stiklinejeYra(){
        console.log(kiekis);
    }
}

stikline200 = new Stikline(200)
stikline200.ipilti(500)
console.log(stikline200);

stikline150 = new Stikline(150)
stikline150.ipilti();

stikline100 = new Stikline(100)
stikline100.ipilti();

console.log(stikline200, stikline150, stikline100)
