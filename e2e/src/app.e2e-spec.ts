import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  //configuración
  beforeEach(() => {
    page = new AppPage();  //instanciando una clase, objeto simulado mock object
  });


  
  //prueba 1 de un proyecto
  it('should be blank', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });

  //prueba 2 de un proyecto
  it('should be blank', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });

  
});
