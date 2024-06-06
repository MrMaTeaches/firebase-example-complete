import { Canvas } from "./canvas.js";
//@ts-ignore Import module
import { nanoid } from "https://cdnjs.cloudflare.com/ajax/libs/nanoid/3.3.4/nanoid.min.js";
class CharacterPainter {
    draw(character) {
        Canvas.instance.context.fillStyle = character.colour;
        Canvas.instance.context.fillRect(character.x, character.y, character.w, character.h);
    }
}
class Block {
    _h = 25;
    _w = 25;
    _x;
    _y;
    _colour;
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get h() {
        return this._h;
    }
    get w() {
        return this._w;
    }
    get colour() {
        return this._colour;
    }
    draw() {
        Canvas.instance.context.fillStyle = this.colour;
        Canvas.instance.context.fillRect(this.x, this.y, this.w, this.h);
    }
}
class Character extends Block {
    _x;
    _y;
    _colour;
    constructor(_x, _y, _colour) {
        super();
        this._x = _x;
        this._y = _y;
        this._colour = _colour;
    }
}
class Player extends Block {
    moveSpeed = 1;
    _id = nanoid(10);
    _x = Math.random() * Canvas.WIDTH - this.w;
    _y = Math.random() * Canvas.HEIGHT - this.h;
    _colour = `rgb(${this.randomizer(255)}, ${this.randomizer(255)}, ${this.randomizer(255)})`;
    get id() {
        return this._id;
    }
    moveRight() {
        this._x += this.moveSpeed;
    }
    moveLeft() {
        this._x -= this.moveSpeed;
    }
    moveUp() {
        this._y -= this.moveSpeed;
    }
    moveDown() {
        this._y += this.moveSpeed;
    }
    randomizer(val) {
        return Math.floor(Math.random() * val);
    }
}
export { CharacterPainter, Character, Player };
//# sourceMappingURL=character.js.map