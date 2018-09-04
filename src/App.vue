<template>
  <div id="app">
    <app-main>
      <template slot="sidebar">
        <app-proxy-filter></app-proxy-filter>
      </template>
      <template slot="main">
        <app-proxy-list
          :items="filteredProxyServers"
        >
        </app-proxy-list>
      </template>
    </app-main>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
import AppMain from './layouts/AppMain';
import AppProxyFilter from './components/AppProxyFilter';
import AppProxyList from './components/AppProxyList';


export default {
  name: 'app',

  components: {
    AppMain,
    AppProxyFilter,
    AppProxyList,
  },

  computed: {
    ...mapGetters([
      'filteredProxyServers',
    ]),
  },

  methods: {
    ...mapActions([
      'fetchProxyServers',
    ]),
  },

  mounted() {
    this.fetchProxyServers();
  },
};
</script>


<style>
#app {
  margin: 0 auto;
}
</style>
