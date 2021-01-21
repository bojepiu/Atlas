const fs =require('fs')



function loadModules(){
    //Simulamos una llamada a una API Rest y obtenemos lo siguiente
    var json= [ {
        "key":"modulo3",
        "description":"Modulo extra por default",
        "install":"./server/Module3.zip" //URL
    }, {
        "key":"modulo4",
        "description":"Modulo extra por default",
        "install":"./server/Module4.zip" //URL
    },
    {
        "key":"modulo5",
        "description":"Modulo extra por default",
        "install":"./server/Module5.zip" //URL
    }]
    var result=""
    json.forEach(element => {
        result+=`<li><label onclick="showModule(${element.path}/index.html)";>${element["key"]} </label></li>`
    });
    return result
}

function showModules(){
    var f=fs.readFileSync('./modules.json')
    j=f.toString()
    json=JSON.parse(j)["modules"]
    var result=""
    json.forEach(element => {
        result+=`<li><label onclick="showModule('./Modules/Module1/index.html')";>${element["key"]} </label></li>`
    });
    return result
}

function installModules(){
    //Funcion de descargar y "descomprimir" y actualizar un nuestra lista de modulos

}

function showModule(path){    
    var f=fs.readFileSync(path)
    var html2=f.toString()
    return html2
}

document.getElementById("modules").innerHTML=showModules()
document.getElementById("newModules").innerHTML=loadModules()
document.getElementById("nav").appendChild(document.createElement('div')).innerHTML=`${showModule('./Modules/Module1/index.html')}`
document.getElementById("nav").appendChild(document.createElement('div')).innerHTML=`${showModule('./Modules/Module2/index.html')}`