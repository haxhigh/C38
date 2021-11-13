class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    //console.log("adding");
    if (this.index == 1) {
      this.positionX = width / 2 - 100;
    } else if (this.index == 2) {
      this.positionX = width / 2 + 100;
    }
    database.ref("players/player" + this.index).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    })

  }
  
  static getPlayersInfo(){
    database.ref("players").on("value",data=>{
      allPlayers = data.val();
      
    })
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    })
  }

  updatePosition(){
    database.ref("players/player"+this.index).update({
      positionX: this.positionX,
      positionY: this.positionY
    })
  }

  getPosition(){
    database.ref("players/player"+this.index).on("value",data=>{
      var data = data.val();
      this.positionX = data.positionX,
      this.positionY = data.positionY
    })
  }

  getCount() {
    database.ref("playerCount").on("value", data => {
      playerCount = data.val();
    })
  }
}
