import axios from 'axios';
import config from '../config';
import { contentType } from '../config/net.config';

type ResponseData = {
  data: any,
  [key: string]: any
}

type RequestBodyData = {
  [key: string]: any;
};

type ConfigData = {
  apiBaseUrl: string;
  imageBaseUrl: string;
};

type RequestMethod = 'get' | 'post' | 'put' | 'delete'

const axiosInstance = axios.create({
  headers: {
    'content-type': contentType,
    os: 'mini',
    from: 'mini',
    apptype: 1,
  },
});


export default class request {
  config: ConfigData;
  constructor() {
    this.config = {
      apiBaseUrl: '',
      imageBaseUrl: '',
    };
  }

  getRequest<T>(url: string, data?: {[key: string]: any}, isComplex = false): Promise<T> {
    return this.requestAll(url, data, 'get', isComplex);
  }
  /**
   * 请求json静态文件
   */
  requestJson(url: string) {
    return this.requestStaticFile(url).then((res:ResponseData) => {
      return {
        data: res.data,
      };
    });
  }

  postRequest<T>(url: string, data?: RequestBodyData, isComplex = false): Promise<T> {
    return this.requestAll(url, data, 'post', isComplex);
  }

  putRequest<T>(url: string, data?: RequestBodyData, isComplex = false): Promise<T> {
    return this.requestAll(url, data, 'put', isComplex);
  }

  deleteRequest<T>(url: string, data: RequestBodyData, isComplex = false): Promise<T> {
    return this.requestAll(url, data, 'delete', isComplex);
  }

  async requestAll<T>(
    url: string,
    data: RequestBodyData | undefined,
    method: RequestMethod,
    isComplex = false
  ):Promise<T> {
    return new Promise((resolve, reject) => {
        axiosInstance[method](url, data).then(res => {
          if (res.statusCode === 200) {
            const { data } = res;
            if (data.successed || data.status === 0) {
              resolve(data);
            } else {
              const { errorcode, errmsg } = data;
              /// 接口返回的错误信息为token失效或登录状态失效
              if (
                errorcode === 10000 ||
                errorcode === 9999 ||
                errorcode === 9998 ||
                errorcode === 9100 ||
                errorcode === 10001
              ) {
                if (errorcode === 10001) {
                  console.log('您已被强制下线，请重新登录');
                } else {
                  console.log('登录失效，请重新登录');
                }
                return false;
              }
              console.log(112123);
              if (!isComplex) {
                res.errMsg !== 'request:ok' &&
                  console.log(errmsg || '服务器错误');
                resolve(data);
              } else {
                resolve(data);
              }
            }
          } else {
            reject(res);
            if (!isComplex) {
              res.errMsg !== 'request:ok' && console.log(res.errMsg);
            }
          }
        })
    })
  }
  /**
   * 请求文件资源
   */
  requestStaticFile(url: string): Promise<ResponseData> {
    return new Promise((resolve, reject) => {
      /// 加上一串随机数，防止缓存
      const nurl = `${url}?v=${new Date().getTime()}`;
      const fullurl = this.config.imageBaseUrl + nurl;
      axiosInstance.get(fullurl).then(res => {
        if (res.statusCode === 200) {
          resolve(res);
        } else {
          reject(res);
        }
      })
    });
  }
}
