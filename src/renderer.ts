import {Application} from "./main.js";
import {RenderObject} from "./render-object";
import {Grid} from "./objects/grid.js";
import {World} from "./objects/world.js";

export class Renderer {
    public readonly renderObjects = {
        world: new World(this),
        grid: new Grid(this)
    };

    private readonly offscreenCanvas: HTMLCanvasElement;
    private readonly offscreenCtx: CanvasRenderingContext2D;

    constructor(
        private application: Application
    ) {
        this.offscreenCanvas = document.createElement("canvas");
        this.offscreenCtx = <CanvasRenderingContext2D>this.offscreenCanvas.getContext("2d");
    }

    public onFrame(): void {
        this.application.fps.loadFPS();

        this.render();

        requestAnimationFrame(() => this.onFrame());
    }

    private render(): void {
        const ctx = this.application.canvas.context;
        const canvas = this.application.canvas.canvas;

        this.offscreenCanvas.width = canvas.width;
        this.offscreenCanvas.height = canvas.height;

        this.offscreenCtx.fillStyle = "rgb(0, 0, 0)";
        this.offscreenCtx.fillRect(0, 0, canvas.width, canvas.height);

        for (const obj of Object.values(this.renderObjects)) {
            obj.render(this.offscreenCtx, this.offscreenCanvas);
        }

        ctx.drawImage(this.offscreenCanvas, 0, 0);
    }
}