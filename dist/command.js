import { update, ref,
//@ts-ignore Import module
 } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { FirebaseClient } from "./firebaseApp.js";
class MoveRightCommand {
    hero;
    constructor(hero) {
        this.hero = hero;
    }
    execute() {
        this.hero.moveRight();
        new UpdatePositionToFirebaseCommand(this.hero).execute();
    }
}
class MoveLeftCommand {
    hero;
    constructor(hero) {
        this.hero = hero;
    }
    execute() {
        this.hero.moveLeft();
        new UpdatePositionToFirebaseCommand(this.hero).execute();
    }
}
class MoveUpCommand {
    hero;
    constructor(hero) {
        this.hero = hero;
    }
    execute() {
        this.hero.moveUp();
        new UpdatePositionToFirebaseCommand(this.hero).execute();
    }
}
class MoveDownCommand {
    hero;
    constructor(hero) {
        this.hero = hero;
    }
    execute() {
        this.hero.moveDown();
        new UpdatePositionToFirebaseCommand(this.hero).execute();
    }
}
class UpdatePositionToFirebaseCommand {
    hero;
    constructor(hero) {
        this.hero = hero;
    }
    execute() {
        update(ref(FirebaseClient.instance.db, `/players/${this.hero.id}`), {
            x: this.hero.x,
            y: this.hero.y,
            colour: this.hero.colour,
        });
    }
}
export { MoveDownCommand, MoveLeftCommand, MoveRightCommand, MoveUpCommand, };
//# sourceMappingURL=command.js.map