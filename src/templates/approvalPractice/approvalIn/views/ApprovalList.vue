<template>
  <div class="approval_list">
    <div>
      <span>문서상태</span>
        <select>
          <option>전체문서</option>
          <option value="1">신청완료</option>
          <option value="2">승인완료</option>
        </select>
      <span>문서종류</span>
        <select>
          <option>전체문서</option>
          <option value="1">휴가원</option>
          <option value="14">연장근무신청서</option>
          <option value="2">휴일근무신청서</option>
          <option value="15">연장근무대체휴가</option>
        </select>
      <span>문서명</span>
      <input type="text">
      <button class="btn btn_primary">검색</button>
    </div>
    <div>
      <table>
        <colgroup>
          <col style="width: 10rem">
          <col style="width: 10rem">
          <col style="width: 5rem">
          <col style="width: 10rem">
          <col style="width: 10rem">
          <col style="width: 20rem">
        </colgroup>
        <thead>
          <tr>
            <th>작성일</th>
            <th>문서서식</th>
            <th>작성자</th>
            <th>진행상태</th>
            <th>진행상황</th>
            <th>문서제목</th>
          </tr>
        </thead>
        <tbody>
          <!-- v-for대기 -->
          <tr>
            <td @click="approvalDetail"></td>
            <td @click="approvalDetail"></td>
            <td @click="approvalDetail"></td>
            <td @click="approvalDetail"></td>
            <td @click="approvalDetail"></td>
            <td @click="approvalDetail"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <!-- 등록버튼으로 insert page대기 -->
      <button class="btn btn_orange" @click="approvalCreate">등록</button>
    </div>
    <!-- Modal통해 등록 버튼 구현 -->
    <!-- <button @click="showModal" class="btn btn_primary">Modal</button> -->
    <!-- <ModalPraceticeCreate /> -->
    <!-- <ModalSearchEmployee @callback-data="callbaclValue" /> -->
  </div>
</template>

<script>
export default {
  name: 'ApprovalList',
  components: {
  },
  data () {
  },
  methods: {
    approvalCreate () {
      this.$router.push({
        name: 'ApprovalCreate'
      })
    },
    approvalDetail () {
      this.$router.push({
        name: 'ApprovalDetail'
      })
    }
  }
}
</script>

<style>

</style>
