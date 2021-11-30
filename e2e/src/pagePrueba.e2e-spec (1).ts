import {browser, element, by } from 'protractor';
 
describe('Mi Prueba', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");

    });
    //creación de prueba 1
    it("El page 1 se muestra por defecto", ()=>{
        expect(element(by.css(".titulo ion-label")).getText()).toContain("Inicio");
    }); 

    //creación de prueba 2
    it("El page 2  se muestra por defecto", ()=>{
        expect(element(by.css(".welcome ion-label")).getText()).toContain("Bienvenido");
    }); 
});


 















