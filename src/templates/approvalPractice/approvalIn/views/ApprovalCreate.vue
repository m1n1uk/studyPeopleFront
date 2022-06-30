<template>
  <div class="approval_create">
    <div>
      <table>
        <colgroup>
          <col style="width: 20rem">
          <col style="width: 20rem">
          <col style="width: 20rem">
          <col style="width: 20rem">
        </colgroup>
        <thead>
          <tr>
            <th>담당</th>
            <th>팀장</th>
            <th>본부장</th>
            <th>부문/실장</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <table>
        <tr>
          <th>문서서식</th>
          <td>
            <select v-model="docCateogry">
              <option label="문서서식 선택" value="0" />
              <option label="휴가원" value="1" />
              <option label="연장근무신청서" value="2" />
              <option label="휴일근무신청서" value="3" />
              <option label="연장근무대체휴가" value="4" />
            </select>
          </td>
          <th>작성일</th>
          <td>
            <!-- 작성일 날짜값 읽어오기 -->
            <input type="text" value="2022-05-12" readonly>
          </td>
        </tr>
        <tr>
          <th>작성자</th>
          <td>
            <!-- 작성자 이름 값 읽어오기 -->
            <input type="text" placeholder="김민혁" readonly>
          </td>
        </tr>
        <tr>
          <th>제목</th>
          <td>
            <input type="text" placeholder="결재서류의 제목을 입력해주세요!">
          </td>
        </tr>
      </table>
    </div>
    <div>
      <VacationRequest v-if="docCateogry === '1'" />
      <OvertimeRequest v-if="docCateogry === '2'" />
      <HolidayRequest v-if="docCateogry === '3'" />
        <!-- <OvertionVacationRequest v-if="docCateogry === 4" /> -->
      <!-- select 선택을 통해 componet가 출력될 div -->
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import VacationRequest from './ApprovalWrite/VacationRequest'
import OvertimeRequest from './ApprovalWrite/OvertimeRequest'
import HolidayRequest from './ApprovalWrite/HolidayRequest'
// import OvertionVacationRequest from './ApprovalWrite/OvertionVacationRequest'

export default {
  name: 'ApprovalCreate',
  data () {
    return {
      docCateogry: '0'
    }
  },
  components: {
    VacationRequest,
    OvertimeRequest,
    HolidayRequest
    // OvertionVacationRequest
  },
  methods: {
    vacation () {
      this.$router.push({
        name: 'VacationRequest'
      })
    },
    overtime () {
      this.$router.push({
        name: 'OvertimeRequest'
      })
    },
    holiday () {
      this.$router.push({
        name: 'HolidayRequest'
      })
    },
    overtimeVacation () {
      this.$router.push({
        name: 'OvertionVacationRequest'
      })
    }
  }
}
</script>

<style>
</style>
