# webpack打library包

## 注意

### 无法获取到对象下导出的方法

```js
index.html:11 Uncaught TypeError: webpackNumbers.wordtonum is not a function
```

新增.babelrc文件 配置如下：

```json
"plugins": [
    "add-module-exports"
]
```
