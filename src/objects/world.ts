import {Renderer} from "../renderer.js";

export class World {
    public x: number = 0;
    public y: number = 0;

    private startMousePos?: [number, number] = undefined;
    private startPos?: [number, number] = undefined;

    constructor(private renderer: Renderer) {
        const w = <any>window;
        w.setX = ((att: number) => this.x = att);
        w.setY = ((att: number) => this.y = att);

        window.addEventListener("mousedown", (event: MouseEvent) => {
            this.startMousePos = [event.x, event.y];
            this.startPos = [this.x, this.y];
        });
        window.addEventListener("mousemove", (event: MouseEvent) => {
            if (!this.startMousePos) return;

            const delta = [this.startMousePos[0] - event.x, this.startMousePos[1] - event.y];
            console.log(delta);
            this.x = Math.max(0, this.startMousePos[0] + delta[0]);
            this.y = Math.max(0, this.startMousePos[1] + delta[1]);
        });
        window.addEventListener("mouseup", (event: MouseEvent) => {
            this.startMousePos = undefined;
            this.startPos = undefined;
        });
    }

    public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {

    }
}