import Vue from 'vue'
import Loading from './loading'

const loadingDirective = {
  bind(el, binding) {
    el.instance = new Vue({
      render: h => h(Loading)
    }).$mount(document.createElement('div'))
  },
  inserted(el, binding, vnode) {
    if (binding.value) {
      const arg = binding.arg
      const textDom = el.instance.$el.querySelector('#text')
      if (arg) {
        console.log(binding.arg)
        textDom.innerText = arg
      } else {
        textDom.style.display = 'none'
      }
      append(el)
    }
  },
  update(el, binding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  }
}

function append(el) {
  el.appendChild(el.instance.$el)
}

function remove(el) {
  el.removeChild(el.instance.$el)
}

export default loadingDirective
