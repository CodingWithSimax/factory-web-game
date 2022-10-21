import {Application} from "./main.js";

export class CanvasManager {
    public readonly canvas: HTMLCanvasElement;
    public readonly context: CanvasRenderingContext2D;

    constructor(
        private application: Application
    ) {
        this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
        this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");

        window.addEventListener("resize", () => this.onResize());
        this.onResize();
    }

    private onResize(): void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}