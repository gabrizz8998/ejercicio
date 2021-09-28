var nombre = document.getElementById("nombre");
var texto = nombre.innerHTML;
nombre.onmouseover = function () {
  nombre.style.color = "green";
  nombre.innerHTML = texto.toUpperCase();
};

nombre.onmouseleave = function () {
  nombre.style.color = "black";
  nombre.innerHTML = texto; 
};
