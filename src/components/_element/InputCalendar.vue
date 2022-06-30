<template>
  <div :id="_options.target" class="input_calendar">
    <VueDatePicker
      v-model="date"
      :visible-years-number="100"
      :no-calendar-icon="true"
      :format="_options.placeholder"
      :format-header="'YYYY년 MM월 DD일'"
      :locale="locale"
      :type="_options.type"
      color="#44d7b6"
    />
    <!-- validate 아래의 양식으로 쓰면 됨! -->
    <!-- <input type="hidden" name="targetMonth" slot="validate" :value="targetForm.targetMonth" v-validate="'required'"> -->
  </div>
</template>

<script>
export default {
  name: 'InputCalendar',
  props: {
    options: {
      type: Object,
      required: true,
      default: () => {}
    },
    inputDate: {
      type: String,
      required: false,
      default: () => null
    }
  },
  computed: {
    _date () {
      return this.date
    },
    _options () {
      return Object.assign({
        type: 'date',
        target: 'dateWrap',
        placeholder: 'YYYY-MM-DD',
        placement: 'bottom'
      }, this.options)
    },
    _inputDate () {
      return this.inputDate === null || this.inputDate === '' ? null : moment(this.inputDate)._d
    }
  },
  watch: {
    _inputDate: {
      handler () {
        if (this._inputDate !== null || this._inputDate !== '') {
          this.date = this._inputDate
        } else {
          this.date = null
        }
      },
      immediate: true
    },
    _date () {
      let sendDate = null
      switch (this._options.type) {
        case 'date':
          sendDate = moment(this._date).format('YYYY-MM-DD')
          break
        case 'datetime':
          sendDate = moment(this._date).format('YYYY-MM-DD HH:mm')
          break
        case 'month':
          sendDate = moment(this._date).format('YYYY-MM')
          break
        case 'year':
          sendDate = moment(this._date).format('YYYY')
          break
      }
      this.$emit('update:date', sendDate)
    }
  },
  data () {
    return {
      date: null,
      locale: {
        lang: {
          name: 'ko',
          weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
          weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
          weekStart: 0,
          months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
          monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
          formats: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY년 MMMM D일',
            LLL: 'YYYY MMMM DD HH:mm',
            LLLL: 'YYYY MMMM DD dddd HH:mm'
          },
          ordinal: n => n,
          buttonCancel: '취소',
          buttonValidate: '확인'
        }
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.input_calendar {
  display: inline-block;
  vertical-align: middle;
}
</style>
