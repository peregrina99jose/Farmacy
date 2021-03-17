document.addEventListener('DOMContentLoaded', mostrarProd);
 
function mostrarProd(){
    //solicita al web service todos los productos
    var arrayProd=[]
    //const endPoint="http://52.1.202.220/webServicephpmongo/ctrlProd.php";
    const endPoint="http://52.7.182.54/webmongophp/Farmacy.php";
            
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
                    arrayProd=convertirJSONarray(res);
                //    console.log("arry", arrayProd)
                    mostrarArrayProd(arrayProd)
                
                    })              
                .catch(console.error);
    
    }
 


    function convertirJSONarray(datos)
{
    var arrayProd=[]
    datos.forEach(function(item){
        arrayProd.push(item)
               })
    
//    console.log(arrayProd)
    return arrayProd;
}


 
function mostrarArrayProd(arrayProd){
    let x=1
      arrayProd.forEach(function(prod){
            let renglon = document.createElement('tr');
            renglon.id="ren"+x;
            let tabla=document.getElementById("tablaProd");
            tabla.appendChild(renglon);
 
            let celda = document.createElement("td");
            celda.id="celda"+x
            let ren=document.getElementById("ren"+x);
              ren.appendChild(celda);
              
            let miImg = document.createElement("img"); 
            miImg.src='./vistas/modulos/fotos/'+prod.fotoProducto
            miImg.className="fotito";
            celda.appendChild(miImg); 

             
celda = document.createElement("td");
celda.id="celda"+x
 ren=document.getElementById("ren"+x);
ren.appendChild(celda);
let miSpan = document.createElement("span");   
miSpan.innerText = prod._id.$oid 
miSpan.className="btnCelda";
celda.appendChild(miSpan); 

celda = document.createElement("td");
celda.id="celda"+x
ren=document.getElementById("ren"+x);
ren.appendChild(celda);
 miSpan = document.createElement("span");   
miSpan.innerText = prod.nombProd                  
miSpan.className="btnCelda";
celda.appendChild(miSpan); 

 
celda = document.createElement("td");
            celda.id="celda"+x
            ren=document.getElementById("ren"+x);
            ren.appendChild(celda);
             miSpan = document.createElement("span");   
            miSpan.innerText = prod.caracteristicas              
            miSpan.className="btnCelda";
            celda.appendChild(miSpan); 


             
celda = document.createElement("td");
celda.id="celda"+x
ren=document.getElementById("ren"+x);
ren.appendChild(celda);
miSpan = document.createElement("span");  
miSpan.innerText = prod.categoria.nomCat              
miSpan.className="btnCelda";
celda.appendChild(miSpan); 
///


celda = document.createElement("td");
celda.id="celda"+x
ren=document.getElementById("ren"+x);
ren.appendChild(celda);
miSpan = document.createElement("span");   
miSpan.innerText = prod.paisOrigen               
miSpan.className="btnCelda";
celda.appendChild(miSpan); 

///
celda = document.createElement("td");
celda.id="celda"+x
 ren=document.getElementById("ren"+x);
  ren.appendChild(celda);
  miSpan = document.createElement("span");   
miSpan.innerText=prod.status
celda.appendChild(miSpan); 

///////

celda = document.createElement("td");
celda.id="celda"+x
ren=document.getElementById("ren"+x);
ren.appendChild(celda);
 miSpan = document.createElement("span");   
miSpan.innerText = prod.unidadMedida              
miSpan.className="btnCelda";
celda.appendChild(miSpan); 


////

celda = document.createElement("td");
celda.id="celda"+x
ren=document.getElementById("ren"+x);
ren.appendChild(celda);
 miSpan = document.createElement("span");   
miSpan.innerText = prod.cantExistente                 
miSpan.className="btnCelda";
celda.appendChild(miSpan); 

////////
celda = document.createElement("td");
celda.id="celda"+x
ren=document.getElementById("ren"+x);
ren.appendChild(celda);
 miSpan = document.createElement("span");   
miSpan.innerText = prod.precio           
miSpan.className="btnCelda";
celda.appendChild(miSpan); 

////////


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
miLinkEdit.setAttribute("data-toggle", "modal")
miLinkEdit.setAttribute("data-target","#modalEditProd")

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

