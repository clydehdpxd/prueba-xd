function mostrarEstrategia() {
    const textoBox = document.getElementById("estrategia-texto");
    
    if (textoBox.style.display === "block") {
        textoBox.style.display = "none";
    } else {
        textoBox.style.display = "block";
        textoBox.innerHTML = "<strong>Propuesta Comercial:</strong><br>" +
            "• <strong>Para Champions (444):</strong> Implementar un programa VIP con acceso anticipado a colecciones y atención preferencial.<br>" +
            "• <strong>Para Lost Cheap (111):</strong> Aplicar campañas automatizadas de bajo costo con cupones condicionados para rotar inventario en liquidación sin afectar márgenes.";
    }
}