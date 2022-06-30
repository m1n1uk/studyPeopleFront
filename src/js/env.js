let ENV = process.env.NODE_ENV
console.log('ENV: ' + process.env.NODE_ENV)

// pines
const PINES = {
  development: '//api.dev.inplat.kr/pines-assist-api/api',
  // development: 'http://localhost:9100/api',
  testing: '//api.dev.inplat.kr/pines-assist-api/api',
  production: '//api.peoplelife.co.kr/pines-assist-api/api'
}

const SAMPLE = {
  // development: '//api.dev.inplat.kr/sample/api',
  development: 'http://localhost:9996/api',
  testing: '//api.dev.inplat.kr/sample/api',
  production: '//api.peoplelife.co.kr/sample/api'
}
/*
const SAMPLE2 = {
  // development: '//api.dev.inplat.kr/sample/api',
  development: 'http://localhost:9996/api',
  testing: '//api.dev.inplat.kr/sample/api',
  production: '//api.peoplelife.co.kr/sample/api'
}
*/
export const NODE_ENV = ENV

export const ENV_PINES = PINES[ENV]
export const ENV_SAMPLE = SAMPLE[ENV]
