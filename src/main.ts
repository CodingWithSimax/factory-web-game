import {Renderer} from "./renderer.js";
import {CanvasManager} from "./canvas.js";
import {FpsManager} from "./fps.js";

export class Application {
    public readonly fps: FpsManager;
    public readonly canvas: CanvasManager;
    public readonly renderer: Renderer;

    constructor() {
        this.fps = new FpsManager(this);
        this.canvas = new CanvasManager(this);
        this.renderer = new Renderer(this);

        this.renderer.onFrame();

        console.log("Loaded Application :)");
    }
}

new Application();