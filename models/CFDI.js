//Archivo que trabajará la lógica de la entidad CFDI.
let contador = 0;
const arrayData = [];
function getValues(jsonObj) {
  const data = [jsonObj]; //se convierte en un arreglo para poder empezar la iteracion
  const objNuevo = {};
  data.forEach((item) => {
    iterarObjeto(item);
  });
  return arrayData;
}

function iterarObjeto(objeto) {
  Object.keys(objeto).forEach(function (key,indice) {
    if (typeof objeto[key] === "object") {
      if(key !=='$'){
        if(key!== '0'){
          arrayData.push(key);
        }
      }
      if(!Array.isArray(objeto[key]) ){
        if(contador===1){
          arrayData.push(objeto[key]);
        }
        contador++;
      }else{
        contador = 0
      }
      iterarObjeto(objeto[key]);
    }
  });
  return true;
}

module.exports = {
  getValues,
};