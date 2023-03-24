// Obtener los elementos HTML relevantes
const nuevaTareaInput = document.getElementById("nuevatarea");
const agregarTareaBtn = document.getElementById("agregartarea");
const listaTareas = document.getElementById("lista-tareas");
obtenerElementosCheck()
// Agregar una nueva tarea a la lista
function agregarTarea() {
  // Obtener el texto de la nueva tarea
  const nuevaTareaTexto = nuevaTareaInput.value;

  // Crear un nuevo elemento de lista
  const nuevaTareaElemento = document.createElement("li");

  // Crear un nuevo elemento de casilla de verificación
  const nuevaTareaCheckbox = document.createElement("input");
  nuevaTareaCheckbox.type = "checkbox";

  // Crear un nuevo elemento de etiqueta
  const nuevaTareaEtiqueta = document.createElement("label");
  nuevaTareaEtiqueta.textContent = nuevaTareaTexto;

  // Agregar la casilla de verificación y la etiqueta al elemento de lista
  nuevaTareaElemento.appendChild(nuevaTareaCheckbox);
  nuevaTareaElemento.appendChild(nuevaTareaEtiqueta);

  // Agregar el elemento de lista a la lista de tareas
  listaTareas.appendChild(nuevaTareaElemento);

  // Limpiar el campo de texto de la nueva tarea
  nuevaTareaInput.value = "";
  obtenerElementosCheck()
}

// Escuchar el evento de clic en el botón de agregar tarea
agregarTareaBtn.addEventListener("click", agregarTarea);

// Marcar una tarea como completada
function marcarTareaCompletada() {
  // Obtener el elemento de lista de la tarea completada
  const tareaCompletadaElemento = this.parentElement;

  // Cambiar el estilo del elemento de lista para indicar que está completado
  tareaCompletadaElemento.style.textDecoration = "line-through";

  // Deshabilitar la casilla de verificación para la tarea completada
  this.disabled = true;
}

function obtenerElementosCheck() {
  // Obtener todos los elementos de casillas de verificación
  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  // Escuchar el
  checkboxes.forEach(checkbox =>
    checkbox.addEventListener('change', marcarTareaCompletada)
  )
}