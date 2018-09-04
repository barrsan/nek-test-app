import { uniqBy } from 'lodash';
import apiProxyServers from '../api/proxyServers';


export default {
  state: {
    items: [],
    loading: false,
    filter: {
      type: [],
      alive: [],
      country: '',
    },
    countries: [],
  },


  /* eslint-disable no-param-reassign */
  mutations: {
    fetchProxyServers(state, payload) {
      state.items = payload;
    },

    setProxyServersLoading(state, payload) {
      state.loading = payload;
    },

    setFilterParams(state, { type, value }) {
      state.filter[type] = value;
    },

    setCountries(state, payload) {
      state.countries = payload;
    },
  },
  /* eslint-enable no-param-reassign */


  actions: {
    async fetchProxyServers({ commit, getters }) {
      commit('setProxyServersLoading', true);
      try {
        const res = await apiProxyServers.fetchProxyServers();
        commit('fetchProxyServers', res.data);
      } catch (error) {
        console.log(error.message); // eslint-disable-line
      } finally {
        commit('setProxyServersLoading', false);
        const countries = uniqBy(getters.proxyServers, i => i.country).map(i => i.country);
        commit('setCountries', countries);
      }
    },

    setFilterParams({ commit }, payload) {
      commit('setFilterParams', payload);
    },
  },


  getters: {
    proxyServers: ({ items }) => items,

    filteredProxyServers: ({ items, filter }) => {
      let filteredItems = items;

      if (filter.country) {
        filteredItems = filteredItems.filter(i => i.country === filter.country);
      }

      if (filter.type.length) {
        filteredItems = filteredItems.filter(i =>
          typeof i.proxy_type === 'number' && filter.type.includes(i.proxy_type.toString()));
      }

      if (filter.alive.length) {
        filteredItems = filteredItems.filter(i => filter.alive.includes(i.alive.toString()));
      }

      return filteredItems;
    },

    filterParams: ({ filter }) => filter,

    countries: ({ countries }) => countries,

    loading: ({ loading }) => loading,
  },
};
