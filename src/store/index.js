import Vue from 'vue'
import Vuex from 'vuex'
import navbar from './modules/navbar.js'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)


var state = {
    count: 111
};

var getters = {
    count(state) {
        return state.count;
    }
}

export default new Vuex.Store({
    modules: {
        navbar
    },
    getters,
    state,
    mutations,
    actions
})
