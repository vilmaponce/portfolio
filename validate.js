$(document).ready(function() {
    $("#paso-1").validate({
      rules: {
        nombre: "required",
        correo: {
          required: true,
          email: true
        },
        telefono: {
          required: true,
          number: true,
          minlength: 7,
          maxlength: 10
        }
      },
      messages: {
        nombre: "Por favor ingresa tu nombre completo.",
        correo: {
          required: "Por favor ingresa tu dirección de correo electrónico.",
          email: "Por favor ingresa una dirección de correo electrónico válida."
        },
        telefono: {
          required: "Por favor ingresa tu número de teléfono.",
          number: "Por favor ingresa solo números.",
          minlength: "Por favor ingresa al menos 7 dígitos.",
          maxlength: "Por favor ingresa máximo 10 dígitos."
        }
      }
    });
  });
  

