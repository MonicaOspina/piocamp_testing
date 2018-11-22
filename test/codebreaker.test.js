// Import test
let test = require('assert');
var guess = require('../codebreaker');

describe( 'Test pass', function(){
    it('is true', function(){
       test.ok(true, true)
    })
  })

describe('Codebreaker Test', function () {
    /* beforeEach(function () {
      codebreaker.setNumber('5612')
    }) */
    it('Debe retornar un o', function(){
        let result = guess("3289")
        test.equal(result, "o", "Tiene  un numero acertado en la posición incorrecta");
    })
    it('Debe retornar un xo', function(){
        let result =guess("5273")
        test.equal(result, "xo", "Tiene un numero acertado en la posición incorrecta y un numero acertado en la posición correcta");
    })
    it('Debe retornar un oo', function(){
        let result = guess("1467")
        test.equal(result, "oo", "Tiene dos numeros acertados en la posición incorrecta ");
    })
    it('Debe retornar un xo', function(){
        let result = guess("1637")
        test.equal(result, "xo", "Tiene un numero acertado en la posición incorrecta y un numero acertado en la posición correcta ");
    })
    it('Debe retornar un x', function(){
        let result = guess("3418")
        test.equal(result, "x", "Tiene un numero acertado en la posición correcta ");
    })
    it('Debe retornar un xx', function(){
        let result = guess("5719")
        test.equal(result, "xx", "Tiene dos numeros acertados en la posición correcta ");
    })
    it('Debe retornar un xxo', function(){
        let result = guess("2613")
        test.equal(result, "xxo", "Tiene un numeros acertados en la posición incorrecta y dos numeros acertados en la posición correcta ");
    })
    it('Debe retornar un xoo', function(){
        let result = guess("2671")
        test.equal(result, "xoo", "Tiene dos numeros acertados en la posición incorrecta y un numero acertado en la posición correcta");
    })
    it('Debe retornar un oxox', function(){
        let result = guess("1652")
        test.equal(result, "oxox", "Tiene dos numeros acertados en la posición incorrecta y dos numeros acertados en la posición correcta ");
    })
    it('Debe retornar un xoox', function(){
        let result = guess("5162")
        test.equal(result, "xoox", "Tiene dos numeros acertados en la posición incorrecta y dos numeros acertados en la posición correcta");
    })
    it('Debe retornar un xxxx', function(){
        let result = guess("5612")
        test.equal(result, "xxxx", "Tiene 4 numeros acertados en la posición correcta ");
    })
})