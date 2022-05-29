function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  let z = document.forms["myForm"]["pwd"].value;

  if (x == "" && z == "") {
        mensaje.style.color = '#FF0000';
        document.getElementById("mensaje").innerHTML = "Los campos son obligatorios";
        return false;
  }
  if (x == "") {
        mensaje.style.color = '#FF0000';
        document.getElementById("mensaje").innerHTML = "Usuario: no debe estar en blanco";
        return false;
  }
  if (z == "") {
        mensaje.style.color = '#FF0000';
        document.getElementById("mensaje").innerHTML = "Contraseña: no debe estar en blanco";
        return false;
  }
  else {
        mensaje.style.color = '#000000';
        document.getElementById("mensaje").innerHTML = "Bienvenido ";
        return false;
}
}

