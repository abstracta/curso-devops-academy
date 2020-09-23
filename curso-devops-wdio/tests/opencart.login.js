describe('Opencart', function () {
  it('Debería ingresar a Opencart', function () {
    browser.url('/');
    addStep(`Validar el logo de la página`);
    assert.equal($('#logo').isDisplayed(), true, 'Error: no se mostró el logo de Opencart');
  });
});
