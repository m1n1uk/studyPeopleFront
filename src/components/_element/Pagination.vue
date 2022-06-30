<template>
  <div class="pagination">
    <span class="total">
      total: {{ _totalElements }}
    </span>
    <ul class="pageLink_wrap">
      <li class="pageLink arrow" @click.prevent="changePrevPage(_activePage)">&lt;</li>
      <li class="pageLink"
        v-for="(item, index) in _totalPages" :key="index"
        :class="_activePage === index ? 'active' : ''"
        @click.prevent="changePage(index + 1)">
        {{ index + 1 }}
      </li>
      <li class="pageLink arrow" @click.prevent="changeNextPage(_activePage + 2)">&gt;</li>
    </ul>
    <div class="searchSize_wrap">
      <select class="searchSize" v-model="size" @change="changeSize">
        <option value="10">10개씩보기</option>
        <option value="20">20개씩보기</option>
        <option value="50">50개씩보기</option>
        <option value="100">100개씩보기</option>
        <option value="200">200개씩보기</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {
      size: 10
    }
  },
  props: {
    totalElements: {
      type: [String, Number],
      required: true,
      default: () => 0
    },
    totalPages: {
      type: [String, Number],
      required: true,
      default: () => 0
    },
    activePage: {
      type: Number,
      required: true,
      default: () => 0
    },
    pageSize: {
      type: [String, Number],
      required: true,
      default: () => 10
    },
    callback: {
      type: Function,
      required: true
    }
  },
  computed: {
    _totalElements () {
      return parseInt(this.totalElements)
    },
    _totalPages () {
      return parseInt(this.totalPages)
    },
    _pageSize () {
      return parseInt(this.pageSize)
    },
    _activePage () {
      return parseInt(this.activePage)
    }
  },
  watch: {
    _pageSize () {
      this.size = this._pageSize
    }
  },
  methods: {
    changePage (page) {
      if (this._activePage === page - 1) return

      this.callback({
        type: 'pagination',
        page: parseInt(page)
      })
    },
    changeSize () {
      this.callback({
        type: 'size',
        size: this.size
      })
    },
    changePrevPage (page) {
      if (page <= 0) return false
      this.changePage(page)
    },
    changeNextPage (page) {
      if (page > this._totalPages) return false
      this.changePage(page)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.pagination {
  position: relative;
  padding: 1rem 0;
  text-align: center;
}

.total {
  position: absolute;
  top: 1rem;
  left: 0;
  display: block;
  font-size: .9rem;
  font-weight: 450;
  // float: left;
  letter-spacing: .05rem;
}

.pageLink_wrap {
  font-size: 450;
  font-weight: bold;
  // color: $primary-light;
  display: inline-block;

  .pageLink {
    display: inline-block;
    padding: .15rem .5rem .35rem;
    vertical-align: middle;
    font-size: .9rem;
    // border: 1px solid rgba($primary, .5);
    border-radius: .25rem;
    margin: 0 .45rem;
    transition: all .2s;
    cursor: pointer;

    &:hover {
      color: $white-gray;
      background-color: rgba($primary, .5);
    }
  }

  .arrow {
    color: rgba($gray-dark, .5);
    font-weight: bold;
    background-color: rgba($primary, .3);
    transition: all .2s;

    &:hover {
      // color: inherit;
      background-color: rgba($primary, .5);
    }
  }

  .active {
    color: $white-gray;
    background-color: rgba($primary, .8);

    &:hover {
      background-color: rgba($primary, .5);
    }
  }
}

.searchSize_wrap {
  position: absolute;
  top: .75rem;
  right: 0;
  display: block;

  .searchSize {
    padding: .1rem .5714rem;
    height: 2rem;
    border-radius: .2857rem;
    border: 1px solid $gray-light-4;
    background-color: $gray-light-4;
    outline: 0;
    vertical-align: middle;
    font-size: 1rem;
  }
}
</style>
