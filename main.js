
// Creo las variables que seleccionan las etiquetas más usadas
const d = document;
const input = d.querySelector("#input");
const tareas = d.querySelector(".tareas");
const btn = d.querySelector(".btn"); 
const tarea = d.querySelector(".cuentaTareas"); 

let id = 1;

function agregarTarea() {
  if (input.value.trim() !== "") {
    const nuevaTarea = d.createElement("div");
    nuevaTarea.classList.add("tarea");
    
    const entrada = d.createElement("input");
    entrada.type = "checkbox";
    entrada.id = id;
    entrada.className = "checkbox-btn";
    id++;
    
    const tareaTexto = d.createElement("p");
    tareaTexto.textContent = input.value;
    
    const btnEliminar = borrarTarea(nuevaTarea); 
    
    nuevaTarea.append(entrada, tareaTexto, btnEliminar);
    tareas.appendChild(nuevaTarea);
    input.value = "";

    entrada.addEventListener("click", () => {
      nuevaTarea.classList.toggle("completada");
      cuentaTareas(); 
    });
  }
}

function borrarTarea(elemento) {
  const botonEliminar = d.createElement("button");
  botonEliminar.textContent = "🗑";
  botonEliminar.className = "btnDelete";
  botonEliminar.addEventListener("click", () => {
    elemento.remove();
    cuentaTareas(); 
  });
  return botonEliminar;
}

function cuentaTareas() {
  const tareasCompletadas = d.querySelectorAll(".completada").length;
  console.log(tareasCompletadas)
  tarea.textContent = `Tareas Completadas: ${tareasCompletadas}`;
}

btn.addEventListener("click", () => {
  agregarTarea();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
});