import { Background } from '../backgrounds/background'
import { Chel } from '../persons/chel'
export class Engine {
  constructor(engineArr) {
    this.ctx = engineArr.ctx
    this.width = engineArr.width;
    this.height = engineArr.height;
    this.engineArr = engineArr
  }
  renderArr = []

  async initialize () {
    const backgrounds = await new Background(this.engineArr).initialize()
    const persona = await new Chel(this.engineArr).initialize()
    this.renderArr = this.renderArr.concat(backgrounds, persona)
  }

  start () {
    function render () {
      this.ctx.clearRect(0, 0, this.width, this.height)
      this.renderArr.forEach(el => el.render())
      requestAnimationFrame(render.bind(this))
    }
    render.call(this)
  }
}