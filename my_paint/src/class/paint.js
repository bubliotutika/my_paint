import { Gui } from './gui';
import { Workspace } from './workspace';

export class MyPaint {
    constructor(element) {
        this.renderElt = element;
        this.color = '#000000';
        this.lineWidth = 5;
        this.fill = false;
    }

    createBoard() {
        this.renderElt.innerHTML = `
            <div id="gui">
                <div id="btn-box">
                    <h3>Menu</h3>
                    <p id="current-action"></p>
                    <div id="btn-box-container"></div>
                </div>
                <div id="size-box"></div>
                <div id="color-box"></div>
                <div id="save-box"></div>
            </div>
            <div id="workspace"></div>
            `;
        this.workspace = new Workspace();
        this.gui = new Gui();
    }

    pencil() {
        this.ctx.lineJoin = "round";
        this.ctx.lineCap = "round";
        this.ctx.moveTo(this.oldPosX, this.oldPosY);
        this.ctx.lineTo(this.posX, this.posY);
        this.ctx.stroke();
    }

    eraser() {
        this.ctx.lineJoin = "round";
        this.ctx.lineCap = "round";
        this.ctx.moveTo(this.oldPosX, this.oldPosY);
        this.ctx.lineTo(this.posX, this.posY);
        this.ctx.stroke();
    }

    rectangle() {
        if (this.fill)
            this.ctx.fillRect(this.oldPosX, this.oldPosY, (this.posX - this.oldPosX), (this.posY - this.oldPosY));
        else
            this.ctx.strokeRect(this.oldPosX, this.oldPosY, (this.posX - this.oldPosX), (this.posY - this.oldPosY));
    }

    circle() {
        const rx = Math.pow(this.posX - this.oldPosX, 2);
        const ry = Math.pow(this.posY - this.oldPosY, 2);
        this.ctx.arc(this.oldPosX, this.oldPosY, Math.sqrt(rx + ry) , 0, 360);
        if (this.fill)
            this.ctx.fill();
        else
            this.ctx.stroke();
    }

    line() {
        this.ctx.moveTo(this.oldPosX, this.oldPosY);
        this.ctx.lineTo(this.posX, this.posY);
        this.ctx.stroke();
    }

    init() {
        this.createBoard();
        this.gui.init();
        this.workspace.init();
    };

    action(params) {
        this.ctx = params.ctx;
        this.posX = params.posX;
        this.posY = params.posY;
        this.oldPosX = params.oldPosX;
        this.oldPosY = params.oldPosY;
        this.ctx.beginPath();
        
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.color;
        this.ctx.fillStyle = this.color;

        if (params.action === "eraser")
            this.ctx.globalCompositeOperation = "destination-out";
        else
            this.ctx.globalCompositeOperation = "source-over";

        this[params.action]();
    }

    setLineWidth(value) {
        this.lineWidth = value;
    }

    setColor(value) {
        this.color = value;
    }

    setFill(value) {
        this.fill = value;
    }
}