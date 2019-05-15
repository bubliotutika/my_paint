export class Workspace {
    constructor()
    {
        this.workspace = document.getElementById('workspace');
    }

    createWorkspace()
    {
        this.workspace.innerHTML = `<canvas id="workspace-board"></canvas>`;
    }

    init()
    {
        this.createWorkspace();
    }
}