class MainGameObject extends GameObjects{
    constructor(){
        super()


        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle: "blue", points: [
            new Vector2(0, -20),
            new Vector2(10, 10),
            new Vector2(-10, 10)
        ]})

    }


}