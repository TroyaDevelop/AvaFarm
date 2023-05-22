'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 960;
canvas.height = 640;

const sprites = {
  background: new Image(),
  editor: new Image(),
  frames: new Image(),
  categories: new Image(),
  genderM: new Image(),
  genderF: new Image(),
  skinPalette: new Image(),
  hairPalette: new Image(),
  eyesPalette: new Image(),
  mouthPalette: new Image(),
  paletteText: new Image(),
  editorText: new Image(),
  submitText: new Image(),
  iconHair1:  new Image(),
  iconHair2:  new Image(),
  iconEyes1:  new Image(),
  iconEyes2:  new Image(),
  iconMouth1: new Image(),
  bodyF: new Image(),
  underwearF: new Image(),
  hair1: new Image(),
  hair2: new Image(),
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
    this.skinPalette.src = './img/skinPalette.png';
    this.hairPalette.src = './img/hairPalette.png';
    this.eyesPalette.src = './img/eyesPalette.png';
    this.mouthPalette.src = './img/mouthPalette.png';
    this.paletteText.src = './img/paletteText.png';
    this.editorText.src = './img/editorText.png';
    this.submitText.src = './img/submitText.png';
    this.iconHair1.src = './img/iconHair1.png';
    this.iconHair2.src = './img/iconHair2.png';
    this.iconEyes1.src = './img/iconEyes1.png';
    this.iconEyes2.src = './img/iconEyes2.png';
    this.iconMouth1.src = './img/iconMouth1.png';
    this.bodyF.src = './img/body.png';
    this.underwearF.src = './img/underwear.png';
    this.hair1.src = './img/hair1.png';
    this.hair2.src = './img/hair2.png';
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
    this.hair =this.sprites.hair1;
    this.eyes = this.sprites.eye1;
    this.mouth = this.sprites.mouth1;
  }
};

const editor = {
  sprites,
  character,

  x: null,
  y: null,
  iconWidth: 227/2,
  iconHeigth: 226/2,
  gender: 0,
  currentPalette: 0,
  skinPalette: {
    currentColor: 0,
    width: 270/1.8,
    height:  88/1.8,
    posX: 770,
    posY: 120,
  },

  hair: {
    hair1: null,
    hair2: null,
  },
  hairPalette: {
    currentColor: 0,
    width: 270/1.8,
    height:  88/1.8,
    posX: 770,
    posY: 120,
  },

  eyes: {
    eyes1: null,
    eyes2: null,
  },
  eyesPalette: {
    currentColor: 0,
    width: 270/1.8,
    height:  88/1.8,
    posX: 770,
    posY: 120,
    eye1: {
      xRigth: 796,
      xLeft: 781,
      yBottom: 153,
      yTop: 137,
    },
    eye2: {
      xRigth: 823,
      xLeft: 810,
      yBottom: 155,
      yTop: 137,
    },
    eye3: {
      xRigth: 851,
      xLeft: 839,
      yBottom: 155,
      yTop: 137,
    },
  },

  mouth: {
    mouth1: null,
  },
  mouthPalette: {
    currentColor: 0,
    width: 210/1.8,
    height:  47/1.8,
    posX: 775,
    posY: 133,
    mouth1: {
      xRigth: 796,
      xLeft: 777,
      yBottom: 155,
      yTop: 135,
    },
    mouth2: {
      xRigth: 825,
      xLeft: 807,
      yBottom: 149,
      yTop: 136,
    },
    mouth3: {
      xRigth: 853,
      xLeft: 838,
      yBottom: 152,
      yTop: 138,
    },
  },

  init(){
    this.sprites.init();
    this.character.init();
    this.render();
  },

  handleClick(event) {
    const canvasRect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / canvasRect.width;
    const scaleY = canvas.height / canvasRect.height;
    
    this.x = (event.clientX - canvasRect.left) * scaleX;
    this.y = (event.clientY - canvasRect.top) * scaleY;

    if(this.x <= 134 && this.x >= 90 && this.y <= 602 && this.y >= 539){
      this.gender = 0;
    } else if(this.x <= 193 && this.x >= 156 && this.y <= 593 && this.y >= 541){
      this.gender = 1;
    }

    if(this.x <= 237 && this.x >= 38 && this.y <= 517 && this.y >= 168 ){
      this.changeCategory(this.x, this.y);
    }

    if(this.x <= 730 && this.x >= 280 && this.y <= 540 && this.y >= 139 ){
      this.changePart(this.x, this.y);
    }

    if(this.x <= 916 && this.x >= 769 && this.y <= 165 && this.y >= 103 && this.currentPalette === 0){
      this.changeEyesColor(this.x, this.y);
    }

    if(this.x <= 916 && this.x >= 769 && this.y <= 165 && this.y >= 103 && this.currentPalette === 1){
      this.changeMouthColor(this.x, this.y);
    }

    if((this.x <= 35 && this.x >= 0 && this.y <= 31 && this.y >= 0)){
      this.toggleFullScreen();
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
    ctx.drawImage(this.sprites.categories, 70, 200, 234/1.5, 314/1.2);
    ctx.drawImage(this.sprites.paletteText, 780, 103, 223/2, 59/2);
    ctx.drawImage(this.sprites.editorText, 115, 25, 220, 80);
    ctx.drawImage(this.sprites.submitText, 800, 583, 186/2, 55/2);
    ctx.drawImage(this.sprites.paletteText, 0, 0, 223/2, 59/2); // заменить на кнопку полноэкранного режима

    this.drawList();
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
    } else if(this.currentPalette === 2){
      ctx.drawImage(this.sprites.skinPalette, this.skinPalette.posX, this.skinPalette.posY, this.skinPalette.width, this.skinPalette.height);
    } else if(this.currentPalette === 3){
      ctx.drawImage(this.sprites.hairPalette, this.hairPalette.posX, this.hairPalette.posY, this.hairPalette.width, this.hairPalette.height);
    }
    
  },

  drawList(){
    let list = this.currentPalette;
    let startPosX = 310;
    let startPosY = 170;
    if(list === 3){
      for(let row = 1; row <= 2; row++){
        ctx.drawImage(this.sprites[`iconHair${row}`], startPosX, startPosY, this.iconWidth, this.iconHeigth);
        startPosX += 130;
      }
    } else if(list === 0){
      for(let row = 1; row <= 2; row++){
        ctx.drawImage(this.sprites[`iconEyes${row}`], startPosX, startPosY, this.iconWidth, this.iconHeigth);
        startPosX += 130;
      }
    } else if(list === 1){
      for(let row = 1; row <= 1; row++){
        ctx.drawImage(this.sprites[`iconMouth${row}`], startPosX, startPosY, this.iconWidth, this.iconHeigth);
        startPosX += 130;
      }
    }
  },

  render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawEditor();
    this.drawChar();
  },

  changePart(x, y){
    if(x <= 417 && x >= 314 && y <= 281 && y >= 175 && this.currentPalette === 3){
      this.character.hair = this.sprites.hair1;
    } else if(x <= 546 && x >= 444 && y <= 279 && y >= 173 && this.currentPalette === 3){
      this.character.hair = this.sprites.hair2;
    }
  },

  changeCategory(x, y){
    if(x <= 157 && x >= 80 && y <= 285 && y >= 252){
      this.currentPalette = 0;
    } else if(x <= 142 && x >= 79 && y <= 393 && y >= 365){
      this.currentPalette = 1;
    } else if(x <= 145 && x >= 79 && y <= 231 && y >= 201){
      this.currentPalette = 2;
    } else if(x <= 220 && x >= 79 && y <= 443 && y >= 420){
      this.currentPalette = 3;
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

  chengeSkinColor(){

  },

  changeHairColor(){

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

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }  
  };

const game = {

};


canvas.addEventListener("click", event => editor.handleClick(event));

editor.init();