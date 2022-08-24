// import join from "lodash/join";
import "./scss/main.scss";
function component() {
  var element = document.createElement("div");
  var button = document.createElement("button");
  var br = document.createElement("br");

  button.innerHTML = "Click me and look at the console!";
  element.innerHTML = join(["Hello", "webpack"], " ");
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = (e) =>
    import(/* webpackChunkName: "print" */ "./print").then((module) => {
      var print = module.default;  // 注意当调用 ES6 模块的 import() 方法（引入模块）时，必须指向模块的 .default 值，因为它才是 promise 被处理后返回的实际的 module 对象。
      print();
    });

  return element;
}

document.body.appendChild(component());

let test = {}

console.log(test?.name);