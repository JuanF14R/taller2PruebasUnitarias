//ESTA ES LA ESTRUTURA BASICA PARA HACER PRUEBAS EN ANGULAR
// En el Front no probamos servidores (Conexión base de datos, logica del backend, nada de eso; eso se prueba en el backend)
//Acá testeamos que el usuario este obteniendo la información que deberia; es decir QUE LA INTERFAZ FUNCIONE. 



//SIEMPRE se debe importar el TestBed, que nos va a permitir eocnfigurar el entorno de pruebas en angular
import { TestBed } from '@angular/core/testing';
//Importar el servicio o el archivo que va a probar.
import { EjemploService } from './ejemplo.service';

//Definir nuestro bloque de pruebas con el (describe('', () =>{})

describe('EjemploService', () => {

  //Dentro del bloque de preuba, lo primero es declarar las variables que vayamos a necesitar en nuestras pruebas
  let service: EjemploService;


  //Configuración global el beforeEach siempre hay que configurarlo.
  beforeEach(() => {
    //configurando el entorno de prueba.
    TestBed.configureTestingModule({
      //Acá va todo lo que necesite inyectar -> importaciones de los archivos que vaya a necesitar, (servicios, compnentes, auth, proveedores(proviteHTTPclient, etc)).
      providers: [EjemploService]
    });
    service = TestBed.inject(EjemploService);
  });

  //3. El tercer paso es crear los casos de prueba

  it('Debería haberse creado el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('Debería sumar dos números correctamente', () => {
    const resultado = service.suma(2,5);
    expect(resultado).toBe(7);
  });


});
