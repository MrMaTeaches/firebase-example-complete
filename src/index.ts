import { Canvas } from "./canvas.js";

class Driver {
  constructor() {
    Canvas.instance;
    Canvas.instance.initialize();
  }
}

new Driver();
