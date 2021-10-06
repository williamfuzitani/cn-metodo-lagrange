export function interpola(f, x) {
  const tamanho = f.length;
  let resultado = 0;

  for (let i = 0; i < tamanho; i++) {
    let numerador = 1;
    let denominador = 1;

    for (let j = 0; j < tamanho; j++) {
      if (j != i) {
        numerador = numerador * (x - f[j].x);
        denominador = denominador * (f[i].x - f[j].x);
      }
    }

    resultado = resultado + (numerador / denominador) * f[i].y;
  }

  return resultado;
}
