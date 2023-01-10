const element = document.getElementById('element')

const coords = {
  x: innerWidth / 2,
  y: innerHeight / 2,
  vx: 0,
  vy: 0,
}

//! switch next two lines to change the handler
onkeydown = handleMoveExclusive
onkeydown = handleMoveInertial

animate()

function animate() {
  coords.x += coords.vx
  coords.y += coords.vy
  render()

  requestAnimationFrame(animate)
}

function render() {
  element.style = `left: ${coords.x}px; top: ${coords.y}px`
}

function handleMoveExclusive(e) {
  switch (e.key) {
    case 'ArrowUp':
      coords.vy = -2
      coords.vx = 0
      break
    case 'ArrowDown':
      coords.vy = 2
      coords.vx = 0
      break
    case 'ArrowLeft':
      coords.vx = -2
      coords.vy = 0
      break
    case 'ArrowRight':
      coords.vx = 2
      coords.vy = 0
      break
    default:
      coords.vx = 0
      coords.vy = 0
      resetIfOut()
  }
}

function handleMoveInertial(e) {
  switch (e.key) {
    case 'ArrowUp':
      coords.vy--
      break
    case 'ArrowDown':
      coords.vy++
      break
    case 'ArrowLeft':
      coords.vx--
      break
    case 'ArrowRight':
      coords.vx++
      break
    default:
      coords.vx = 0
      coords.vy = 0
      resetIfOut()
  }
}

function resetIfOut() {
  if (coords.x < 0 || coords.y < 0 || coords.x > innerWidth || coords.y > innerHeight) {
    coords.x = innerWidth / 2
    coords.y = innerHeight / 2
  }
}
