const formulario = document.getElementById('formulario-tarea');
const inputTarea = document.getElementById('input-tarea');
const selectDificultad = document.getElementById('select-dificultad');
const listaTareas = document.getElementById('lista-tareas');

let tareas = [];

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nuevaTarea = {
        id: Date.now(),
        texto: inputTarea.value,
        dificultad: selectDificultad.value,
        completada: false
    };

    tareas.push(nuevaTarea);
    inputTarea.value = '';

    mostrarTareas();
});

function mostrarTareas() {
    listaTareas.innerHTML = '';

    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.className = `item-tarea ${tarea.completada ? 'completada' : ''}`;

        let claseDificultad = '';
        if (tarea.dificultad === 'Fácil') claseDificultad = 'dificultad-facil';
        if (tarea.dificultad === 'Medio') claseDificultad = 'dificultad-medio';
        if (tarea.dificultad === 'Difícil') claseDificultad = 'dificultad-dificil';

        li.innerHTML = `
            <div class="info-tarea">
                <input type="checkbox" ${tarea.completada ? 'checked' : ''} onclick="cambiarEstado(${tarea.id})">
                <span>${tarea.texto}</span>
                <span class="dificultad ${claseDificultad}">${tarea.dificultad}</span>
            </div>
            <button class="boton-eliminar" onclick="eliminarTarea(${tarea.id})">✕</button>
        `;

        listaTareas.appendChild(li);
    });
}

function cambiarEstado(id) {
    tareas = tareas.map(tarea => {
        if (tarea.id === id) {
            tarea.completada = !tarea.completada;
        }
        return tarea;
    });
    mostrarTareas();
}

function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    mostrarTareas();
}