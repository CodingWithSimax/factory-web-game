import {Application} from "./main.js";

export class FpsManager {
    private fps: number = 0;
    private frameCount: number = 0;
    private lastFrame: number = Date.now();
    private readonly element: HTMLLabelElement;

    constructor(private application: Application) {
        this.element = <HTMLLabelElement>document.getElementById("fps");
    }

    public loadFPS(): void {
        if (this.frameCount >= 100) {
            const now = Date.now();
            const delta = now - this.lastFrame;
            const newFPS = Math.round(100 / (delta / 1000));
            if (this.fps !== newFPS) {
                this.setFPS(newFPS);
            }
            this.lastFrame = now;
            this.frameCount = 0;
        }

        this.frameCount++;
    }
    private setFPS(fps: number): void {
        this.fps = fps;
        this.element.innerText = `${fps}`;
    }
}