export class Background {
  constructor({ ctx, width, height }) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
  }

  body = {
    x: 0,
    y: 0,
    background: null
  }


  async initialize () {
    await new Promise((res) => {
      const use = new Image()
      use.src = './dist/fon.jpg'
      use.onload = () => {
        this.body.background = use
        res()
      }
    })
    return this
  }
  render () {
    this.ctx.drawImage(this.body.background, 0, 0, this.width, this.height)
  }
}