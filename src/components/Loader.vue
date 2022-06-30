<template>
  <div class="loader_wrap" v-if="loader_count > 0">
    <div class="loader_icon_wrap">
      <fulfilling-square-spinner
        :animation-duration="1000"
        :size="60"
        color="#44d7b6"
        class="loader__icon"
      />

      <p>로딩중입니다<br>잠시만 기다려주세요</p>
    </div>
  </div>
</template>

<script>
import { FulfillingSquareSpinner } from 'epic-spinners'

export default {
  name: 'Loader',
  created () {},
  mounted () {},
  components: {
    FulfillingSquareSpinner
  },
  props: {},
  data () {
    return {}
  },
  computed: {
    // loader show count
    loader_count () {
      return this.$store.getters.getLoaderCount
    }
  },
  watch: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.loader_wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,.8);

  .loader_icon_wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);

    .loader__icon {
      display: inline-block;
      margin-bottom: 20px;
    }
  }
}
</style>
