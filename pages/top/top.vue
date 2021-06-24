<template>
  <view>top{{ text }}</view>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const {mapActions,} = createNamespacedHelpers('test')

export default {
  data() {
    return {};
  },
  computed: {
    text() {
      return this.$store.state.text;
    }
  }
};
</script>

<style lang="scss"></style>
