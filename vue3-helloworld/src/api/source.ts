import request from './request';
export default class source extends request {
  // 电话登录
  login<T>(data: {[key: string]: any}):Promise<T> {
    return super.postRequest('api/login/mobile', data, true)
  }
}