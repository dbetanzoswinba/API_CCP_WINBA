const xml2js = require('xml2js');
const parser = new xml2js.Parser({explicitArray : false, mergeAttrs : true});
exports.xmlValidation  = (req, res, next) => {
    let json = JSON.parse(JSON.stringify(req.body));
    let xmlBase64 = json.xml;
    let pdfBase64 = json.pdf;
    if(xmlBase64 != ""){
        buff = Buffer.from(xmlBase64, 'base64');
        xml = buff.toString('ascii');
        parser.parseString(xml, function(error, result) {
            if(error === null){
                jsonObj = JSON.parse(JSON.stringify(result))
                console.log({jsonObj});
                let values = {};
                getValues(jsonObj, values); 
                data = {
                    "resultadoValidacionWinba": {
                        
                        "tipoDocumentoEstado": true,
                        "tipoDocumentoResultado": "CFDI-CCP",
                        
                        "calculoRetencionesEstado": true,
                        "calculoRetencionesResultado": "Acorde con definición",
                        
                        "metodoPagoEstado": true,
                        "metodoPagoResultado":"Acorde con definición",
                        
                        "tipoPagoEstado": true,
                        "tipoPagoResultado": "Acorde con definicion",
                        
                        "proveedorEstado": true,
                        "provedorResultado":"Acorde con definición",
                        
                        "calculoRetencionesTransporteEstado": true,
                        "calculoRetencionesTransporteResultado":"Acorde con definición",
                        
                        "calculoRetencionesRESICOEstado": true,
                        "calculoRetencionesRESICOResultado":"Acorde con definición",
                        
                        "calculoTasladosExportacionEstado": true,
                        "calculoTasladosExportacionResultado":"Acorde con definición",
                        
                        "transportistaEstado": true,
                        "transportistaResultado":"Acorde con definición",
                        
                        "mercanciaEstado":true,
                        "mercanciaResultado":"Acorde con definicion",
                        
                        "origenEstado": true,
                        "origenResultado":'Acorde con definicion',
                        
                        "destinoEstado":true,
                        "destinoResultado":"Acorde con definicion"
                    }
                };
            }
            else {
                data = {
                    message: "Error de lectura de XML"
                  };
            }
        });
    }
    if(pdfBase64 != ""){
        //Nothing to do
    }
    res.status(200).send(data);

    next();
}
function getValues(jsonObj, values, node = '') {
    for(let obj in jsonObj) {
        if(jsonObj[obj] instanceof Object) {
            node = obj;
            getValues(jsonObj[obj], values, node);
        } else {
            if(node == 'cfdi:Comprobante' && obj == 'Version'){
                values[obj] = jsonObj[obj];
            }
            else if(node == 'cfdi:Comprobante' && obj == 'Fecha'){
                values[obj] = jsonObj[obj];
            }
            else if(node == 'cfdi:Comprobante' && obj == 'FormaPago'){
                values[obj] = jsonObj[obj];
            }
        };
    }
}
