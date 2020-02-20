let crearElementoTr=(nombre,precio)=>{
    let tbody=document.querySelector("#tbody");
    let elTR=document.createElement("tr");
    elTR.innerHTML=`<td>${nombre}</td><td>${precio}</td>`;
    tbody.append(elTR);
}

document.querySelector("#formulario").addEventListener("submit",e=>{    
    e.preventDefault();
    let expReg=/(^[\d]+€?$)|(^[\d]+\.[\d]+€?$)/;
    let expReg2=/^[\w ]+$/;
    let precio = document.querySelector("#precio").value.trim();
    let nombre = document.querySelector("#nombre").value.trim();
    if(expReg.test(precio) && expReg2.test(nombre))
        crearElementoTr(nombre,precio);
});