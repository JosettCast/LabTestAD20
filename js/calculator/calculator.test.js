const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//Tests de división
test('la división de 25 entre 5 será igual a 5', () => {
  expect(calculator.divide(25, 5)).toBe(5);
});

test('la división de 9 entre 3 sera igual a 3', () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

//Tests de multiplicación
test('La multiplicación de 5 por 10 será 50', () => {
  expect(calculator.multiply(5, 10)).toBe(50);
});

test('La multiplicación de 3 por 5 será 15', () => {
  expect(calculator.multiply(3, 5)).toBe(15);
});

// TAREA 3 -> Prueba para división por cero
test('lanza un error cuando se intenta dividir por 0', () => {
  expect(() => calculator.divide(10, 0)).toThrow('No se puede dividir por cero');
});