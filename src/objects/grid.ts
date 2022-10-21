import {RenderObject} from "../render-object.js";
import {Application} from "../main.js";
import {Renderer} from "../renderer.js";

export class Grid implements RenderObject {
    private fieldSize: number = 50;
    private lineSize: number = 1;

    constructor(private renderer: Renderer) { }

    public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
        ctx.fillStyle = "rgb(255, 255, 255)";

        for (let x = -this.renderer.renderObjects.world.x/this.fieldSize; x < canvas.width/this.fieldSize; x++) {
            ctx.fillRect(x*this.fieldSize, 0, this.lineSize, canvas.height);
        }
        for (let y = -this.renderer.renderObjects.world.y/this.fieldSize; y < canvas.height/this.fieldSize; y++) {
            ctx.fillRect(0, y*this.fieldSize, canvas.width, this.lineSize);
        }
    }
}