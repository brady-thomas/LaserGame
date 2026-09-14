class DrawComponent extends Component {
    draw(ctx) {

        let position = this.transform.position

        //Singnaling to the context that I'm going to draw something
        ctx.save()

        //set center of object
        ctx.translate(position.x, position.y)

        ctx.beginePath()

        ctx.lineTo(0, -20)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)


        ctx.fillStyle = "black"
        ctx.fill()


        //signalling that were done drawing

        ctx.restore()

    }



}