const vanillatoasts = {
  /**
   * toast 생성
   * @param { Object } options
   */
  create (options) {
    let option = Object.assign({
      title: '',
      text: '',
      type: '',
      timeout: 5000
    }, options)

    if (!option.title) {
      switch (option.type) {
        case 'success':
          option.title = 'Success'
          break
        case 'warning':
          option.title = 'Warning'
          break
        case 'error':
          option.title = 'Error'
          break
        case 'info':
          option.title = 'Info'
          break
        default:
          break
      }
    }

    // VanillaToasts.create(option)
  }
}

export default vanillatoasts
