import { Game } from "./game.js";
class Canvas {
  private static _instance: Canvas;
  public static WIDTH: number = 600;
  public static HEIGHT: number = 400;
  private element = document.getElementById("game_screen") as HTMLCanvasElement;
  private _context = this.element.getContext("2d") as CanvasRenderingContext2D;
  private constructor() {}

  public static get instance(): Canvas {
    if (!Canvas._instance) {
      Canvas._instance = new Canvas();
    }

    return Canvas._instance;
  }

  public initialize() {
    this.element.width = Canvas.WIDTH;
    this.element.height = Canvas.HEIGHT;
    new Game();
  }

  public get context(): CanvasRenderingContext2D {
    return this._context;
  }
}

export { Canvas };
