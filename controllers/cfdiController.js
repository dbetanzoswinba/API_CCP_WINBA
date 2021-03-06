const xml2js = require('xml2js');
const { getValues } = require('../models/CFDI');

const parser = new xml2js.Parser();

exports.xmlValidation  = (req, res, next) => {
    let json = JSON.parse(JSON.stringify(req.body));
    let xmlBase64 = json.xml;
    let pdfBase64 = json.pdf;
    let data;
    if(xmlBase64 != ""){
        buff = Buffer.from(xmlBase64, 'base64');
        xml = buff.toString();
        parser.parseString(xml,function(error, result) {   
            if(error) res.json({ msg: error.message });
                jsonObj = JSON.parse(JSON.stringify(result))
<<<<<<< HEAD
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
=======
                data = getValues(jsonObj);
                console.log(data);
                data = [
                    {
                        "CODIGO": "CCP01",
                        "NOMBRE": "Tipo Documento",
                        "RESULTADO": "OK",
                        "COMENTARIO": "Acorde a definición"
                    },
                    {
                        "CODIGO": "CCP01",
                        "NOMBRE": "Cálculo de Retenciones",
                        "RESULTADO": "OK",
                        "COMENTARIO": "Acorde a definición"
                    },
                    {
                        "CODIGO": "CCP01",
                        "NOMBRE": "Método de Pago",
                        "RESULTADO": "OK",
                        "COMENTARIO": "Acorde a definición"
                    },
                    {
                        "CODIGO": "CCP01",
                        "NOMBRE": "Tipo Pago",
                        "RESULTADO": "OK",
                        "COMENTARIO": "Acorde a definición"
                    },
                    {
                        "CODIGO": "CCP01",
                        "NOMBRE": "Proveedor Estado",
                        "RESULTADO": "OK",
                        "COMENTARIO": "Acorde a definición"
                    },
                    {
                        "CODIGO": "CCP01",
                        "NOMBRE": "Cálculo Retenciones Transporte",
                        "RESULTADO": "OK",
                        "COMENTARIO": "Acorde a definición"
                    },
                    {
                        "CODIGO": "CCP01",
                        "NOMBRE": "Retenciones RESICO",
                        "RESULTADO": "OK",
                        "COMENTARIO": "Acorde a definición"
                    },
                    {
                        "CODIGO": "CCP01",
                        "NOMBRE": "Cálculo Traslado Exportación",
                        "RESULTADO": "ERROR",
                        "COMENTARIO": "Acorde a definición"
                    },
                    {
                        "CODIGO": "CCP01",
                        "NOMBRE": "Transportistas Estado",
                        "RESULTADO": "OK",
                        "COMENTARIO": "Acorde a definición"
                    },
                    {
                        "CODIGO": "CCP01",
                        "NOMBRE": "Mercancía",
                        "RESULTADO": "OK",
                        "COMENTARIO": "Acorde a definición"
                    },
                    {
                        "CODIGO": "CCP01",
                        "NOMBRE": "Ruta Origen",
                        "RESULTADO": "WARNING",
                        "COMENTARIO": "Acorde a definición"
                    },
                    {
                        "CODIGO": "CCP01",
                        "NOMBRE": "Ruta Destino",
                        "RESULTADO": "OK",
                        "COMENTARIO": "Acorde a definición"
>>>>>>> 40c96d3b795fdccc9b548afe924e0240ac2e01a9
                    }
                ]
        });
        res.json({ msg: data });
    }

    if(pdfBase64 != ""){
        //Nothing to do
    }
    next();
}

