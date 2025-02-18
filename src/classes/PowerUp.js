export class PowerUp{

  //constructs the pellet with a position argument for placement
  constructor({position}){
      this.position = position
      this.radius = 8
  }

  //draws the pellet so it is visible on the canvas
  draw(c){
      c.beginPath()
      c.arc(this.position.x , this.position.y, this.radius, 0, Math.PI * 2)
      c.fillStyle = 'white'
      c.fill()
      c.closePath()
  }
}
