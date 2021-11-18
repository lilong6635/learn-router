const actions = {
  getLocal ({ commit, state }, city) {
    setTimeout(function () {
      commit('setCity', city)
    }, 3000)
  }
}

export default actions
