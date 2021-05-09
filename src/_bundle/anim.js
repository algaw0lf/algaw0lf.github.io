(() => {
  let r = anime.random
  let el
  window.fn = {}

  function r_span(steps, max, classes = "") {
    let t = ""
    let i = 0
    let l = el.textContent.length
    let m = max / steps
    while (i < l) {
      let n = Math.min(i + (r(1, steps) * m), l)
      t += '<span class="' + classes + '">' + el.textContent.substring(i, n) + '</span>'
      i = n
    }
    el.innerHTML = t
    return classes
  }

  function span_lines(classes = "") {
    let t = ""
    el.textContent.match(/[^\r\n]+/g).forEach(l => {
      t += '<span class="' + classes + '">' + l + '\n</span>'
    })
    el.innerHTML = t
  }

  function mech_space(targets) {
    let i = 0
    let els = el.querySelectorAll('.' + targets)
    let e = ['easeInQuad', 'easeInSine', 'easeInExpo', 'linear']
    function run() {
      let s = i % r(3, 15) == 0
      i = s ? 1 : i++
      let r13 = r(1, 3)
      let r510 = r(5, 10)
      anime({
        targets: els,
        letterSpacing: () => s ? 0 : r(-10, 10) * 4,
        opacity: () => s ? 1 : r(0, r13) > 0 ? 0 : 1,
        direction: () => r(0, 1) > 0 ? 'normal' : 'reverse',
        easing: () => e[r(0, 3)],
        delay: () => r(0, r510) * 200,
        duration: () => s ? (r(0, 3) * 50) + 10 : r(1, 3) * 2000,
        complete: () => s ? setTimeout(run, r(1, 3) * 3000) : run()
      })
    }
    run()
  }

  function right_trails(targets) {
    let els = el.querySelectorAll('.' + targets)
    // let speed = el.cloneNode(1)
    // let trails = speed.querySelectorAll('.' + targets)
    // el.parentNode.appendChild(speed)
    // let e = ['easeInQuad', 'easeInSine', 'easeInExpo', 'linear']
    let r510 = r(5, 10)
    let r13
    function run() {
      let l = els.length
      for (let i = 0; i < l; i += 2) {
        anime({
          targets: els[r(0, l - 1)],
          paddingLeft: [
            {
              value: () => Math.max(r(0, 4) - 3, 0) * r(1, 5) * 500,
              duration: () => r(1, 3) * 3000,
              delay: () => { r13 = r(1, 3); return r13 * 100 }
            },
            { value: 0, duration: 0 }],
          opacity: [
            {
              value: 0,
              duration: 3000,
              delay: () => { return r13 * 100 }
            },
            { value: 1, duration: 0 }],
          duration: 0,
          easing: 'linear',
          loop: true
        })
      }
    }
    run()
  }

  document.querySelectorAll('[anim]').forEach(e => e.getAttribute('anim').split(';')
    .forEach(f => { el = e; eval(f) }))

})()