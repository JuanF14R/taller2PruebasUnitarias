// Importaciones necesarias
import { TestBed } from "@angular/core/testing";
import { LoginService } from "./login.service";
//Para poder probar peticiones HTTP debo importar a providehttpClient
import { provideHttpClient } from "@angular/common/http";
//Tambien debemos importar herramientas que permitan simular interacciones con mis peticiones HTTP. 
import { provideHttpClientTesting, HttpTestingController } from "@angular/common/http/testing";


//Definir nuestro bloque de prueba
describe('Prueba loginService', () => {

    //Variables:

    let _loginService : LoginService;
    let _httpMock : HttpTestingController;//Mock = objeto o funcion falsa. -> Se crea para simular un comportamiento.
    const urlTest = "http://localhost:9000/iniciarSesion";
    const emailTest = 'juan@prueba.com';
    const passwordTest = '123';
    const tokenTest = 'fewafrgare21a23e';

    //Vamos con configuraciones globales. beforeEach y afterAll:

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LoginService,
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        });

        //injeccion de servicios:
        _loginService = TestBed.inject(LoginService);
        _httpMock = TestBed.inject(HttpTestingController);

    });
    
    //El afterAll se utiliza cuando testeamos peticiones 
    afterAll(() => {
        _httpMock.verify(); //Valida que despues de todas las pruebas no queden peticiones pendientes
    });
});