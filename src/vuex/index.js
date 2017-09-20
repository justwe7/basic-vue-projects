import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


var state = {
    loading: false,
    count: 111
};


var actions = {//处理方法，判断
    increment: ({
        commit
    }) => {
        commit('increment')
    },
    decrement: ({commit}) => {//定义方法名
        commit('decrement')
    },
    casync: ({commit}) => {
        new Promise((resolve) => {setTimeout(function () {
            commit('increment')
        }, 1000)})
    }
};


var mutations = {//定义的方法，从actions接收
    increment(state) {
        state.count++;
    },
    decrement(state) {
        state.count--;
    }
};


var getters = {
    count(state) {
        return state.count;
    }
}

export default new Vuex.Store({
    getters,
    state,
    mutations,
    actions
})
