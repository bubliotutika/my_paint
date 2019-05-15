import { MyPaint } from './class/paint';

document.addEventListener('DOMContentLoaded', () => {
    const myPaint = new MyPaint(document.getElementById('app'));
    myPaint.init();

    const workspaceBoard = document.getElementById('workspace-board');
    let workspaceBoardRect = workspaceBoard.getBoundingClientRect();
    let exportBtn = document.getElementById('export-btn');
    let posY = 0, posX = 0, oldPosY = 0, oldPosX = 0, action = null;
    const ctx = workspaceBoard.getContext('2d');
    ctx.canvas.height = workspaceBoardRect.height;
    ctx.canvas.width = workspaceBoardRect.width;

    function emitImg(src) {
        roomSocket.emit('update workspace', { roomId ,src });
    }

    roomSocket.on('update workspace', function(src) {
        importImg(src);
    });

    function mouseDown(e) {
        e = e || window.event;
        posX = Math.floor(e.clientX - workspaceBoardRect.x);
        posY = Math.floor(e.clientY - workspaceBoardRect.y);
        document.onmouseup = mouseUp;
        document.onmousemove = updateMouseCoord;
    };

    function mouseUp(e) {
        document.onmouseup = null;
        document.onmousemove = null;
        if (action === "rectangle" || action === "circle" || action === "line") {
            callAction(e);
            exportImg();
            emitImg(exportBtn.href);
        }
    };

    function updateMouseCoord(e) {
        e = e || window.event;
        workspaceBoardRect = workspaceBoard.getBoundingClientRect();
        hitbox(e);
        if (action === "pencil" || action === "eraser") {
            callAction(e);
            exportImg();
            emitImg(exportBtn.href);
        }
    };

    function callAction(e) {
        oldPosX = posX;
        oldPosY = posY;
        posX = Math.floor(e.clientX - workspaceBoardRect.x);
        posY = Math.floor(e.clientY - workspaceBoardRect.y);
        myPaint.action({ action, ctx, posX, posY, oldPosX, oldPosY });
    }

    function hitbox(e) {
        if (posY < 0)
            posY = 0;
        if (posY > Math.floor(workspaceBoardRect.height))
            posY = Math.floor((workspaceBoardRect.height));
        if (posX < 0)
            posX = 0;
        if (posX > Math.floor(workspaceBoardRect.width))
            posX = Math.floor(workspaceBoardRect.width);
    };

    function exportImg() {
        exportBtn.setAttribute('download', 'MyCanvas.png');
        exportBtn.setAttribute('href', workspaceBoard.toDataURL("image/png"));
    }

    function importImg(src) {
        const img = new Image();
        img.src = src;
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
        };
    }

    const btn = document.getElementsByTagName('button');
    for (let i = 0; i < btn.length; ++i) {
        if (btn[i].title){
            btn[i].addEventListener('click', function() {
                action = this.title;
                document.getElementById('current-action').innerText = `Current tool: ${action}`
            });
        }
    };

    document.getElementById('line-width').addEventListener('change', function() {
        myPaint.setLineWidth(this.value);
    });

    document.getElementById('color-btn').addEventListener('click', function() {
        document.getElementById('color-picker').click();
    });

    document.getElementById('color-picker').addEventListener('change', function() {
        document.getElementById('color-btn').style.borderColor = this.value;
        document.getElementById('color-btn').style.color = this.value;
        myPaint.setColor(this.value);
    });

    document.getElementById('fill-box').addEventListener('change', function() {
        myPaint.setFill(this.checked);
    });

    document.getElementById('import-btn').addEventListener('click', function() {
        document.getElementById('import-field').click();
    });

    document.getElementById('import-field').addEventListener('change', function () {
        importImg(window.URL.createObjectURL(this.files[0]));
    });

    window.onresize = function() {
        workspaceBoardRect = workspaceBoard.getBoundingClientRect();
        ctx.canvas.height = workspaceBoardRect.height;
        ctx.canvas.width = workspaceBoardRect.width;
        importImg(exportBtn.href);
    };

    workspaceBoard.onmousedown = mouseDown;
});