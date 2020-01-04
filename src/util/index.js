import { mapGetters } from 'vuex';
import Bowser from 'bowser';

export default {
  methods: {
    userAgent() {
      const userAgent = Bowser.getParser(window.navigator.userAgent);
      return userAgent.parsedResult;
    }
  },
  computed: {
    ...mapGetters(['domain'])
  }
};
