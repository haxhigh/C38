class Game {
  constructor() { }

  start() {
    form = new Form();
    form.display();

    player = new Player();
    playerCount = player.getCount();

    car1 = createSprite(width / 2 - 100, height - 100);
    car1.addImage(car1Img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage(car2Img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  play() {
    this.handleElements();
    Player.getPlayerInfo();
    if (allPlayers != undefined) {
      image(track, 0, -height * 5, width, height * 6);
      var index = 0;
      for (var p in allPlayers) {
        index += 1;
        var x = allPlayers[p].positionX;
        var y = height - allPlayers[p].positionY;
        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;
      }
      this.handlePlayerControls();

      drawSprites();
    }
  }

  updateState(state) {
    database.ref("/").update({
      gameState: state
    })
  }

  getState() {
    database.ref("State").on("value", data => {
      gameState = data.val();
    })
  }

  handleElements() {
    Form.hide();
    Form.titleImg.position(40, 50);
    Form.titleImg.class("gameTitleAfterEffect");
  }

  handlePlayerControls(){
    if(keyDown(UP_ARROW)){
      player.positionY+=10;
      Player.updatePosition();

    }
  }


}
