<template>
  <div class="form-group">
    <div class="form-check">
      <input
        id="transparent"
        class="form-check-input"
        type="checkbox"
        value="0"
        v-model="filterType"
      >
      <label
        class="form-check-label"
        for="transparent"
      >
        Transparent
      </label>
    </div>
    <div class="form-check">
      <input
        id="anonymous"
        class="form-check-input"
        type="checkbox"
        value="1"
        v-model="filterType"
      >
      <label
        class="form-check-label"
        for="anonymous"
      >
        Anonymous
      </label>
    </div>
    <div class="form-check">
      <input
        id="elite"
        class="form-check-input"
        type="checkbox"
        value="2"
        v-model="filterType"
      >
      <label
        class="form-check-label"
        for="elite"
      >
        Elite
      </label>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AppProxyFilterType',

  computed: {
    filterType: {
      get() {
        return this.$store.state.proxyServers.filter.type;
      },

      set(value) {
        this.$store.dispatch('setFilterParams', {
          type: 'type',
          value,
        });
      },
    },
  },
};
</script>
