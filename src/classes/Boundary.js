//creating a Boundary class to distinguish the ends of the map
export class Boundary {
  static width = 40
  static height = 40

  constructor({ position, image }) {
      this.position = position
      this.width = 40
      this.height = 40
      this.image = image
      this.imageLoaded = false

      // Add an event listener to check when the image is loaded
      this.image.addEventListener('load', () => {
          this.imageLoaded = true
      })
  }

  draw(c) {
      if (this.imageLoaded) {
          c.drawImage(this.image, this.position.x, this.position.y)
      }
  }
}
