<template>
  <div class="example_board_list">
    <div class="search_wrap">
      <div class="row">
        <div class="btn_wrap">
          <button type="button" class="btn btn_primary" @click="goCreate">등록</button>
        </div>

        <span class="separator">|</span>
        <div class="label_wrap">
          <label for="title">제목</label>
        </div>
        <div class="keyword_wrap">
          <input type="text" id="title" placeholder="title" v-model="searchForm.title" @keyup.enter="searchList">
        </div>
        <div class="label_wrap">
          <label for="category">구분</label>
        </div>
        <div class="keyword_wrap">
          <select name="category" id="category" v-model="searchForm.category">
            <option value="">전체</option>
            <option value="1">공지사항</option>
            <option value="2">경조</option>
          </select>
        </div>
        <div class="label_wrap">
          <label for="openRange">공개범위</label>
        </div>
        <div class="keyword_wrap">
          <select name="openRange" id="openRange" v-model="searchForm.openRange">
            <option value="">전체</option>
            <option value="1">IT서비스본부</option>
            <option value="2">인사팀</option>
            <option value="3">채널지원팀</option>
            <option value="4">FA</option>
          </select>
        </div>
        <div class="label_wrap">
          <label for="writeDate">작성일</label>
        </div>
        <div class="keyword_wrap date_wrap">
          <inputCalendar
            :inputDate="searchForm.startWriteDate"
            :options="{
              type: 'date',
              target: 'startWriteDate',
              placeholder: 'YYYY-MM-DD'
            }"
            :date.sync="searchForm.startWriteDate"
          />
          <span class="separator">~</span>
          <inputCalendar
            :inputDate="searchForm.endWriteDate"
            :options="{
              type: 'date',
              target: 'endWriteDate',
              placeholder: 'YYYY-MM-DD'
            }"
            :date.sync="searchForm.endWriteDate"
          />
        </div>
        <div class="btn_wrap">
          <button tyoe="button" class="btn btn_search" @click="searchList">검색</button>
          <button tyoe="button" class="btn btn_search" @click="searchInit">초기화</button>
        </div>
      </div>
    </div>

    <div class="table_wrap">
      <table>
        <caption>게시글 리스트</caption>
        <colgroup>
          <col style="width: 30rem">
          <col style="width: 150rem">
          <col style="width: 30rem">
          <col style="width: 30rem">
          <col style="width: 30rem">
          <col style="width: 15rem">
          <col style="width: 15rem">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">구분</th>
            <th scope="col">제목</th>
            <th scope="col">등록일</th>
            <th scope="col">등록자</th>
            <th scope="col">공개범위</th>
            <th scope="col">조회수</th>
            <th scope="col">상세</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in boards.content" :key="index">
            <td>{{ item.category }}</td>
            <td @click="showModalExampleBoardDetail(item.id)">{{ item.title }}</td>
            <td>{{ item.writeDate | dateFormat('YYYY-MM-DD HH:mm') }}</td>
            <td>{{ item.nameBase }}</td>
            <td>{{ item.openRange }}</td>
            <td>{{ item.viewCount }}</td>
            <td><button class="btn btn_sm btn_gray-light" @click.stop="goUpdate(item.id)">상세</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination
      :totalElements="boards.totalElements"
      :totalPages="boards.totalPages"
      :activePage="searchForm.page"
      :pageSize="searchForm.size"
      :callback="searchList">
    </Pagination>
    <ModalExampleBoardDetail :boardId="this.boardId"></ModalExampleBoardDetail>
  </div>
</template>

<script>
import ModalExampleBoardDetail from '../components/ModalExampleBoardDetail.vue'

export default {
  name: 'ExampleBoardList',

  components: {
    ModalExampleBoardDetail
  },
  filter: {
    categoryFilter (value) {
      if (value === '1') return '공지사항'
      else if (value === '2') return '경조'
      else return ''
    }
  },
  data () {
    return {
      boards: {},
      searchForm: {
        size: 10,
        page: 0,
        sort: 'writeDate,desc',
        title: '',
        category: '',
        openRange: '',
        startWriteDate: this.COMMON.getToDateBeforeToday(7),
        endWriteDate: this.COMMON.getToDate()
      },
      boardId: ''
    }
  },
  watch: {},
  created () {
    // this.searchList()
  },
  methods: {
    goCreate () {
      this.$router.push({
        name: 'ExampleBoardCreate'
      })
    },
    goUpdate (id) {
      this.$router.push({
        name: 'ExampleBoardUpdate',
        params: {
          id
        }
      })
    },
    showModalExampleBoardDetail (boardId) {
      console.log('boardId -> ', boardId)
      this.boardId = boardId
      this.$modal.show('ModalExampleBoardDetail')
    },
    async getBoards () {
      let data = {}
      let apiURL = `${this.ENV_SAMPLE}/sample-board/boards`
      let apiSearch = location.search
      this.$store.commit('showLoader')
      await this.$http({
        method: 'get',
        url: apiURL + apiSearch,
        data
      }).then(result => {
        this.boards = result.data
      }).catch(error => {
        console.error(error)
      })
      this.$store.dispatch('hideLoader')
    },
    searchList (options) {
      let option = Object.assign({
        route: this.$route,
        router: this.$router,
        form: this.searchForm,
        callback: this.getBoards
      }, options)

      this.COMMON.searchPagination(option)
    },
    searchInit () {
      this.searchForm = {
        size: 10,
        page: 0,
        sort: 'writeDate,desc',
        title: '',
        category: '',
        openRange: '',
        startWriteDate: this.COMMON.getToDateBeforeToday(7),
        endWriteDate: this.COMMON.getToDate()
      }
      this.searchList()
    }
  }
}
</script>

<style>

</style>
