
const typed = new Typed(".typed-text", {
  strings: ['Mechatronics Engineering Student'],
  typeSpeed: 100,
  startDelay: 2500,
  onComplete: (self) => { self.cursor.remove() }
})

document.onmousemove = (event) => {
  const {
    clientX: x,
    clientY: y
  } = event
  console.log(x, y)
  }
  
function swirlImgs()
{
  
}


