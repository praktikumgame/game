export class Chel {
  constructor({ ctx, width, height }) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
  }

  body = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    background: null,
    frame: 0,
    frameCount: 9,
    frames: 0
  }


  async initialize () {
    await new Promise((res) => {
      const use = new Image()
      use.src = './dist/chelLine.png'
      use.onload = () => {
        this.body.background = use
        this.body.width = 300
        this.body.height = 246
        res()
      }
    })
    window.addEventListener('keydown', this.move.bind(this))
    return this
  }
  render () {
    this.body.frames++
    if (this.body.frame >= this.body.frameCount) {
      this.body.frame = 1
    } else {
      if (this.body.frames % 15 === 0) {
        this.body.frame += 1
      }
    }
    this.ctx.drawImage(this.body.background, 50 * this.body.frame, 0, 50, 80, this.body.x, this.body.y, 50, 80)
  }
  move (e) {
    switch (e.keyCode) {
      case 37: {
        this.body.x -= 10
        break;
      }
      case 39: {
        this.body.x += 10
        break;
      }
      case 38: {
        this.body.y -= 10
        break;
      }
      case 40: {
        this.body.y += 10
        break;
      }
    }
  }
}