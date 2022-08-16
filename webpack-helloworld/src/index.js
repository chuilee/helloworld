import printMe from "./print.js";
import './scss/main.scss';

function component() {
  return import(/* webpackChunkName: "lodash" */'lodash').then(({default: _ }) => {
    var element = document.createElement("div");
    var btn = document.createElement("button");
    element.innerHTML = _.join(["Hello", "webpack"], " ");

    btn.innerHTML = "点击这里，然后查看 console！";
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }).catch(error => 'An error occurred while loading the component');
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
