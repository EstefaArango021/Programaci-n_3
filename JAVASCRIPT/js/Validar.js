function Validacion(){
    let cedula= document.getElementById('cedula').value;
    let nombre= document.getElementById('nombre').value;
    let direccion= document.getElementById('direccion').value;

    if(!(/^[0-9]{7,10}$/.test(cedula))){
        alert("Error en la cedula\nIngrese solo números");
    }else if (!(/^[a-zA->]{7,40}$/.test(nombre))){
     alert("Error en el nombre\nIngrese solo letras");
    }else if (!(/^[a-zA-Z0-9#\- ]{10,40}$/.test(direccion))){
    alert("Error en la dirección\nValida numeros y letras");
    }else{
        alert("Validación correcta");
    }
}