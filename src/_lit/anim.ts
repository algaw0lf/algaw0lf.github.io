import anime from 'animejs'

const anim = {
  inst: {},
  addInst: (a: anime, att: string) => {
    let id = _.el?.getAttribute(att + '-id')
    if (id == null) return
    if (_.inst[id] == null) _.inst[id] = []
    _.inst[id].push(a)
  },
  removeInst: (a: anime, att: string) => {
    let id = _.el?.getAttribute(att + '-id')
    if (id == null || _.inst[id] == null) return
    let i = _.inst[id].indexOf(a)
    if (i > -1) _.inst[id].splice(i, 1)
    anime.remove(a)
  },
  el: document.querySelector("[anim]"),
  isMobile: window.matchMedia("(any-pointer: coarse)").matches,
  supported: (mobile: boolean, desktop: boolean) => (_.isMobile && mobile || !_.isMobile && desktop) ? true : false,
  r_span: (steps, max, addClasses = "", att: string) => {
    if (_.el === null) return
    let t = "",
      i = 0,
      m = max / steps,
      l = _.el.textContent?.length
    if (!l) return
    while (i < l) {
      let n = Math.min(i + (r(1, steps) * m), l)
      t += '<span class="' + addClasses + '">' + _.el.textContent?.substring(i, n) + '</span>'
      i = n
    }
    _.el.innerHTML = t
    return addClasses
    att
  },
  // span_lines: (addClasses = "", att: string) => {
  //   if (_.el === null) return;
  //   let t = ""
  //   _.el.textContent?.match(/[^\r\n]+/g)?.forEach(l => {
  //     t += '<span class="' + addClasses + '">' + l + '\n</span>'
  //   })
  //   _.el.innerHTML = t
  //   att
  // },
  // r_spans: (steps, max, addClasses = "") => {
  //     let t = document.createElement("span")
  //     let i = 0
  //     let cs = Array.prototype.slice.call(el.children)
  //     let l = cs.length
  //     let m = max / steps
  //     while (i < l) {
  //       let n = Math.min(i + (r(1, steps) * m), l)
  //       let cI = document.createElement("span")
  //       cI.classList.add(addClasses)
  //       cs.slice(i, n).map(e => cI.appendChild(e))
  //       console.log(cI)
  //       t.appendChild(cI)
  //       i = n
  //     }
  //     el.innerHTML = t.innerHTML
  //     return addClasses
  //   },
  // right_trails: (targets) => {
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
  // },
  mech_space: (targetClass, att: string) => {
    let i = 0,
      a = {},
      run = () => {
        let s = i % r(3, 11) == 0,
          r14 = r(1, 4),
          r510 = r(5, 10)
        i = s ? 1 : ++i
        _.removeInst(a, att)
        a = anime({
          targets: _.el?.querySelectorAll('.' + targetClass),
          letterSpacing: () => s ? 0 : r(-15, 10) * 4,
          opacity: () => s ? 1 : r(0, r14) > 0 ? 0 : 1,
          direction: () => r(0, 1) > 0 ? 'normal' : 'reverse',
          easing: () => ['easeInQuad', 'easeInSine', 'easeInExpo', 'linear'][r(0, 3)],
          delay: () => r(0, r510) * 200,
          duration: () => s ? (r(0, 3) * 50) + 10 : r(1, 3) * 2000,
          complete: () => s ? setTimeout(run, r(1, 3) * 3000) : run()
        })
        _.addInst(a, att)
      }
    run()
    att
  },
  add: (x: HTMLElement) => {
    let ex = (e, att) => {
      aslice.call(e.children).forEach(c => {
        let a = c.getAttribute(att)
        if (a == null) return
        let id = c.getAttribute(att + '-id')
        if (_.inst[id] != null) _.inst[id].forEach(e => _.removeInst(e, att))
        _.el = c
        _.el?.setAttribute(att + '-id', window.performance.now().toString())
        c.getAttribute(att)?.split(';').forEach(f => {
          let id = c.getAttribute(att + '-id')
          if (id != null) anime.remove(_.inst[id])
          eval('_.' + f.split(')')[0] + ",'" + att + "')")
        })
      })
    },
      ax = (els) => {
        els.forEach(e => {
          ex(e, 'anim')
          if (_.supported(true, false)) ex(e, 'anim-m')
          if (_.supported(false, true)) ex(e, 'anim-d')
          if (e.children.length > 0) ax(aslice.call(e.children))
        })
      }
    ax([x])
  }
}
let aslice = Array.prototype.slice
let r = anime.random
let _ = anim

export default anim


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
