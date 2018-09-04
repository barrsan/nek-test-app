import axios from 'axios';


export default {
  async fetchProxyServers() {
    try {
      const res = await axios.get(
        'https://proxyfordevelopers.com/api/proxies',
        {
          params: {
            format: 'json',
          },
        },
      );
      return res;
    } catch (error) {
      throw error;
    }
  },
};
