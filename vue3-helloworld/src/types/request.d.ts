declare namespace MyRequest {
  interface response {
    code: number | string,
    msg: string,
    data: any
  }
  class request {
    /**
       * POST方法
       * @param url 请求路径，模式：[模块名称.接口名称] 如 common.token
       * @param data 请求参数
       * @param config 请求配置
       */
    public post(url: string, data?: any, config?: object): Promise<response>

    /**
       * POST方法
       * @param url 请求路径，模式：[模块名称.接口名称] 如 common.token
       * @param params 请求参数
       * @param config 请求配置
       */
    public get(url: string, params?: any, config?: object): Promise<response>
  }
}

