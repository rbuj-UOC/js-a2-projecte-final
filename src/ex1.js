function ingresosMayores(ingresos, valorDado) {
  for (let i = 0; i < ingresos.length; i++) {
    if (ingresos[i] > valorDado) {
      return `Por lo menos hay una semana (${i+1}) que tiene ingresos superiores (${ingresos[i]}) al valor dado (${valorDado}).`;
    }
  }
  return `No hay ninguna semana con ingresos superiores al valor dado (${valorDado}).`;
}

const ingresos = [7965,8714,8446,2612,7241,2872,2008,4857,4896,4986,5746,6676,5285,4427,5843,8285,8601,5245,7582,9616,3245,9253,6749,2109,9709,6883,4239,3458,1215,9451,3573,7977,5037,7242,7380,3856,3444,5911,5452,9878,5781,2218,7557,5580,6199,6821,2204,2305,8746,7637,8682,4409,4749];
const valorDado = 5000;
console.log(ingresosMayores(ingresos,valorDado));