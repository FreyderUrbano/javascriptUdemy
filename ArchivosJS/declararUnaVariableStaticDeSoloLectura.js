class Persona{

    static contadorPersona = 0;//inicializa en cero los objetos persona


    //PARA DECLARAR UNA VARIABLE ESTATICA Y QUE NO SEA MODIFICABLE SE HACE ASI
    //SE CREA UN METODO ESTATICO QUE REGRESA EL VALOR QUE SOLO SE PUEDE LEER
    static get MAX_OBJ(){//metodo get para recuperar informacion //MAX_OBJ simula una constante de maximo de objetos de tipo persona 
        return 5;//retorna el valor maximo que se pueden crear
    }



    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        if ( Persona.contadorPersona < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersona;
        }
        else{
            console.log('SE A SUPERADO EL MAXIMO DE PERSONAS PERMITIDAS');
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }
  }
  
  class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
  }
  
  let persona1 = new Persona('Juan', 'Perez');
  console.log( persona1.toString() );
  
  let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
  console.log( empleado1 );
  console.log( empleado1.nombreCompleto() );
  console.log( empleado1.toString());
  console.log( Persona.contadorPersona );
  
  let persona2 = new Persona('Karla', 'Perez');
  console.log(persona2);
  console.log( Persona.contadorPersona);

  console.log( Persona.MAX_OBJ);// hacemos uso del metodo creado MAX_OBJ

  let persona3 = new Persona('Norberto', 'Rosales');
  let persona4= new Persona('Pablo', 'Rosas');
  let persona5= new Persona('Pablo', 'Rosas');//se supera el nuemro declarado por MAX_OBJ


  console.log( persona4.toString() );//SE VERIFICA EL ID PARA CASA PERSONA CREADA