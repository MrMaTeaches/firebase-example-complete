import { Canvas } from "./canvas.js";
import { Character, Player } from "./character.js";
import {
  MoveDownCommand,
  MoveLeftCommand,
  MoveRightCommand,
  MoveUpCommand,
} from "./command.js";
import { Controller } from "./controller.js";
import {
  set,
  onDisconnect,
  ref,
  onValue,
  //@ts-ignore Import module
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { FirebaseClient } from "./firebaseApp.js";

class Game {
  private FPS: number = 60;
  private timeInterval: number = 1000 / this.FPS;
  private characters = {};
  private hero: Player = new Player();
  private controller: Controller = new Controller(
    new MoveUpCommand(this.hero),
    new MoveLeftCommand(this.hero),
    new MoveDownCommand(this.hero),
    new MoveRightCommand(this.hero)
  );

  constructor() {
    setInterval(() => {
      this.updateEverything();
      this.drawEverything();
    }, this.timeInterval);
    onDisconnect(
      set(ref(FirebaseClient.instance.db, "/players"), this.characters)
    );
  }
  public updateEverything(): void {
    this.controller.keyPressHandler();
    //Grab everything from the database and save it locally to my game
    onValue(
      ref(FirebaseClient.instance.db, "/players"),
      (snapshot) => {
        if (snapshot.val()) {
          this.characters = snapshot.val();

          //Remove the player, but keep all the other users
          delete this.characters[this.hero.id];
        }
      },
      { onlyOnce: true }
    );
  }
  public drawEverything(): void {
    Canvas.instance.context.clearRect(0, 0, Canvas.WIDTH, Canvas.HEIGHT);
    this.hero.draw();
    for (let id in this.characters) {
      new Character(
        this.characters[id].x,
        this.characters[id].y,
        this.characters[id].colour
      ).draw();
    }
  }
}

export { Game };
