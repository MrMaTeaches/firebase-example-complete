import { Player } from "./character";
import {
  update,
  ref,
  //@ts-ignore Import module
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { FirebaseClient } from "./firebaseApp.js";

interface Command {
  execute(): void;
}

class MoveRightCommand implements Command {
  constructor(private hero: Player) {}

  public execute(): void {
    this.hero.moveRight();
    new UpdatePositionToFirebaseCommand(this.hero).execute();
  }
}
class MoveLeftCommand implements Command {
  constructor(private hero: Player) {}

  public execute(): void {
    this.hero.moveLeft();
    new UpdatePositionToFirebaseCommand(this.hero).execute();
  }
}
class MoveUpCommand implements Command {
  constructor(private hero: Player) {}

  public execute(): void {
    this.hero.moveUp();
    new UpdatePositionToFirebaseCommand(this.hero).execute();
  }
}
class MoveDownCommand implements Command {
  constructor(private hero: Player) {}

  public execute(): void {
    this.hero.moveDown();
    new UpdatePositionToFirebaseCommand(this.hero).execute();
  }
}
class UpdatePositionToFirebaseCommand implements Command {
  constructor(private hero: Player) {}

  public execute(): void {
    update(ref(FirebaseClient.instance.db, `/players/${this.hero.id}`), {
      x: this.hero.x,
      y: this.hero.y,
      colour: this.hero.colour,
    });
  }
}

export {
  Command,
  MoveDownCommand,
  MoveLeftCommand,
  MoveRightCommand,
  MoveUpCommand,
};
