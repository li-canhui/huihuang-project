import request from './network.js'
export function getSwiperData() {
  return request({
    url: '/wx-swiper.json',
    method: 'get'
  })
}