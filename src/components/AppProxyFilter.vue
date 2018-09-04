<template>
  <div class="proxy-filter">
    <app-proxy-filter-country></app-proxy-filter-country>
    <hr />
    <app-proxy-filter-type></app-proxy-filter-type>
    <hr />
    <app-proxy-filter-alive></app-proxy-filter-alive>
  </div>
</template>


<script>
import AppProxyFilterCountry from './AppProxyFilterCountry';
import AppProxyFilterType from './AppProxyFilterType';
import AppProxyFilterAlive from './AppProxyFilterAlive';


export default {
  name: 'AppProxyFilter',

  components: {
    AppProxyFilterCountry,
    AppProxyFilterType,
    AppProxyFilterAlive,
  },
};
</script>


<style>
.proxy-filter {
  padding: 20px 0;
}
</style>

