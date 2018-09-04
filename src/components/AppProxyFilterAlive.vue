<template>
  <div class="form-group">
    <div class="form-check">
      <input
        id="active"
        class="form-check-input"
        type="checkbox"
        value="true"
        v-model="filterAlive"
      >
      <label
        class="form-check-label"
        for="active"
      >
        Active
      </label>
    </div>
    <div class="form-check">
      <input
        id="inactive"
        class="form-check-input"
        type="checkbox"
        value="false"
        v-model="filterAlive"
      >
      <label
        class="form-check-label"
        for="inactive"
      >
        Inactive
      </label>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AppProxyFilterAlive',

  computed: {
    filterAlive: {
      get() {
        return this.$store.state.proxyServers.filter.alive;
      },

      set(value) {
        this.$store.dispatch('setFilterParams', {
          type: 'alive',
          value,
        });
      },
    },
  },
};
</script>
