window.addEventListener('load',()=>{
    const formCrear = document.getElementById('form-crear')
    const listarTareas = document.getElementById('lista-tareas')
    const inputCrear = document.getElementById('crear')
    const inputBuscar = document.getElementById('buscar')

    formCrear.addEventListener('submit',(e)=>{
        e.preventDefault()
        capturarValor()
    })
    
    const capturarValor = () =>{
        const tareaNombre = inputCrear.value.trim();
        (tareaNombre.length) ? mostrarTareaHtml(tareaNombre) : alert('debe ingresar alguna tarea')
    }

    const mostrarTareaHtml = (tarea)=>{
        const lihtml = `<li><strong>${tarea}</strong><i class="fas fa-minus-circle borrar"></i></li>`
        listarTareas.innerHTML += lihtml
        inputCrear.value = ''
    }

    inputBuscar.addEventListener('keyup', ()=>{
            const caracter = inputBuscar.value.trim()
            busqueda(caracter)
    })

    const busqueda = (cadena)=>{
        let arreglo = Array.from(listarTareas.children)
        arreglo
            .filter(texto => !texto.textContent.toLowerCase().includes(cadena))
            .forEach(cadenaFiltrada =>{
                cadenaFiltrada.classList.add('textFiltrado')
            })
        arreglo
            .filter(texto => texto.textContent.toLowerCase().includes(cadena))
            .forEach(cadenaFiltrada =>{
                cadenaFiltrada.classList.remove('textFiltrado')
            })    
    }

    listarTareas.addEventListener('click', (e)=>{
        if(e.target.classList.contains('borrar')){
            e.target.parentElement.remove() 
        }
        inputBuscar.value = ''
    })
})