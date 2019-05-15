export class Gui {
    
    constructor() {
        this.gui = document.getElementById('gui');
        this.btnBoxContainer = document.getElementById('btn-box-container');
        this.colorBox = document.getElementById('color-box');
        this.sizeBox = document.getElementById('size-box');
        this.saveBox = document.getElementById('save-box');
        this.btnName = ['pencil', 'eraser', 'line', 'rectangle', 'circle'];
        this.btnIcon = ['<i class="fas fa-pencil-alt" title="pencil"></i>', 
            '<i class="fas fa-eraser" title="eraser"></i>',
            '<i class="fas fa-grip-lines" title="line"></i>', 
            '<i class="far fa-square" title="rectangle"></i>',
            '<i class="far fa-circle" title="circle"></i>'];
    }

    generateGuiBtn() {
        for (let i = 0; i < this.btnName.length; ++i) {
            this.btnBoxContainer.insertAdjacentHTML(
                'beforeend', 
                `<button class="gui-btn" id="gui-btn-${this.btnName[i]}" 
                    title="${this.btnName[i]}">
                        ${this.btnIcon[i]}
                </button>`);
        }
        this.btnBoxContainer.insertAdjacentHTML('beforeend', `<p>Fill: <input type="checkbox" id="fill-box"></p>`);
    }

    generateGuiSizeBar() {
        this.sizeBox.innerHTML = `
            <h3>Size</h3>
            <input type="number" id="line-width" value="5">
        `;
    }

    generateGuiColor() {
        this.colorBox.innerHTML = `
            <h3>Color</h3>
            <button class="gui-btn" id="color-btn"> <i class="fas fa-palette"></i></button>
            <input type="color" id="color-picker">
        `;
    }

    generateGuiSave() {
        this.saveBox.innerHTML = `
            <h3>Export / Import</h3>
            <div>
                <a class="gui-btn" id="export-btn"><i class="fas fa-download"></i></a>
                <button class="gui-btn" id="import-btn"><i class="fas fa-upload"></i></button>
            </div>
            <input type="file" id="import-field" accept=".jpg,.jpeg,.png">
        `;
    }

    init() {
        this.generateGuiBtn();
        this.generateGuiSizeBar();
        this.generateGuiColor();
        this.generateGuiSave();
    }
}