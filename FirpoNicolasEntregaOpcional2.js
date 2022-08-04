console.log("\"Primera Pre Entrega Firpo\" pidiendo datos");

let personaje='';
const Personajes=[];
const Jugadores=[];

let poder=0;
let danio=0;
let nivel=0;
let vida=0;
let mana=0;
let armadura=0;
let resistencia=0;

class Personaje{
    constructor(nombre){
        //propiedades
        this.nombre=nombre;
        poder=this.poder=5;
        danio=this.danio=10;
        nivel=this.nivel=1;
        vida=this.vida=100;
        mana= this.mana=100;
        armadura=this.armadura=10;
        resistencia=this.resistencia=10;
    }


        clase(Class){
            this.class=Class;
                switch(Class){
                    case 'mago': 
                        this.vida=this.vida+(parseInt(this.vida*0.2));
                        this.mana=this.mana+(parseInt(this.mana*0.4));
                        this.armadura+=5;
                        this.resistencia+=15;
                        this.poder+=15;
                        this.danio+=5;
                        Jugadores.push(`${Class}`,nivel,poder,danio,vida,mana,armadura,resistencia);


                        break;
                    case 'paladin':
                        this.vida=this.vida+(parseInt(this.vida*0.4));
                        this.mana=this.mana+(parseInt(this.mana*0.2));
                        this.armadura+=10;
                        this.resistencia+=5;
                        this.poder+=5;
                        this.danio+=15;
                        Jugadores.push(`${Class}`,nivel,poder,danio,vida,mana,armadura,resistencia);

                        break;
                    case 'monje':
                        this.vida=this.vida+(parseInt(this.vida*0.3));
                        this.mana=this.mana+(parseInt(this.mana*0.3));
                        this.armadura+=10;
                        this.resistencia+=10;
                        this.poder+=10;
                        this.danio+=10;
                        Jugadores.push(`${Class}`,nivel,poder,danio,vida,mana,armadura,resistencia);

                        break;
                }
            }
        recibirDanio(valor){
            this.vida=valor;
            switch(this.class){
                case 'mago':
                this.vida=(this.vida-(valor-this.buff));
                return parseInt(this.vida);
                case 'paladin':
                this.vida=(this.vida-(valor-this.buff));
                return parseInt(this.vida);
                case 'monje':
                this.vida=(this.vida-(valor-this.buff));
                return parseInt(this.vida);
            }
            this.vida=this.vida-(valor-this.buff);
        
        }
        atacar(valor){
            this.attak=valor;
            switch(this.class){
                case 'mago':
                    this.attak=(valor+(this.danio*0.2));
                    return parseInt(this.attak);
                case 'paladin':
                    this.attak=(valor+(this.danio*0.5));
                    return parseInt(this.attak);
                case 'monje':
                    this.attak=(valor+(this.danio*0.3));
                    return parseInt(this.attak);
                default:
                    this.attak=(valor+(this.danio*0.3));
                    return parseInt(this.attak);
            }
        }
        lanzarHechizo(valor){
            this.spell=valor;
            switch(this.class){
                case 'mago':
                    this.spell=(valor+(this.poder*0.5));
                    return parseInt(this.spell);
                case 'paladin':
                    this.spell=(valor+(this.poder*0.2));
                    return parseInt(this.spel);
                case 'monje':
                    this.spell=(valor+(this.poder*0.3));
                    return parseInt(this.spell);
                default:
                    this.spell=(valor+(this.poder*0.3));
                    return parseInt(this.spell);
            }
        }
        recibirCura(valor){
            this.vida=(this.vida+valor)
        }
        resistenciaFisica(valor){
            this.buff=valor;
            switch(this.class){
                case 'mago':
                    this.buff=(valor-(this.armadura*0.2));
                    return (this.buff);
                case 'paladin':
                    this.buff=(valor-(this.armadura*0.5));
                    return (this.buff);
                case 'monje':
                    this.buff=(valor-(this.armadura*0.3));
                    return (this.buff);
                default:
                    this.buff=(valor-(this.armadura*0.3));
                    return (this.buff);
            }
            
        }
        resistenciaMagica(valor){
            this.buff=valor;
            switch(this.class){
                case 'mago':
                    this.buff=(valor-(this.resistencia*0.5));
                    return parseInt(this.buff2);
                case 'paladin':
                    this.buff=(valor-(this.resistencia*0.2));
                    return parseInt(this.buff2);
                case 'monje':
                    this.buff=(valor-(this.resistencia*0.3));
                    return parseInt(this.buff2);
                default:
                    this.buff=(valor-(this.resistencia*0.3));
                    return parseInt(this.buff2);
            }
        }
        lanzarCura(valor){
            this.heal=valor;
            switch(this.class){
                case 'mago':
                    this.heal=(valor+(this.poder*0.2));
                    return parseInt(this.heal);
                case 'paladin':
                    this.heal=(valor+(this.poder*0.3));
                    return parseInt(this.heal);
                case 'monje':
                    this.heal=(valor+(this.poder*0.5));
                    return parseInt(this.heal);
                default:
                    this.heal=(valor+(this.poder*0.3));
                    return parseInt(this.heal);
            }
        }
        subirNivel(){
            this.nivel++;
            if(this.nivel>=4){
                switch(this.class){
                    case 'mago':
                        this.vida=this.vida+(parseInt(this.vida*0.2));
                        this.mana=this.mana+(parseInt(this.mana*0.4));
                        this.armadura+=5;
                        this.resistencia+=15;
                        this.poder+=15;
                        this.danio+=5;
              

                        break;
                    case 'paladin':
                        this.vida=this.vida+(parseInt(this.vida*0.4));
                        this.mana=this.mana+(parseInt(this.mana*0.2));
                        this.armadura+=15;
                        this.resistencia+=5;
                        this.poder+=5;
                        this.danio+=15;
                       
                        break;
                    case 'monje':
                        this.vida=this.vida+(parseInt(this.vida*0.3));
                        this.mana=this.mana+(parseInt(this.mana*0.3));
                        this.armadura+=10;
                        this.resistencia+=10;
                        this.poder+=10;
                        this.danio+=10;
                       
                        break;
                    default: 
                        this.vida=this.vida+(parseInt(this.vida*0.3));
                        this.mana=this.mana+(parseInt(this.mana*0.3));
                        this.armadura+=10;
                        this.resistencia+=10;
                        this.poder+=10;
                        this.danio+=10;
                       
                }
            }  else{
                    this.vida=this.vida+(parseInt(this.vida*0.2));
                    this.mana=this.mana+(parseInt(this.mana*0.2));
                    this.armadura+=5;
                    this.resistencia+=5;
                    this.poder+=5;
                    this.danio+=5;
                    
                }
        }


};



function creacionPersonaje(i){
    personaje=`${i}`;
    Personajes.push(personaje=new Personaje(i));
    Jugadores.push(personaje);
    function elegirClase() {
        switch(prompt('Elegir Clase')){
            case 'mago': alert('Su clase sera mago');
            personaje.clase('mago');
            break;
            case 'paladin': alert('Su clase sera paladin');
            personaje.clase('paladin');
            break;
            case 'monje': alert('Su clase sera monje');
            personaje.clase('monje');
            break;
            default:
            break;
        }
        //document.write(`<li>Elegir Nombre<input type="text"/><button>ACEPTAR</button></li>`);
        //document.write(`<li>Elegir clase <button>ACEPTAR</button></li>`);
        //document.write(`<button>mago</button>`);
        //document.write(`<button>paladin</button>`);
        //document.write(`<button>monje</button>`);
        //personaje.clase(`<button></button>`)

    }
    elegirClase()
    return personaje=new Personaje(i)
};


const Jugador1= creacionPersonaje(prompt('Elegir Nombre'));
console.log(Jugador1);
const Jugador2= creacionPersonaje(prompt('Elegir Nombre'));
console.log(Jugador2);
console.log(Personajes);
console.log(Jugadores);


Jugador1.subirNivel();
console.log(Jugador1);
Jugador1.subirNivel();
console.log(Jugador1);
Jugador1.subirNivel();
console.log(Jugador1);
Jugador1.recibirDanio(parseInt(Jugador1.resistenciaFisica(parseInt(Jugador2.atacar(100)))));
console.log(Jugador1);
Jugador2.recibirCura(Jugador1.lanzarCura(10));
console.log(Jugador2);
console.log(Jugador1);
console.log(Jugador2);
console.log(Jugadores);



let nickName= document.getElementById('nombre');