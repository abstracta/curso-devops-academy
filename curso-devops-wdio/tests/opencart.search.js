const { expect, assert } = require('chai');

describe('Opencart', function () {
  it('Debería ingresar a Opencart', function () {
    browser.url('/');
    addStep(`Validar el logo de la página`);
    assert.equal($('#logo').isDisplayed(), true, 'Error: no se mostró el logo de Opencart');
  });
  it('Debería buscar Apple Cinema', function () {
    let barraDeBusqueda = $('[name="search"]');
    barraDeBusqueda.setValue('Apple Cinema');
    barraDeBusqueda.keys('Enter');
    let linkProducto = $('*=Apple Cinema 30"');
    addStep(`Validar el nombre del artículo`);
    assert.equal(linkProducto.getText(), 'Apple Cinema 30"', 'Error: no se mostró el nombre de producto esperado');
  });
});
