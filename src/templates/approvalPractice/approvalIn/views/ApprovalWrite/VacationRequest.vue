<template>
  <div class="vacation_request">
    <div>
      <table>
        <tr>
          <th>시작일</th>
          <td>
            <input type="date">
          </td>
          <td>
            <input type="checkbox">
          </td>
          <td>
            <select>
              <option value="">-반차선택-</option>
              <option value="">오전</option>
              <option value="">오후</option>
            </select>
          </td>
          <th>종료일</th>
          <td>
            <input type="date">
          </td>
          <td>
            <input type="checkbox">
          </td>
          <td>
            <select>
              <option value="">-반차선택-</option>
              <option value="">오전</option>
              <option value="">오후</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>구분</th>
          <td>
            <select>
              <option value="">-선택-</option>
              <option value="">연차</option>
              <option value="">경조사</option>
              <option value="">병가</option>
              <option value="">출산</option>
              <option value="">배우자출산</option>
              <option value="">예비군(민방위)</option>
              <option value="">기타</option>
              <option value="">연차취소</option>
            </select>
          </td>
          <th>기간</th>
          <td>
            <input type="text" readonly>
          </td>
          <th>총연차</th>
          <td>
            <input type="text" readonly>
          </td>
          <th>남은연차</th>
          <td>
            <input type="text" readonly>
          </td>
        </tr>
        <tr>
          <th>사유</th>
          <td colspan="7"><textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력하세요."></textarea></td>
        </tr>
        <tr>
          <th>행선지</th>
          <td colspan="7">
            <input type="text" placeholder="행선지">
          </td>
        </tr>
        <tr>
          <th>비상연락처</th>
          <td colspan="7">
            <input type="text" placeholder="비상연락처">
          </td>
        </tr>
        <tr>
          <th>대직자정보</th>
          <td colspan="2">
            <input type="text" placeholder="대직자이름">
          </td>
          <td colspan="5">
            <input type="text" placeholder="대직자직위">
          </td>
        </tr>
      </table>
    </div>
    <div>
      <span>* 휴가는 D-5일전 담당 부서장 결재 완료</span>
      <span>* 병가/출산/예비군(민방위) 증빙서류 파일첨부 필수 (원본은 인사팀 발송)</span>
    </div>
    <div>
      <button class="btn btn_primary">저장</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VacationRequest'
}
</script>

<style>

</style>
