let partes
const width = window.innerWidth/3 -100;
const xPizza1 = 350 - 16;
const xPizza2 = width * 2 -27;
const xPizza3 = width * 3 -30;
const yCentro = 230;
const  radio = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(3);
  fill("#ff0057");
  stroke("#eee")
  ellipse(350-16,230,200,200);
  ellipse(width * 2 -27,230,200,200);
  ellipse(width * 3 -30,230,200,200);
  strokeWeight(1);
  noLoop();
}

function splitPizza(option){
  switch (option) {
    case 1:
      algoritm(xPizza1,1);
      break;
    case 2:
      algoritm(xPizza2,2);
      break;
    case 3:
      algoritm(xPizza3,3);
      break;
        
    default:
      algoritm(xPizza1,1);
      algoritm(xPizza2,2);
      algoritm(xPizza3,3);
      break;
  }
}
function algoritm(xPizza,option){
  if(option == 1){
    partes = document.querySelector("#slices1").value;
  }
  else if(option == 2){
    partes = document.querySelector("#slices2").value;
  }else{
    partes = document.querySelector("#slices3").value;
  }
  if (partes > 1) {
    
    let grados = 360 / partes;
    let aux = grados;
  
    draw();

    while (grados <= 360) {
      let x2 = radio * Math.cos((grados * Math.PI) / 180);
      let y2 = radio * Math.sin((grados * Math.PI) / 180);

      let x2P = xPizza + x2;
      y2 = yCentro + y2;

      x2P = floor(x2P);
      y2 = floor(y2);

      grados += aux;

      switch (option) {
        case 1:
          ecuapp(xPizza, yCentro, x2P, y2);
          break;
        case 2:
          dda(xPizza, yCentro, x2P, y2);
          break;
        case 3:
          breshm(xPizza, yCentro, x2P, y2);
          break;            
      }
    }
  }
}
