const state = {
  show: false
}

// getters
const getters = {
  showNav: state => state.show
}

// actions
const actions = {
  _changeNavBar ({ commit }) {
    commit('changeNavBar')
    // shop.getProducts(products => {
      // commit('changeNavBar', products)
    // })
  }
}

// mutations
const mutations = {
  changeNavBar (state, products) {
    state.show = !state.show
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}