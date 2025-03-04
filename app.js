// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creamos una variable array
let misAmigos=[];

//Creamos la función agregarAmigo para el input
function agregarAmigo(){

    //Captura del valor del input
    let ingresarAmigo = document.getElementById('amigo');
    let nombreAmigo = ingresarAmigo.value;

    //Validar que el input no esté vacío
    if(nombreAmigo == ""){
        
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }
    //Actualizamos el array 
    misAmigos.push(nombreAmigo);
    //Limpiamos el input y le damos foco
    ingresarAmigo.value="";
    ingresarAmigo.focus();
    renderizarLista();

}
    
function renderizarLista(){
      
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for(let i=0; i<misAmigos.length; i++)
    {
        let item = document.createElement('li');
        item.textContent = misAmigos[i];
        listaAmigos.appendChild(item);
    }
}

