'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const sprites = {
  background: new Image(),
  editor: new Image(),
  frames: new Image(),
  categories: new Image(),
  genderM: new Image(),
  genderF: new Image(),
  eyesPalette: new Image(),
  mouthPalette: new Image(),
  paletteText: new Image(),
  bodyF: new Image(),
  underwearF: new Image(),
  hair: new Image(),
  eye1: new Image(),
  eye2: new Image(),
  eye3: new Image(),
  mouth1: new Image(),
  mouth2: new Image(),
  mouth3: new Image(),

  init(){
    this.background.src = './img/background.png';
    this.editor.src = './img/editor.png';
    this.frames.src = './img/frames.png';
    this.categories.src = './img/categories.png';
    this.genderM.src =  './img/genderM.png';
    this.genderF.src =  './img/genderF.png';
    this.eyesPalette.src = './img/eyesPalette.png';
    this.mouthPalette.src = './img/mouthPalette.png';
    this.paletteText.src = './img/paletteText.png';
    this.bodyF.src = './img/body.png';
    this.underwearF.src = './img/underwear.png';
    this.hair.src = './img/hair1.png';
    this.eye1.src = './img/eye1.png';
    this.eye2.src = './img/eye2.png';
    this.eye3.src = './img/eye3.png';
    this.mouth1.src = './img/mouth1.png';
    this.mouth2.src = './img/mouth2.png';
    this.mouth3.src = './img/mouth3.png';
  },
};

const character = {
  sprites,

  body: null,
  hair: null,
  eyes: null,
  mouth: null,

  init(){
    this.body = this.sprites.bodyF;
    this.hair =this.sprites.hair;
    this.eyes = this.sprites.eye1;
    this.mouth = this.sprites.mouth1;
  }
};

const editor = {
  sprites,
  character,

  x: null,
  y: null,
  gender: 0,
  currentPalette: 0,
  eyesPalette: {
    currentColor: 0,
    width: 270/1.8,
    height:  88/1.8,
    posX: 770,
    posY: 120,
    eye1: {
      xRigth: 585,
      xLeft: 565,
      yBottom: 106,
      yTop: 86,
    },
    eye2: {
      xRigth: 604,
      xLeft: 584,
      yBottom: 106,
      yTop: 86,
    },
    eye3: {
      xRigth: 627,
      xLeft: 607,
      yBottom: 106,
      yTop: 86,
    },
  },
  mouthPalette: {
    currentColor: 0,
    width: 210/1.8,
    height:  47/1.8,
    posX: 775,
    posY: 133,
    mouth1: {
      xRigth: 585,
      xLeft: 565,
      yBottom: 106,
      yTop: 86,
    },
    mouth2: {
      xRigth: 604,
      xLeft: 584,
      yBottom: 106,
      yTop: 86,
    },
    mouth3: {
      xRigth: 627,
      xLeft: 607,
      yBottom: 106,
      yTop: 86,
    },
  },

  init(){
    this.sprites.init();
    this.character.init();
    this.render();
  },

  handleClick(event){
    editor.x = event.offsetX;
    editor.y = event.offsetY;

    if(this.x <= 106 && this.x >= 55 && this.y <= 406 && this.y >= 355){
      this.gender = 0;
    } else if(this.x <= 144 && this.x >= 107 && this.y <= 398 && this.y >= 358){
      this.gender = 1;
    }

    if(this.x <= 175 && this.x >= 28 && this.y <= 332 && this.y >= 114 ){
      this.changeCategory(this.x, this.y);
    }

    if(this.x <= 673 && this.x >= 560 && this.y <= 112 && this.y >= 70 && this.currentPalette === 0){
      this.changeEyesColor(this.x, this.y);
    }

    if(this.x <= 673 && this.x >= 560 && this.y <= 112 && this.y >= 70 && this.currentPalette === 1){
      this.changeMouthColor(this.x, this.y);
    }

    this.render();
  },

  drawChar(){
    ctx.drawImage(this.character.body, 755, 167, 277/1.6, 630/1.5);
    ctx.drawImage(this.sprites.underwearF, 755, 167, 277/1.6, 630/1.5);
    ctx.drawImage(this.character.hair, 755, 167, 277/1.6, 630/1.5);
    ctx.drawImage(this.character.eyes, 755, 167, 277/1.6, 630/1.5);
    ctx.drawImage(this.character.mouth, 755, 167, 277/1.6, 630/1.5);
  },

  drawEditor(){
    ctx.drawImage(this.sprites.background, 0, 0, 1920/2, 1300/2);
    ctx.drawImage(this.sprites.editor, 0, 0, 1920/2, 1300/2);
    ctx.drawImage(this.sprites.frames, 313, 140, 765/2, 782/2);
    ctx.drawImage(this.sprites.categories, 70, 200, 234/1.5, 314/1.2);
    ctx.drawImage(this.sprites.paletteText, 780, 103, 223/2, 59/2);
    this.drawPalette();

    if(this.gender === 0){
      ctx.drawImage(this.sprites.genderF, 43, 507, 387/2, 274/2);
    } else {
      ctx.drawImage(this.sprites.genderM, 43, 507, 387/2, 274/2);
    }
  },

  drawPalette(){
    if(this.currentPalette === 0){
      ctx.drawImage(this.sprites.eyesPalette, this.eyesPalette.posX, this.eyesPalette.posY, this.eyesPalette.width, this.eyesPalette.height);
    } else if(this.currentPalette === 1){
      ctx.drawImage(this.sprites.mouthPalette, this.mouthPalette.posX, this.mouthPalette.posY, this.mouthPalette.width, this.mouthPalette.height);
    };
  },

  render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawEditor();
    this.drawChar();
  },

  changeHair(imageUrl){
    this.sprites.hair.src = imageUrl;
    this.sprites.hair.onload = function() {
      editor.render();
    };
  },

  changeCategory(x, y){
    if(x <= 115 && x >= 58 && y <= 187 && y >= 170){
      this.currentPalette = 0;
    } else if(x <= 112 && x >= 58 && y <= 260 && y >= 242){
      this.currentPalette = 1;
    }
  },

  changeMouthColor(x, y){
    if(x <= this.mouthPalette.mouth1.xRigth && x >= this.mouthPalette.mouth1.xLeft && y <= this.mouthPalette.mouth1.yBottom && y >= this.mouthPalette.mouth1.yTop){
      this.mouthPalette.currentColor = 0;
    } else if(x <= this.mouthPalette.mouth2.xRigth && x >= this.mouthPalette.mouth2.xLeft && y <= this.mouthPalette.mouth2.yBottom && y >= this.mouthPalette.mouth2.yTop){
      this.mouthPalette.currentColor = 1;
    } else if(x <= this.mouthPalette.mouth3.xRigth && x >=this.mouthPalette.mouth3.xLeft && y <= this.mouthPalette.mouth3.yBottom && y >= this.mouthPalette.mouth3.yTop){
      this.mouthPalette.currentColor = 2;
    };

    if(this.mouthPalette.currentColor === 0){
      this.character.mouth = this.sprites.mouth1;
    } else if(this.mouthPalette.currentColor === 1){
      this.character.mouth = this.sprites.mouth2;
    } else if(this.mouthPalette.currentColor === 2){
      this.character.mouth = this.sprites.mouth3;
    }
  },
  changeEyesColor(x, y){
    if(x <= this.eyesPalette.eye1.xRigth && x >= this.eyesPalette.eye1.xLeft && y <= this.eyesPalette.eye1.yBottom && y >= this.eyesPalette.eye1.yTop){
      this.eyesPalette.currentColor = 0;
    } else if(x <= this.eyesPalette.eye2.xRigth && x >= this.eyesPalette.eye2.xLeft && y <= this.eyesPalette.eye2.yBottom && y >= this.eyesPalette.eye2.yTop){
      this.eyesPalette.currentColor = 1;
    } else if(x <= this.eyesPalette.eye3.xRigth && x >= this.eyesPalette.eye3.xLeft && y <= this.eyesPalette.eye3.yBottom && y >= this.eyesPalette.eye3.yTop){
      this.eyesPalette.currentColor = 2;
    };

    if(this.eyesPalette.currentColor === 0){
      this.character.eyes = this.sprites.eye1;
    } else if(this.eyesPalette.currentColor === 1){
      this.character.eyes = this.sprites.eye2;
    } else if(this.eyesPalette.currentColor === 2){
      this.character.eyes = this.sprites.eye3;
    }
  },
  }

const game = {

};

canvas.addEventListener("click", event => editor.handleClick(event));

editor.init();