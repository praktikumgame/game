import { Engine } from './src/engine/engine'
const ctx = document.getElementById('canvas').getContext('2d')
const width = 1024
const height = 575

const engineArr = {
  ctx,
  width,
  height
}

const engine = new Engine(engineArr)
engine.initialize()
setTimeout(() => {
  console.log(engine)
  engine.start()
}, 2000)