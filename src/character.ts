import { Canvas } from "./canvas.js";
//@ts-ignore Import module
import { nanoid } from "https://cdnjs.cloudflare.com/ajax/libs/nanoid/3.3.4/nanoid.min.js";

abstract class Block {
  protected _h: number = 25;
  protected _w: number = 25;
  protected _x: number;
  protected _y: number;
  protected _colour: string;

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }
  public get h(): number {
    return this._h;
  }

  public get w(): number {
    return this._w;
  }

  public get colour(): string {
    return this._colour;
  }

  public draw() {
    Canvas.instance.context.fillStyle = this.colour;
    Canvas.instance.context.fillRect(this.x, this.y, this.w, this.h);
  }
}

class Character extends Block {
  constructor(
    protected _x: number,
    protected _y: number,
    protected _colour: string
  ) {
    super();
  }
}

class Player extends Block {
  private moveSpeed = 1;
  private _id: string = nanoid(10);
  protected _x = Math.random() * Canvas.WIDTH - this.w;
  protected _y = Math.random() * Canvas.HEIGHT - this.h;
  protected _colour: string = `rgb(${this.randomizer(255)}, ${this.randomizer(
    255
  )}, ${this.randomizer(255)})`;

  public get id(): string {
    return this._id;
  }

  public moveRight(): void {
    this._x += this.moveSpeed;
  }
  public moveLeft(): void {
    this._x -= this.moveSpeed;
  }
  public moveUp(): void {
    this._y -= this.moveSpeed;
  }
  public moveDown(): void {
    this._y += this.moveSpeed;
  }

  protected randomizer(val: number): number {
    return Math.floor(Math.random() * val);
  }
}

export { Character, Player };
