import { Game } from "./game.js";
class Canvas {
    static _instance;
    static WIDTH = 600;
    static HEIGHT = 400;
    element = document.getElementById("game_screen");
    _context = this.element.getContext("2d");
    constructor() { }
    static get instance() {
        if (!Canvas._instance) {
            Canvas._instance = new Canvas();
        }
        return Canvas._instance;
    }
    initialize() {
        this.element.width = Canvas.WIDTH;
        this.element.height = Canvas.HEIGHT;
        new Game();
    }
    get context() {
        return this._context;
    }
}
export { Canvas };
//# sourceMappingURL=canvas.js.map