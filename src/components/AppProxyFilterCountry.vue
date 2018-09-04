<template>
  <div class="form-group">
    <select
      class="form-control"
      v-model="filterCountry"
    >
      <option value="">All countries</option>
      <option
        v-for="country in countries"
        :key="country"
        :value="country"
      >
        {{ country }}
      </option>
    </select>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';


export default {
  name: 'AppProxyFilterCountry',

  computed: {
    ...mapGetters([
      'countries',
    ]),

    filterCountry: {
      get() {
        return this.$store.state.proxyServers.filter.country;
      },

      set(value) {
        this.$store.dispatch('setFilterParams', {
          type: 'country',
          value,
        });
      },
    },
  },
};
</script>

