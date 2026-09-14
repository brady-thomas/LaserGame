class LaserPolygone extends Component {
    draw(ctx) {

        let position = this.transform.position

        //Singnaling to the context that I'm going to draw something
        ctx.save()

        //set center of object
        ctx.translate(position.x, position.y)
        ctx.beginePath()

        ctx.lineTo(0, -10)
        ctx.lineTo(5, 5)
        ctx.lineTo(-5, 5)


        ctx.fillStyle = "green"
        ctx.fill()


        //signalling that were done drawing

        ctx.restore()

    }



}