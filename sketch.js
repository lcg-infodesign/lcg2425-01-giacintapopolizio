function preload() {
  // put preload code here
}

function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight);
}

function disegnaNellaCella(x, y, size, rowNumber) {
  quantita = pow(3, 5 - rowNumber)
  for (let q = 0; q < quantita ;q++ ){
    disegnaQuad (x,y, size, rowNumber)
  }
}

function randrange(number, range) {
  // range = 0;
  let valoreRandomico = random(number-range, number+range); 
  return valoreRandomico;
};

function disegnaQuad(x, y, size, rowNumber){

  //ogni punto che può variare di un tot (il range)
  //ogni punto può andare a sovrapporsi in parte su altre celle
  //devo stabilire di quanto
  //let mezzoRange = size/5;
  let mezzoRange = (6-rowNumber) * size/14 ; 
  let margine = 8;

  let x1 = randrange (x       + margine, mezzoRange);
  let y1 = randrange (y       + margine, mezzoRange);

  let x2 = randrange (x+size  - margine, mezzoRange);
  let y2 = randrange (y       + margine, mezzoRange);

  let x3 = randrange (x+size  - margine, mezzoRange);
  let y3 = randrange (y+size  - margine, mezzoRange);

  let x4 = randrange (x       + margine, mezzoRange);
  let y4 = randrange (y+size  - margine, mezzoRange); 

  //il giro delle coordinate del quadrilatero parte da in alto a sinistra, poi in alto a destra, poi in basso a destra, poi in basso a sinistra
  noFill ();
  stroke (1);
  strokeWeight (1);
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
}

function draw() {

  background("#c5c5c5");

  //definisco la grandezza che deve avere ciascuna "cella"
  let size = windowHeight/8;
  //la dimensione del margine è quanto una cella
  let margin = size;

  //definisco il numero di colonne: devo dividere la grandezza dello schermo per la dimensione di ogni cella, ma tenendo conto del margine
  let ncols = floor((windowWidth - 2*margin) / size) ;
  let nrow = 6;
  
  for (let r = 0; r < nrow; r++) {
    let y = r*size + margin;
    for (let c = 0; c < ncols; c++){
      let x = c*size + margin;
 

      if(r>0 || (r==0 && c >= (ncols/2 + 1))){
        disegnaNellaCella (x, y, size, r)
      }
    }

  }
}

//Credits: Vera Molnar - 1985 - Structure de Quadrilatères
