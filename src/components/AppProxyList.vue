<template>
  <div class="proxy-list">
    <div
      class="proxy-list__preloader"
      v-if="loading"
    >
      <app-preloader></app-preloader>
    </div>
    <div
      class="proxy-list__inner"
      v-else
    >
      <ul
        class="proxy-items list-group"
        v-if="items.length"
      >
        <app-proxy-list-item
          v-for="item in items"
          :key="item.id"
          :item="item"
        >
        </app-proxy-list-item>
      </ul>
      <div v-else>
        Servers not found :(
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import AppProxyListItem from './AppProxyListItem';
import AppPreloader from './AppPreloader';


export default {
  name: 'AppProxyList',

  components: {
    AppProxyListItem,
    AppPreloader,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    ...mapGetters([
      'loading',
    ]),
  },
};
</script>


<style scoped>
.proxy-list {
  height: 100vh;
  overflow: scroll;
}

.proxy-list__inner {
  padding: 20px 0;
}

.proxy-list__preloader {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 575px) {
  .proxy-list {
    height: 100%;
  }
}
</style>

