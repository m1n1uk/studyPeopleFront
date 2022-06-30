<template>
  <div id="menu">
    <router-link tag="h1" class="heading1" to="/">
      <span class="txt_bold">Vue study project</span>
    </router-link>

    <ul class="menu_wrap">
      <template v-for="(menu, index) in menus">
        <div v-if="menu.viewYn"
          class="menu-item"
          :class="{'active': mixinRouteName.some(item => item.name === menu.route)}"
          :key="`m_link_${index}`"
          @mouseover.prevent="setShowSubMenu('main', menu)"
          @mouseleave.prevent="setHideSubMenu('main', menu)"
          @click="goMenu(menu.route)">
          <span>{{ menu.name }}</span>
        </div>
        <div v-else :key="`m_none_link_${index}`">
          <li class="menu-item">
            <span>{{ menu.name }}</span>
          </li>
        </div>
      </template>
    </ul>

    <div class="heading2_wrap" :class="_metaCRUD">
      <button type="button" class="btn_back" v-if="_metaCRUD !== 'list'" @click="mixinGoBack"></button>
      <h2 class="heading2" :class="_metaCRUD">{{ _metaTitle }}</h2>
      <ul class="subMenu_wrap" v-show="isSubMenuShow" @mouseover="setShowSubMenu('sub')" @mouseleave="setHideSubMenu('sub')">
        <li
          class="subMenu-item"
          :class="{'active': mixinRouteName.some(item => item.name === subMenu.route)}"
          v-for="(subMenu, index) in showSubMenu.subMenus"
          :key="`subMenu_${index}`"
          @click="goSubMenu(subMenu.route)">
          {{ subMenu.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    _metaShow () {
      return this.$route.meta.show
    },
    _metaCRUD () {
      return this.$route.meta.crud
    },
    _metaTitle () {
      return this._metaShow ? this.$route.meta.title : '준비 중인 메뉴입니다.'
    }
  },
  data () {
    return {
      activeMenu: '',
      activeSubMenu: '',
      isSubMenuShow: false,
      showSubMenu: {},
      menus: [
        {
          name: '예시게시판',
          route: 'ExampleBoard',
          params: null,
          order: 0,
          useYn: false,
          viewYn: true,
          subMenus: [
            {
              name: '게시판',
              route: 'ExampleBoardList',
              params: null,
              order: 0,
              useYn: false,
              viewYn: true
            },
            {
              name: '사용자',
              route: 'HappyPractice',
              params: null,
              order: 0,
              useYn: false,
              viewYn: true
            },
            {
              name: '전자결재',
              route: 'ApprovalPractice',
              params: null,
              order: 0,
              useYn: false,
              viewYn: true
            }
          ]
        }

      ]
    }
  },
  methods: {
    goMenu (name) {
      this.activeMenu = name
      this.$router.push({
        name
      })
    },
    goSubMenu (name) {
      this.activeSubMenu = name
      this.$router.push({
        name
      })
    },
    setShowSubMenu (menuLevel, menu) {
      this.isSubMenuShow = true
      if (menuLevel === 'main') {
        this.showSubMenu = menu
      }
    },
    setHideSubMenu (menuLevel, menu) {
      if (menuLevel === 'main') {
        this.showSubMenu = menu
      }
      this.isSubMenuShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

#menu {
  min-height: 2rem;
  background-color: $white;
  border-top: 1px solid #eee;
  vertical-align: middle;
}

.heading1 {
  position: absolute;
  cursor: pointer;
  font-size: 2rem;
  top: 1.071rem;
  left: 1.071rem;
  color: $primary;
}

.menu_wrap {
  text-align: center;
}

.menu-item {
  display: inline-block;
  padding: 1.714rem 1.6rem .9286rem;
  margin: 0;

  font-size: 1.214rem;
  font-weight: bold;
  letter-spacing: .05rem;

  border-bottom: .2143rem solid transparent;
  transition: all .5s;

  &:hover {
    cursor: pointer;
    border-bottom: .2143rem solid $primary;
  }

  &.active {
    border-bottom: .2143rem solid $primary;
  }
}

.heading2_wrap {
  position: relative;

  padding: 1.786rem 1.071rem;

  height: 6.285rem;
  background-color: $white;

  &.create, &.update {
    font-size: 1.5rem;
    border-bottom: 1px solid $gray-light-3;
  }

  .heading2 {
    display: inline;
    font-size: 2rem;
    font-weight: bold;
    vertical-align: middle;

    &.create, &.update {
      font-size: 1.5rem;
    }
  }
}

.subMenu_wrap {
  position: absolute;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2.071rem 0 2.071rem 0;
  min-height: 1rem;
  font-size: 1.2143rem;
  background-color: $gray-light-5;
}

.subMenu-item {
  display: inline;
  padding: 1.714rem 1.6rem 1.643rem;
  font-size: 1.143rem;
  cursor: pointer;
  &:hover {
    color: $primary;
  }

  &.active {
    font-size: 1.214rem;
    color: $primary
  }
}

</style>
