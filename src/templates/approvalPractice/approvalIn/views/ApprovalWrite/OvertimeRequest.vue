<template>
  <div class="overtime_request">
    <div>
      <table>
        <tr>
          <th>근무일</th>
          <td>
            <input type="date">
          </td>
          <td>
            <select>
              <option value="">예정</option>
              <option value="">결과</option>
            </select>
          </td>
          <td colspan="3">
            * 해당주 연장근무시간(결제완료건) : 0
          </td>
        </tr>
        <tr>
          <th>근무시간</th>
          <td>
            <select>
              <option value="">18:30</option>
              <option value="">19:00</option>
              <option value="">19:30</option>
              <option value="">07:00</option>
            </select>
          </td>
          <td>
            <select>
              <option value="">19:00</option>
              <option value="">19:30</option>
              <option value="">20:30</option>
              <option value="">20:30</option>
              <option value="">21:00</option>
              <option value="">21:30</option>
              <option value="">22:00</option>
            </select>
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
      </table>
    </div>
    <div>
      <span>연장근로는 근로시간을 계산하여 보상휴가로 대체한다.</span>
      <span>연장근무시간은 18:30 ~ 19:30에서 선택하며 1일 최대 3시간</span>
      <span>22시 이후는 근무 불가.</span>
      <span>당일 오후 5시 까지 담당임원 결재 완료.</span>
      <span>결과는 익일 오전중 담당임원 결재 완료</span>
    </div>
    <div>
      <button class="btn btn_primary">저장</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OvertimeRequest'
}
</script>

<style>

</style>
