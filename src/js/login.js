const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formFeedback = document.getElementById("formFeedback");

function validarCorreo(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

function limpiarErrores() {
  emailError.textContent = "";
  passwordError.textContent = "";
  formFeedback.textContent = "";
}

if (loginForm && emailInput && passwordInput) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    limpiarErrores();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let formularioValido = true;

    if (!email) {
      emailError.textContent = "El correo electrónico es obligatorio.";
      formularioValido = false;
    } else if (!validarCorreo(email)) {
      emailError.textContent = "Ingresa un correo electrónico válido.";
      formularioValido = false;
    }

    if (!password) {
      passwordError.textContent = "La contraseña es obligatoria.";
      formularioValido = false;
    } else if (password.length < 6) {
      passwordError.textContent = "La contraseña debe tener al menos 6 caracteres.";
      formularioValido = false;
    }

    if (!formularioValido) {
      formFeedback.textContent = "Revisa los campos marcados antes de continuar.";
      return;
    }

    formFeedback.textContent =
      "Inicio de sesión validado correctamente. Esta base está lista para conectarse con futuras páginas.";
    loginForm.reset();
  });
}