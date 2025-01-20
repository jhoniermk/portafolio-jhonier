document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    alert(`¡Gracias por tu mensaje, ${nombre}! Nos pondremos en contacto contigo a ${email}.`);
    
    // Limpiar el formulario
    this.reset();
});
