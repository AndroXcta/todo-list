const d = document;
const input = d.querySelector("#input");
const btn = d.querySelector(".btn");
const tareasPendientes = d.querySelector(".tareas-pendientes");
const tareasCompletadas = d.querySelector(".tareas-completadas");
const cuentaTarea = d.querySelector(".cuentaTareas");

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

    if (entrada.checked) {
      tareasCompletadas.appendChild(nuevaTarea);
    } else {
      tareasPendientes.appendChild(nuevaTarea);
    }

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
  const tareasCompletadasCount = tareasCompletadas.querySelectorAll(".tarea").length;
  cuentaTarea.textContent = `Tareas Completadas: ${tareasCompletadasCount}`;
}

btn.addEventListener("click", () => {
  agregarTarea();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
});


/*



*/