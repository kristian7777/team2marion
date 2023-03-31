//model//
let bowserHP = 300;
let marioHP = 200;
let peachHP = 100;
let yoshiHP = 80;
let luigiHP = 140;
let currentPage = "select";
let pages = ["fight", "select"];
let selectedCharacter = "";

// Model
class Model {
  constructor() {
    this.currentView = 'view1';
  }

  goToView(viewName) {
    this.currentView = viewName;
  }
}

// View
class View {
  constructor() {
    this.views = document.querySelectorAll('.view');
  }

  showView(viewName) {
    this.views.forEach(view => view.classList.remove('active'));
    document.getElementById(viewName).classList.add('active');
  }
}

// Controller
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // initial view update
    this.updateView();
  }

  handleView1Click() {
    this.model.goToView('view1');
    this.updateView();
  }

  handleView2Click() {
    this.model.goToView('view2');
    this.updateView();
  }
  handleView3Click() {
    this.model.goToView('view3');
    this.updateView();
  }
  handleView4Click() {
    this.model.goToView('view4');
    this.updateView();
  }
  handleView5Click() {
    this.model.goToView('view5');
    this.updateView();
  }
  handleView6Click() {
    this.model.goToView('view6');
    this.updateView();
  }
  

  updateView() {
    const currentView = this.model.currentView;
    this.view.showView(currentView);
  }
}

// create instances and start the app
const model = new Model();
const view = new View();
const controller = new Controller(model, view);

// add event listeners to view links
document.getElementById('view1Link').addEventListener('click', () => controller.handleView1Click());
document.getElementById('view2Link').addEventListener('click', () => controller.handleView2Click());
document.getElementById('view3Link').addEventListener('click', () => controller.handleView3Click());
document.getElementById('view4Link').addEventListener('click', () => controller.handleView4Click());
document.getElementById('view5Link').addEventListener('click', () => controller.handleView5Click());
document.getElementById('view6Link').addEventListener('click', () => controller.handleView6Click());


updateView()

function updateView(){
    let HTML  = /*html*/ `
         <h1 class="grid-container">Character selection!</h1>
         <div class="grid-container">
             
             
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/1200px-NSMBUD_Mariojump.png?raw=true" style="width: 200px; height: 250px;"></br><button onclick="fightView()">Mario</button></div>
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/2389814-nsmbuluigi.png?raw=true" style="width: 200px; height: 250px;"></br><button>Lugi</button></div>
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/220px-MPSS_Peach.png?raw=true" style="width: 200px; height: 250px;"></br><button>Peach</button></div>
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/800px-Yoshi_SSBU.png?raw=true" style="width: 200px; height: 250px;"></br><button>Yoshi</button></div>
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/Toad_3D_Land.png?raw=true" style="width: 200px; height: 250px;"></br><button>Toad</button></div>
         </div>
         `;
  //  if (currentPage = "select") HTML = selectView();
  // if (currentPage = "fight" ) HTML = fightView();

    document.getElementById('app').innerHTML = HTML;
}

function selectView() {
    let selectView = /*HTML*/ `
    <h1 class="grid-container">Character selection!</h1>
         <div class="grid-container">
             
             
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/1200px-NSMBUD_Mariojump.png?raw=true" style="width: 200px; height: 250px;"></br><button onclick="fightView()">Mario</button></div>
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/2389814-nsmbuluigi.png?raw=true" style="width: 200px; height: 250px;"></br><button>Lugi</button></div>
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/220px-MPSS_Peach.png?raw=true" style="width: 200px; height: 250px;"></br><button>Peach</button></div>
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/800px-Yoshi_SSBU.png?raw=true" style="width: 200px; height: 250px;"></br><button>Yoshi</button></div>
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/Toad_3D_Land.png?raw=true" style="width: 200px; height: 250px;"></br><button>Toad</button></div>
         </div>
    `;
    return selectView;
}

function fightView() {
    let fightView = /*HTML*/ `
    <button onclick="damageRoll(bowserHP)"> angrip bowser 
         </button>
         <button onclick="damageRoll(marioHP)"> angrip mario
         </button> <br>
         Bowser har ${bowserHP} HP. Mario har ${marioHP} HP.
         <h1 class="grid-container">Combat zone!</h1>
         <div class="grid-container">
             
             
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/1200px-NSMBUD_Mariojump.png?raw=true" style="width: 200px; height: 250px;"></br><button>Mario</button></div>
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/1200px-NSMBUD_Mariojump.png?raw=true" style="width: 200px; height: 250px;"></br><button>Lugi</button></div>
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/1200px-NSMBUD_Mariojump.png?raw=true" style="width: 200px; height: 250px;"></br><button>Peach</button></div>
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/1200px-NSMBUD_Mariojump.png?raw=true" style="width: 200px; height: 250px;"></br><button>Yoshi</button></div>
             <div class="grid-item"><img src="https://github.com/kristian7777/team2marion/blob/main/bilder/1200px-NSMBUD_Mariojump.png?raw=true" style="width: 200px; height: 250px;"></br><button>Toad</button></div>
         </div>
    `;
    document.getElementById('app').innerHTML = HTML;
    return fightView;

}

//controller//

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min );
}

function damageRoll(defender){
    let damage = getRandomNumber(25, 60)
    defender = defender - damage
    if (defender == marioHP){
        console.log("mario ble angrepet")
    }
    console.log(damage)
    console.log(defender)
    updateView()
}

