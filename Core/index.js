const fs =require('fs')

function loadModules(){
    /**
     * Cargar los modulos que se tienen instalados en el equipo a partir del archivo modules.json
     */
    var f=fs.readFileSync('./modules.json')
    j=f.toString()
    json=JSON.parse(j)["modules"]
    return json
}

function loadModulesStore(installedModules){
    /**
     * Solicita todos los modulos existentes para su descarga y retiramos los ya instalados indicados en modulos instalados
     */
    //Simulamos una llamada a una API Rest y obtenemos lo siguiente
    var json= [ {
        "key":"modulo3",
        "name":"Modulo 3",
        "description":"Modulo extra por default",
        "install":"./server/Module3.zip", //URL
        "sha256":"sh256delmoduloadescargar"
    }, {
        "key":"modulo4",
        "name":"Modulo 4",
        "description":"Modulo extra por default",
        "install":"./server/Module4.zip", //URL
        "sha256":"sh256delmoduloadescargar"
    },
    {
        "key":"modulo5",
        "name":"Modulo 5",
        "description":"Modulo extra por default",
        "install":"./server/Module5.zip", //URL
        "sha256":"sh256delmoduloadescargar"
    }]
    var result=""
    json.forEach(element => {
        if(!installedModules.includes(element["key"]))
        result+=`<li><label onclick="showModule(${element.path}/index.html)";>${element["key"]} </label></li>`
    });
    return result
}

function initPageIndex(){
    /**
     * Crear la pagina Index.html a partir de los modulos cargados ademas de cargar la tienda
     */
    var mod=loadModules()
    result=""
    mod.forEach(element=>{
        result+=`<span id="link${element.key}" class="nav-group-item" style="padding: 2px 3px 2px 0px; width: 100%;" onclick="disableClass();enableClass('${element.key}'); this.classList.add('disabled')">
        <span class="${element.icon}" style="padding-left:3px ;"></span>
        ${element.name}
      </span>`
    })
    result+=`
        <span id="linkAddModules" class="nav-group-item" style="padding: 2px 3px 2px 0px;" onclick="disableClass();enableClass('AddModules'); this.classList.add('disabled')">
        <span class="icon icon-plus-circled" style="padding-left:3px ;"></span>
        Agregar Modulos
        </span>
        <span id="linkConfiguration" class="nav-group-item" style="padding: 2px 3px 2px 0px;" onclick="disableClass();enableClass('Configuration'); this.classList.add('disabled')">
        <span class="icon icon-cog" style="padding-left:3px ;"></span>
        Configuracion
        </span>`
    return result

}
function initForms(){
    var mod=loadModules()
    result=""
    
    mod.forEach(element=>{
        result+=`<iframe id="${element.key}"
        name="${element.name}"
        title="${element.title}"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        width="100%"
        src="${element.path}/index.html"
        style="height:100%; overflow:auto; display:none">
    </iframe>`
    })
    result+=`
    <iframe id="AddModules"
        name="Agregar Modulos"
        title="Agregar Modulos"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        width="100%"
        src="./Core/AddModules/index.html"
        style="height:100%; overflow:auto; display:none">
    </iframe>
    <iframe id="Configuration"
        name="Configuracion"
        title="Configuracion"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        width="100%"
        src="./Core/Configuration/index.html"
        style="height:98%; overflow:auto; display:none">
    </iframe>`
    return result

}
function installModules(){
    //Funcion de descargar y "descomprimir" y actualizar un nuestra lista de modulos

}


exports.loadModules=loadModules;
exports.loadModulesStore=loadModulesStore;
exports.initPageIndex=initPageIndex;
exports.initForms=initForms;