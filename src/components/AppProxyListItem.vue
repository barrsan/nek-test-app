<template>
  <li class="list-group-item">
    <div>
      <h5>{{ `${item.host}:${item.port}` }}</h5>
    </div>
    <div>
      Country:
      <strong>
        {{ item.country }}
      </strong>
    </div>
    <div>
      Proxy type:
      <strong>
        {{ proxyType }}
      </strong>
    </div>
    <div class="proxy-alive">
      Alive:
      <div class="proxy-alive__status-wrap">
        <div
          :class="{
            'proxy-status': true,
            'proxy-alive_green': item.alive,
          }"
        >
        </div>
      </div>
    </div>
    <div>
      Protocols:
      <strong>
        <span
          class="proxy-protocol-item"
          v-for="protocol in item.protocols"
          :key="protocol"
        >
          {{ protocol }}
        </span>
      </strong>
    </div>
    <div>
      Response time:
      <strong>
        {{ item.response_time }}
      </strong>
    </div>
    <div>
      Chargeable:
      <strong>
        {{ chargeable }}
      </strong>
    </div>
    <div>
      Last check time:
      <strong>
        {{ lastCheckTime }}
      </strong>
    </div>
    <div>
      Busy until:
      <strong>
        {{ busyUntil }}
      </strong>
    </div>
  </li>
</template>


<script>
import moment from 'moment';
import 'moment/locale/en-gb';
import convertProxyType from '../helpers/convertProxyType';


export default {
  name: 'AppProxyListItem',

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    proxyType() {
      return typeof this.item.proxy_type === 'number'
        ? convertProxyType(this.item.proxy_type)
        : 'None';
    },

    lastCheckTime() {
      return moment(this.item.last_check_time).format('D-MM-YYYY, HH:mm:ss');
    },

    busyUntil() {
      return moment(this.item.busy_until).format('D-MM-YYYY, HH:mm:ss');
    },

    chargeable() {
      return this.item.chargeable ? 'Yes' : 'No';
    },
  },
};
</script>


<style scoped>
.proxy-alive {
  display: flex;
  align-items: center;
}

.proxy-alive__status-wrap {
  display: flex;
  align-items: center;
  margin: 0 0 0 5px;
}

.proxy-status {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: red;
  border-radius: 99%;
}

.proxy-status_green {
  background: green;
}

.proxy-protocol-item::after {
  content: ',';
}

.proxy-protocol-item:last-child::after {
  content: '';
}
</style>

