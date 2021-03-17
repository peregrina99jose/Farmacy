document.addEventListener('DOMContentLoaded', mostrarMarcas);
 
function mostrarMarcas(){
    //solicita al web service todos los marcas
      var arrayMarcas=[]
 
    //const endPoint="http://52.1.202.220/webServicephpmongo/ctrlMarcas.php";
    const endPoint="http://52.7.182.54/webmongophp/Marca.php";
    
        fetch(endPoint,{
                method: "GET",
            headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(function(res){
                    return res.json()
                })
                .then (function(res){
                    console.log(res)
                    arrayMarcas=convertirJSONarray(res);
                    console.log("arry JS", arrayMarcas)
                    mostrarArrayMarcas(arrayMarcas)
    

                
                    })              
                .catch(console.error);
    
    }
    function convertirJSONarray(datos)
{
    var arrayMar=[]
    datos.forEach(function(item){
        arrayMar.push(item)
               })
    return arrayMar;
}
 
function mostrarArrayMarcas(arrayMarcas){
 
    let x=1
      arrayMarcas.forEach(function(prod){
            let renglon = document.createElement('tr');
            renglon.id="ren"+x;
            let tabla=document.getElementById("tablaMarcas");
            tabla.appendChild(renglon);
 
            let celda = document.createElement("td");
            celda.id="celda"+x
            let ren=document.getElementById("ren"+x);
              ren.appendChild(celda);
              
            let miImg = document.createElement("img"); 
            miImg.src='./vistas/modulos/fotos/'+prod.logomarca
            miImg.className="fotito";
            celda.appendChild(miImg); 

            celda = document.createElement("td");
            celda.id="celda"+x
             ren=document.getElementById("ren"+x);
            ren.appendChild(celda);
            let miSpan = document.createElement("span");   
            miSpan.innerText = prod._id.$oid  
          
            celda.appendChild(miSpan); 

             
            celda = document.createElement("td");
            celda.id="celda"+x
            ren=document.getElementById("ren"+x);
            ren.appendChild(celda);
             miSpan = document.createElement("span");   
            miSpan.innerText = prod.nombremarca                 
            celda.appendChild(miSpan); 


             
let celdaBtns = document.createElement("td");
celdaBtns.id="celdaBtns"
ren=document.getElementById("ren"+x);
ren.appendChild(celdaBtns);

let miDiv = document.createElement("div"); 
  miDiv.id="divHerram"
celdaBtns.appendChild(miDiv); 

let miIcono1 = document.createElement("i"); 
miIcono1.className="fas fa-edit"
miIcono1.id="iconoEdit"

let miLinkEdit=document.createElement('a')
miLinkEdit.href="#"
miLinkEdit.id=prod._id.$oid
miLinkEdit.className="botonEdit"


miLinkEdit.appendChild(miIcono1)

miDiv.appendChild(miLinkEdit); 

let miLinkElim=document.createElement('a')
miLinkElim.href="#"
miLinkElim.id=prod._id.$oid
miLinkElim.className="botonElim"

let miIcono2 = document.createElement("i"); 
miIcono2.id="iconoElim"
miIcono2.className="fas fa-trash-alt"
miLinkElim.appendChild(miIcono2)

miDiv.appendChild(miLinkElim)

 
            x++
        })
 }
 

