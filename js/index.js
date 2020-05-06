
// anul si grupa sunt cu unul in plus (0 = anul 1 // grupa 0 = grupa 9x01)
var an=0 ;
var grupa ;
var ziuacurenta=0;

 
 ons.ready(function() {
    ons.notification.toast("App Ready", { timeout: 2000 }); // Shows from 0s to 2s
    update_grupa();
    
  });
  
  document.addEventListener('prechange', function(event) {
    document.querySelector('ons-toolbar .center')
      .innerHTML = event.tabItem.getAttribute('label');
  });

  //My Shit

 function selAn(event) {
  document.getElementById('selectare-an').removeAttribute('modifier');
  an=event.target.value;
  console.log("anul "+ an);
  update_grupa();
}
function update_grupa(){
  for(i=0; i<6; i++){
    document.getElementById('card'+i).style.display = "none";
  }
    document.getElementById('card'+an).style.display = "block";
}
function selectare_grupa(id){
  grupa=id;
  document.querySelector('#nav').pushPage('page2.html');
}
function modificare (id){
  //ziua este id
  modificare_card (id);
  console.log("ziua: "+id+", an: "+an+", grupa: "+grupa);
  for(i=0; i<materie.zi[id].an[an].grupa[grupa].nrmat; i++){
    document.getElementById("matnume_"+id+i).innerText = materie.zi[id].an[an].grupa[grupa].numemat[i];
    document.getElementById("matora_"+id+i).innerText = materie.zi[id].an[an].grupa[grupa].ora[i];
    document.getElementById("mattip_"+id+i).innerText = materie.zi[id].an[an].grupa[grupa].tip[i];
    document.getElementById("matparitate_"+id+i).innerText = materie.zi[id].an[an].grupa[grupa].paritate[i];
    document.getElementById("matsemigrupa_"+id+i).innerText = materie.zi[id].an[an].grupa[grupa].semigrupa[i];
    document.getElementById("matprofesor_"+id+i).innerText = materie.zi[id].an[an].grupa[grupa].profesor[i];
    document.getElementById("matsala_"+id+i).innerText = materie.zi[id].an[an].grupa[grupa].sala[i];
  }
}
function modificare_card (id){
  //ziua este id
  console.log("ziua: "+id+", an: "+an+", grupa: "+grupa);
  for(i=0; i<10; i++){
    document.getElementById("matcard_"+id+i).style.display = "none";
  }
  for(i=0; i<materie.zi[id].an[an].grupa[grupa].nrmat; i++){
    document.getElementById("matcard_"+id+i).style.display = "block";
  }
}

function text_saptamana_paritate (){
  var d = new Date();
  var n = d.getDay();
  switch(n){
    case 1: ziuacurenta=0; break;
    case 2: ziuacurenta=1; break;
    case 3: ziuacurenta=2; break;
    case 4: ziuacurenta=3; break;
    case 5: ziuacurenta=4; break;
    case 6: ziuacurenta=0; break;
    case 7: ziuacurenta=0; break;
  }
    document.getElementById("text_saptamana").innerText = "Saptamana 4";
    document.getElementById("text_paritate").innerText = "Par";
    document.getElementById("tabbar").setActiveTab(ziuacurenta);
    console.log("saptamana:"+getNumberOfWeek() );
    
}

function getNumberOfWeek() {
  dt=new Date();
  var tdt = new Date(dt.valueOf());
  var dayn = (dt.getDay() + 6) % 7;
  tdt.setDate(tdt.getDate() - dayn + 3);
  var firstThursday = tdt.valueOf();
  tdt.setMonth(0, 1);
  if (tdt.getDay() !== 4) 
    {
   tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
     }
  return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}
