
export class PacMan {
  //constructs the player with position and velocity arguments for placement and movement
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 15;
    this.radians = 0.75;
    this.openRate = 0.12;
    this.rotation = 0;
    // new: initialize waka sound
    this.wakaSound = new Audio("../../sounds/Waka-sound.mp3");
    this.wakaSound.volume = 0.3;
  }

  //draws the player so it is visible on the canvas with also the "chomp" animation as well
  draw(c) {
    c.save();
    c.translate(this.position.x, this.position.y);
    c.rotate(this.rotation);
    c.translate(-this.position.x, -this.position.y);
    c.beginPath();
    c.arc(
      this.position.x,
      this.position.y,
      this.radius,
      this.radians,
      Math.PI * 2 - this.radians
    );
    c.lineTo(this.position.x, this.position.y);
    c.fillStyle = "yellow";
    c.fill();
    c.closePath();
    c.restore();
  }

  //continuously checks for updates on movement
  update(c) {
    this.draw(c);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.radians < 0 || this.radians > 0.75) {
      this.openRate = -this.openRate;
      // new: play waka sound when mouth animation reverses
      this.wakaSound.currentTime = 0;

      this.wakaSound.play();
    }
    this.radians += this.openRate;
  }
}
