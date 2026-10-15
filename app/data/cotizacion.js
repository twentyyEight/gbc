const cotizacionHref = `mailto:clarence.gbcspa@gmail.com?subject=${encodeURIComponent("Solicitud de cotización — Grupo Buzos Comerciales")}&body=${encodeURIComponent([
    "Hola, me gustaría solicitar una cotización para el siguiente servicio:",
    "",
    "Nombre y empresa: ",
    "Teléfono de contacto: ",
    "Servicio requerido: ",
    "Lugar del trabajo: ",
    "Fecha estimada: ",
    "Descripción y requerimientos del proyecto: ",
    "",
    "Quedo atento/a a su respuesta. Muchas gracias.",
].join("\r\n"))}`;

export default cotizacionHref;
