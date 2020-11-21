// @/plugins/aos.js
// I've went ahead to declare all the config here so it is global
// Read up more here: https://github.com/michalsnik/aos

import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    // offset: 200,
    duration: 300,
    easing: 'ease',
    once: true,
  }) // or any other options you need
}
