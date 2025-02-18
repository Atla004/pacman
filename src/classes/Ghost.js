export class Ghost{

  //the ghost's speed will be slower than Pacman's
  static speed = 2

  //constructs the ghost with position, velocity, and default color arguments for placement, movement and style
  constructor({position,velocity, color = 'red'}){
      this.position = position
      this.velocity = velocity
      this.radius = 15
      this.color = color
      this.prevCollisions = []
      this.speed = 2
      this.scared = false
  }

  //draws the ghost so it is visible on the canvas
  draw(c){
      c.beginPath()
      c.arc(this.position.x , this.position.y, this.radius, 0, Math.PI * 2)
      c.fillStyle = this.scared ? 'blue' : this.color
      c.fill()
      c.closePath()
  }

  //continuously checks for updates on movement
  update(c){
      this.draw(c)
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
  }
}
