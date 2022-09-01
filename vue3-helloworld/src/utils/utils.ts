/* eslint-disable no-param-reassign */
type dTyme = string | Date

export default class utils {
  // 时间戳转时间
  static formatDate(d: dTyme = '', fmt: string) {
    let datetime: Date;
    if (typeof d === 'string') datetime = new Date(Date.parse(d.replace(/-/g, '/')));
    else datetime = d

    type oType = {
      [key:string]: number
    }

    const o: oType = {
      'M+': datetime.getMonth() + 1, // 月份
      'd+': datetime.getDate(), // 日
      'h+': datetime.getHours(), // 小时
      'm+': datetime.getMinutes(), // 分
      's+': datetime.getSeconds(), // 秒
      'q+': Math.floor((datetime.getMonth() + 3) / 3), // 季度
      S: datetime.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(
        RegExp.$1,
        (`${datetime.getFullYear()  }`).substr(4 - RegExp.$1.length)
      );
    for (const k in o) {
      if (new RegExp(`(${  k  })`).test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k].toString()
            : (`00${  o[k]}`).substr((`${  o[k]}`).length)
        );
      }
    }
    return fmt;
  }

  // 获取总时长
  static formatSeconds(value: number, needSenconds: number) {
    let theTime: string | number = parseInt((value / 1000).toString()); // 秒
    let middle: string | number = 0; // 分
    let hour: string | number = 0; // 小时
    const days = 0; // 天数
    if (theTime > 60) {
      middle = parseInt((theTime / 60).toString());
      theTime = parseInt((theTime % 60).toString());
      if (middle > 60) {
        hour = parseInt((middle / 60).toString());
        middle = parseInt((middle % 60).toString());
      }
    }
    hour = hour > 9 ? hour : `0${  hour}`;
    middle = middle > 9 ? middle : `0${  middle}`;
    theTime = parseInt(theTime.toString()) < 10 ? `0${  theTime}` : theTime;
    return needSenconds
      ? `${hour  }:${  middle  }:${  theTime}`
      : `${hour  }:${  middle}`;
  }

  // guid随机函数算法
  static guid() {
    const S4 = function() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (
      `${S4() +
      S4()
      }-${
      S4()
      }-${
      S4()
      }-${
      S4()
      }-${
      S4()
      }${S4()
      }${S4()}`
    );
  }

  // 获取每个时间段的时间
  static getsomeDate(type: number, search = true) {
    let today = new Date();
    const nowDay = today.getDate(); // 当前日
    const nowMonth = today.getMonth(); // 当前月
    const nowYear = today.getFullYear(); // 当前年
    const nowDayOfWeek = today.getDay(); // 今天本周的第几天
    let start = today;
    switch (type) {
      // /昨日
      case 1:
        today = new Date(today.getTime() - (1000 * 60 * 60 * 24 * 1));
        start = today
        break;
      // /本周
      case 2:
        start = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
        break;
      // /本月
      case 3:
        start = new Date(nowYear, nowMonth, 1);
        break;
    } // /本日
    return [
      this.formatDate(start, 'yyyy-MM-dd'),
      this.formatDate(today, 'yyyy-MM-dd'),
    ];
  }

  // 获取头像
  static getHeadImg(avatar: string, sex: string, bool: boolean) {
    // bool true表示登录用户默认头像，false表示训练客户默认头像
    if (!avatar || avatar === 'undefined') {
      // 默认图片
      if (bool) {
        return sex === '1' ? '/images/man.png' : '/images/women.png';
      }
        return sex === '1'
          ? '/images/faq-img/avatar_1.png'
          : '/images/faq-img/avatar_0.png';
    }
    if (this.exithttp(avatar)) {
      // 网络图片
      return avatar;
    }
    if (/^\/images\//.test(avatar)) {
      // 本地图片
      return avatar;
    }
    return avatar; // cdn图片
  }

  // 判断链接是否http(s)
  static exithttp(url: string) {
    if (url.indexOf('http://') > -1 || url.indexOf('https://') > -1) {
      return true;
    }
      return false;
  }

  // 秒数转时分秒
  static formatSecond(value: number): string {
    let theTime: string | number = value || 0; // 秒
    let middle: string | number = 0; // 分
    let hour: string | number = 0; // 小时
    if (theTime > 60) {
      middle = parseInt((theTime / 60).toString());
      theTime = parseInt((theTime % 60).toString());
      if (middle > 60) {
        hour = parseInt((middle / 60).toString());
        middle = parseInt((middle % 60).toString());
      }
    }
    hour = parseInt(hour.toString()) < 10 ? `0${  hour}` : hour;
    middle = parseInt(middle.toString()) < 10 ? `0${  middle}` : middle;
    theTime = parseInt(theTime.toString()) < 10 ? `0${  theTime}` : theTime;
    return `${hour  }:${  middle  }:${  theTime}`;
  }

  // 获取随机值
  static randomCode(size: number) {
    const seed = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'm',
      'n',
      'p',
      'Q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
    ]; // 密码源数组
    let n = '';
    let t;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < size; i++) {
      t = Math.round(Math.random() * (seed.length - 1));
      n += seed[t];
    }
    return n;
  }

  /**
   * 节流函数
   * @param {Function} func 需要执行的函数
   * @param {Number} wait 需要延时的时间
   * @returns Function
   */
  static throttle(func: Function, wait: number, ...args: any[]) {
    let timeout: NodeJS.Timeout;
    return  () => {
      const context = this;
      if (!timeout) {
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      }
    };
  }
  /**
   * 参考话术文本处理
   * @param {string} referText 参考话术
   * @param {string} normtext 关键词
   * @param {number} referType 提示类型 1 整句显示; 2: 只显示关键词 3: 不显示 ;
   * @returns html字符串
   */
  static handleRefer(referText: string, normtext: string, referType: number) {
    // referText= "2016年8月注册成立"
    // normtext="2016年,8月"
    // 参考话术的关键词
    let keywordsArr = [];
    if (referType === 2) {
      keywordsArr = normtext ? normtext.split(/,/) : [];
      keywordsArr.forEach((item, index) => {
        // eslint-disable-next-line prefer-destructuring
        keywordsArr[index] = item.split('|')[0];
      });
    } else {
      keywordsArr = normtext ? normtext.split(/,|\|/g) : [];
    }
    keywordsArr = keywordsArr.filter((item) => {
      return item && item !== '';
    });
    keywordsArr = Array.from(new Set(keywordsArr));
    if (referType === 3) {
      return '';
    } else if (referType === 2) {
      let keywords = '';

      if (keywordsArr) {
        keywordsArr.forEach((keyword, index) => {
          keywords =
            `${keywords
            }<span style="color: #FFD200;">${  keyword  }</span>、`;
        });
      }
      if (keywords) {
        keywords = keywords.replace(/、$/, '');
      }
      return keywords ? keywords : '';
    }
      let newText = referText.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      if (!newText) return;
      if (keywordsArr) {
        keywordsArr = keywordsArr.map((word) => {
          if (/^[a-zA-Z\d]+$/gi.test(word)) {
            return `\\b${word}\\b`;
          }
          return word;
        });
        const regStr = new RegExp(keywordsArr.join('|'), 'ig');
        newText = newText.replace(regStr, (str) => {
          return `<span class="keyword">${  str  }</span>`;
        });
      }
      console.log('=======', newText, '=======');
      return newText ? newText : '';
  }
  // 判断数据是否为空
  static isNullOrEmpty(sourceValue: unknown) {
    if (
      typeof sourceValue === 'undefined' ||
      sourceValue === null ||
      sourceValue === '' ||
      sourceValue === 'undefined'
    ) {
      return true;
    }
    return false;
  }

  static serialize(obj: { [key: string]: any }) {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p) && obj[p] !== undefined) {
        str.push(`${encodeURIComponent(p)  }=${  encodeURIComponent(obj[p])}`);
      }
    }
    return str.join('&');
  }
}
