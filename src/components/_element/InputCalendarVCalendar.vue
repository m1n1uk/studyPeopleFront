<template>
  <div :id="_options.target" class="input_calendar">
    <v-date-picker
      v-model='date'
      :input-props="{
        placeholder: _options.placeholder
      }"
      :popover="{
        visibility: 'focus',
        placement: _options.placement
      }"
      :masks="{
        L: _options.placeholder
      }"
    />
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
        if (this._inputDate !== null) {
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
      date: null
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.input_calendar {
  display: inline;
}
</style>
