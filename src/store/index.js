import Vue from 'vue';
import Vuex from 'vuex';
import proxyServers from './proxyServers';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    proxyServers,
  },
});
