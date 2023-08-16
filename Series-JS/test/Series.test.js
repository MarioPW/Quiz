const { Series } = require('../src/series.js').default;
// Importa la clase Series desde el archivo correspondiente

describe('Series Class', () => {
  const seriesInstance = new Series();
  const numParam = 10

  test('evenNumbers should receive a numeric value and return a list', () => {
    const result = seriesInstance.evenNumbers(numParam);
    expect(result).toEqual(expect.arrayContaining([])); // Verifica que result sea una lista
  });

  test('fibonacci should receive a numeric value and return a list', () => {
    const result = seriesInstance.fibonacci(numParam);
    expect(result).toEqual(expect.arrayContaining([])); // Verifica que result sea una lista
  });

  test('findPrimePairs should receive a numeric value and return a list', () => {

    const result = seriesInstance.findPrimePairs(numParam);
    expect(result).toEqual(expect.arrayContaining([])); // Verifica que result sea una lista
  });
  
  test('isPrime should receive a numeric value and return a boolean', () => {

    const result = seriesInstance.isPrime(numParam);
    expect(typeof result).toBe('boolean'); // Verifica que result sea un booleano
  });
});