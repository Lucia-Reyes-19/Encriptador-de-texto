function encriptarTexto() {
    console.log("Encriptar función llamada");
    let texto = document.getElementById('texto').value.toLowerCase();

    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
        
    console.log("Texto encriptado: " + textoEncriptado); 

    document.getElementById('mensaje_encriptado').value = textoEncriptado;
    document.getElementById('texto').value = ''; // Limpiar el textarea después de encriptar
    console.log(textoEncriptado);

     // Ocultar el título, párrafo e imagen
     document.getElementById('mensaje_no_encontrado').style.display = 'none';
     document.getElementById('info_entrada_texto').style.display = 'none';
     document.getElementById('imagen').style.display = 'none';

     // Mostrar el textarea de mensaje encriptado y el botón copiar
     document.getElementById('mensaje_encriptado').style.display = 'block';
     document.getElementById('boton_copiar').style.display = 'block';
     
        
}

function desencriptarTexto() {
    console.log("Desencriptar función llamada");
    let texto = document.getElementById('texto').value.toLowerCase();
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('mensaje_encriptado').value = textoDesencriptado;
    document.getElementById('texto').value = ''; // Limpiar el textarea después de desencriptar
}

function copiarTexto() {
    console.log("Copiar función llamada");
    let textoEncriptado = document.getElementById('mensaje_encriptado');
    textoEncriptado.select();
    document.execCommand('copy');

}
