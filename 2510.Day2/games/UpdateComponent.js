class UpdateComponent extends Component {
    

    start(){
        this.timeSinceLastLaser = 0
    }

    update() {
        this.timeSinceLastLaser += 1

        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD"))
            this.transform.position.x = this.transform.position.x + 2

        if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA"))
            this.transform.position.x = this.transform.position.x - 2
        if (Input.keysDown.includes("ArrowDown") || Input.keysDown.includes("KeyS"))
            this.transform.position.y = this.transform.position.y + 2
        if (Input.keysDown.includes("ArrowUp") || Input.keysDown.includes("KeyW"))
            this.transform.position.y = this.transform.position.y - 2

        if (this.timeSinceLastLaser > 10 && (Input.keysDown.includes("Space"))) {
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
        }

    }

}