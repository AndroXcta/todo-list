const d = document;
const input = d.querySelector("#input");
const tareas = d.querySelector(".tareas");
const btn = d;
const cuentaTarea = d.querySelector;


function agregarTarea() {
  if (input.value.trim() !== "") {
    const nuevaTarea = d.createElement("div");
    nuevaTarea.classList.add("tarea");

    const entrada = d.createElement("input");
    entrada.className= "checkbox-btn"
    const tareaTexto = d.createElement("p");
    tareaTexto.textContent = input.value;
    entrada.type = "checkbox";
    entrada.id="checkbox"
    entrada.className="checkbox-btn"
    const botonEliminar = d.createElement("button");
    botonEliminar.textContent = "🗑";
    botonEliminar.className = "btnDelete";
    botonEliminar.addEventListener("click", () => {
      nuevaTarea.remove();
    });

    nuevaTarea.append(entrada, tareaTexto, botonEliminar);

    tareas.appendChild(nuevaTarea);
    input.value = "";

    entrada.addEventListener("click", () => {
      nuevaTarea.classList.toggle("completada");
    } )
  }
}

btn.addEventListener("click", agregarTarea);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
});