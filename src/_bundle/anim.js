import anime from 'animejs'

if (document.animeInsts !== undefined)
  document.animeInsts.forEach(i => anime.remove(i))
let animeInsts = document.animeInsts = []
let r = anime.random
let el
document.querySelectorAll('[anim]').forEach(e => e.getAttribute('anim').split(';')
  .forEach(f => { el = e; eval(f) }))

/**
 * @param  {int} steps
 * @param  {int} max
 * @param  {string} addClasses=""
 */
function r_span(steps, max, addClasses = "") {
  let t = ""
  let i = 0
  let l = el.textContent.length
  let m = max / steps
  while (i < l) {
    let n = Math.min(i + (r(1, steps) * m), l)
    t += '<span class="' + addClasses + '">' + el.textContent.substring(i, n) + '</span>'
    i = n
  }
  el.innerHTML = t
  return addClasses
}

/**
 * @param  {string} addClasses=""
 */
function span_lines(addClasses = "") {
  let t = ""
  el.textContent.match(/[^\r\n]+/g).forEach(l => {
    t += '<span class="' + addClasses + '">' + l + '\n</span>'
  })
  el.innerHTML = t
}

/**
 * @param  {string} targetClass=""
 */
function mech_space(targetClass) {
  let i = 0
  let els = el.querySelectorAll('.' + targetClass)
  let e = ['easeInQuad', 'easeInSine', 'easeInExpo', 'linear']
  function run() {
    let s = i % r(3, 11) == 0
    i = s ? 1 : ++i
    let r13 = r(1, 3)
    let r510 = r(5, 10)
    animeInsts.push(anime({
      targets: els,
      letterSpacing: () => s ? 0 : r(-15, 10) * 4,
      opacity: () => s ? 1 : r(0, r13) > 0 ? 0 : 1,
      direction: () => r(0, 1) > 0 ? 'normal' : 'reverse',
      easing: () => e[r(0, 3)],
      delay: () => r(0, r510) * 200,
      duration: () => s ? (r(0, 3) * 50) + 10 : r(1, 3) * 2000,
      complete: () => s ? setTimeout(run, r(1, 3) * 3000) : run()
    }))
  }
  run()
}

const anim = {
  r_span: r_span,
  span_lines: span_lines,
  mech_space: mech_space
}

export { anim }

  // function right_trails(targets) {
  //   let els = el.querySelectorAll('.' + targets)
  //   // let speed = el.cloneNode(1)
  //   // let trails = speed.querySelectorAll('.' + targets)
  //   // el.parentNode.appendChild(speed)
  //   // let e = ['easeInQuad', 'easeInSine', 'easeInExpo', 'linear']
  //   let r510 = r(5, 10)
  //   let r13
  //   function run() {
  //     let l = els.length
  //     for (let i = 0; i < l; i += 2) {
  //       anime({
  //         targets: els[r(0, l - 1)],
  //         paddingLeft: [
  //           {
  //             value: () => Math.max(r(0, 4) - 3, 0) * r(1, 5) * 500,
  //             duration: () => r(1, 3) * 3000,
  //             delay: () => { r13 = r(1, 3); return r13 * 100 }
  //           },
  //           { value: 0, duration: 0 }],
  //         opacity: [
  //           {
  //             value: 0,
  //             duration: 3000,
  //             delay: () => { return r13 * 100 }
  //           },
  //           { value: 1, duration: 0 }],
  //         duration: 0,
  //         easing: 'linear',
  //         loop: true
  //       })
  //     }
  //   }
  //   run()
  // }


// class TextScramble {
//   constructor(el) {
//     this.el = el
//     this.chars = '!<>-_\\/[]{}—=+*^?#________'
//     this.update = this.update.bind(this)
//   }
//   setText(newText) {
//     const oldText = this.el.innerText
//     const length = Math.max(oldText.length, newText.length)
//     const promise = new Promise((resolve) => this.resolve = resolve)
//     this.queue = []
//     for (let i = 0; i < length; i++) {
//       const from = oldText[i] || ''
//       const to = newText[i] || ''
//       const start = Math.floor(Math.random() * 40)
//       const end = start + Math.floor(Math.random() * 40)
//       this.queue.push({ from, to, start, end })
//     }
//     cancelAnimationFrame(this.frameRequest)
//     this.frame = 0
//     this.update()
//     return promise
//   }
//   update() {
//     let output = ''
//     let complete = 0
//     for (let i = 0, n = this.queue.length; i < n; i++) {
//       let { from, to, start, end, char } = this.queue[i]
//       if (this.frame >= end) {
//         complete++
//         output += to
//       } else if (this.frame >= start) {
//         if (!char || Math.random() < 0.28) {
//           char = this.randomChar()
//           this.queue[i].char = char
//         }
//         output += `<span class="dud">${char}</span>`
//       } else {
//         output += from
//       }
//     }
//     this.el.innerHTML = output
//     if (complete === this.queue.length) {
//       this.resolve()
//     } else {
//       this.frameRequest = requestAnimationFrame(this.update)
//       this.frame++
//     }
//   }
//   randomChar() {
//     return this.chars[Math.floor(Math.random() * this.chars.length)]
//   }
// }


// const phrases = [
//   'Hey,',
//   'put here all the sentences',
//   'that you want to cycle',
//   'they will all be automatically displayed.',
//   'Just',
//   'Like',
//   'This.',
//   'Have fun :)'
// ]

// const el = document.querySelector('.text')
// const fx = new TextScramble(el)

// let counter = 0
// const next = () => {
//   fx.setText(phrases[counter]).then(() => {
//     setTimeout(next, 800)
//   })
//   counter = (counter + 1) % phrases.length
// }

// next()
