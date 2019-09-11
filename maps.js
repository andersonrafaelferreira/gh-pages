
list = '';
fetch('https://api.sheety.co/13114ddb-a40c-46cc-89e6-dc3fc10eb989')
  .then(response => response.json())
  .then( data => {
  list = data;
  solista()
})

unico = []
function solista(){
  const soEstado = list.map(item => item.estado)
//   console.log('aqui', soEstado)
  unico = new Set(soEstado);
//   console.log(unico)
}

const estados = [
  "BA",
"ES",
"MG",
"RJ",
"SP",
]


function carrega_estado(){
  document.getElementById("estado").disabled = false
 for(i = 0; i < estados.length; i++){
 var x = document.createElement("OPTION");
  x.setAttribute("value", estados[i]);
  var t = document.createTextNode(estados[i]);
  x.appendChild(t);
  document.getElementById("estado").appendChild(x);
  }
}


function carrega_cidade(c){
  
  document.getElementById("cidade").innerHTML = '';
  
  var x = document.createElement("OPTION");
    var t = document.createTextNode('Selecione a cidade');
    x.appendChild(t);
    document.getElementById("cidade").appendChild(x);
  
//   console.log(c)
  
   document.getElementById("cidade").disabled = false
   for(i = 0; i < c.length; i++){
   var x = document.createElement("OPTION");
    x.setAttribute("value", c[i].maps);
    var t = document.createTextNode(c[i].cidade);
    x.appendChild(t);
    document.getElementById("cidade").appendChild(x);
   }
}

function filtraCidade(n){
  console.log(list)
  const result = list.filter(item => item.estado == n)
  console.log(result)
  carrega_cidade(result)
}


function carregaMapa(map) {
    document.getElementById('mapa').innerHTML = map;
}
