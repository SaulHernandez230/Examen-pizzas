
function ecuapp(x1, y1, x2, y2) {
    if (x2 < x1) {
      let aux = x2
      x2 = x1
      x1 = aux
  
      aux = y2
      y2 = y1
      y1 = aux
    }
  
    const dx = x2 - x1
    const dy = y2 - y1
  
    const m = dy / dx
    const b = y1 - m * x1
  
    point(x1, y1)
  
    if (x1 === x2) {
      if (y1 > y2) {
        let aux = y1
        y1 = y2
        y2 = aux
      }
      let y = y1 + 1
      while (y != y2) {
        point(x1, y)
        y++
      }
    } else {
      let x = x1 + 1
      let y = m * x + b
  
      while (x != x2) {
        y = m * x + b
        y = floor(y)
        point(x, y)
        x++
      }
    }
  }
  
  function dda(x1, y1, x2, y2) {
    let dx = x2 - x1
    let dy = y2 - y1
  
    let lim;
    if (Math.abs(dx) > Math.abs(dy)) lim = Math.abs(dx)
    else lim = Math.abs(dy)
  
    let xi = dx / lim
    let yi = dy / lim
  
    let x = x1
    let y = y1
  
    for (let i = 0; i < lim; i++) {
      point(x, y)
      x += xi
      y += yi
    }
  }
  
  function breshm(x1, y1, x2, y2) {
    let x
    let y
    let p
    let py
    let px
    let incE
    let incNE
  
    let dx = x2 - x1
    let dy = y2 - y1
  
    if (dy < 0) {
      dy = -dy
      py = -1
    } else {
      py = 1
    }
  
    if (dx < 0) {
      dx = -dx
      px = -1
    } else {
      px = 1
    }
  
    x = x1
    y = y1
  
    point(x, y)
  
    if (dx > dy) {
      p = 2 * dy - dx
      incE = 2 * dy
      incNE = 2 * (dy - dx)
  
      while (x != x2) {
        x += px
  
        if (p < 0) {
          p += incE
        } else {
          y += py
          p += incNE
        }
  
        point(x, y);
      }
    } else {
      p = 2 * dx - dy
      incE = 2 * dx
      incNE = 2 * (dx - dy)
  
      while (y != y2) {
        y += py
  
        if (p < 0) {
          p += incE
        } else {
          x += px
          p += incNE
        }
  
        point(x, y)
      }
    }
  }
  