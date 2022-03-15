//Archivo que trabajará la lógica de la entidad CFDI.

const getValues = (jsonObj, values, node = '') =>{
    for(let obj in jsonObj) {
        if(jsonObj[obj] instanceof Object) {
            for(let item in jsonObj[obj]){
                if(jsonObj[obj][item] instanceof Object){
                    node = item;
                    getValues(jsonObj[obj][item],values,node);
                }
            }
            node = obj;
            getValues(jsonObj[obj], values, node);
            values[obj] = jsonObj[obj];
        } else if(Array.isArray(jsonObj[obj])){
            values[obj] = jsonObj[obj];
        };
    }
}

module.exports = {
    getValues
}