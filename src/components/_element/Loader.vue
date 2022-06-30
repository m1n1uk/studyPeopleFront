<template>
  <div id="loader" v-if="_loaderCount">
    <div class="loader_inner">
      <orbit-spinner
        :animation-duration="1200"
        :size="70"
        color="#409EFF"
      />
      <p class="loading">Loading...</p>
    </div>
  </div>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners'

export default {
  name: 'Loader',
  created () {},
  mounted () {},
  components: {
    OrbitSpinner
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    // loader show count
    _loaderCount () {
      return this.$store.getters.getLoaderCount
    }
  },
  watch: {},
  methods: {

  }
}
</script>

<style lang="scss" scoped>
#loader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,.8);
}

.loader_inner {
  position: absolute;
  z-index: 9999;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}
.loading {
  display: inline-block;
  padding-top: 1rem;
  font-style: 1rem;
  text-align: center;
  // font-style: italic;
}
</style>
